import { Portfolio } from './../../models/portfolio';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[] = [
    {
      title: ' VNUKOVO OUTLET',
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
      title: ' БИТС.БАЛАНС  ',
      description:
        ' Сайт российской IT - компании , разработчика программного обеспечения',
      link: 'https://bitsis.ru/',
      imgUrl: 'assets/images/portfolio/bits.png',
    },
    {
      title: ' mythai-spa ',
      description: ' мультилендинг для сети спа салонов в одинцово ',
      link: 'https://mythai-spa.ru/',
      imgUrl: 'assets/images/portfolio/thai.png',
    },
    {
      title: ' MosDisplay ',
      description: 'сайт и личный кабинет ремонта Apple и Macbook',
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
      title: ' gastropub briar ',
      description: 'заслуживает 3 звезды Michlen, ну очень вкусно!',
      link: 'https://briargastrobar.ru/',
      imgUrl: 'assets/images/portfolio/briar.png',
    },
  ];
  constructor(private readonly renderer: Renderer2) {}

  ngOnInit(): void {}

  onViewportChange(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add('inViewport');
      }
    });
  }
}
