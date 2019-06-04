import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';//

import {UserService} from './user.service';
import {DataService} from './data.service';
import { from } from 'rxjs';
import { AuthguardGuard } from './authguard.guard';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';

//starts
const appRoutes:Routes = [
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
]
//ends

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), //
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
