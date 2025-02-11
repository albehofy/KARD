import { Component } from '@angular/core';
import { ImagesService } from '../../Services/images.service';

@Component({
  selector: 'app-tax-certificate',
  imports: [],
  templateUrl: './tax-certificate.component.html',
  styleUrl: './tax-certificate.component.css'
})
export class TaxCertificateComponent {
  taxCertificate:any = []
  constructor(private imagesServices: ImagesService) {
    this.imagesServices.getImages('tax-certificate').subscribe({
      next: (data) => {
        console.log(data)
        this.taxCertificate = data; // Log the data to the console
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    // this.imagesServices.getImages('e-commerce-authentication').subscribe({
    //   next: (data) => {
    //     this.eCommerceAuthentication = data; // Log the data to the console
    //   },
    //   error: (error) => {
    //     console.error('There was an error!', error);
    //   }
    // });
   }
}
