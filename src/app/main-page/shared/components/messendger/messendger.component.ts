import { Component } from '@angular/core';

@Component({
  selector: 'app-messendger',
  templateUrl: './messendger.component.html',
  styleUrls: ['./messendger.component.scss'],
})
export class MessendgerComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
