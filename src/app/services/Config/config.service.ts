import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  values: any = {
    description: 'This is a description',
    level1: {
      level2: 'This is level 2'
    }
  };

  constructor() {
  };
}
