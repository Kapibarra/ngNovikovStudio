import { ServicesPageComponent } from './main-page/services-page/services-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';
import { CorporativePageComponent } from './main-page/corporative-page/corporative-page.component';
import { SeoPageComponent } from './main-page/seo-page/seo-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'service', component: ServicesPageComponent },
  {
    path: 'landings',
    component: LandingPageComponent,
    data: { title: 'Разработка лендингов' },
  },
  {
    path: 'corporative-websites',
    component: CorporativePageComponent,
    data: { title: 'Разработка корпоративных сайтов' },
  },
  {
    path: 'seo-prodvijenie',
    component: SeoPageComponent,
    data: { title: 'SEO - продвижение вашего сайта' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
