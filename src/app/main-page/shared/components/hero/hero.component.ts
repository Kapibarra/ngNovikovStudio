import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('test-hero__item-xs', { static: false }) card:
    | ElementRef
    | undefined;

  listOfStrings = [
    'Web - Разработка',
    'Современный дизайн',
    'Digital Marketing',
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {}
}
