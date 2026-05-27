import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  faqList = [
    {
      id: 'panel-one',
      title: 'Who won the 2026 Kerala Legislative Assembly elections?',
      content: 'The Congress-led United Democratic Front (UDF) secured a landslide victory in the 2026 elections, winning 102 out of the 140 seats in the Kerala Legislative Assembly, defeating the Left Democratic Front (LDF).'
    },
    {
      id: 'panel-two',
      title: 'When was the new Kerala Cabinet sworn in following the 2026 elections?',
      content: 'The new Cabinet, headed by Chief Minister V.D. Satheesan, along with a 20-member team of cabinet ministers, took the oath of office at a historic ceremony on May 18, 2026 at the Central Stadium in Thiruvananthapuram.'
    },
    {
      id: 'panel-three',
      title: 'Who is the Chief Minister of Kerala elected in 2026 and what is their constituency?',
      content: 'Shri V.D. Satheesan was elected as the 13th Chief Minister of Kerala. He represents the Paravur assembly constituency, which he has successfully served for multiple consecutive terms.'
    }
  ];
}
