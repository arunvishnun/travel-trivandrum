import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from './typescripts/angular-bootstrap-md/free';
import { AgmCoreModule } from '@agm/core';


import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlacesToSeeComponent } from './places-to-see/places-to-see.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PlacesToStayComponent } from './places-to-stay/places-to-stay.component';
import { PlacesToEatOutComponent } from './places-to-eat-out/places-to-eat-out.component';
import { TourismGuidesComponent } from './tourism-guides/tourism-guides.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService } from './auth/auth.service';
// import { AUTH_PROVIDERS } from 'angular2-jwt';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'places-to-see', component: PlacesToSeeComponent },
  { path: 'places-to-stay', component: PlacesToStayComponent },
  { path: 'places-to-eat-out', component: PlacesToEatOutComponent },
  { path: 'tourism-guides', component: TourismGuidesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CarouselComponent,
    PlacesToSeeComponent,
    PageNotFoundComponent,
    PlacesToStayComponent,
    PlacesToEatOutComponent,
    TourismGuidesComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
