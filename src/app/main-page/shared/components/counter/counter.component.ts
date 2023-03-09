import { Component, OnInit } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count = 200;
  duration = 5000;
  public params1: NgxAnimatedCounterParams = {
    start: 0,
    end: 20,
    interval: 1,
    increment: 1,
  };
  public params2: NgxAnimatedCounterParams = {
    start: 0,
    end: 168,
    interval: 1,
    increment: 1,
  };
  public params3: NgxAnimatedCounterParams = {
    start: 0,
    end: 0,
    interval: 0,
    increment: 0,
  };
  public params4: NgxAnimatedCounterParams = {
    start: 1,
    end: 100,
    interval: 0.1,
    increment: 1,
  };
  constructor() {}

  ngOnInit(): void {}
}
