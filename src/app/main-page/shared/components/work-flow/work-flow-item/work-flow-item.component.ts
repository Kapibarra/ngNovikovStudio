import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-flow-item',
  templateUrl: './work-flow-item.component.html',
  styleUrls: ['./work-flow-item.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('250ms')),
    ]),

    trigger('rotatedState', [
      state(
        'default',
        style({
          transform: 'rotate(0)',
        })
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(45deg)',
        })
      ),
      transition('default<=>rotated', animate('250ms')),
    ]),
    // trigger('bgChange', [
    //   state(
    //     'initial',
    //     style({
    //       background: '#000000',
    //     })
    //   ),
    //   state(
    //     'final',
    //     style({
    //       background: '#fff',
    //     })
    //   ),
    //   transition('initial<=>final', animate('250ms')),
    // ]),
  ],
})
export class WorkFlowItemComponent implements OnInit {
  @Input() title: string = 'test title';
  @Input() number: string = '01';
  @Input() id!: number;
  showBody = false;
  ngOnInit() {
    // Автоматически раскрываем первый элемент (если id === 1 или при index === 0)
    if (this.id === 1) {
      this.showBody = true;
    }
  }

  toggleAccordion() {
    this.showBody = !this.showBody;

    console.log(event);
  }
}
