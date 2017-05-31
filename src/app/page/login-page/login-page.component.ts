import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/Auth/auth.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {

  public user = new User('', '');
  public errorMsg = '';

  constructor(private Auth: AuthService) {
  }

  ngOnInit() {
    this.Auth.checkCredentials();
  }

  login() {
    if (!this.Auth.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }

}
