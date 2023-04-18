import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  contactForm!: FormGroup;
  name: any;
  email: any;
  phone: any;
  isActive: boolean = false;
  constructor(
    private dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {}
  get isActive$() {
    return this.dialogService.isActive;
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, this.customEmailValidator],
      ],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  closeDialog() {
    this.dialogService.closeDialog();
  }
  customEmailValidator(control: { value: string | string[] }) {
    if (control && control.value && !control.value.includes('@')) {
      return { invalidEmail: true };
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.contactForm.value);
    }
  }
}
