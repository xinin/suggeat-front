import {Injectable} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {Http} from '@angular/http';
import {ConfigService} from '../Config/config.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  public GET: any = RequestMethod.Get;
  public POST: any = RequestMethod.Post;
  public DELETE: any = RequestMethod.Delete;
  public PATCH: any = RequestMethod.Patch;

  constructor(private http: Http, private config: ConfigService) {
  }

  public request(uri: string, data?: any, options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log('Request', uri, data, options);

      uri = this.config.values.api.url + uri;
      if (!options) {
        options = {};
      }
      if (!options.headers) {
        options.headers = {};
      }

      options.headers = {'Content-Type': 'application/json', 'from': 'aaa'};
      // const headers = new Headers({'Content-Type': 'application/json'});
      // console.log(headers);

      options = new RequestOptions(options);
      // options.headers = headers;

      console.log(options);

      if (!options || !options.method || options.method === this.GET) {
        options.method = this.GET;
        this.get(uri, options).then(
          res => {
            resolve(this.parse(res));
          }, err => {
            reject(this.parse(err));
          }
        );
      } else if (options.method === this.POST) {
        this.post(uri, data, options).then(
          res => {
            resolve(this.parse(res));
          }, err => {
            reject(this.parse(err));
          }
        );
      } else {
        console.log(options);
        console.log(options.method + ' no implementado'); // TODO hacer los demas metodos
      }
    });
  }

  private parse(res: any): any {
    console.log('RES', res.json().data);
    return res.json().data;
  }

  private get(uri: string, options: any): Promise<any> {
    console.log(options);
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
