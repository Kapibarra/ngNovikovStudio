import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // define the animation named `@pageTransition`
    trigger('pageTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'ngNovikovStudio';
  o: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/service') {
        window.scrollTo(0, 0);
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/') {
        window.scrollTo(0, 0);
      }
    });
  }
}
