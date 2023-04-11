import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Output() closeForm = new EventEmitter<void>();
  isFormOpen = false;
  constructor() {}

  ngOnInit(): void {}
  onClose(): void {
    this.closeForm.emit();
  }
}
