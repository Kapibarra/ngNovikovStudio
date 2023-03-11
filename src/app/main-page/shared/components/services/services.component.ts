import { Service } from './../../models/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Web - разработка',
      number: 1,
      description:
        'Индивидуальная разработка с использованием передовых инструментов разработки, Angular 14v+ , C# , HTML5 , Css3',
    },
    {
      title: 'Дизайн проект',
      number: 2,
      description:
        'Разработка дизайн концепции и дизайн проекта в Figma c учетом всех пожеланий заказчика. Вы ТОЧНО останитесь довольны!',
    },
    {
      title: 'Web - разработка',
      number: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Massa tempor nec feugiat nisl.',
    },
    {
      title: 'Nocode - разработка',
      number: 4,
      description:
        'Разработка сайта на платформе Tilda. Отлично подойдет для интернет-магазина или блога.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
