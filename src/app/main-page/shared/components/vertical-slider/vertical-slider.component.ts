import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
})
export class VerticalSliderComponent implements OnInit {
  cards = [
    { image: 'https://via.placeholder.com/300x200', title: 'Card 1' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 2' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 3' },
    { image: 'https://via.placeholder.com/300x200', title: 'Card 4' },
    // добавьте больше карточек по необходимости
  ];

  constructor() {}

  ngOnInit(): void {}
}
