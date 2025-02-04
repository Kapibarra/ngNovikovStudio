import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
})
export class VerticalSliderComponent implements OnInit, AfterViewInit {
  cards = [
    { image: 'https://via.placeholder.com/300x200', title: 'Card 1' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 2' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 3' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 4' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 5' },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const slides = document.querySelectorAll('.slider-item');
    const numberOfSlides = slides.length;

    // Анимация по очереди переключения карточек
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.slider-container',
          start: 'top top',
          end: `+=${100 * numberOfSlides}vh`, // Анимация будет длиться на все карточки
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      })
      .to(slides[0], { opacity: 1, duration: 0.5 }) // Первая карточка становится видимой
      .to(slides[0], { opacity: 0, duration: 0.5 }, '+=0.5') // Первая карточка скрывается после задержки
      .to(slides[1], { opacity: 1, duration: 0.5 }) // Вторая карточка становится видимой
      .to(slides[1], { opacity: 0, duration: 0.5 }, '+=0.5') // Вторая карточка скрывается
      .to(slides[2], { opacity: 1, duration: 0.5 })
      .to(slides[2], { opacity: 0, duration: 0.5 }, '+=0.5')
      .to(slides[3], { opacity: 1, duration: 0.5 })
      .to(slides[3], { opacity: 0, duration: 0.5 }, '+=0.5')
      .to(slides[4], { opacity: 1, duration: 0.5 }); // И так далее...

    // Чтобы цикл повторялся по кругу, добавим анимацию для последнего слайда:
    gsap.to(slides[numberOfSlides - 1], {
      opacity: 0,
      duration: 0.5,
      repeat: -1, // Повторяем анимацию
      yoyo: true, // Плавный возврат
    });
  }
}
