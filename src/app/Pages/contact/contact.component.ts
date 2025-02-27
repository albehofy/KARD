import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../Services/contact-us.service';
import { SocialmediaService } from '../../Services/social-media.service';
import { AddTextService } from '../../Services/add-text.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact = {
        company_Name: '',
        unit: '',
        streat: '',
        city: '',
        country: '',
        work_hours: '',
        whatsapp: '',
        CRN: ''
    };

    constructor(
        private constactUs: ContactUsService,
        private addTextServices: AddTextService,
        private socialMedia: SocialmediaService,
        private isPagLoaded: IsPagesLoadedService
    ) {
        // Set the initial loading state to false
        this.isPagLoaded.isPageLoaded = false;
    }

    ngOnInit() {
        // Fetch contact information
        this.constactUs.getContactUs().subscribe({
            next: (data) => {
                this.contact = data;
                console.log(this.contact);
                this.checkIfDataLoaded();
            },
            error: (error) => {
                console.log(error);
                this.checkIfDataLoaded();
            }
        });

        // Fetch social media information
        let index = 0; 
        this.socialMedia.getSocialMedia().subscribe({
            next: (data) => {
                console.log(data);
                this.checkIfDataLoaded();
                if(data.whatsapp){
                    this.contact.whatsapp = data.whatsapp;
                }else {
                    this.socialMedia.getSocialMedia().subscribe({
                        next: (data) => {
                            console.log(data);
                            this.checkIfDataLoaded();
                            if(data.whatsapp){
                                this.contact.whatsapp = data.whatsapp;
                            }
                        }
                    })
                }
                console.log(this.contact.whatsapp);

            },
            error: (error) => {

                console.log(error);
                this.checkIfDataLoaded();
            }
        });

        // Fetch CRN information
        this.addTextServices.getParagraphs('CRN').subscribe({
            next: (data) => {
                console.log(data);
                this.contact.CRN = data[0].paragraph;
                this.checkIfDataLoaded();
            },
            error: (error) => {
                console.error('There was an error!', error);
                this.checkIfDataLoaded();
            }
        });

        // Set a timeout to ensure the loader is displayed for at least 2 seconds
        window.setTimeout(() => {
            this.isPagLoaded.isPageLoaded = true;
        }, 2000);
    }

    private checkIfDataLoaded() {
        // Check if all required data is loaded
        if (
            this.contact.company_Name &&
            this.contact.whatsapp &&
            this.contact.CRN
        ) {
            this.isPagLoaded.isPageLoaded = true;
        }
    }
}