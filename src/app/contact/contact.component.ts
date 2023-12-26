import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { invalidEmailDomain } from './invalidEmailDomain';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName : new FormControl('', Validators.required),
    senderEmail : new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage : new FormControl('', [Validators.required, Validators.minLength(10)])
  })


  submitForm() {
    // if(this.senderNameControl.pristine) {
    //   alert('Fill Name')
    // }
    console.log(this.contactForm.valid)
  }

}
