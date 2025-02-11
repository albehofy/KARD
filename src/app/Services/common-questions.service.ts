import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommonQuestionsService {
  environment: string;
  constructor(private http: HttpClient) {
    this.environment = environment.API;
  }

  getCommonQuestions(): Observable<any> {
    return this.http.get(this.environment + 'api/Questions');
  }}
