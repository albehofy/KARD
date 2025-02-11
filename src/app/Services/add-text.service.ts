import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTextService {

  environment: string;
  constructor(private http: HttpClient) {
    this.environment = environment.API;
  }

  getParagraphs(target: string): Observable<any> {
    return this.http.get(environment.API + 'api/paragraph/GetParagraphsByTarget/' + target);
  }
}
