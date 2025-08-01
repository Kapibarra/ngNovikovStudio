import { Component } from '@angular/core';
import { ServiceInfo } from '../shared/components/seo-service-info/seo-service-info.component';
import { serviceExamples } from '../shared/models/service-examples';

@Component({
  selector: 'app-development-page',
  templateUrl: './development-page.component.html',
  styleUrls: ['./development-page.component.scss'],
})
export class DevelopmentPageComponent {
  developmentPageOptions: string[] = [
    'Анализ требований и техническое задание',
    'Архитектура приложения',
    'Frontend разработка на React/Angular',
    'Backend разработка (Node.js/Python)',
    'Интеграция с внешними API',
    'Тестирование и отладка',
    'Документация и инструкции',
  ];

  developmentPageExtras = [
    { name: 'Мобильное приложение', price: 25000, selected: false },
    { name: 'Дополнительные интеграции', price: 12000, selected: false },
    { name: 'Админ панель', price: 18000, selected: false },
    { name: 'API разработка', price: 15000, selected: false },
    { name: 'Деплой и настройка сервера', price: 8000, selected: false },
    { name: 'Техническая поддержка (6 мес)', price: 10000, selected: false },
  ];

  developmentServiceData: ServiceInfo = serviceExamples['development'];
}
