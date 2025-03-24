import { Component, Input } from '@angular/core';
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
export class CalculatorComponent {
  @Input() basePrice: number = 100; // Базовая цена продукта
  @Input() title: string = ''; // Базовая цена продукта
  @Input() titleForm: string = ''; // Базовая цена продукта
  @Input() optionsList: Option[] = []; // Дополнительные опции (с чекбоксами)
  @Input() fixedOptions: string[] = []; // Фиксированные опции (без чекбоксов)
  totalPrice: number = this.basePrice;

  // Метод для обновления цены при выборе опций
  updatePrice(): void {
    this.totalPrice =
      this.basePrice +
      this.optionsList
        .filter((option) => option.selected)
        .reduce((sum, option) => sum + option.price, 0);
  }
}
