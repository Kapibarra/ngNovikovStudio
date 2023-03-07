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

@NgModule({
  declarations: [AppComponent, MainPageComponent, LoaderComponent, HeaderComponent, HeroComponent, PrimaryButtonComponent, PrimaryButtonBigComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
