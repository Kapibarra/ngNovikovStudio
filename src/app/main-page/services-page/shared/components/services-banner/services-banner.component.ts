import { Component, OnInit } from '@angular/core';
import { ServiceBanner } from 'src/app/main-page/shared/models/servicesBanner';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, EffectFade, EffectCoverflow]);
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
      title: ' briar ',
      imgUrl: 'assets/images/portfolio/briar.png',
    },
    {
      title: ' cellsoft ',
      imgUrl: 'assets/images/portfolio/cellsoft.png',
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
    {
      title: ' bits.balance ',
      imgUrl: 'assets/images/portfolio/bits.png',
    },
  ];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    navigation: false,
    pagination: { clickable: true },
    autoplay: {
      delay: 23333000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
