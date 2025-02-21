import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AddTextService } from '../../Services/add-text.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
    selector: 'app-about',
    imports: [ButtonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    [key: string]: any;
    whoIsUsAr: string = '';
    whoIsUsEn: string = '';
    prefInAr: string = '';
    prefInEn: string = '';
    vessionInAr: string = '';
    vessionInEn: string = '';
    messageInAr: string = '';
    messageInEn: string = '';
    qualityEn: string = '';
    qualityAr: string = '';
    customerInAr: string = '';
    customerInEn: string = '';

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
            'whoIsUsAr', 'whoIsUsEn', 'prefInAr', 'prefInEn', 'vessionInAr', 'vessionInEn',
            'messageInAr', 'messageInEn', 'qualityEn', 'qualityAr', 'customerInAr', 'customerInEn'
        ];

        let loadedCount = 0;

        paragraphs.forEach((paragraph) => {
            this.addTextServices.getParagraphs(paragraph).subscribe({
                next: (data) => {
                    this[paragraph] = data[0].paragraph;
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
            this.whoIsUsAr && this.whoIsUsEn && this.prefInAr && this.prefInEn &&
            this.vessionInAr && this.vessionInEn && this.messageInAr && this.messageInEn &&
            this.qualityEn && this.qualityAr && this.customerInAr && this.customerInEn
        ) {
            this.isPagLoaded.isPageLoaded = true;
        }
    }
}