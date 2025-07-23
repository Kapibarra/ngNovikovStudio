import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    const value = input.value;
    const cursorPosition = input.selectionStart;

    // Удаляем все, кроме цифр
    let digitsOnly = value.replace(/\D/g, '');

    // Ограничиваем до 11 цифр
    if (digitsOnly.length > 11) {
      digitsOnly = digitsOnly.substring(0, 11);
    }

    // Форматируем номер
    let formatted = this.formatPhone(digitsOnly);

    // Устанавливаем отформатированное значение
    input.value = formatted;

    // Восстанавливаем позицию курсора
    this.setCursorPosition(
      input,
      cursorPosition,
      value.length,
      formatted.length
    );
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'Home',
      'End',
      'ArrowLeft',
      'ArrowRight',
      'Clear',
      'Copy',
      'Paste',
    ];

    // Разрешаем специальные клавиши
    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Разрешаем Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
    if (
      event.ctrlKey &&
      ['a', 'c', 'v', 'x', 'z'].includes(event.key.toLowerCase())
    ) {
      return;
    }

    // Разрешаем только цифры
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }

  private formatPhone(digits: string): string {
    if (!digits) return '';

    let formatted = '';

    if (digits.length > 0) {
      // Если первая цифра 8, заменяем на 7
      if (digits.startsWith('8')) {
        digits = '7' + digits.substring(1);
      }

      // Если не начинается с 7, добавляем 7 в начало
      if (!digits.startsWith('7') && digits.length <= 10) {
        digits = '7' + digits;
      }

      // Форматируем как +7 XXX XXX XX XX
      formatted = '+7';

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
    }

    return formatted;
  }

  private setCursorPosition(
    input: any,
    oldCursor: number,
    oldLength: number,
    newLength: number
  ) {
    // Простая логика для установки курсора
    let newCursor = oldCursor;

    // Если длина увеличилась (добавили символы форматирования)
    if (newLength > oldLength) {
      newCursor = oldCursor + (newLength - oldLength);
    }

    // Устанавливаем курсор
    setTimeout(() => {
      input.setSelectionRange(newCursor, newCursor);
    }, 0);
  }
}
