import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { }
    
  public getImages() {

    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    // .subscribe(res => this.myData = res);
    
  }

}
