import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/Auth/auth.service';
import {UtilsService} from '../../services/Utils/utils.service';
import {ApiService} from '../../services/Api/api.service';

import {User} from '../../class/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {

  public user = new User('', '');
  public errorMsg = '';

  constructor(private Auth: AuthService, private Api: ApiService, private Utils: UtilsService) {
  }

  ngOnInit() {
    // this.Auth.checkCredentials();
  }

  login() {
    if (this.user && this.user.password && this.user.email) {
      this.errorMsg = this.Auth.login(this.user);
    } else {
      this.errorMsg = 'Write an email and password';
    }
  }

}
