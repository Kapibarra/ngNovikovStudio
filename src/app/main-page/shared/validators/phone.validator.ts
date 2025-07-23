import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PhoneValidator {
  static russianPhone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // Пустое значение обрабатывается валидатором required
    }

    const value = control.value;

    // Удаляем все, кроме цифр
    const digitsOnly = value.replace(/\D/g, '');

    // Проверяем российский номер:
    // - Должен начинаться с 7 или 8
    // - Общая длина 11 цифр для номера, начинающегося с 7 или 8
    // - Или 10 цифр, если первая цифра не 7/8 (тогда подразумевается +7)

    if (digitsOnly.length === 11) {
      // Формат: 7XXXXXXXXX или 8XXXXXXXXX
      if (digitsOnly.startsWith('7') || digitsOnly.startsWith('8')) {
        return null; // Валидный номер
      }
    } else if (digitsOnly.length === 10) {
      // Формат: XXXXXXXXXX (подразумевается +7)
      // Проверяем, что это мобильный номер (начинается с 9) или городской
      const code = digitsOnly.substring(0, 3);
      if (
        [
          '900',
          '901',
          '902',
          '903',
          '904',
          '905',
          '906',
          '908',
          '909',
          '910',
          '911',
          '912',
          '913',
          '914',
          '915',
          '916',
          '917',
          '918',
          '919',
          '920',
          '921',
          '922',
          '923',
          '924',
          '925',
          '926',
          '927',
          '928',
          '929',
          '930',
          '931',
          '932',
          '933',
          '934',
          '936',
          '937',
          '938',
          '939',
          '950',
          '951',
          '952',
          '953',
          '954',
          '955',
          '956',
          '958',
          '960',
          '961',
          '962',
          '963',
          '964',
          '965',
          '966',
          '967',
          '968',
          '969',
          '970',
          '971',
          '977',
          '978',
          '980',
          '981',
          '982',
          '983',
          '984',
          '985',
          '986',
          '987',
          '988',
          '989',
          '991',
          '992',
          '993',
          '994',
          '995',
          '996',
          '997',
          '999',
        ].includes(code) ||
        digitsOnly.startsWith('9')
      ) {
        return null; // Валидный номер
      }
    }

    // Также принимаем отформатированные номера
    const phoneRegex = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
    if (phoneRegex.test(value)) {
      return null; // Валидный отформатированный номер
    }

    return {
      invalidPhone: {
        message: 'Введите корректный российский номер телефона',
        value: control.value,
      },
    };
  }

  // Дополнительный метод для извлечения чистых цифр из отформатированного номера
  static getDigitsOnly(phoneValue: string): string {
    if (!phoneValue) return '';
    return phoneValue.replace(/\D/g, '');
  }

  // Метод для форматирования номера
  static formatPhone(phoneValue: string): string {
    const digits = PhoneValidator.getDigitsOnly(phoneValue);

    if (digits.length === 0) return '';

    let formatted = '';

    if (digits.length <= 11) {
      if (digits.startsWith('8')) {
        // Заменяем 8 на +7
        const withoutFirst = digits.substring(1);
        formatted = PhoneValidator.formatDigits('7' + withoutFirst);
      } else if (digits.startsWith('7')) {
        formatted = PhoneValidator.formatDigits(digits);
      } else {
        // Добавляем +7 в начало
        formatted = PhoneValidator.formatDigits('7' + digits.substring(0, 10));
      }
    }

    return formatted;
  }

  private static formatDigits(digits: string): string {
    if (digits.length === 0) return '';

    let formatted = '+7';

    if (digits.length > 1) {
      formatted += ' ' + digits.substring(1, 4);
    }
    if (digits.length > 4) {
      formatted += ' ' + digits.substring(4, 7);
    }
    if (digits.length > 7) {
      formatted += ' ' + digits.substring(7, 9);
    }
    if (digits.length > 9) {
      formatted += ' ' + digits.substring(9, 11);
    }

    return formatted;
  }
}
