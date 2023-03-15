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
          opacity: 1,
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
        'Индивидуальная разработка с использованием передовых инструментов разработки, Angular 14v+ , C# , HTML5 , Css3',
    },
    {
      title: 'Дизайн проект',
      number: 2,
      isHovered: false,
      description:
        'Разработка дизайн концепции и дизайн проекта в Figma c учетом всех пожеланий заказчика. Вы ТОЧНО останитесь довольны!',
    },
    {
      title: 'Web - разработка',
      number: 3,
      isHovered: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.',
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
