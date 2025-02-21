import { Component, OnInit } from '@angular/core';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [NewlinePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy: string = '';
  infoType: string = '';
  whyCollectInfo: string = '';
  cookies: string = '';
  security: string = '';

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
      'privacyPolicy',
      'infoType',
      'whyCollectInfo',
      'cookies',
      'security'
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
      this.privacyPolicy &&
      this.infoType &&
      this.whyCollectInfo &&
      this.cookies &&
      this.security
    ) {
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}