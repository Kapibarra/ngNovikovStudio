import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceBanner } from 'src/app/main-page/shared/models/servicesBanner';

@Component({
  selector: 'app-services-banner',
  templateUrl: './services-banner.component.html',
  styleUrls: ['./services-banner.component.scss'],
})
export class ServicesBannerComponent implements OnInit, OnDestroy {
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

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
