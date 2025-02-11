import { Component } from '@angular/core';
import { ContactUsService } from '../../Services/contact-us.service';
import { SocialmediaService } from '../../Services/social-media.service';
import { AddTextService } from '../../Services/add-text.service';

@Component({
    selector: 'app-contact',
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    contact = {
        company_Name: '',
        unit: '',
        streat: '',
        city: '',
        country: '',
        work_hours: '',
        whatsapp: '', 
        CRN:''
    }
    constructor(private constactUs: ContactUsService, private addTextServices: AddTextService, private socialMedia: SocialmediaService) {
        this.constactUs.getContactUs().subscribe(
            {
                next: (data) => {
                    this.contact = data;
                    console.log(this.contact)
                },
                error: (error) => {
                    console.log(error)
                }
            }
        )

        this.socialMedia.getSocialMedia().subscribe(
            {
                next: (data) => {
                    this.contact.whatsapp = data.whatsapp;
                },
                error: (error) => {
                    console.log(error)
                }
            }
        )

        this.addTextServices.getParagraphs('CRN').subscribe({
            next: (data) => {
                console.log(data);
                this.contact.CRN = data[0].paragraph;
            },
            error: (error) => {
                console.error('There was an error!', error);
            }
        });

    }
}
