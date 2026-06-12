import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);
  private cdr = inject(ChangeDetectorRef);
  dishes: any[] = [];
  searchQuery: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';

  ngOnInit(): void {
    this.fetchDishes();
  }

  fetchDishes(): void {
    const sort = this.sortOrder ? this.sortOrder : undefined;
    this.productService.getRestaurantMenu(5, sort).subscribe({
      next: (data) => {
        if (this.searchQuery) {
          this.dishes = data.filter((item) =>
            item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else {
          this.dishes = data;
        }
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching dishes:', err);
      }
    });
  }

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.fetchDishes();
  }

  onSort(event: any): void {
    this.sortOrder = event.target.value;
    this.fetchDishes();
  }
}