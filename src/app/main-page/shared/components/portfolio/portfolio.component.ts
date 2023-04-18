import { Portfolio } from './../../models/portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[] = [
    {
      title: ' VNUKOVO PREMIUM OUTLET ',
      description: ' КОРПОРАТИВНЫЙ САЙТ САМОГО ПОСЕЩАЕМОГО АУТЛЕТА ',
      link: 'https://vnukovo-premium-outlet.ru/',
      imgUrl: 'assets/images/portfolio/vnukovo.png',
    },
    {
      title: ' Viper Official ',
      description:
        ' КОРПОРАТИВНЫЙ САЙТ эксклюзивного импортера поломоечных машин',
      link: 'https://viper-pro.ru/',
      imgUrl: 'assets/images/portfolio/viper.png',
    },
    {
      title: ' Sellsoft Technology ',
      description:
        ' Сайт российской IT - компании , разработчика программного обеспечения',
      link: 'https://viper-pro.ru/',
      imgUrl: 'assets/images/portfolio/sellsoft.png',
    },
    {
      title: ' ИНТЕРТЕХ ',
      description:
        ' корпоративный Сайт одной из крупнейшей российских консалтинговых групп',
      link: 'https://Intertech.ru',
      imgUrl: 'assets/images/portfolio/intertech.png',
    },
    {
      title: ' MosDisplay ',
      description: 'сайт и личный кабинет ремонта Apple и MAcbook',
      link: 'https://mosdisplay.ru',
      imgUrl: 'assets/images/portfolio/mosdisplay.png',
    },
    {
      title: ' Fisio ',
      description:
        'платформа для тех кто хочет быть в форме и оставаться мобильным',
      link: 'https://fisio.ru',
      imgUrl: 'assets/images/portfolio/fisio.png',
    },
    {
      title: ' MadStack Studio ',
      description:
        'Лендинг для наших дорогих коллег, студии разработки и дизайна',
      link: 'https://madstack.ru',
      imgUrl: 'assets/images/portfolio/madstack.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
