import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorResponse } from 'src/app/shared/model/errorResponse.model';
import { ProfileResponse } from 'src/app/shared/model/profileResponse.model';
import { UserToken } from 'src/app/shared/model/user.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { UsertokenService } from 'src/app/shared/services/usertoken.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from 'src/app/shared/model/loginRespones.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  usertoken: UserToken;
  email: string;
  authorizationToken: string;
  profile: ProfileResponse;
  phone_number: number;
  address: string;
  gender: string;
  postal_code: string;
  government_id_no: string;
  city: string;
  state: string;
  country: string;
  birth_date: string;
  user_email: string;
  user_first_name: string;
  user_last_name: string;
  government_id_photo: string;
  profile_image: string;

  constructor(
    private UsertokenService: UsertokenService,
    private httpservice: HttpService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.email = this.cookieService.get('email');
    this.authorizationToken = this.cookieService.get('token');
    console.log(this.email);
    console.log(this.authorizationToken);

    this.httpservice.getProfile(this.email, this.authorizationToken).subscribe(
      (response: ProfileResponse) => {
        this.profile = response;
        this.phone_number = response.data.phone_number;
        this.address = response.data.address;
        this.gender = response.data.gender;
        this.postal_code = response.data.postal_code;
        this.government_id_no = response.data.government_id_no;
        this.city = response.data.city;
        this.state = response.data.state;
        this.country = response.data.country;
        this.birth_date = response.data.birth_date;
        this.user_email = response.data.user_email;
        this.user_first_name = response.data.user_first_name;
        this.user_last_name = response.data.user_last_name;

        console.log(this.profile);
      },
      (error: ErrorResponse) => {
        console.log(error);
      }
    );
  }
  logoutuser() {
    this.authorizationToken = this.cookieService.get('token');
    console.log(this.authorizationToken); // Check if the token is correctly fetched from the cookie

    // Pass the AuthorizationToken to the logout function
    this.httpservice.logout(this.authorizationToken).subscribe(
      (response: LoginResponse) => {
        if (response.status_code == 200) {
          console.log(response);
          this.router.navigate(['login']);
        }
      },
      (error: ErrorResponse) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    this.cookieService.deleteAll();
  }
}
