import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return ''; // Проверка на null или undefined

    // Форматируем с разделением тысяч точками
    return new Intl.NumberFormat('ru-RU').format(value);
  }
}
