import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SchedulesComponent } from './schedules/schedules.component';
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
import { AuthGuard } from './auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoredetailComponent } from './moredetail/moredetail.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [

    {path:'',component:WebsiteComponent, children:[
    {path:'',component:IntroComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignUpComponent},
    {path:'about',component:AboutComponent},
    {path:'schedules/:type',component:SchedulesComponent},
    {path:'venue',component:VenueComponent},
    {path:'work1',component:Work1Component},
    {path:'categories',component:CategoriesComponent},
    {path:'subscribe',component:SubscribeComponent},
    {path:'contact',component:ContactComponent},
  ]},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'addWorkshop',component:AddWorkshopComponent},
    {path:'listworkshop',component:AllWorkShopComponent},
    {path:'moredetail',component:MoredetailComponent},
    {path:'detail',component:DetailComponent},
    {path:'interested',component:InterestedComponent},
    {path:'listContact',component:ContactQueryComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
