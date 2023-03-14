import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() isActiveMenu: boolean = false;
  @Output() isActiveMenuChange = new EventEmitter<boolean>();
  constructor(private scroller: ViewportScroller) {}

  ngOnInit() {}
  closeMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.isActiveMenuChange.emit(this.isActiveMenu);
  }
  scrollTo() {
    setTimeout(() => {
      this.scroller.scrollToAnchor('about');
    }, 1000);
  }
}
