import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { serviceTypes } from 'src/app/main-page/shared/models/serviceTypes';

@Component({
  selector: 'app-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.scss'],
})
export class ServiceTypesComponent implements OnInit {
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
      ],
      list: [
        {
          listItem: 'Проработка концепции дизайна',
        },
        {
          listItem: 'Верстка',
        },
        {
          listItem: 'Frontend Разработка',
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
          tagsItem: 'Ux/Ui',
        },
      ],
      list: [
        {
          listItem: 'Проработка концепции дизайна',
        },
        {
          listItem: 'Верстка',
        },
        {
          listItem: 'Frontend Разработка',
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
      ],
      list: [
        {
          listItem: 'Разработка дизайна сайта',
        },
        {
          listItem: 'Разработка структуры сайта',
        },
        {
          listItem: 'Интеграция с платежными системами',
        },
        {
          listItem: 'Интеграция с системами управления складом',
        },
      ],
    },
    {
      title: 'Сайт на Тильде',
      number: 3,
      description:
        'Разработка и создание сайтов на платформе Тильда. Адаптивный дизайн и высокая скорость загрузки.',
      price: 30000,
      tags: [
        {
          tagsItem: 'Ux/Ui',
        },
      ],
      list: [
        {
          listItem: 'Разработка дизайна сайта',
        },
        {
          listItem: 'Создание адаптивного дизайна',
        },
        {
          listItem: 'Настройка высокой скорости загрузки сайта',
        },
        {
          listItem: 'Интеграция с платежными системами',
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
          tagsItem: 'Ux/Ui',
        },
      ],
      list: [
        {
          listItem: 'Выбор ключевых запросов',
        },
        {
          listItem: 'Составление релевантных объявлений',
        },
        {
          listItem: 'Настройка таргетирования по интересам аудитории',
        },
        {
          listItem: 'Анализ результатов и корректировка кампании',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
