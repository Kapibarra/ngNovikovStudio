import { ServicesPageComponent } from './main-page/services-page/services-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './main-page/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'service', component: ServicesPageComponent },
  { path: 'landings', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
