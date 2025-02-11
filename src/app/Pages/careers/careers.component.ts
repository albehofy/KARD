import { Component } from '@angular/core';
import { OrderComponent } from "../../Components/order/order.component";
import { AddTextService } from '../../Services/add-text.service';
// import { BackgoundPatternComponent } from "../../Components/backgound-pattern/backgound-pattern.component";

@Component({
    selector: 'app-careers',
    imports: [OrderComponent],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.css'
})
export class CareersComponent {
    worksDepartment: string = '';
    constructor(private addTextServices: AddTextService) { 
        this.addTextServices.getParagraphs('worksDepartment').subscribe({
          next: data => {
            console.log(data);
            this.worksDepartment = data[0].paragraph;
          },
          error: error => {
            console.error('There was an error!', error);
          }
        })

      }
}
