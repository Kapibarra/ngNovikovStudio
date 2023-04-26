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
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this.elementRef.nativeElement);
    this.observer.disconnect();
  }

  private handleIntersection(
    entries: IntersectionObserverEntry[],
    _observer: IntersectionObserver
  ) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.inViewport.emit(true);
      } else {
        this.inViewport.emit(false);
      }
    });
  }
}
