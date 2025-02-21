import { Component, OnInit } from '@angular/core';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-payments-methods-and-terms',
  imports: [NewlinePipe],
  templateUrl: './payments-methods-and-terms.component.html',
  styleUrls: ['./payments-methods-and-terms.component.css']
})
export class PaymentsMethodsAndTermsComponent implements OnInit {
  TermsAndConditionsOfUse: string = '';
  privacy: string = '';
  copyright: string = '';
  brands: string = '';

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
    const paragraphs = [
      'TermsAndConditionsOfUse',
      'privacy',
      'copyright',
      'brands'
    ];

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
    if (
      this.TermsAndConditionsOfUse &&
      this.privacy &&
      this.copyright &&
      this.brands
    ) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}