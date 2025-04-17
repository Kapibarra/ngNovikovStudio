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
import { TeamComponent } from './main-page/shared/components/team/team.component';
import { ContactsComponent } from './main-page/shared/components/contacts/contacts.component';
import { FormComponent } from './main-page/shared/components/form/form.component';
import { PopUpComponent } from './main-page/shared/components/pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesPageComponent } from './main-page/services-page/services-page.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './main-page/shared/components/footer/footer.component';
import { ServiceTypesComponent } from './main-page/services-page/shared/components/service-types/service-types.component';
import { CursorComponent } from './main-page/shared/components/cursor/cursor.component';
import { DialogDirective } from './main-page/shared/directives/dialog.directive';
import { PhoneMaskDirective } from './main-page/shared/directives/phoneMask.directive';
import { ServiceHeroComponent } from './main-page/services-page/shared/components/service-hero/service-hero.component';
import { SmoothScrollService } from './main-page/shared/services/smoothScroll.service';
import { ServicesBannerComponent } from './main-page/services-page/shared/components/services-banner/services-banner.component';
import { InViewportDirective } from './main-page/shared/directives/viewport.directive';
import { VerticalSliderComponent } from './main-page/shared/components/vertical-slider/vertical-slider.component';
import { WorkFlowComponent } from './main-page/shared/components/work-flow/work-flow.component';
import { WorkFlowItemComponent } from './main-page/shared/components/work-flow/work-flow-item/work-flow-item.component';
import { PortfolioPageComponent } from './main-page/portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './main-page/contacts-page/contacts-page.component';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';
import { CorporativePageComponent } from './main-page/corporative-page/corporative-page.component';
import { ShopPageComponent } from './main-page/shop-page/shop-page.component';
import { AppsPageComponent } from './main-page/apps-page/apps-page.component';
import { CalculatorComponent } from './main-page/shared/components/calculator/calculator.component';
import { NumberFormatPipe } from './main-page/shared/pipes/number-format.pipe';
import { GallerySliderComponent } from './main-page/shared/components/gallery-slider/gallery-slider.component';
import { TimelineComponent } from './main-page/shared/components/timeline/timeline.component';
import { MessendgerComponent } from './main-page/shared/components/messendger/messendger.component';
import { SeoPageComponent } from './main-page/seo-page/seo-page.component';
import { WorkflowSeoComponent } from './main-page/seo-page/components/workflow/workflow.component';
import { PricingComponent } from './main-page/seo-page/components/pricing/pricing.component';

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
    ContactsComponent,
    FormComponent,
    PopUpComponent,
    ServicesPageComponent,
    FooterComponent,
    ServiceTypesComponent,
    CursorComponent,
    DialogDirective,
    PhoneMaskDirective,
    ServiceHeroComponent,
    ServicesBannerComponent,
    InViewportDirective,
    VerticalSliderComponent,
    WorkFlowComponent,
    WorkFlowItemComponent,
    PortfolioPageComponent,
    ContactsPageComponent,
    LandingPageComponent,
    CorporativePageComponent,
    ShopPageComponent,
    AppsPageComponent,
    CalculatorComponent,
    NumberFormatPipe,
    GallerySliderComponent,
    TimelineComponent,
    MessendgerComponent,
    SeoPageComponent,
    WorkflowSeoComponent,
    PricingComponent,
  ],
  providers: [
    CookieService,
    DialogDirective,
    SmoothScrollService,
    InViewportDirective,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    NgxAnimatedCounterModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
})
export class AppModule {}
