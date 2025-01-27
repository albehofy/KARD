import { Component, OnInit } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
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
  imports: [CommonModule,ButtonModule,SelectModule,ToastModule,FileUploadModule, Breadcrumb, FloatLabelModule, InputNumberModule, InputTextModule, FormsModule, RouterLink],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  providers: [MessageService]

})
export class OrderComponent {
  items: MenuItem[] | undefined;
  name = {
      pattern: "^[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}\\s[\u0621-\u064A]{2,}",
      value: "",
      invalid: false,
      empty: false,
      errorMessage: "الرجاء إدخال الاسم باللغة العربية والتأكد من أنه يحتوي على اسم الاب واللقب او الجد"
  }
  comapny = {
      pattern: "^[\u0621-\u064A]{2,}",
      value: "",
      invalid: false,
      empty: false,
      errorMessage: "الرجاء إدخال اسم الشركة باللغة العربية"
  }
  notes = {
      pattern: "^[\u0621-\u064A]{2,}",
      value: "",
      invalid: false,
      empty: false,
      errorMessage: "الرجاء إدخال اسم الشركة باللغة العربية"
  }
  gender: Gender[] = [
      {
          name: "ذكر",
          code: 1
      },
      {
          name: "انثى",
          code: 2
      }
  ];
  selectedGender = this.gender[0];
  age:any;

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
          { label: 'الشكاوى والاستفسارات', icon: 'pi pi-people', routerLink: '/feedback' },
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
