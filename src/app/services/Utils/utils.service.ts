import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class UtilsService {

  constructor() {
  };

  b64Encode(s: string): string {
    return btoa(s);
  };

  b64Decode(s: string): string {
    return atob(s);
  };

  getCookie(s: string): string {
    return Cookie.get(s);
  }

  putCookie(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void {
    Cookie.set(name, value, expires, path, domain, secure);
  }

  removeCookie(s: string): void {
    Cookie.delete(s);
  }

}
