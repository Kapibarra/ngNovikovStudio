import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button-big',
  templateUrl: './primary-button-big.component.html',
  styleUrls: ['./primary-button-big.component.scss'],
})
export class PrimaryButtonBigComponent implements OnInit {
  @Input() label!: string;
  @Output() openForm = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  popUpOpen(): void {
    this.openForm.emit();
    console.log('pop up emit');
  }
}
