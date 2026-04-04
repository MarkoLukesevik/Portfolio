import { Component } from '@angular/core';
import { ContactForm } from './components/contact-form/contact-form';
import { ContactInfo } from './components/contact-info/contact-info';

@Component({
  selector: 'app-contact-page',
  imports: [ContactForm, ContactInfo],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {}
