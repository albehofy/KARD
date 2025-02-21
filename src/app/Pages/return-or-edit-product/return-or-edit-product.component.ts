import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-return-or-edit-product',
  imports: [RouterLink, NewlinePipe],
  templateUrl: './return-or-edit-product.component.html',
  styleUrls: ['./return-or-edit-product.component.css']
})
export class ReturnOrEditProductComponent implements OnInit {
  delivered: string = '';
  canceled: string = '';

  constructor(
    private addTextServices: AddTextService,
    private isPagLoaded: IsPagesLoadedService
  ) {
    // Set the initial loading state to false
    this.isPagLoaded.isPageLoaded = false;
  }

  ngOnInit() {
    // Fetch all paragraphs
    this.fetchParagraphs();

    // Set a timeout to ensure the loader is displayed for at least 2 seconds
    window.setTimeout(() => {
      this.isPagLoaded.isPageLoaded = true;
    }, 2000);
  }

  private fetchParagraphs() {
    const paragraphs = ['delivered', 'canceled'];

    let loadedCount = 0;

    paragraphs.forEach((paragraph) => {
      this.addTextServices.getParagraphs(paragraph).subscribe({
        next: (data) => {
          (this as any)[paragraph] = data[0].paragraph;
          loadedCount++;
          if (loadedCount === paragraphs.length) {
            this.checkIfDataLoaded();
          }
        },
        error: (error) => {
          console.error(`Error fetching ${paragraph}:`, error);
          loadedCount++;
          if (loadedCount === paragraphs.length) {
            this.checkIfDataLoaded();
          }
        }
      });
    });
  }

  private checkIfDataLoaded() {
    // Check if all paragraphs are loaded
    if (this.delivered && this.canceled) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}