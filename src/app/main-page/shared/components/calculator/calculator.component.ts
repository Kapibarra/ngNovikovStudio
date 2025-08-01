import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  TelegramService,
  TelegramCalculatorData,
} from '../../services/telegram.service';
import { PhoneValidator } from '../../validators/phone.validator';
import { SuccessPopupService } from '../../services/success-popup.service';

interface Option {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @Input() basePrice: number = 100;
  @Input() title: string = '';
  @Input() titleForm: string = '';
  @Input() optionsList: Option[] = [];
  @Input() fixedOptions: string[] = [];

  totalPrice: number = this.basePrice;
  phoneForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private telegramService: TelegramService,
    private successPopupService: SuccessPopupService
  ) {}

  ngOnInit(): void {
    this.phoneForm = this.formBuilder.group({
      phone: ['', [Validators.required, PhoneValidator.russianPhone]],
      privacyConsent: [true, Validators.requiredTrue],
    });
  }

  updatePrice(): void {
    this.totalPrice =
      this.basePrice +
      this.optionsList
        .filter((option) => option.selected)
        .reduce((sum, option) => sum + option.price, 0);
  }

  onSubmit(): void {
    if (this.phoneForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.sendToTelegram();
    }
  }

  private sendToTelegram(): void {
    const phone = this.phoneForm.get('phone')?.value;
    const selectedOptions = this.optionsList
      .filter((option) => option.selected)
      .map((option) => ({ name: option.name, price: option.price }));

    const telegramData: TelegramCalculatorData = {
      phone,
      title: this.title,
      basePrice: this.basePrice,
      fixedOptions: this.fixedOptions,
      selectedOptions,
      totalPrice: this.totalPrice,
    };

    // Отладочная информация
    console.log('Отправляемые данные:', telegramData);
    console.log('Телефон:', phone);
    console.log('Заголовок:', this.title);
    console.log('Базовая цена:', this.basePrice);
    console.log('Фиксированные опции:', this.fixedOptions);
    console.log('Выбранные опции:', selectedOptions);
    console.log('Общая цена:', this.totalPrice);

    // Проверяем, что все необходимые данные есть
    if (!phone || !this.title || !this.basePrice) {
      alert('❌ Не все данные заполнены корректно');
      this.isSubmitting = false;
      return;
    }

    this.telegramService.sendCalculatorRequest(telegramData).subscribe({
      next: (response: any) => {
        console.log('Ответ от Telegram:', response);
        this.successPopupService.showCalculatorSuccess();
        this.phoneForm.reset();
        this.isSubmitting = false;
        // Сбрасываем выбранные опции
        this.optionsList.forEach((option) => (option.selected = false));
        this.updatePrice();
      },
      error: (error: any) => {
        console.error('Полная ошибка от Telegram:', error);
        console.error('Тело ошибки:', error.error);
        alert(
          '❌ Произошла ошибка при отправке заявки. Проверьте консоль для подробностей.'
        );
        this.isSubmitting = false;
      },
    });
  }
}
