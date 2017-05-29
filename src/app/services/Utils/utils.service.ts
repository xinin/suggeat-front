import {Injectable} from '@angular/core';

@Injectable()
export class UtilsService {

  b64Encode(s: string): string {
    return btoa(s);
  };

  b64Decode(s: string): string {
    return atob(s);
  };

  constructor() {
  }

}
