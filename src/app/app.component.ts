import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ConfigService } from 'app/services/Config/config.service';
import { UtilsService } from 'app/services/Utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ConfigService, UtilsService]
})
export class AppComponent implements OnInit {

  constructor(private Utils: UtilsService, private Config: ConfigService) {
  };

  ngOnInit(): void {
    this.doSomething();
  }

  doSomething(): void {
    console.log(this.Config.values);
    console.log(this.Utils.b64Encode(this.Config.values.description));
    console.log( this.Utils.b64Decode(this.Utils.b64Encode(this.Config.values.description)));
  }


}
