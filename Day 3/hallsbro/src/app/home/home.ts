import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// Import your custom children components so the Home page can display them
import { Carousel } from '../carousel/carousel';
import { Accordian } from '../accordian/accordian';

@Component({
  selector: 'app-home',
  standalone: true,
  // Declare your imported components so Angular recognizes their HTML tags
  imports: [RouterLink, Carousel, Accordian],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}