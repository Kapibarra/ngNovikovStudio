import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';
@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements OnInit {
  top: string = '0px';
  left: string = '0px';
  expand = false;
  constructor() {}

  ngOnInit() {
    const mouseMove$ = fromEvent(document, 'mousemove').pipe(
      throttle(() => interval(32))
    );
    mouseMove$.subscribe((event: Event) => {
      const mouseEvent = event as MouseEvent;
      this.top = mouseEvent.pageY - 10 + 'px';
      this.left = mouseEvent.pageX - 10 + 'px';
    });
  }

  @HostListener('document:click', ['$event'])
  onClick() {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }
}
