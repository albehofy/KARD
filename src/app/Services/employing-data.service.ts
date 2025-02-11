import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
export interface EmployingData {
  FullName: string;
  Age: number;
  Gender: boolean;
  PhoneNumber: string;
  City: string;
  Nationality: string;
  JobTitle: string;
  EducationLevel: string;
  ExperienceYears: number;
  CvFile: File;
  Note: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployingService {
  private apiUrl = `${environment.API}api/Employing`;

  constructor(private http: HttpClient) {}

  // Method to submit employing data
  submitEmployingData(data: EmployingData): Observable<any> {
    const formData = new FormData();

    // Append all fields to FormData
    formData.append('FullName', data.FullName);
    formData.append('Age', data.Age.toString());
    formData.append('Gender', data.Gender.toString());
    formData.append('PhoneNumber', data.PhoneNumber);
    formData.append('City', data.City);
    formData.append('Nationality', data.Nationality);
    formData.append('JobTitle', data.JobTitle);
    formData.append('EducationLevel', data.EducationLevel);
    formData.append('ExperienceYears', data.ExperienceYears.toString());
    formData.append('CvFile', data.CvFile);
    formData.append('Note', 'Note');

    // Set headers if needed (e.g., for authentication)
    const headers = new HttpHeaders();

    return this.http.post(this.apiUrl, formData, { headers });
  }
}