import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('popupAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms cubic-bezier(.35,0,.25,1)', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class PopUpComponent implements OnInit {
  isActive: boolean = false;
  constructor(private dialogService: DialogService) {}
  get isActive$() {
    return this.dialogService.isActive;
  }
  ngOnInit(): void {}

  closeDialog() {
    this.dialogService.closeDialog();
  }
}
