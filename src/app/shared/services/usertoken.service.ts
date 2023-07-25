import { EventEmitter, Injectable } from '@angular/core';
import { UserToken } from '../model/user.model';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsertokenService {
  Token = new Subject<UserToken>();
  authToken: string;

  // Function to emit the email and token
  emitEmailTokenPair(email: string, token: string) {
    const emailTokenPair: UserToken = { email, token };
    this.Token.next(emailTokenPair);
  }
  getHeaders(authToken): HttpHeaders {
    if (authToken) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${authToken}`,
      });
    } else {
      return new HttpHeaders();
    }
  }
  setAuthToken(token: string) {
    this.authToken = token;
  }
}
