import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';
import { PhoneValidator } from '../../validators/phone.validator';
import { SuccessPopupService } from '../../services/success-popup.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const errorAnimation = trigger('errorAnimation', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void <=> *', animate('300ms ease-in-out')),
]);
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  name: any;
  email: any;
  phone: any;

  constructor(
    private formBuilder: FormBuilder,
    private HttpClient: HttpClient,
    private telegramService: TelegramService,
    private successPopupService: SuccessPopupService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator],
      ],
      phone: ['', [Validators.required, PhoneValidator.russianPhone]],
      privacyConsent: [true, Validators.requiredTrue],
    });
  }

  customEmailValidator(control: { value: string | string[] }) {
    if (control && control.value && !control.value.includes('@')) {
      return { invalidEmail: true };
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Отправляем сообщение через TelegramService
      this.telegramService
        .sendContactMessage(formData.name, formData.email, formData.phone)
        .subscribe({
          next: (response) => {
            console.log('Сообщение отправлено в Telegram:', response);
            this.successPopupService.showFormSuccess();
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Ошибка при отправке в Telegram:', error);
            alert('Ошибка при отправке. Попробуйте позже.');
          },
        });
    }
  }
}
