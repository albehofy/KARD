import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FeedbackService, Feedback } from '../../Services/feedback.service';
import { RippleModule } from 'primeng/ripple';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

interface Select {
    name: string;
    code: number;
}

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-feedback',
    imports: [CommonModule, ButtonModule, SelectModule, ToastModule, FileUploadModule, Breadcrumb, FloatLabelModule, InputNumberModule, InputTextModule, FormsModule, RouterLink, RippleModule],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.css',
    providers: [MessageService]
})
export class FeedbackComponent implements OnInit {
    items: MenuItem[] | undefined;
    name = {
        pattern: "^[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال الاسم باللغة العربية والتأكد من أنه يحتوي على اسم الاب واللقب او الجد"
    };
    district = {
        pattern: "^[\u0621-\u064A]{2,}\\s]",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال الاسم باللغة العربية والتأكد من أنه يحتوي على اسم الاب واللقب او الجد"
    };
    notes = {
        pattern: "^[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال اسم الشركة باللغة العربية"
    };
    gender: Select[] = [
        {
            name: "ذكر",
            code: 1
        },
        {
            name: "انثى",
            code: 2
        }
    ];
    cities: Select[] = [
        { name: "الرياض", code: 1 },
        { name: "الخرج", code: 2 },
        { name: "جدة", code: 3 },
        { name: "مكة المكرمة", code: 4 },
        { name: "المدينة المنورة", code: 5 },
        { name: "الدمام", code: 6 },
        { name: "الخبر", code: 7 },
        { name: "الاحساء", code: 8 },
        { name: "القطيف", code: 9 },
        { name: "الطائف", code: 10 },
        { name: "بريدة", code: 11 },
        { name: "عنيزة", code: 12 },
        { name: "حائل", code: 13 },
        { name: "تبوك", code: 14 },
        { name: "أبها", code: 15 },
        { name: "خميس مشيط", code: 16 },
        { name: "جازان", code: 17 },
        { name: "نجران", code: 18 },
        { name: "الباحة", code: 19 },
        { name: "سكاكا", code: 20 },
        { name: "عرعر", code: 21 }
    ];
    requestTypes: Select[] = [
        {
            name: "تعديل",
            code: 1
        },
        {
            name: "الاقتراحات والشكاوى",
            code: 2
        }
    ];
    selectedGender = this.gender[0];
    selectedCity = this.cities[0];
    selectedRequestType = this.requestTypes[0];
    age: any;
    phone = '';
    home: MenuItem | undefined;

    constructor(private messageService: MessageService, private feedbackService: FeedbackService, private isPagLoaded: IsPagesLoadedService) {
        // Set the initial loading state to false
        this.isPagLoaded.isPageLoaded = false;
    }

    ngOnInit() {
        // Simulate page loading
        this.items = [
            { label: 'الشكاوى والاستفسارات', icon: 'pi pi-people', routerLink: '/feedback' },
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };

        // Set a timeout to ensure the loader is displayed for at least 2 seconds
        window.setTimeout(() => {
            this.isPagLoaded.isPageLoaded = true;
        }, 2000);
    }

    onBasicUploadAuto(event: UploadEvent | any) {
        this.messageService.add({ severity: 'info', summary: 'اكتمل التحميل', detail: 'تم تحميل الملف بنجاح' });
        console.log(event.files);
    }

    checkValidation(item: any) {
        // The regex pattern for 3 Arabic words
        const reg = new RegExp(item.pattern);

        // Trim input to remove any unwanted spaces before and after
        const inputValue = item.value.trim();

        // Check if the value is empty
        if (inputValue === "" || inputValue === null) {
            item.empty = true;
        } else if (reg.test(inputValue)) {  // Check if it matches the regex
            item.invalid = false;
        } else {
            console.log(reg.test(inputValue));  // Log result of the regex test
            item.invalid = true;
        }
    }

    addFeedback() {
        const feedback: Feedback = {
            fullName: this.name.value,
            city: this.selectedCity.name,
            district: this.district.value, // You need to bind this to a form control
            phoneNumber: this.phone,
            requestType: this.selectedRequestType.name,
            complaintDescription: this.notes.value, // You need to bind this to a form control
            note: "Notes"
        };

        this.feedbackService.submitFeedback(feedback).subscribe({
            next: (response) => {
                this.show();
                alert('تم الارسال بنجاح');
                this.messageService.add({ severity: 'success', summary: 'تم الإرسال', detail: 'تم إرسال الشكوى بنجاح' });
            },
            error: (error) => {
                alert('فشل الارسال');
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'فشل إرسال الشكوى' });
            }
        });
    }

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}