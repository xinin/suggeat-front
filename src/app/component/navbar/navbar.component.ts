import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {

  isIn: boolean;

  constructor(private Auth: AuthService) {
    this.isIn = false;
  }

  ngOnInit() {
  }

  toggleState() {
    this.isIn = !this.isIn;
  }

}
