import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../services/Auth/auth.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.sass'],
  providers: [AuthService]
})
export class UserProfilePageComponent implements OnInit {

  constructor(private _service: AuthService) {
  }

  ngOnInit() {
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }

}
