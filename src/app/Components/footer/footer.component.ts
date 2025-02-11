import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddTextService } from '../../Services/add-text.service';
@Component({
    selector: 'app-footer',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    companyData = {
        CRN:'',
        TRN:'',
        ECC:''
    }
    
    constructor(private addTextServices: AddTextService ) {
        this.addTextServices.getParagraphs('CRN').subscribe({
            next: (data) => {
              console.log(data);
              this.companyData.CRN = data[0].paragraph;
            },
            error: (error) => {
              console.error('There was an error!', error);
            }
          });
          this.addTextServices.getParagraphs('TRN').subscribe({
            next: (data) => {
              console.log(data);
              this.companyData.TRN = data[0].paragraph;
            },
            error: (error) => {
              console.error('There was an error!', error);
            }
          });
          this.addTextServices.getParagraphs('ECC').subscribe({
            next: (data) => {
              console.log(data);
              this.companyData.ECC = data[0].paragraph;
            },
            error: (error) => {
              console.error('There was an error!', error);
            }
          });
    }

}
