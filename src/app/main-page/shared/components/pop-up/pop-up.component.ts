import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
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
