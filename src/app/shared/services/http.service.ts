import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserToken } from '../model/user.model';
import { UsertokenService } from './usertoken.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private usertoken: UsertokenService) {}
  // api urls
  endpoint = environment.apiUrl;
  endpointSignup = environment.apiSignUp;
  endPointForgetPassword = environment.apiForgetPasswordOpt;
  endPointForgetPasswordOtp = environment.apiForgetPassword;
  endpointGetProfile = environment.apiProfile;
  endPointLogout = environment.apiLogout;
  // login api
  login(email: string, password: string): Observable<any> {
    const url = this.endpoint; // Replace with your actual API URL
    const body = { email, password };

    return this.http.post(url, body);
  }
  // logout api
  logout(AuthorizationToken?: string) {
    const url = this.endPointLogout;
    // const headers = new HttpHeaders()
    //   .set('Content-Type', 'application/json')
    //   .set('Authorization', `Token ${AuthorizationToken}`);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token  ${AuthorizationToken}`,
    };
    return this.http.post(url, { headers: headers });
  }
  // Profile show api
  getProfile(email: string, AuthorizationToken: string) {
    const url = this.endpointGetProfile;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Token ${AuthorizationToken}`);
    const params = new HttpParams().set('email', email);

    return this.http.get(url, { headers: headers, params: params });
  }

  // forget password api

  forgetPassword(email: string): Observable<any> {
    const url = this.endPointForgetPassword; // Replace with your actual API URL
    const body = { email };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(url, body, { headers });
  }
  // // forget password otp api
  forgetPasswordOtp(
    email: string,
    otp: string,
    confirm_password: string,
    password: string
  ): Observable<any> {
    const url = this.endPointForgetPasswordOtp; // Replace with your actual API URL
    const body = { email, otp, confirm_password, password };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(url, body, { headers });
  }
  // signup api
  signup(
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone_number: string,
    address: string,
    gender: string,
    government_id_no: string,
    government_id_photo: string,
    city: string,
    state: string,
    country: string,
    postal_code: string
  ) {
    const url = this.endpointSignup;
    const body = {
      first_name,
      last_name,
      email,
      password,
      phone_number,
      address,
      gender,
      government_id_no,
      government_id_photo,
      city,
      state,
      country,
      postal_code,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.post(url, body, { headers });
  }
}

// const headers = {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//   'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
// };
