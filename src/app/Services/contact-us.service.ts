import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

const apiUrl: string = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private http: HttpClient) { 

  }



  getContactUs():Observable<any> {
    return this.http.get(apiUrl + 'api/ContactUs');
  }
}
