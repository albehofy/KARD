import { Component, Input } from '@angular/core';
import { AddTextService } from '../../Services/add-text.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

constructor(private addTextService: AddTextService) { }
@Input()items: any = [];
whyToChooseCard:string = '';
  ngOnInit() {
    this.addTextService.getParagraphs('whyToChooseCard').subscribe({
      next: data => {
        console.log(data);
        this.whyToChooseCard = data[0].paragraph;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  
}
