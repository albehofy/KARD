import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('links_holder') linksHolder: ElementRef | undefined;

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
