import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[inViewport]',
})
export class InViewportDirective implements OnDestroy {
  private observer!: IntersectionObserver;
  @Output() inViewport = new EventEmitter<boolean>();

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    // Определяем параметры в зависимости от размера экрана
    const isMobile = window.innerWidth < 968;
    const threshold = isMobile ? 0.3 : 0.8; // Для мобильных устройств уменьшаем threshold
    const rootMargin = isMobile ? '-50px 0px' : '0px'; // Для мобильных добавляем отступ

    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      root: null,
      rootMargin: rootMargin,
      threshold: threshold,
    });

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.unobserve(this.elementRef.nativeElement);
      this.observer.disconnect();
    }
  }

  onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry instanceof IntersectionObserverEntry) {
        const target = entry.target as HTMLElement;

        // Отладочная информация
        console.log('IntersectionObserver entry:', {
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          target: target,
          viewport: { width: window.innerWidth, height: window.innerHeight },
        });

        if (entry.isIntersecting) {
          target.classList.add('inViewport');
          this.inViewport.emit(true);
          console.log('Added inViewport class to:', target);
        } else {
          // target.classList.remove('inViewport');
        }
      }
    });
  }
}
