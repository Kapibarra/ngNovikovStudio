import { Component, Input, OnInit } from '@angular/core';

export type IconType =
  | 'target'
  | 'mobile'
  | 'lightning'
  | 'chart'
  | 'security'
  | 'shopping'
  | 'admin'
  | 'building'
  | 'cms'
  | 'language'
  | 'integration'
  | 'seo'
  | 'analytics'
  | 'ads'
  | 'traffic';

@Component({
  selector: 'app-icon-3d',
  templateUrl: './icon-3d.component.html',
  styleUrls: ['./icon-3d.component.scss'],
})
export class Icon3dComponent implements OnInit {
  @Input() type: IconType = 'target';
  @Input() size: number = 48;

  constructor() {}

  ngOnInit(): void {}
}
