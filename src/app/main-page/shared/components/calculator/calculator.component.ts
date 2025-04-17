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
  @Input() basePrice: number = 100;
  @Input() title: string = '';
  @Input() titleForm: string = '';
  @Input() optionsList: Option[] = [];
  @Input() fixedOptions: string[] = [];
  totalPrice: number = this.basePrice;
  updatePrice(): void {
    this.totalPrice =
      this.basePrice +
      this.optionsList
        .filter((option) => option.selected)
        .reduce((sum, option) => sum + option.price, 0);
  }
}
