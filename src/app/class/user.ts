import {UtilsService} from './../services/Utils/utils.service';

export class User {
  constructor(public email: string,
              public password: string) {

  }

  public serialize(): string {
    const Utils = new UtilsService();
    return Utils.b64Encode(JSON.stringify({email: this.email, password: this.password}));
  }

}
