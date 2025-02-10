import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
})
export class VerticalSliderComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let panels = this.el.nativeElement.querySelectorAll('.panel');

    panels.forEach((panel: HTMLElement, index: number) => {
      gsap.fromTo(
        panel,
        { y: '100%', scale: 0.5, opacity: 0 },
        {
          y: '0%',
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 150%',
            end: 'top 50%',
            scrub: true,
            markers: true, // Удалите в продакшене
          },
        }
      );
    });
  }
}
