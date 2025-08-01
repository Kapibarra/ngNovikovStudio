import { Component } from '@angular/core';
import { ServiceInfo } from '../shared/components/seo-service-info/seo-service-info.component';
import { serviceExamples } from '../shared/models/service-examples';

@Component({
  selector: 'app-corporative-page',
  templateUrl: './corporative-page.component.html',
  styleUrls: ['./corporative-page.component.scss'],
})
export class CorporativePageComponent {
  corporativePageOptions: string[] = [
    'Анализ ниши и конкурентов',
    'Разработка информационной архитектуры',
    'Создание дизайн-макетов',
    'Адаптивная верстка',
    'Программирование функционала',
    'Интеграция с CMS',
    'Тестирование и оптимизация',
  ];

  corporativePageExtras = [
    { name: 'Интеграция с CRM', price: 15000, selected: false },
    { name: 'Мультиязычность', price: 25000, selected: false },
    { name: 'Онлайн-чат', price: 8000, selected: false },
    { name: 'SEO-оптимизация', price: 12000, selected: false },
    { name: 'Система управления контентом', price: 20000, selected: false },
    { name: 'Интеграция с аналитикой', price: 5000, selected: false },
  ];

  corporativeServiceData: ServiceInfo = serviceExamples['corporate'];
}
