import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private cookieService: CookieService) {
    this.cookieService.set('tesdt', 'cookieValue', {
      expires: new Date('2030-01-01'), // cookie expiration date
      sameSite: 'None', // sameSite attribute set to None
      secure: true, // secure attribute set to true
    });
  }

  ngOnInit() {}
}
