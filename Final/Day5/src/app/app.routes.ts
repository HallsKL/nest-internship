import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductComponent } from './product/product';
import { ProductDetailsComponent } from './product-details/product-details';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];