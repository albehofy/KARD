import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { LoaderComponent } from './Pages/loader/loader.component';
import { EmployingService } from './Services/employing-data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IsPagesLoadedService } from './Services/is-pages-loaded.service';
import { CommonModule } from '@angular/common';
import { MenuTogglerService } from './Services/menu-toggler.service';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    title = 'kard';
    isloaded = false;
    constructor(private employeeService: EmployingService,private isPageLoaded: IsPagesLoadedService, private menuToggler: MenuTogglerService) {
        // window.setTimeout(() => {
        //     this.isloaded = true;
        // }, 1500);
    }

    removeMenu() {
        this.menuToggler.isMenuOpen.next(true);
    }
    ngOnInit(): void {
        this.employeeService.togglingJops().subscribe({
            next: (response) => {
                this.employeeService.isTogglingJobs$.next(response);
            },
            error: (error) => {
                alert('حدث خطأ ما');
            }
        }); 

        this.isPageLoaded.isPageLoaded.subscribe({
            next: (response) => {
                this.isloaded = response;
            }
        })

    }

}
