import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

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
export class AppComponent implements AfterViewInit, OnInit {
  title = 'ngNovikovStudio';
  o: any;
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
      });
  }
  private timeoutId: any;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(): void {
    // document.body.style.transform = 'skew(2deg, 2deg)';
    // clearTimeout(this.timeoutId);
    // this.timeoutId = setTimeout(() => {
    //   document.body.style.transform = 'skew(0deg, 0deg)';
    // }, 150);
  }
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
