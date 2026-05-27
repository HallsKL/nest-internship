import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Import the routing directives

@Component({
  selector: 'app-navbar',
  standalone: true, // Ensuring explicit standalone declaration
  imports: [RouterLink, RouterLinkActive], // 2. Add them to your imports array
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}