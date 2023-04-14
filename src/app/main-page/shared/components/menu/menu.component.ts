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
import { SmoothScrollService } from '../../services/smoothScroll.service';

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
  currentYear!: number;

  constructor(
    private scroller: ViewportScroller,
    private smoothScroll: SmoothScrollService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
  closeMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.isActiveMenuChange.emit(this.isActiveMenu);
  }
  scrollTo() {
    setTimeout(() => {
      this.scroller.scrollToAnchor('about');
    }, 1000);
  }
  onSmoothScroll(target: string): void {
    console.log('target:', target);
    this.scroller.scrollToAnchor(target);
    this.closeMenu();
  }
}
