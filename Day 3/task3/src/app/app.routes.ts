import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MinistersComponent } from './pages/ministers/ministers';
import { MinisterDetailComponent } from './pages/minister-detail/minister-detail';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'minister',
    component: MinistersComponent
  },
  {
    path: 'minister/:id',
    component: MinisterDetailComponent
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];