import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User;

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
