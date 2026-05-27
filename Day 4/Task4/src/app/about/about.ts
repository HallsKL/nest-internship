import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Import this!

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink], // <-- Register it here!
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent { }