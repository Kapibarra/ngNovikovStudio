import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Service } from './../../models/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '80px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('500ms ease-in-out')]),
      transition('closed => open', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Web - разработка',
      number: 1,
      isHovered: false,
      description:
        'Индивидуальная разработка с использованием передовых инструментов разработки, Angular , React, JS',
    },
    {
      title: 'Дизайн проект',
      number: 2,
      isHovered: false,
      description:
        'Разработка дизайн концепции и дизайн проекта в Figma c учетом всех Ваших пожеланий.',
    },
    {
      title: 'Интернет - продвижение',
      number: 3,
      isHovered: false,
      description:
        'Настройка и ведение Вашей рекламной компании в Яндекс Директ',
    },
    {
      title: 'Nocode - разработка',
      number: 4,
      isHovered: false,
      description:
        'Разработка сайта на платформе Tilda. Отлично подойдет для интернет-магазина или блога.',
    },
  ];
  isHovered: boolean = false;
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
