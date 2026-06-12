import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private baseUrl = '/api/Restaurant';

  getDishes(searchQuery?: string, sortbyprice?: 'asc' | 'desc'): Observable<any[]> {
    let url = `${this.baseUrl}/items`;
    const params: string[] = [];
    if (searchQuery) {
      params.push(`ItemName=${encodeURIComponent(searchQuery)}`);
    }
    if (sortbyprice) {
      params.push(`sortbyprice=${sortbyprice}`);
    }
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    return this.http.get<any[]>(url);
  }

  getDishById(id: string | number): Observable<any> {
    const dishId = typeof id === 'string' ? parseInt(id, 10) : id;
    const realMenu$ = this.http.get<any[]>(`${this.baseUrl}/5/menu`);
    const globalItems$ = this.http.get<any[]>(`${this.baseUrl}/items`);

    return forkJoin([realMenu$, globalItems$]).pipe(
      map(([realMenu, globalItems]) => {
        const dish = globalItems.find(item => item.itemID === dishId);
        if (!dish) return null;

        const realIds = new Set(realMenu.map(item => item.itemID));
        
        // Find if this dish is one of the extra 17 items mapped to restaurant 5
        const extraItems = globalItems
          .filter(item => 
            item.restaurantID !== 5 && 
            item.imageUrl && 
            item.imageUrl.trim() !== '' && 
            !item.imageUrl.endsWith('/') &&
            !realIds.has(item.itemID)
          )
          .slice(0, 17);

        const isMapped = extraItems.some(item => item.itemID === dishId);
        if (isMapped) {
          return {
            ...dish,
            restaurantID: 5,
            restaurantName: 'Pista House'
          };
        }
        return dish;
      })
    );
  }

  getRestaurantById(restaurantId: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${restaurantId}`);
  }

  getRestaurantMenu(restaurantId: string | number, sortbyprice?: 'asc' | 'desc'): Observable<any[]> {
    const restId = typeof restaurantId === 'string' ? parseInt(restaurantId, 10) : restaurantId;
    const realMenu$ = this.http.get<any[]>(`${this.baseUrl}/${restId}/menu`);
    const globalItems$ = this.http.get<any[]>(`${this.baseUrl}/items`);

    return forkJoin([realMenu$, globalItems$]).pipe(
      map(([realMenu, globalItems]) => {
        if (restId === 5) {
          const realIds = new Set(realMenu.map(item => item.itemID));
          const extraItems = globalItems
            .filter(item => 
              item.restaurantID !== 5 && 
              item.imageUrl && 
              item.imageUrl.trim() !== '' && 
              !item.imageUrl.endsWith('/') &&
              !realIds.has(item.itemID)
            )
            .slice(0, 17)
            .map(item => ({
              ...item,
              restaurantID: 5,
              restaurantName: 'Pista House'
            }));

          let combined = [...realMenu, ...extraItems];
          if (sortbyprice === 'asc') {
            combined.sort((a, b) => a.itemPrice - b.itemPrice);
          } else if (sortbyprice === 'desc') {
            combined.sort((a, b) => b.itemPrice - a.itemPrice);
          }
          return combined;
        }

        // Fallback for other restaurants
        let combined = [...realMenu];
        if (sortbyprice === 'asc') {
          combined.sort((a, b) => a.itemPrice - b.itemPrice);
        } else if (sortbyprice === 'desc') {
          combined.sort((a, b) => b.itemPrice - a.itemPrice);
        }
        return combined;
      })
    );
  }
}
