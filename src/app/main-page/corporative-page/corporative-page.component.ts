import { Component } from '@angular/core';

@Component({
  selector: 'app-corporative-page',
  templateUrl: './corporative-page.component.html',
  styleUrls: ['./corporative-page.component.scss'],
})
export class CorporativePageComponent {
  corporativePageOptions: string[] = [
    'Маркетинговая стратегия 2',
    'Написание продающих текстов 3',
    'Разработка скелета (прототипа) 4',
    'Индивидуальный дизайн 5',
    'Адаптивная верстка на Тильда',
  ];
  corporativePageExtras = [
    { name: 'SEO-оптимизация', price: 3000, selected: false },
    { name: 'Интеграция с CRM', price: 5000666, selected: false },
    { name: 'Анимации', price: 2000, selected: false },
    { name: 'Дополнительные страницы', price: 4000, selected: false },
    { name: 'Тестирование производительности', price: 1500, selected: false },
  ];
}
