import { Component, OnInit } from '@angular/core';
import { OrderComponent } from "../../Components/order/order.component";
import { AddTextService } from '../../Services/add-text.service';
import { CarrersService } from '../../Services/carrers.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-careers',
  imports: [OrderComponent],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  worksDepartment: string = '';

  constructor(
    private addTextServices: AddTextService,
    private companyOrder: CarrersService,
    private isPagLoaded: IsPagesLoadedService
  ) {
    // Set the initial loading state to false
    this.isPagLoaded.isPageLoaded = false;
  }

  ngOnInit() {
    // Fetch the works department text
    this.addTextServices.getParagraphs('worksDepartment').subscribe({
      next: (data) => {
        console.log(data);
        this.worksDepartment = data[0].paragraph;
        this.checkIfDataLoaded();
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.checkIfDataLoaded();
      }
    });

    // Set a timeout to ensure the loader is displayed for at least 2 seconds
    window.setTimeout(() => {
      this.isPagLoaded.isPageLoaded = true;
    }, 2000);
  }

  private checkIfDataLoaded() {
    // Check if the works department text is loaded
    if (this.worksDepartment) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}