import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  environment = environment.API;


  constructor(private http: HttpClient) {}

  createOrder(orderData: OrderRequest): Observable<any> {
    return this.http.post<any>(this.environment + 'api/Order' , orderData);
  }
}

export interface OrderRequest {
  order_Serv: string;
  client_City: string;
  client_Num: string;
  call_Answered?: string | null;
  note?: string;
}