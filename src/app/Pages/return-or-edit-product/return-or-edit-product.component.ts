import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
@Component({
  selector: 'app-return-or-edit-product',
  imports: [RouterLink,NewlinePipe],
  templateUrl: './return-or-edit-product.component.html',
  styleUrl: './return-or-edit-product.component.css'
})
export class ReturnOrEditProductComponent {
  delivered:string = '';
  canceled:string = '';
  constructor(private addTextServices: AddTextService) {
    this.addTextServices.getParagraphs('delivered').subscribe({
      next: (data) => {
        console.log(data);
        this.delivered = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('canceled').subscribe({
      next: (data) => {
        console.log(data);
        this.canceled = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });

 
  }
}
