import { Component, OnInit } from '@angular/core';
import { ErrorResponse } from 'src/app/shared/model/errorResponse.model';
import { LoginResponse } from 'src/app/shared/model/loginRespones.model';
import { HttpService } from '../../shared/services/http.service';
import { Router } from '@angular/router';
import { UsertokenService } from 'src/app/shared/services/usertoken.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginStatus: string;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private userTokenService: UsertokenService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {}

  performLogin() {
    this.httpService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        // console.log(response);

        if (response.status_code !== 200) {
          this.loginStatus = response.message;
        } else {
          const email = response.data.email;
          const token = response.data.access_token;
          // this.userTokenService.emitEmailTokenPair(email, token);
          // this.loginStatus = response.message;
          this.cookieService.set('email', email);
          this.cookieService.set('token', token);
          this.router.navigate(['profile']);
        }
        // console.log(response.data.email);
        // console.log(response.data.access_token);
      },
      (error: ErrorResponse) => {
        console.error('api failed:', error);

        alert(error.message);
      }
    );
  }
  forgetPassword() {
    this.router.navigate(['login/forget-password']);
  }
}
