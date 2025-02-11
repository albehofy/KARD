import { Component } from '@angular/core';
import { ImagesService } from '../../Services/images.service';

@Component({
  selector: 'app-e-commerce-authentication-certificate',
  imports: [],
  templateUrl: './e-commerce-authentication-certificate.component.html',
  styleUrl: './e-commerce-authentication-certificate.component.css'
})
export class ECommerceAuthenticationCertificateComponent {
  eCommerceAuthentication:any = []
  constructor(private imagesServices: ImagesService) {
    this.imagesServices.getImages('e-commerce-authentication').subscribe({
      next: (data) => {
        console.log(data)
        this.eCommerceAuthentication = data; // Log the data to the console
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
