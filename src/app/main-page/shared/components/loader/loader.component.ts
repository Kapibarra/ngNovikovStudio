import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  showLoader? = false;
  constructor() {}

  ngOnInit(): void {
    this.showFor5Seconds();
  }
  showFor5Seconds() {
    this.showLoader = true;
    let a = this;
    setTimeout(() => {
      this.showLoader = false;
    }, Math.floor(Math.random() * 3000));
  }
}
