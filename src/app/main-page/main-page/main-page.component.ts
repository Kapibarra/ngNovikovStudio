import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private cookieService: CookieService) {
    this.cookieService.set('tesdt', 'cookieValue', {
      expires: new Date('2030-01-01'), // cookie expiration date
      sameSite: 'None', // sameSite attribute set to None
      secure: true, // secure attribute set to true
    });
  }

  landingPageOptions: string[] = [
    'Маркетинговая стратегия 2',
    'Написание продающих текстов 3',
    'Разработка скелета (прототипа) 4',
    'Индивидуальный дизайн 5',
    'Адаптивная верстка на Тильда',
  ];
  landingPageExtras = [
    { name: 'SEO-оптимизация', price: 3000, selected: false },
    { name: 'Интеграция с CRM', price: 5000666, selected: false },
    { name: 'Анимации', price: 2000, selected: false },
    { name: 'Дополнительные страницы', price: 4000, selected: false },
    { name: 'Тестирование производительности', price: 1500, selected: false },
  ];
  ecomPageOptions: string[] = [
    'Маркетинговая стратегия 2',
    'Написание продающих текстов 3',
    'Разработка скелета (прототипа) 4',
    'Индивидуальный дизайн 5',
    'Адаптивная верстка на Тильда',
  ];
  ecomPageExtras = [
    { name: 'SEO-оптимизация', price: 3000, selected: false },
    { name: 'Интеграция с CRM', price: 5000666, selected: false },
    { name: 'Анимации', price: 2000, selected: false },
    { name: 'Дополнительные страницы', price: 4000, selected: false },
    { name: 'Тестирование производительности', price: 1500, selected: false },
  ];

  ngOnInit() {}
}
