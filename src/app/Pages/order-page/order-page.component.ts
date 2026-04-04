import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel";
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
import { AutoScrollSliderComponent } from '../../Components/auto-scroll-slider/auto-scroll-slider.component';
import { OrderService } from '../../Services/add-order.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

interface Gender {
    name: string;
    code: number;
}

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-order-page',
    imports: [CommonModule, ButtonModule, SelectModule, ToastModule, FileUploadModule, FloatLabelModule, InputNumberModule, InputTextModule, FormsModule, AutoScrollSliderComponent],
    templateUrl: './order-page.component.html',
    styleUrls: ['./order-page.component.css'],
    providers: [MessageService]
})
export class OrderPageComponent implements OnInit {
    requestType: any;
    order: any = {
        order_Serv: "",
        client_City: "",
        client_Num: "",
        call_Answered: "",
        district: "",
        note: ''
    };

    types: { name: string, id: number }[] = []; // ✅ Fixed: Added Type & Initialization
    cites = [
        { name: "الرياض", id: 1 }
    ];

    items: MenuItem[] | undefined;
    city: any;

    name = {
        pattern: "^[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال الاسم باللغة العربية والتأكد من أنه يحتوي على اسم الاب واللقب او الجد"
    };

    comapny = {
        pattern: "^[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال اسم الشركة باللغة العربية"
    };

    notes = {
        pattern: "^[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال الملاحظات باللغة العربية"
    };

    gender: Gender[] = [
        { name: "ذكر", code: 1 },
        { name: "انثى", code: 2 }
    ];
    selectedGender = this.gender[0];

    age: any;
    phone = '';
    home: MenuItem | undefined;
    allOffers: any[] = [];

    constructor(
        private messageService: MessageService,
        private orderServices: OrderService,
        private isPagLoaded: IsPagesLoadedService
    ) {
        // Set the initial loading state to false
        this.isPagLoaded.isPageLoaded = false;
    }

    ngOnInit() {
        this.loadOffers();

        this.items = [
            { label: 'الشكاوى والاستفسارات', icon: 'pi pi-people', routerLink: '/feedback' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };

        if (this.cites.length > 0) {
            this.order.client_City = this.cites[0];
        }

        // Set a timeout to ensure the loader is displayed for at least 2 seconds
        window.setTimeout(() => {
            this.isPagLoaded.isPageLoaded = true;
        }, 2000);
    }

    loadOffers() {
        this.orderServices.getAllOffers().subscribe({
            next: (response) => {
                this.allOffers = response
                    .filter((element: any) => element.price !== null)
                    .map((element: any) => ({ name: element.title, id: element.id }));

                // ✅ Select the first available offer automatically
                if (this.allOffers.length > 0) {
                    this.order.order_Serv = this.allOffers[0];
                }

                console.log(this.allOffers);
                this.checkIfDataLoaded();
            },
            error: (error) => {
                console.error("Error fetching offers:", error);
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'فشل تحميل العروض' });
                this.checkIfDataLoaded();
            }
        });
    }

    onBasicUploadAuto(event: UploadEvent | any) {
        this.messageService.add({ severity: 'info', summary: 'اكتمل التحميل', detail: 'تم تحميل الملف بنجاح' });
        console.log(event.files);
    }

    checkValidation(item: any) {
        const reg = new RegExp(item.pattern);
        const inputValue = item.value.trim();

        if (!inputValue) {
            item.empty = true;
        } else if (reg.test(inputValue)) {
            item.invalid = false;
        } else {
            item.invalid = true;
        }
    }

    addRequest() {
        this.order.order_Serv = `${this.order.order_Serv}`;
        this.order.client_City = this.order.client_City.name;
console.log("Order Data:", this.order);
        this.orderServices.createOrder(this.order).subscribe({
            next: (data) => {
                console.log("Order Created:", data);
                this.messageService.add({ severity: 'success', summary: 'تم اضافة الطلب بنجاح', detail: 'تم اضافة الطلب بنجاح' });
            },
            error: (error) => {
                console.error("Error creating order:", error);
                this.messageService.add({ severity: 'error', summary: 'حدث خطأ', detail: 'فشل في إضافة الطلب' });
            }
        });
    }
    isPhoneInvalid: boolean = false;
    
    validatePhone(phone: string): void {
    this.isPhoneInvalid = phone ? !/^05\d{8}$/.test(phone) : false;
    }
    private checkIfDataLoaded() {
        // Check if the offers data is loaded
        if (this.allOffers.length > 0) {
            this.isPagLoaded.isPageLoaded = true;
        }
    }
}