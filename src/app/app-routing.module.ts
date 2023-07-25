import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';

import { AppComponent } from './app.component';
import { OptComponent } from './public/signup/opt/opt.component';
import { ForgetPasswordComponent } from './public/login/forget-password/forget-password.component';
import { ForgetOptComponent } from './public/login/forget-password/forget-opt/forget-opt.component';
import { ProfileComponent } from './public/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'opt', component: OptComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login/forget-password/opt', component: ForgetOptComponent },
  { path: 'login/forget-password', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
