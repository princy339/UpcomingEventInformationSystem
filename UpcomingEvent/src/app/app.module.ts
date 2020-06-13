import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { CategoriesComponent } from './categories/categories.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { AuditionsComponent } from './auditions/auditions.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ExposComponent } from './expos/expos.component';
import { LaunchesComponent } from './launches/launches.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { VenueComponent } from './venue/venue.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';
import { Work1Component } from './work1/work1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebsiteComponent } from './website/website.component';
import { AddWorkshopComponent } from './add-workshop/add-workshop.component';
import { AllWorkShopComponent } from './all-work-shop/all-work-shop.component';
import { ContactQueryComponent } from './contact-query/contact-query.component';
import { InterestedComponent } from './interested/interested.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoredetailComponent } from './moredetail/moredetail.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopsComponent,
    CategoriesComponent,
    SeminarsComponent,
    AuditionsComponent,
    CompetitionsComponent,
    ExposComponent,
    LaunchesComponent,
    IntroComponent,
    AboutComponent,
    SchedulesComponent,
    SponsorsComponent,
    VenueComponent,
    SubscribeComponent,
    ContactComponent,
    Work1Component,
    LoginComponent,
    DashboardComponent,
    WebsiteComponent,
    AddWorkshopComponent,
    AllWorkShopComponent,
    ContactQueryComponent,
    InterestedComponent,
    SignUpComponent,
    MoredetailComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnlOo66_inDjmykJ8ZvailecQwDLxqDhU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
