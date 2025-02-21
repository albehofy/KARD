import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../Services/images.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-tax-certificate',
  templateUrl: './tax-certificate.component.html',
  styleUrls: ['./tax-certificate.component.css']
})
export class TaxCertificateComponent implements OnInit {
  taxCertificate: any = [];

  constructor(
    private imagesServices: ImagesService,
    private isPagLoaded: IsPagesLoadedService
  ) {
    // Set the initial loading state to false
    this.isPagLoaded.isPageLoaded = false;
  }

  ngOnInit() {
    // Fetch tax certificate images
    this.fetchTaxCertificateImages();

    // Set a timeout to ensure the loader is displayed for at least 2 seconds
    window.setTimeout(() => {
      this.isPagLoaded.isPageLoaded = true;
    }, 2000);
  }

  private fetchTaxCertificateImages() {
    this.imagesServices.getImages('tax-certificate').subscribe({
      next: (data) => {
        console.log(data);
        this.taxCertificate = data;
        this.checkIfDataLoaded();
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.checkIfDataLoaded();
      }
    });
  }

  private checkIfDataLoaded() {
    // Check if the tax certificate images are loaded
    if (this.taxCertificate.length > 0) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}