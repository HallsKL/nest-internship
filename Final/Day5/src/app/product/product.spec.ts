import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ProductComponent } from './product';
import { ProductService } from '../services/product.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let mockProductService: any;

  beforeEach(async () => {
    mockProductService = {
      getRestaurantMenu: (restaurantId: number | string, sortbyprice?: 'asc' | 'desc') => {
        const list = [
          { itemID: 76, itemName: 'Afghan Kebabs', itemDescription: 'Grilled kebabs', itemPrice: 450, restaurantName: 'Peacock Rooftop', restaurantID: 28, imageUrl: '' },
          { itemID: 11, itemName: 'Bagara Baingan', itemDescription: 'Fried brinjal', itemPrice: 250, restaurantName: 'Mumtaz', restaurantID: 6, imageUrl: '' }
        ];
        if (sortbyprice === 'asc') {
          list.sort((a, b) => a.itemPrice - b.itemPrice);
        } else if (sortbyprice === 'desc') {
          list.sort((a, b) => b.itemPrice - a.itemPrice);
        }
        return of(list);
      }
    };

    await TestBed.configureTestingModule({
      imports: [ProductComponent],
      providers: [
        provideRouter([]),
        { provide: ProductService, useValue: mockProductService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all dishes on init', () => {
    fixture.detectChanges(); // triggers ngOnInit
    expect(component.dishes.length).toBe(2);
    expect(component.dishes[0].itemName).toBe('Afghan Kebabs');
  });

  it('should sort dishes by price', () => {
    fixture.detectChanges();
    component.onSort({ target: { value: 'asc' } });
    expect(component.sortOrder).toBe('asc');
    expect(component.dishes[0].itemName).toBe('Bagara Baingan');
  });
});
