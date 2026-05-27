import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductComponent } from './product/product';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
// 1. Import your new detail component
import { ProductDetailComponent } from './product-detail/product-detail'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  
  // 2. Add this dynamic route link!
  { path: 'products/:id', component: ProductDetailComponent }, 
  
  { path: '**', redirectTo: '' }
];