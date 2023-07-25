import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css'],
})
export class OptComponent implements OnInit {
  otp: string;
  otpStatus: boolean = false;
  user: User;
  test: string;

  constructor(
    private httpservice: HttpService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submitOtp() {}
  resetForm() {}
}
