import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss'],
})
export class WorkFlowComponent {
  activeIndex: number | null = null;
  @Output() id: number | undefined;
  @Output() number: string | undefined;
  toggleStep(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
