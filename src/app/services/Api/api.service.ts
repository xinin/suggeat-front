import {Injectable} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Http} from '@angular/http';
import {ConfigService} from '../Config/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http, private config: ConfigService) {
  }

  public request(uri: string, data?: any, options?: any): Promise<any> {
    uri = this.config.values.api.url + uri;
    if (!options || options.method === 'GET') {
      return this.get(uri, options || {});
    } else if (options.method === 'POST') {
      return this.post(uri, data, options);
    } else {
      console.log(options.method + ' no implementado'); // TODO hacer los demas metodos
    }
  }

  private get(uri: string, options: any): Promise<any> {
    return this.http.get(uri, options).toPromise()
      .catch(this.handleErrorPromise);
  }

  private post(uri: string, data: any, options: any): Promise<any> {
    return this.http.post(uri, data, options).toPromise()
      .catch(this.handleErrorPromise);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
