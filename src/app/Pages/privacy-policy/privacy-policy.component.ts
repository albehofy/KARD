import { Component } from '@angular/core';
import { AddTextService } from '../../Services/add-text.service';
import { NewlinePipe } from '../../Pipes/newline.pipe';
@Component({
  selector: 'app-privacy-policy',
  imports: [NewlinePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  privacyPolicy: string = '';
  infoType: string = '';
  whyCollectInfo: string = '';
  cookies: string = '';
  security: string = '';

  constructor(private addTextServices: AddTextService) {
    this.addTextServices.getParagraphs('privacyPolicy').subscribe({
      next: (data) => {
        console.log(data);
        this.privacyPolicy = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });

    this.addTextServices.getParagraphs('infoType').subscribe({
      next: (data) => {
        console.log(data);
        this.infoType = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('whyCollectInfo').subscribe({
      next: (data) => {
        console.log(data);
        this.whyCollectInfo = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('cookies').subscribe({
      next: (data) => {
        console.log(data);
        this.cookies = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.addTextServices.getParagraphs('security').subscribe({
      next: (data) => {
        console.log(data);
        this.security = data[0].paragraph;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}
