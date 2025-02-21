import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomeService } from '../../Services/home.service';

@Component({
  selector: 'app-home-adds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-adds.component.html',
  styleUrl: './home-adds.component.css'
})
export class HomeAddsComponent {
  isVideoOpened = false;
  @Input() logos: any;
  videoUrl: SafeResourceUrl = '';

  videoLink= ''
  constructor(private sanitizer: DomSanitizer, private homeService: HomeService) { 
    this.fetchVideoUrl();
  } 

  openVideo() {
    console.log('Video opened');
    this.isVideoOpened = true;
  }

  closeVideo() {
    console.log('Video closed');
    this.isVideoOpened = false;
  }

  private fetchVideoUrl() {
    this.homeService.getParagraphs('video_link').subscribe({
      next: data => {
        const unsafeUrl = data[0].paragraph; // Get the unsafe URL
        this.videoLink = data[0].paragraph; // Get the unsafe URL
        this.videoUrl = this.sanitizeUrl(unsafeUrl); // Sanitize it
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
