import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorResponse } from 'src/app/shared/model/errorResponse.model';
import { ForgetPassword } from 'src/app/shared/model/forgetPassword.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  constructor(private httpService: HttpService, private router: Router) {}

  model = { email: '' };
  errorMessage: string;

  onSubmit(form: NgForm) {
    console.log('Your email is: ', this.model.email);
    this.httpService.forgetPassword(this.model.email).subscribe(
      (response: ForgetPassword) => {
        console.log(response);
        if (response.status_code === 200) {
          // Redirect to the success page when the status code is 200
          this.router.navigate(['login/forget-password/opt'], {
            queryParams: { email: this.model.email },
          });
        } else {
          // Handle the case when the email is not found or the status code is not 200
          this.errorMessage = response.message;
        }
      },
      (error: ErrorResponse) => {
        console.error('API failed:', error);
        alert(error.message);
      }
    );
  }
}
