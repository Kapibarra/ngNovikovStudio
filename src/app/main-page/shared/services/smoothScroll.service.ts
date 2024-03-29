import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmoothScrollService {
  smoothScroll(target: string) {
    console.log('smoothScroll');
    const element = document.querySelector(target);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const start = scrollTop;
    const end = rect.top + scrollTop;
    const duration = 500; // Animation duration in milliseconds

    let startTime: number;

    function animate(currentTime: number) {
      console.log('animate', currentTime, start, end);
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const scrollPosition = easeInOutQuad(
        timeElapsed,
        start,
        end - start,
        duration
      );
      console.log('scrollPosition', scrollPosition);
      window.scrollTo(0, scrollPosition);
      if (timeElapsed < duration) {
        setTimeout(animate, 1000 / 60, performance.now());
      }
    }

    // Easing function for smooth animation

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) {
        return (c / 2) * t * t + b;
      }
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animate);
  }
}
