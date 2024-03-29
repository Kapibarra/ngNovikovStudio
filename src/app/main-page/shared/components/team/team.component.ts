import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public isFormOpen = false;
  constructor() {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // when window width is >= 720px and < 1200px
        720: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is < 720px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }
}
