import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @ViewChild('rendererContainer', { static: true })
  private rendererContainer!: ElementRef;
  constructor() {}

  ngOnInit() {}
}
