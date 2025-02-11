import { Component } from '@angular/core';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
@Component({
  selector: 'app-payments-methods-and-terms',
  imports: [NewlinePipe],
  templateUrl: './payments-methods-and-terms.component.html',
  styleUrl: './payments-methods-and-terms.component.css'
})
export class PaymentsMethodsAndTermsComponent {
  TermsAndConditionsOfUse: string = '';
  privacy: string = '';
  copyright: string = '';
  brands: string = '';

  constructor(private addTextServices: AddTextService) {
    this.addTextServices.getParagraphs('TermsAndConditionsOfUse').subscribe({
      next: (data) => {
        console.log(data);
        this.TermsAndConditionsOfUse = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });

    this.addTextServices.getParagraphs('privacy').subscribe({
      next: (data) => {
        console.log(data);
        this.privacy = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('copyright').subscribe({
      next: (data) => {
        console.log(data);
        this.copyright = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('brands').subscribe({
      next: (data) => {
        console.log(data);
        this.brands = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
