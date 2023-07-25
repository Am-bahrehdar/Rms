import { Component } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/services/user.service'; // Add this
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  gender: string;
  government_id_no: string;
  government_id_photo: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private userService: UserService
  ) {} // Add UserService to constructor

  onSignup() {
    this.httpService
      .signup(
        this.first_name,
        this.last_name,
        this.email,
        this.password,
        this.phone_number,
        this.address,
        this.gender,
        this.government_id_no,
        this.government_id_photo,
        this.city,
        this.state,
        this.country,
        this.postal_code
      )
      .subscribe(
        (response: User) => {
          console.log(response);

          // Create User object from response and set in UserService
          const user = new User(response);

          this.router.navigate(['opt']);
          // Redirect to dashboard or any route after successful login.
        },
        (error) => {
          // Handle the error response
          console.error('Signup failed:', error);

          // Display error message
          alert(error.message);
        }
      );
  }
}
