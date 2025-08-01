import { Component } from '@angular/core';
import { ServiceInfo } from '../shared/components/seo-service-info/seo-service-info.component';
import { serviceExamples } from '../shared/models/service-examples';

@Component({
  selector: 'app-seo-page',
  templateUrl: './seo-page.component.html',
  styleUrls: ['./seo-page.component.scss'],
})
export class SeoPageComponent {
  seoPageOptions: string[] = [
    'Анализ сайта и конкурентов',
    'Подбор семантического ядра',
    'Техническая оптимизация сайта',
    'Внутренняя оптимизация контента',
    'Работа с внешними ссылками',
    'Настройка аналитики',
    'Ежемесячные отчеты',
  ];

  seoPageExtras = [
    { name: 'Настройка Яндекс.Директ', price: 8000, selected: false },
    { name: 'Настройка Google Ads', price: 8000, selected: false },
    { name: 'Ведение рекламных кампаний', price: 15000, selected: false },
    { name: 'Создание лендинга для рекламы', price: 35000, selected: false },
    { name: 'A/B тестирование', price: 5000, selected: false },
    { name: 'Консультации по маркетингу', price: 3000, selected: false },
  ];

  seoServiceData: ServiceInfo = serviceExamples['seo'];
}
