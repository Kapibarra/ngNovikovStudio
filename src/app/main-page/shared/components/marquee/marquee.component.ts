import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent implements AfterViewInit {
  text: string = '';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.marquee('.marquee', 0.5);
  }

  marquee(selector: string, speed: number) {
    const parentSelector =
      this.elementRef.nativeElement.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
}
