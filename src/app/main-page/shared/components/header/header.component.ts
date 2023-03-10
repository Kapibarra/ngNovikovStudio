import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isActiveMenu: boolean = false;
  @Input() isActiveHeader: boolean = false;
  @Output() isActiveHeaderChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
    this.isActiveHeaderChange.emit(this.isActiveHeader);
  }
}
