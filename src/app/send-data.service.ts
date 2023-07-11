import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { info } from './interface/info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  info: info[] = [];
  postDetails!: Observable<any>; // Change the type to Observable<any>

  constructor(private http: HttpClient) { }

  addDetails(info: any) {

    console.log('**', info);

    this.postDetails = this.http.post('http://localhost:8080/storeDetails', info, {
      observe: 'response',
      responseType: 'text'
    });
    console.log(this.postDetails);
  }
}
