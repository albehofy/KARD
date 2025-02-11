import { Component } from '@angular/core';
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
items: any = [];
  ngOnInit() {
    this.addTextService.getParagraphs('home_comment0').subscribe({
      next: data => {
        console.log(data);
        this.items[0] = data[0];
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
    this.addTextService.getParagraphs('home_comment1').subscribe({
      next: data => {
        console.log(data);
        this.items[1] = data[0];
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
    this.addTextService.getParagraphs('home_comment2').subscribe({
      next: data => {
        console.log(data);
        this.items[2] = data[0];
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  
}
