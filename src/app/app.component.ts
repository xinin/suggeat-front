import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {ConfigService} from 'app/services/Config/config.service';
import {UtilsService} from 'app/services/Utils/utils.service';
import {ApiService} from "./services/Api/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

  constructor(private Utils: UtilsService, private Config: ConfigService, private Api: ApiService) {
  };

  ngOnInit(): void {
    this.doSomething();
  }

  doSomething(): void {
    console.log(this.Config.values);
    console.log(this.Utils.b64Encode(this.Config.values.description));
    console.log(this.Utils.b64Decode(this.Utils.b64Encode(this.Config.values.description)));

    this.Api.request('/user/prueba').then(
      res => {
        console.log('GET', res);
      },
      err => {
        console.log(err);
      }
    );

    this.Api.request('/user/prueba', {test: 'value'}, {method: this.Api.POST}).then(
      res => {
        console.log('POST', res);
      },
      err => {
        console.log(err);
      }
    );

    // this.Api.request('/user/prueba', {test: 'value' }, {method: 'PUT'}).then(
    //  res => {
    //    const data = res.json().data;
    //    console.log(data);
    //  },
    //  err => {
    //    console.log(err);
    //  }
    // );

  }

}
