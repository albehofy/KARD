import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getImages(desc: string): Observable<any> {
    const params = { description: desc }; // Add description as a query parameter
    return this.http.get(environment.API + 'api/Images/getImages', { params: params });
  }

  getParagraphs(target: string): Observable<any> {
    return this.http.get(environment.API + 'api/paragraph/GetParagraphsByTarget/' + target);
  }
}
