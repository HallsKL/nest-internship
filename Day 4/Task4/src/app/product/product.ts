import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Import ChangeDetectorRef
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  hoodieList: any[] = [];

  // 2. Inject it into your constructor here
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getFakeProducts();
  }

  getFakeProducts(): void {
    // 1. Switched to main endpoint to automatically fetch 20 items
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        this.hoodieList = data.map((item: any, index: number) => {
          return {
            id: item.id,
            title: item.title.includes('Hoodie') ? item.title : `Premium Urban Hoodie v${index + 1}`,
            price: item.price,
            description: item.description,
            image: item.image
          };
        });
        
        // 2. MOVED INSIDE: Triggers exactly when data mapping finishes!
        this.cdr.detectChanges(); 
      })
      .catch(error => {
        console.error('API Error, using fallback data:', error);
        
        // 20-item apparel dataset backup
        this.hoodieList = [
          { id: 1, title: 'Classic Midnight Black Hoodie', price: 49.99, description: 'Premium heavyweight cotton hoodie with a brushed fleece interior.', image: 'https://picsum.photos/300/350?random=1' },
          { id: 2, title: 'Essential Slate Grey Hoodie', price: 45.00, description: 'The perfect everyday layer. Minimalist design with a relaxed drop-shoulder fit.', image: 'https://picsum.photos/300/350?random=2' },
          { id: 3, title: 'Vintage Oversized Hoodie', price: 39.99, description: 'Retro aesthetic wash with an ultra-soft baggy cut for maximum comfort.', image: 'https://picsum.photos/300/350?random=3' },
          { id: 4, title: 'Cyber Streetwear Hoodie', price: 54.99, description: 'Bold graphic print detailing on the back with custom embroidered sleeves.', image: 'https://picsum.photos/300/350?random=4' },
          { id: 5, title: 'Alpine Performance Hoodie', price: 59.99, description: 'Weather-resistant outer shell with thermal mesh lining for active outdoor wear.', image: 'https://picsum.photos/300/350?random=5' },
          { id: 6, title: 'Crimson Acid Wash Fleece', price: 42.50, description: 'Custom dyed premium fleece featuring unique distressing accents along the hem.', image: 'https://picsum.photos/300/350?random=6' },
          { id: 7, title: 'Desert Sand Cargo Zip-Up', price: 48.00, description: 'Full-zip utility jacket hoodie with tactical utility pocket detailing.', image: 'https://picsum.photos/300/350?random=7' },
          { id: 8, title: 'Minimalist Ivory Pullover', price: 45.99, description: 'Clean, seamless construction knit from organic bamboo cotton luxury fibers.', image: 'https://picsum.photos/300/350?random=8' },
          { id: 9, title: 'Obsidian Drop-Tail Hoodie', price: 52.00, description: 'Extended curved hem line silhouette optimized for layered street styling.', image: 'https://picsum.photos/300/350?random=9' },
          { id: 10, title: 'Sage Earth-Tone Hoodie', price: 39.00, description: 'Relaxed loungewear fit garment washed for a worn-in feel from day one.', image: 'https://picsum.photos/300/350?random=10' },
          { id: 11, title: 'Legacy Athletic Track Jacket', price: 65.00, description: 'Classic side-stripe warm-up top with adjustable toggle drawstring hood systems.', image: 'https://picsum.photos/300/350?random=11' },
          { id: 12, title: 'Matrix Tech-Wear Hoodie', price: 70.00, description: 'Waterproof zippered enclosures featuring integrated thumbhole sleeve cuffs.', image: 'https://picsum.photos/300/350?random=12' },
          { id: 13, title: 'Pacific Heather Blue Knit', price: 44.99, description: 'Lightweight breathable loopback terry fabric perfect for seasonal transitions.', image: 'https://picsum.photos/300/350?random=13' },
          { id: 14, title: 'Metro Camo Box-Fit Pull', price: 49.99, description: 'Subtle monochromatic camouflage pattern cut in a trendy boxy shape.', image: 'https://picsum.photos/300/350?random=14' },
          { id: 15, title: 'Sunset Pastel Ombre Hoodie', price: 55.00, description: 'Hand-dipped gradient colorway layout manufactured in limited quantities.', image: 'https://picsum.photos/300/350?random=15' },
          { id: 16, title: 'Glitch Cyberpunk Sweatshirt', price: 58.50, description: 'High-density vinyl print chest piece graphic layout honoring tech culture.', image: 'https://picsum.photos/300/350?random=16' },
          { id: 17, title: 'Timberland Sherpa-Lined Zip', price: 62.99, description: 'Heavy insulation inner fleece core lining built for sub-zero winter temperatures.', image: 'https://picsum.photos/300/350?random=17' },
          { id: 18, title: 'Carbon Knit Luxury Hoodie', price: 89.99, description: 'Ultra-fine merino wool blend tailoring delivering unmatched drape comfort.', image: 'https://picsum.photos/300/350?random=18' },
          { id: 19, title: 'Neon Arcade Streetwear', price: 51.00, description: 'Vibrant reactive dye graphics that glow subtly under club light configurations.', image: 'https://picsum.photos/300/350?random=19' },
          { id: 20, title: 'Core Heather Grey Basic', price: 35.00, description: 'The absolute classic entry-level closet foundation piece. Dependable daily wear.', image: 'https://picsum.photos/300/350?random=20' }
        ];
        
        this.cdr.detectChanges();
      });
  }
}