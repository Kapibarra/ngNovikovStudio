import { Directive, HostListener } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Directive({
  selector: '[appDialog]',
})
export class DialogDirective {
  @HostListener('click', ['event$']) onClick() {
    this.dialogService.openDialog();
    console.log('directive open');
  }
  constructor(private dialogService: DialogService) {}
}
