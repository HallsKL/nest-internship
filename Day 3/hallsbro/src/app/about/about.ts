import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [], // Remains empty since native @for requires no explicit imports!
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // Define project milestone statistics or system values
  coreValues = [
    { title: 'Transparency', detail: 'Providing open accountability paths for administrative actions.' },
    { title: 'Efficiency', detail: 'Reducing resolution times by connecting stakeholders directly.' },
    { title: 'Community', detail: 'Bridging communication gaps between citizens and regional officials.' }
  ];
}