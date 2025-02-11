import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  environment: string;
  constructor(private http: HttpClient,) {
    this.environment = environment.API;
  }


  getImages(desc: string): Observable<any> {
    const params = { description: desc }; // Add description as a query parameter
    return this.http.get(environment.API + 'api/Images/getImages', { params: params});
  }

}