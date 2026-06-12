import { Component, OnInit, Input, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() id!: string;
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);
  selectedProduct: any = null;
  restaurantInfo: any = null;
  moreDishes: any[] = [];

  ngOnInit(): void {
    // Robustly retrieve route parameters using ActivatedRoute
    this.route.paramMap.subscribe((params) => {
      const routeId = params.get('id');
      if (routeId) {
        this.loadDishDetails(routeId);
      } else if (this.id) {
        this.loadDishDetails(this.id);
      }
    });
  }

  loadDishDetails(id: string): void {
    console.log('ProductDetails id received:', id);
    this.productService.getDishById(id).subscribe({
      next: (dish) => {
        console.log('ProductDetails dish fetched:', dish);
        this.selectedProduct = dish;
        this.cdr.markForCheck();
        if (dish) {
          // Fetch parent restaurant info
          this.productService.getRestaurantById(dish.restaurantID).subscribe({
            next: (rest) => {
              this.restaurantInfo = rest;
              this.cdr.markForCheck();
            },
            error: (err) => console.error('Error fetching restaurant info:', err)
          });

          // Fetch other menu items
          this.productService.getRestaurantMenu(dish.restaurantID).subscribe({
            next: (menu) => {
              // Exclude the current dish and take up to 4 recommendations
              this.moreDishes = menu
                .filter((m) => m.itemID !== dish.itemID)
                .slice(0, 4);
              this.cdr.markForCheck();
            },
            error: (err) => console.error('Error fetching restaurant menu:', err)
          });
        }
      },
      error: (err) => {
        console.error('Error fetching dish details:', err);
      }
    });
  }
}