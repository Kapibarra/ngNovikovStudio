import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements OnInit {
  @Input() text: string = '';
  @Input() speed: number = 50; // скорость прокрутки, значение по умолчанию 50
  transform!: string;
  constructor() {}

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    const distance = this.getTextWidth();
    const duration = distance / this.speed;

    setInterval(() => {
      this.transform = `translateX(-${distance}px)`;
    }, duration);
  }

  getTextWidth(): number {
    const el = document.createElement('span');
    el.innerText = this.text;
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    document.body.appendChild(el);
    const width = el.offsetWidth;
    document.body.removeChild(el);
    return width;
  }
}
