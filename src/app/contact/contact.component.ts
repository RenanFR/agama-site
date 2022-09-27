import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerContact } from './model/customer-contact';
import { ContactService } from './service/contact-service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contato.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      customerName: ['', [Validators.required], []],
      company: ['', [Validators.required], []],
      customerEmail: ['', [Validators.required], []],
      customerMobile: ['', [Validators.required], []],
      topic: ['', [Validators.required], []],
      customerMessage: ['', [Validators.required], []],
    });
  }

  public onSend(): void {
    const customerContact: CustomerContact = {
      customerName: this.contactForm.get('customerName')?.value,
      company: this.contactForm.get('company')?.value,
      customerEmail: this.contactForm.get('customerEmail')?.value,
      customerMobile: this.contactForm.get('customerMobile')?.value,
      topic: this.contactForm.get('topic')?.value,
      customerMessage: this.contactForm.get('customerMessage')?.value,
    };
    this.contactService
    .appendCustomer(customerContact)
    .subscribe((returnData) => {
        console.log(returnData);
        this.router.navigate(['/index']);
      });
  }
}
