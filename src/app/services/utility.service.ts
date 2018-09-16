import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getApiEndPoint(path: string): string {
    if (!path) {
      throw Error(`${path} is not a valid api path`);
    }
    const api = environment.api;
    if (api.port) {
      return `${api.scheme}://${api.host}:${api.port + api.basePath + path}`;
    }
    return `${api.scheme}://${api.host + api.basePath + path}`;
  }
}
