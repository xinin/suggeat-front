import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../class/user';
import {UtilsService} from '../Utils/utils.service';


@Injectable()
export class AuthService {

  users: User[] = [
    new User('diego.prieto@beeva.com', '123'),
    new User('user1@gmail.com', 'a23')
  ];

  constructor(private _router: Router, private Utils: UtilsService) {
  }

  logout(redirect?: string): void {
    this.Utils.removeCookie('user');
    if (!redirect) {
      redirect = '';
    }
    this._router.navigate([redirect]);
  }

  login(user: User, redirect?: string): void {
    const authenticatedUser: any = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      this.Utils.putCookie('user', 'userValue');
      if (!redirect) {
        redirect = 'profile';
      }
      this._router.navigate([redirect]);
    }
  }

  checkCredentials(): void {
    if (!this.Utils.getCookie('user')) {
      this._router.navigate(['login']);
    }
  }

  isAuth(): boolean {
    if (this.Utils.getCookie('user')) {
      return true;
    } else {
      return false;
    }
  }

}
