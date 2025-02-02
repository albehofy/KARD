import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Select, SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface SelectInterface {
    name: string;
    code: number;
}

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
    selector: 'app-jobs',
    imports: [CommonModule, ButtonModule, SelectModule, ToastModule, FileUploadModule, Breadcrumb, FloatLabelModule, InputNumberModule, InputTextModule, FormsModule, RouterLink],
    templateUrl: './jobs.component.html',
    styleUrl: './jobs.component.css',
    standalone: true,
    providers: [MessageService]
})
export class JobsComponent implements OnInit {
    items: MenuItem[] | undefined;
    name = {
        pattern: "^[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}",
        value: "",
        invalid: false,
        empty: false,
        errorMessage: "الرجاء إدخال الاسم باللغة العربية والتأكد من أنه يحتوي على اسم الاب واللقب او الجد"
    }
    gender: SelectInterface[] = [
        {
            name: "ذكر",
            code: 1
        },
        {
            name: "انثى",
            code: 2
        }
    ];
    cities: SelectInterface[] = [
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
    nationalities: SelectInterface[] = [
        { name: "سعودي", code: 1 },
        { name: "مصري", code: 2 },
        { name: "سوداني", code: 3 },
        { name: "يمني", code: 4 },
        { name: "أردني", code: 5 },
        { name: "سوري", code: 6 },
        { name: "لبناني", code: 7 },
        { name: "إماراتي", code: 8 },
        { name: "كويتي", code: 9 },
        { name: "قطري", code: 10 },
        { name: "بحريني", code: 11 },
        { name: "عماني", code: 12 },
        { name: "عراقي", code: 13 },
        { name: "فلسطيني", code: 14 },
        { name: "مغربي", code: 15 },
        { name: "جزائري", code: 16 },
        { name: "تونسي", code: 17 },
        { name: "ليبي", code: 18 },
        { name: "هندي", code: 19 },
        { name: "باكستاني", code: 20 },
        { name: "بنغلاديشي", code: 21 },
        { name: "تركي", code: 22 },
        { name: "أمريكي", code: 23 },
        { name: "بريطاني", code: 24 },
        { name: "فرنسي", code: 25 },
        { name: "ألماني", code: 26 }
    ];
    jobs: SelectInterface[] = [
        { name: "مندوب توصيل", code: 1 },
        { name: "قياس", code: 2 },
        { name: "مبيعات وخدمة عملاء", code: 3 }
    ]

    educations: SelectInterface[] = [
        { name: "ثانوية فأقل", code: 1 },
        { name: "دبلوم", code: 2 },
        { name: "بكالريوس", code: 3 },
        { name: "ماجستير", code: 4 },
        { name: "دكتوراة", code: 5 }
        
    ]
    experincesYears: SelectInterface[] = [
        { name: "أقل من سنة", code: 1 },
        { name: "من سنة الى سنتين", code: 2 },
        { name: "من 3 سنوات الى 5 سنوات", code: 3 },
        { name: "من 6 سنوات الى 10 سنوات", code: 4 },
        { name: "اكثر من 10 سنوات", code: 5 }
    ]
    selectedGender = this.gender[0];
    selectedCity = this.cities[0];
    selectedNationality = this.nationalities[0];
    selectedJob = this.jobs[0];
    selectedEducation = this.educations[0];
    selectedExperincesYears = this.experincesYears[0];
    age: any;

    phone = '';
    home: MenuItem | undefined;

    constructor(private messageService: MessageService) {
    }

    onBasicUploadAuto(event: UploadEvent | any) {
        this.messageService.add({ severity: 'info', summary: 'اكتمل التحميل', detail: 'تم تحميل الملف بنجاح' });
        console.log(event.files);
    }

    ngOnInit() {
        this.items = [
            { label: 'التوظيف', icon: 'pi pi-people', routerLink: '/jobs' },
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
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


}
