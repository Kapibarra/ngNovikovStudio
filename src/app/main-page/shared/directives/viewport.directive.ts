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
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.elementRef.nativeElement);
    this.observer.disconnect();
  }

  onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry instanceof IntersectionObserverEntry) {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('inViewport');
        }
        // else {
        //   target.classList.remove('inViewport');
        // }
      }
    });
  }
}
