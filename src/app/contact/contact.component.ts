import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { invalidEmailDomain } from './invalidEmailDomain';
import { IDeactivateInterface } from '../Services/guard.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivateInterface {

  contactForm = new FormGroup({
    senderName : new FormControl('', Validators.required),
    senderEmail : new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage : new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  isSubmited:boolean = false;

  submitForm() {
    // if(this.senderNameControl.pristine) {
    //   alert('Fill Name')
    // }
    console.log(this.contactForm)
    this.isSubmited = true;
  }

  canExit() {
    if((this.contactForm.controls.senderName.value || this.contactForm.controls.senderEmail.value || this.contactForm.controls.senderMessage.value) && !this.isSubmited) {
      return confirm('You have unsaved changes. Do you want to navigate away?')
    }
    else {
      return true
    }
  }

}
