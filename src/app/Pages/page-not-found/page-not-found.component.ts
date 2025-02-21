import { Component } from '@angular/core';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
    selector: 'app-page-not-found',
    imports: [],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
    constructor(private isPagLoaded: IsPagesLoadedService){
        window.setTimeout(() => { 
            this.isPagLoaded.isPageLoaded = true;
        }, 3000);
    }
}
