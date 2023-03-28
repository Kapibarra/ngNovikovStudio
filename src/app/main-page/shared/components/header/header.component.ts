import { ViewportScroller } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isActiveMenu: boolean = false;
  isSticky: boolean = false;
  mobile: boolean = false;
  isFilled: boolean = true;
  @Input() isActiveHeader: boolean = false;
  @Output() isActiveHeaderChange = new EventEmitter<boolean>();
  constructor(private viewportscroller: ViewportScroller) {}

  ngOnInit(): void {
    this.isActiveHeaderChange.emit(this.isActiveHeader);
    if (window.screen.width <= 968) {
      this.mobile = true;
      console.log(this.mobile);
    }
  }
  onClickScroll(elId: string): void {
    this.viewportscroller.scrollToAnchor(elId);
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    verticalOffset > 40 ? (this.isSticky = true) : (this.isSticky = false);
  }
}
