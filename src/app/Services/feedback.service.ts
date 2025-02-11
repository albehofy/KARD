import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private http: HttpClient) { }

  getImages(data: string): Observable<any> {
    return this.http.post(environment.API + 'api/', data);
  }}
