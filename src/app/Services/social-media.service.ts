import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {
 environment: string;
  constructor(private http: HttpClient) {
    this.environment = environment.API;
  }

  getSocialMedia(): Observable<any> {
    return this.http.get(this.environment + 'api/SocialMedia');
  }
}
