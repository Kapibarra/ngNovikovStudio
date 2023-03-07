import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  listOfStrings = [
    'NOVIKOV STUDIO',
    'WEB РАЗРАБОТКА',
    'ДИЗАЙН ПРОЕКТЫ',
    'DIGITAL МАРКЕТИНГ',
  ];
  constructor() {}

  ngOnInit(): void {}
}
