import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss'],
})
export class GallerySliderComponent implements OnInit, AfterViewInit {
  slides = [
    'assets/images/portfolio/bits.png',
    'assets/images/portfolio/viper.png',
    'assets/images/portfolio/thai.png',
    'assets/images/portfolio/fisio.png',
    'assets/images/portfolio/fisio.png',
  ];
  constructor(private el: ElementRef) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
