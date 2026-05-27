import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // 2. Add it here
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // You can create variables here to capture form data
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    console.log('Form Submitted!', this.name, this.email, this.message);
  }
}