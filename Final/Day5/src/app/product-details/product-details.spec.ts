import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ProductDetailsComponent } from './product-details';
import { ProductService } from '../services/product.service';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockProductService: any;

  beforeEach(async () => {
    mockProductService = {
      getDishById: (id: any) => of({
        itemID: 76,
        itemName: 'Afghan Kebabs',
        itemDescription: 'Grilled kebabs',
        itemPrice: 450,
        restaurantName: 'Peacock Rooftop',
        restaurantID: 28,
        imageUrl: ''
      }),
      getRestaurantById: (id: any) => of({
        restaurantID: 28,
        restaurantName: 'Peacock Rooftop',
        address: 'Jaipur, Rajasthan',
        type: 'Multi-cuisine',
        parkingLot: true
      }),
      getRestaurantMenu: (id: any) => of([
        { itemID: 76, itemName: 'Afghan Kebabs', itemPrice: 450, imageUrl: '' },
        { itemID: 77, itemName: 'Naan', itemPrice: 40, imageUrl: '' }
      ])
    };

    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ProductService, useValue: mockProductService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    component.id = '76';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product details, restaurant details and recommendations on init', () => {
    fixture.detectChanges(); // triggers ngOnInit
    expect(component.selectedProduct).toBeTruthy();
    expect(component.selectedProduct.itemName).toBe('Afghan Kebabs');
    expect(component.restaurantInfo).toBeTruthy();
    expect(component.restaurantInfo.restaurantName).toBe('Peacock Rooftop');
    expect(component.moreDishes.length).toBe(1); // Excluded current dish 76
    expect(component.moreDishes[0].itemName).toBe('Naan');
  });
});
