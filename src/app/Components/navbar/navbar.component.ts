import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialmediaService } from '../../Services/social-media.service';
import { EmployingService } from '../../Services/employing-data.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('links_holder') linksHolder: ElementRef | undefined;
  socialMediaData:any;
  isJobsOpend = false;

  constructor(private socialMedia: SocialmediaService,private employingService: EmployingService){
    this.socialMedia.getSocialMedia().subscribe({
      next: (data) => {
        this.socialMediaData = data;
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.employingService.isTogglingJobs$.subscribe({
      next: (response) => {
        console.log(response);
          this.isJobsOpend = response;
      },
      error: (error) => {
          alert('حدث خطأ ما');
      }
  });
  }
  toggleMenu(element: HTMLElement) {
    element.classList.toggle('show');
    console.log(this.linksHolder?.nativeElement);
    this.linksHolder?.nativeElement.classList.toggle('show');
  }

  removeMenu(element: HTMLElement, linksHolder: HTMLElement) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
    }
    if (linksHolder.classList.contains('show')) {
      linksHolder.classList.remove('show');
    }
  }
}
