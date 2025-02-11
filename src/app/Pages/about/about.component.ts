import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AddTextService } from '../../Services/add-text.service';

@Component({
    selector: 'app-about',
    imports: [ ButtonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
    whoIsUsAr: string = '';
    whoIsUsEn: string = '';
    prefInAr: string = '';
    prefInEn: string = '';
    vessionInAr: string = '';
    vessionInEn: string = '';
    messageInAr: string = '';
    messageInEn: string = '';
    qualityEn: string = '';
    qualityAr: string = '';
    customerInAr: string = '';
    customerInEn: string = '';
  
    constructor(private addTextServices: AddTextService) { 
      this.addTextServices.getParagraphs('whoIsUsAr').subscribe({
        next: data => {
          console.log(data);
          this.whoIsUsAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('whoIsUsEn').subscribe({
        next: data => {
          console.log(data);
          this.whoIsUsEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('prefInAr').subscribe({
        next: data => {
          console.log(data);
          this.prefInAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('prefInEn').subscribe({
        next: data => {
          console.log(data);
          this.prefInEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('vessionInAr').subscribe({
        next: data => {
          console.log(data);
          this.vessionInAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('vessionInEn').subscribe({
        next: data => {
          console.log(data);
          this.vessionInEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('messageInAr').subscribe({
        next: data => {
          console.log(data);
          this.messageInAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('messageInEn').subscribe({
        next: data => {
          console.log(data);
          this.messageInEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('qualityEn').subscribe({
        next: data => {
          console.log(data);
          this.qualityEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('qualityAr').subscribe({
        next: data => {
          console.log(data);
          this.qualityAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('customerInAr').subscribe({
        next: data => {
          console.log(data);
          this.customerInAr = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
      this.addTextServices.getParagraphs('customerInEn').subscribe({
        next: data => {
          console.log(data);
          this.customerInEn = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
    }
}
