import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  name: any;
  email: any;
  phone: any;
  phoneNumber: string = '+7 967 059 62 39';
  contactsEmail: string = 'info@novikovstudio.ru';
  formattedPhoneNumber: string = this.phoneNumber.replace(/\s+/g, '');
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {}
}
