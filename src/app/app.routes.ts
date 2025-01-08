import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { JobsComponent } from './Pages/jobs/jobs.component';
import { FeedbackComponent } from './Pages/feedback/feedback.component';
import { CommonQuestionsComponent } from './Pages/common-questions/common-questions.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { QuestionComponent } from './Pages/question/question.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'commonQuestions/:id', component: QuestionComponent },
    { path: 'commonQuestions', component: CommonQuestionsComponent },
    { path: '**', component: PageNotFoundComponent }
];
