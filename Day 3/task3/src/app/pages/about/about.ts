import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  coreValues = [
    { title: 'Transparency', detail: 'Providing open accountability paths for administrative actions.' },
    { title: 'Efficiency', detail: 'Reducing resolution times by connecting stakeholders directly.' },
    { title: 'Community', detail: 'Bridging communication gaps between citizens and regional officials.' }
  ];
}
