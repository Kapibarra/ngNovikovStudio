import { Component, OnInit } from '@angular/core';
import { serviceTypes } from 'src/app/main-page/shared/models/serviceTypes';

@Component({
  selector: 'app-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.scss'],
})
export class ServiceTypesComponent implements OnInit {
  serviceTypes: serviceTypes[] = [
    {
      title: 'лендинг',
      number: 1,
      description:
        'подойдет, если вам нужно развитие дизайна вашего продукта, дизайн-концепция или усиление выделенной командой дизайнеров',
      price: 500,
      list: [
        {
          listItem: 'My Service Type List Item',
        },
        {
          listItem: 'My Service Type List Item',
        },
        {
          listItem: 'My Service Type List Item',
        },
      ],
    },
    {
      title: 'Интернет-магазин',
      number: 2,
      description:
        'Разработка и поддержка интернет-магазинов любой сложности. Интеграция с платежными системами и системами управления складом.',
      price: 1000,
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
      price: 800,
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
      price: 800,
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
