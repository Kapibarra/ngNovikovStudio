import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  listOfStrings = [
    'Web - Разработка',
    'Современный дизайн',
    'Digital Marketing',
  ];
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: false,
    pagination: { clickable: true },
    autoplay: {
      delay: 500000,
      disableOnInteraction: false,
    },
  };
  constructor() {}
  ngOnInit(): void {}
}
