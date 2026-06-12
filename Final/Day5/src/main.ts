import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// Bootstrapping with the explicit providers configuration attached
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));