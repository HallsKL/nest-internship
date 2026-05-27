import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../component/carousel/carousel';
import { Accordion } from '../../component/accordion/accordion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, Carousel, Accordion],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
export { HomeComponent as Home };