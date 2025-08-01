import { Component } from '@angular/core';
import { ServiceInfo } from '../shared/components/seo-service-info/seo-service-info.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
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

  landingServiceData: ServiceInfo = {
    title: 'Лендинг',
    subtitle: 'Продающие одностраничные сайты',
    description:
      'Создаем лендинги, которые реально продают. Индивидуальный дизайн, продающие тексты и техническая оптимизация для максимальной конверсии. 100+ лендингов реализовано, 80+ рекламных кампаний запущено успешно.',
    features: [
      {
        icon: '🎯',
        iconType: 'target',
        title: 'Высокая конверсия',
        description:
          'Продуманная структура страницы для максимальной конверсии посетителей',
      },
      {
        icon: '📱',
        iconType: 'mobile',
        title: 'Адаптивный дизайн',
        description: 'Идеальное отображение на всех устройствах и экранах',
      },
      {
        icon: '⚡',
        iconType: 'lightning',
        title: 'Быстрая загрузка',
        description: 'Оптимизация скорости для лучших позиций в поиске',
      },
      {
        icon: '📈',
        iconType: 'chart',
        title: 'SEO-готовность',
        description:
          'Настроенная структура для продвижения в поисковых системах',
      },
    ],
    price: {
      from: 70000,
      currency: 'руб.',
    },
    deliveryTime: '7-14 дней',
    ctaText: 'Заказать лендинг',
  };
}
