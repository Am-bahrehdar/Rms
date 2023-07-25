import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './public/home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './public/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './public/signup/signup.component';

import { OptComponent } from './public/signup/opt/opt.component';
import { ForgetPasswordComponent } from './public/login/forget-password/forget-password.component';
import { ForgetOptComponent } from './public/login/forget-password/forget-opt/forget-opt.component';
import { ProfileComponent } from './public/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    OptComponent,
    ForgetPasswordComponent,
    ForgetOptComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
