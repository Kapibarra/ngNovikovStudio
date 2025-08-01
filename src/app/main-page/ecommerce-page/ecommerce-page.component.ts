import { Component } from '@angular/core';
import { ServiceInfo } from '../shared/components/seo-service-info/seo-service-info.component';
import { serviceExamples } from '../shared/models/service-examples';

@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.scss'],
})
export class EcommercePageComponent {
  ecommercePageOptions: string[] = [
    'Анализ ниши и конкурентов',
    'Создание технического задания',
    'Дизайн интерфейса магазина',
    'Разработка каталога товаров',
    'Интеграция платежных систем',
    'Настройка доставки',
    'Система управления заказами',
    'Тестирование и запуск',
  ];

  ecommercePageExtras = [
    { name: 'Интеграция с 1С', price: 25000, selected: false },
    { name: 'Мобильное приложение', price: 80000, selected: false },
    { name: 'Программа лояльности', price: 35000, selected: false },
    { name: 'Система отзывов', price: 15000, selected: false },
    { name: 'Многоуровневые скидки', price: 20000, selected: false },
    { name: 'API для внешних систем', price: 30000, selected: false },
  ];

  ecommerceServiceData: ServiceInfo = serviceExamples['ecommerce'];
}
