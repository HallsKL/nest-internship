import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Make sure this is imported!

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink], // 2. Make sure this is added here!
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { }