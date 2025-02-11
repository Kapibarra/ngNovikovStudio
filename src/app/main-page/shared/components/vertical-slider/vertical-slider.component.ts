import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
  constructor(private el: ElementRef) {}
  public isFormOpen = false;
  serviceTypes: serviceTypes[] = [
    {
      title: 'лендинг',
      number: 1,
      description:
        'подойдет, если вам нужно продвижение конкретной услуги или товара, идеально ложится с связке с Яндекс директ',
      price: 35000,
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

  ngAfterViewInit(): void {
    let panels = this.el.nativeElement.querySelectorAll('.panel');

    panels.forEach((panel: HTMLElement, index: number) => {
      gsap.fromTo(
        panel,
        { y: '100%', scale: 0.5, opacity: 1 },
        {
          y: '0%',
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 150%',
            end: 'top 40%',
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }
}
