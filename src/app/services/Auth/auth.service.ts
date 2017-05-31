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

  logout() {
    this.Utils.removeCookie('user');
    this._router.navigate(['login']);
  }

  login(user: User, redirect?: string) {
    const authenticatedUser: any = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      this.Utils.putCookie('user', 'userValue');
      if (!redirect) {
        redirect = 'profile';
      }
      this._router.navigate([redirect]);
      return true;
    }
    return false;

  }

  checkCredentials() {
    if (!this.Utils.getCookie('user')) {
      this._router.navigate(['login']);
    }
  }

}
