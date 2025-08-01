import { Injectable, ComponentRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

export type SuccessType = 'form' | 'calculator';

@Injectable({
  providedIn: 'root',
})
export class SuccessPopupService {
  private showSuccessSubject = new Subject<SuccessType>();
  public showSuccess$ = this.showSuccessSubject.asObservable();

  constructor() {}

  showFormSuccess(): void {
    this.showSuccessSubject.next('form');
  }

  showCalculatorSuccess(): void {
    this.showSuccessSubject.next('calculator');
  }
}
