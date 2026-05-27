

import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [],
  templateUrl: './accordian.html',
  styleUrl: './accordian.css',
})
export class Accordian {
  // Make sure this name matches exactly what the HTML loop wants!
  faqList = [
    {
      id: 'panel-one',
      title: 'How do I view cabinet responsibilities?',
      content: 'Navigate to the Ministers portal tab in the navigation header to explore a comprehensive layout detailing state cabinet portfolios.'
    },
    {
      id: 'panel-two',
      title: 'What does the general directory tracking contain?',
      content: 'The tracking system records public profiles, legislative boundary metrics, and assigned ministerial offices.'
    }
  ];
}