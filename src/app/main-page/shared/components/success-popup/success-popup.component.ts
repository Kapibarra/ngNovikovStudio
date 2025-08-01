import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {
  SuccessPopupService,
  SuccessType,
} from '../../services/success-popup.service';
import { Subscription } from 'rxjs';

export interface SuccessMessage {
  type: 'form' | 'calculator';
  title: string;
  message: string;
  icon: string;
}

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.scss'],
  animations: [
    trigger('successAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px) scale(0.8)' }),
        animate(
          '400ms cubic-bezier(.35,0,.25,1)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms cubic-bezier(.35,0,.25,1)',
          style({ opacity: 0, transform: 'translateY(-20px) scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class SuccessPopupComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  currentMessage: SuccessMessage | null = null;
  autoHideTimer: any;
  private subscription: Subscription = new Subscription();

  private successMessages: { [key: string]: SuccessMessage } = {
    form: {
      type: 'form',
      title: 'Заявка отправлена!',
      message:
        'Спасибо за обращение! Мы свяжемся с вами в ближайшее время для обсуждения деталей.',
      icon: '📞',
    },
    calculator: {
      type: 'calculator',
      title: 'Расчет отправлен!',
      message:
        'Ваш расчет успешно отправлен! Наш менеджер свяжется с вами для уточнения деталей проекта.',
      icon: '🚀',
    },
  };

  constructor(private successPopupService: SuccessPopupService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.successPopupService.showSuccess$.subscribe((type: SuccessType) => {
        this.showSuccess(type);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
    }
  }

  showSuccess(type: 'form' | 'calculator'): void {
    this.currentMessage = this.successMessages[type];
    this.isVisible = true;

    // Автоматически скрыть через 5 секунд
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
    }

    this.autoHideTimer = setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide(): void {
    this.isVisible = false;
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
    }
  }

  onOverlayClick(): void {
    this.hide();
  }
}
