import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialmediaService } from '../../Services/social-media.service';
import { EmployingService } from '../../Services/employing-data.service';
import { MenuTogglerService } from '../../Services/menu-toggler.service';
import { ImagesService } from '../../Services/images.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('links_holder') linksHolder: ElementRef | undefined;
  @ViewChild('menu_toggler') menu_toggler: ElementRef | undefined;
  socialMediaData:any;
  isJobsOpend = false;

  homeLogoImage: string = '';
  
  constructor(private socialMedia: SocialmediaService,private employingService: EmployingService, private menuToggler: MenuTogglerService, private imagesService: ImagesService){
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

  ngOnInit(): void {
    this.imagesService.getImages('Home Logo Image').subscribe({
      next: data => {
        console.log(data)
        this.homeLogoImage = data[0].photo; // Log the data to the console
        console.log(this.homeLogoImage)
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
    this.menuToggler.isMenuOpen.subscribe({
      next: (response) => {
        if (response) {
          this.removeMenu(this.menu_toggler?.nativeElement, this.linksHolder?.nativeElement);
        }
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
