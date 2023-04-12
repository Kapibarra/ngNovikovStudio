import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  onChange: Subject<boolean> = new Subject<boolean>();
  isActive: boolean = false;
  constructor() {
    this.onChange.subscribe((value) => {
      this.isActive = value;
    });
  }
  openDialog() {
    this.isActive = true;
    this.onChange.next(true);
    console.log('open');
  }
  closeDialog() {
    this.isActive = false;
    this.onChange.next(false);
    console.log('close');
  }
  getDialogState() {
    return this.isActive;
  }
}
