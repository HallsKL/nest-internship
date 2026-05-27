import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  // Angular automatically injects the ID from the URL parameter here
  @Input() id!: string; 
  product: any = null;

  // Inject ChangeDetectorRef into the constructor
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.id) {
      this.fetchProductDetails(this.id);
    }
  }

  fetchProductDetails(productId: string): void {
    // Using true backticks (``) for the template literal string insertion
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        // Mapping the API data to match your hoodie shop features safely
        this.product = {
          title: data.title.includes('Hoodie') ? data.title : 'Premium Urban Hoodie Spec',
          price: data.price,
          description: data.description,
          image: data.image,
          category: data.category
        };
        
        // This runs EXACTLY when the data arrives, instantly updating your HTML!
        this.cdr.detectChanges();
      })
      .catch(err => {
        console.error('Detail fetch fallback activated:', err);
        
        // Safety offline dataset backup so your application layout never breaks
        this.product = {
          title: 'Premium Studio Fleece Hoodie',
          price: 49.99,
          description: 'Engineered for optimal comfort with our signature ultra-soft combed cotton-poly fleece fabric blend.',
          image: 'https://picsum.photos/500/500?random=5',
          category: "men's clothing"
        };
        
        // Force the update if the fallback runs too
        this.cdr.detectChanges();
      });
  }
}