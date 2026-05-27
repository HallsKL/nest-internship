import { Component } from '@angular/core';
// 1. Import the other components using your exact file paths
import { NavbarComponent } from '../navbar/navbar';
import { Carousel } from '../carousel/carousel';
import { Accordion } from '../accordion/accordion';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // 2. Add them to the imports array here
  imports: [NavbarComponent, Carousel, Accordion, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }