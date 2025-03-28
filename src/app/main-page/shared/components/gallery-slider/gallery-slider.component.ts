import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss'],
})
export class GallerySliderComponent {
  images = [
    'assets/images/portfolio/bits.png',
    'assets/images/portfolio/viper.png',
    'assets/images/portfolio/thai.png',
    'assets/images/portfolio/fisio.png',
    'assets/images/portfolio/viper.png',
    'assets/images/portfolio/thai.png',
    'assets/images/portfolio/fisio.png',
  ];

  activeIndex = 2; // Центрируем начальный активный слайд

  // Метод для прокрутки вперед
  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  // Метод для прокрутки назад
  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  // Определяем, активен ли конкретный слайд
  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}
