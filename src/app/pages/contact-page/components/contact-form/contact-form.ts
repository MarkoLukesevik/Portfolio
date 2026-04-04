import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  nameError: string = '';
  emailError: string = '';
  subjectError: string = '';
  messageError: string = '';

  showSuccessMessage = signal(false);
  showFailureMessage = signal(false);
  isSubmitButtonSpinnerOn = signal(false);

  // region input handlers
  handleNameChange() {
    if (this.nameError) this.validateName();
  }
  handleEmailChange() {
    if (this.emailError) this.validateEmail();
  }
  handleSubjectChange() {
    if (this.subjectError) this.validateSubject();
  }
  handleMessageChange() {
    if (this.messageError) this.validateMessage();
  }
  // endregion

  handleSendClick() {
    if (this.isSubmitButtonSpinnerOn()) return;

    this.validateForm();
    if (this.nameError || this.emailError || this.subjectError || this.messageError) return;

    this.isSubmitButtonSpinnerOn.set(true);
    const templateParams = {
      email: this.email,
      name: this.name,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send('service_owto8o3', 'template_b9j6a1g', templateParams, 'GX7dM3yGSju2wAVXV')
      .then(() => {
        this.showSuccessMessage.set(true);
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';

        setTimeout(() => {
          this.showSuccessMessage.set(false);
        }, 3000);
      })
      .catch(() => {
        this.showFailureMessage.set(true);

        setTimeout(() => {
          this.showFailureMessage.set(false);
        }, 3000);
      })
      .finally(() => {
        setTimeout(() => {
          this.isSubmitButtonSpinnerOn.set(false);
        });
      });
  }

  // region validation
  validateForm() {
    this.validateEmail();
    this.validateName();
    this.validateSubject();
    this.validateMessage();
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.email) this.emailError = 'Email address is required!';
    else if (!emailRegex.test(this.email)) this.emailError = 'Please enter a valid email address';
    else this.emailError = '';
  }

  validateName() {
    if (!this.name) this.nameError = 'Name is required!';
    else this.nameError = '';
  }

  validateSubject() {
    if (!this.subject) this.subjectError = 'Subject is required!';
    else this.subjectError = '';
  }

  validateMessage() {
    if (!this.message) this.messageError = 'Message is required!';
    else this.messageError = '';
  }
  // endregion
}
