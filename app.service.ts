import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response  } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataService {
    constructor(private http: Http) {}
    getPosts() {
        return this.http.get('assets/data.json')
        .map(this.extractdata);
      }
      extractdata(res: Response) {
         const body = res.json();
         return body.data || {};
      }
}

