import { Component, OnInit } from '@angular/core';
import { serviceTypes } from 'src/app/main-page/shared/models/serviceTypes';

@Component({
  selector: 'app-service-types',
  templateUrl: './service-types.component.html',
  styleUrls: ['./service-types.component.scss'],
})
export class ServiceTypesComponent implements OnInit {
  serviceTypes: serviceTypes[] = [
    {
      title: 'лендинг',
      number: 1,
      description:
        'подойдет, если вам нужно развитие дизайна вашего продукта, дизайн-концепция или усиление выделенной командой дизайнеров',
      price: 500,
      list: [
        {
          listItem: 'My Service Type List Item',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
