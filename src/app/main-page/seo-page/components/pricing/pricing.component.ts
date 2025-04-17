import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { serviceTypes } from 'src/app/main-page/shared/models/serviceTypes';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef, private readonly renderer: Renderer2) {}
  public isFormOpen = false;
  serviceTypes: serviceTypes[] = [
    {
      title: 'Express Разработка',
      number: 1,
      description: 'Быстро, хорошо и без правок',
      price: 35000,
      tags: [
        {
          tagsItem: 'Без правок',
        },
        {
          tagsItem: '2-3 дня',
        },
        {
          tagsItem: 'Tilda',
        },
      ],
      list: [
        {
          listItem: 'Проработка концепции дизайна',
        },
      ],
    },
    {
      title: 'лендинг',
      number: 1,
      description:
        'Подойдет, если вам нужно продвижение конкретной услуги или товара, идеален в связке с Яндекс директ',
      price: 35000,
      tags: [
        {
          tagsItem: 'Под ключ',
        },
        {
          tagsItem: 'Ux/Ui',
        },
        {
          tagsItem: 'Дизайн проект',
        },
        {
          tagsItem: 'Верстка',
        },
        {
          tagsItem: 'Angular',
        },
        {
          tagsItem: 'React',
        },
      ],
      list: [
        {
          listItem: 'Проработка концепции дизайна',
        },
      ],
    },
    {
      title: 'Интернет-магазин',
      number: 2,
      description:
        'Разработка и поддержка интернет-магазинов любой сложности. Интеграция с платежными системами и системами управления складом.',
      price: 55000,
      tags: [
        {
          tagsItem: 'Ux/Ui',
        },
        {
          tagsItem: 'Под ключ',
        },
        {
          tagsItem: 'Дизайн проект',
        },
        {
          tagsItem: 'Tilda',
        },
      ],
      list: [
        {
          listItem: 'Разработка дизайна сайта',
        },
      ],
    },
    {
      title: 'Сайт на Tilda',
      number: 3,
      description:
        'Разработка и создание сайтов на платформе Тильда. Адаптивный дизайн и высокая скорость загрузки.',
      price: 30000,
      tags: [
        {
          tagsItem: 'Ux/Ui',
        },
        {
          tagsItem: 'Под ключ',
        },
        {
          tagsItem: 'Дизайн проект',
        },
        {
          tagsItem: 'Zero Block',
        },
        {
          tagsItem: 'Модули JS',
        },
      ],
      list: [
        {
          listItem: 'Разработка дизайна сайта',
        },
      ],
    },
    {
      title: 'Яндекс.Директ',
      number: 4,
      description:
        'Настройка контекстной рекламы для максимального эффекта и оптимизации расходов',
      price: 8000,
      tags: [
        {
          tagsItem: 'Настройка РК',
        },
        {
          tagsItem: 'Ведение РК',
        },
      ],
      list: [
        {
          listItem: 'Выбор ключевых запросов',
        },
      ],
    },
    {
      title: 'Разработка',
      number: 4,
      description: 'Часовая ставка по разработке',
      price: 1750,
      tags: [
        {
          tagsItem: 'Дизайн',
        },
        {
          tagsItem: 'Ux/Ui',
        },
        {
          tagsItem: 'Angular',
        },
        {
          tagsItem: 'Верстка',
        },
        {
          tagsItem: 'React',
        },
        {
          tagsItem: 'DevOps',
        },
      ],
      list: [
        {
          listItem: 'Выбор ключевых запросов',
        },
      ],
    },
  ];
  ngOnInit(): void {}

  onViewportChange(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add('inViewport');
      }
    });
  }
  ngAfterViewInit(): void {}
}
