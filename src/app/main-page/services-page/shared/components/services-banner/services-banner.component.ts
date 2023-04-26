import { Component, OnInit } from '@angular/core';
import { ServiceBanner } from 'src/app/main-page/shared/models/servicesBanner';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Autoplay,
  EffectFade,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, EffectFade]);
@Component({
  selector: 'app-services-banner',
  templateUrl: './services-banner.component.html',
  styleUrls: ['./services-banner.component.scss'],
})
export class ServicesBannerComponent implements OnInit {
  bannerSlider: ServiceBanner[] = [
    {
      title: ' VNUKOVO PREMIUM OUTLET ',
      imgUrl: 'assets/images/portfolio/vnukovo.png',
    },
    {
      title: ' montekrist media ',
      imgUrl: 'assets/images/portfolio/montekrist.png',
    },

    {
      title: ' Viper Official ',
      imgUrl: 'assets/images/portfolio/viper.png',
    },
    {
      title: ' fisio ',
      imgUrl: 'assets/images/portfolio/fisio.png',
    },
    {
      title: ' moscow startup ',
      imgUrl: 'assets/images/portfolio/startup.png',
    },
    {
      title: ' madstack ',
      imgUrl: 'assets/images/portfolio/madstack.png',
    },
    {
      title: ' kama matricia ',
      imgUrl: 'assets/images/portfolio/kama.png',
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: false,
    pagination: { clickable: true },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
