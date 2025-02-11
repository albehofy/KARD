import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface Feedback {
  fullName: string;
  city: string;
  district: string;
  phoneNumber: string;
  requestType: string;
  complaintDescription: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = environment.API + 'api/Complaints'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(this.apiUrl, feedback);
  }
}