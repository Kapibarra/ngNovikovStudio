import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { LoaderComponent } from './main-page/shared/components/loader/loader.component';
import { HeaderComponent } from './main-page/shared/components/header/header.component';
import { HeroComponent } from './main-page/shared/components/hero/hero.component';
import { PrimaryButtonComponent } from './main-page/shared/components/primary-button/primary-button.component';
import { PrimaryButtonBigComponent } from './main-page/shared/components/primary-button-big/primary-button-big.component';
import { SwiperModule } from 'swiper/angular';
import { CounterComponent } from './main-page/shared/components/counter/counter.component';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { PortfolioComponent } from './main-page/shared/components/portfolio/portfolio.component';
import { ServicesComponent } from './main-page/shared/components/services/services.component';
import { MenuComponent } from './main-page/shared/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MarqueeComponent } from './main-page/shared/components/marquee/marquee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPageComponent } from './main-page/admin-page/admin-page.component';
import { MetrikaModule } from 'ng-yandex-metrika';
import { TeamComponent } from './main-page/shared/components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    PrimaryButtonComponent,
    PrimaryButtonBigComponent,
    CounterComponent,
    PortfolioComponent,
    ServicesComponent,
    MenuComponent,
    MarqueeComponent,
    AdminPageComponent,
    TeamComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgxAnimatedCounterModule,
    NgxTypedJsModule,
    MetrikaModule.forRoot(
      { id: 85678959, webvisor: true }, // CounterConfig | CounterConfig[]
      // Можно задать ид счетчика, либо порядковый номер в массиве, необязательный параметрб по умолчанию первый попавшийся.
      85678959 // number | string
    ),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
})
export class AppModule {}
