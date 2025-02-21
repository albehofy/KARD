import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../Services/images.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-e-commerce-authentication-certificate',
  templateUrl: './e-commerce-authentication-certificate.component.html',
  styleUrls: ['./e-commerce-authentication-certificate.component.css']
})
export class ECommerceAuthenticationCertificateComponent implements OnInit {
  eCommerceAuthentication: any = [];

  constructor(
    private imagesServices: ImagesService,
    private isPagLoaded: IsPagesLoadedService
  ) {
    // Set the initial loading state to false
    this.isPagLoaded.isPageLoaded = false;
  }

  ngOnInit() {
    // Fetch images for e-commerce authentication
    this.imagesServices.getImages('e-commerce-authentication').subscribe({
      next: (data) => {
        console.log(data);
        this.eCommerceAuthentication = data;
        // Check if data is loaded and set the loader state
        this.checkIfDataLoaded();
      },
      error: (error) => {
        console.error('There was an error!', error);
        // Ensure the loader is hidden even if there's an error
        this.isPagLoaded.isPageLoaded = true;
      }
    });

    // Set a timeout to ensure the loader is displayed for at least 2 seconds
    window.setTimeout(() => {
      this.isPagLoaded.isPageLoaded = true;
    }, 2000);
  }

  private checkIfDataLoaded() {
    // If data is loaded, set the loader state to true
    if (this.eCommerceAuthentication.length > 0) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}