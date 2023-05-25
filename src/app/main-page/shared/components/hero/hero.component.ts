import { Component, OnInit, ViewChild } from '@angular/core';
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
    loop: true,
    navigation: false,
    pagination: { clickable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // 2 slides per view when screen width is 768px or greater
      },
      428: {
        slidesPerView: 2, // 2 slides per view when screen width is 768px or greater
      },

      // You can add more breakpoints as needed
    },
  };
  constructor() {}
  ngOnInit(): void {}
}
