import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonQuestionsService } from '../../Services/common-questions.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';

@Component({
    selector: 'app-common-questions',
    imports: [AccordionModule, InputTextModule, InputIconModule, IconFieldModule, ButtonModule],
    templateUrl: './common-questions.component.html',
    styleUrls: ['./common-questions.component.css']
})
export class CommonQuestionsComponent implements OnInit {
    commonQuestions: any[] = [];
    questions: any[] = [];
    dt2: any;
    dt1: any;

    constructor(
        private commonQuestionsService: CommonQuestionsService,
        private isPagLoaded: IsPagesLoadedService
    ) {
        // Set the initial loading state to false
        this.isPagLoaded.isPageLoaded = false;
    }

    ngOnInit() {
        // Fetch common questions from the service
        this.commonQuestionsService.getCommonQuestions().subscribe({
            next: (data) => {
                this.commonQuestions = data;
                this.questions = this.commonQuestions; // Initially, display all questions
                this.checkIfDataLoaded();
            },
            error: (error) => {
                console.error('Error fetching common questions:', error);
                this.checkIfDataLoaded();
            }
        });

        // Set a timeout to ensure the loader is displayed for at least 2 seconds
        window.setTimeout(() => {
            this.isPagLoaded.isPageLoaded = true;
        }, 2000);
    }

    private checkIfDataLoaded() {
        // Check if the common questions data is loaded
        if (this.commonQuestions.length > 0) {
            this.isPagLoaded.isPageLoaded = true;
        }
    }

    clear(arg0: any) {
        throw new Error('Method not implemented.');
    }

    searchingofQuestion(value: string) {
        this.questions = this.commonQuestions.filter((val) =>
            val.header.toLowerCase().includes(value.toLowerCase()) ||
            val.content.toLowerCase().includes(value.toLowerCase())
        );
        console.log(this.questions);
    }
}