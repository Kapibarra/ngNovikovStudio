import { Portfolio } from './../../models/portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[] = [
    {
      title: 'Portfolio',
      description: 'Portfolio',
      link: 'https://',
      imgUrl: 'url',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
