import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForgetOpt } from 'src/app/shared/model/forget-opt.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-forget-opt',
  templateUrl: './forget-opt.component.html',
  styleUrls: ['./forget-opt.component.css'],
})
export class ForgetOptComponent implements OnInit {
  email: string;

  confirm_password: string;
  password: string;
  otp: string;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params.email;
      console.log('Email:', this.email);
    });
  }

  resetForm() {}
  submitOtp() {
    this.httpService
      .forgetPasswordOtp(
        this.email,
        this.confirm_password,
        this.password,
        this.otp
      )
      .subscribe(
        (response: ForgetOpt) => {
          console.log(response);
          this.message = response.message;
        },
        (error) => {
          console.error('API failed:', error);
          alert(error.message);
        }
      );
  }
}
