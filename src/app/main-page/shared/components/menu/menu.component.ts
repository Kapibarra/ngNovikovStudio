import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOutAnimation', [
  state(
    'in',
    style({
      transform: 'translateY(0)',
      opacity: 1,
    })
  ),
  state(
    'out',
    style({
      transform: 'translateY(-100%)',
      opacity: 0,
    })
  ),
  transition('in => out', animate('400ms ease-out')),
  transition('out => in', animate('400ms ease-in')),
]);
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideInOutAnimation],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() isActiveMenu: boolean = false;
  @Output() isActiveMenuChange = new EventEmitter<boolean>();

  constructor(private scroller: ViewportScroller) {}

  ngAfterViewInit(): void {}

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
