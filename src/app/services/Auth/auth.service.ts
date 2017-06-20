import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../class/user';
import {UtilsService} from '../Utils/utils.service';
import {ApiService} from '../Api/api.service';

@Injectable()
export class AuthService {



  constructor(private _router: Router, private Utils: UtilsService, private Api: ApiService) {
  }

  logout(redirect?: string): void {
    this.Utils.removeCookie('user');
    if (!redirect) {
      redirect = '';
    }
    this._router.navigate([redirect]);
  }

  login(user: User, redirect?: string): any {
    this.Api.request('/user/login', {user: user.serialize()}, {method: this.Api.POST}).then(
      res => {
        console.log('LOGIN', res);
        this.Utils.putCookie('user', 'userValue');
        if (!redirect) {
          redirect = 'profile';
        }
        this._router.navigate([redirect]);
      },
      err => {
        console.log(err);
        return err;
      }
    );
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
