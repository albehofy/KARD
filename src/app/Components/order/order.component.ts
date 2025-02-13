import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { OrderService } from '../../Services/add-order.service';
import { CarrersService } from '../../Services/carrers.service';

interface Gender {
    name: string;
    code: number;
}

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
    selector: 'app-order',
    imports: [CommonModule, ButtonModule, SelectModule, ToastModule, FileUploadModule, FloatLabelModule, InputNumberModule, InputTextModule, FormsModule],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    providers: [MessageService]

})
export class OrderComponent {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;
    allOffers: any[] = [];
        name: string = '';
        companyName: string = '';
        mobileNumber: string = '';
        note: string = '';
    constructor(private messageService: MessageService, private order: OrderService, private carrersService: CarrersService) {
        this.order.getAllOffers().subscribe({
            next: (response) => {
                response.forEach((element: any) => {
                    if (element.price != null) {
                        this.allOffers.push(element);
                    }
                });
                console.log(this.allOffers);
            },
            error: (error) => {
            }
        });
    }
    onBasicUploadAuto(event: UploadEvent | any) {
        this.messageService.add({ severity: 'info', summary: 'اكتمل التحميل', detail: 'تم تحميل الملف بنجاح' });
        console.log(event.files);
    }

    ngOnInit() {
        this.items = [
            { label: 'الشكاوى والاستفسارات', icon: 'pi pi-people', routerLink: '/feedback' },
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    addOrder() {
        this.carrersService.createOrder({
          name:this.name,
          Company_name:this.companyName, 
          mobileNumber: this.mobileNumber,
          note: this.note
        }).subscribe({
          next: data => {
            console.log(data);
            alert('تم الارسال بنجاح');
          },
          error: error => {
            console.error('There was an error!', error);
          }
        })  
      }

}
