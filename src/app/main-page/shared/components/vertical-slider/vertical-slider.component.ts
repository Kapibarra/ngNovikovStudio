import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { serviceTypes } from '../../models/serviceTypes';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
})
export class VerticalSliderComponent implements OnInit, AfterViewInit {
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
      title: 'Tilda',
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
