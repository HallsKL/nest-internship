import { Routes } from '@angular/router';

// Removed '.component' from the file paths to match your actual file names
import { HomeComponent } from './home/home'; 
import { MinistersComponent } from './ministers/ministers'; 
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  // 1. Redirect empty root URL directly to the home page combo
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // 2. Core structural paths mapping to your functional components
  { path: 'home', component: HomeComponent },
  { path: 'minister', component: MinistersComponent },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  
  // Wildcard fallback path if a user inputs a broken address line
  { path: '**', redirectTo: 'home' }
];