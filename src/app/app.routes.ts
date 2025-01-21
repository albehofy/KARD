import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { SocialMediaComponent } from './Pages/social-media/social-media.component';

export const routes: Routes = [
    {path: 'login',component: LoginComponent},
    {path: '',component: HomeComponent,children: [
        {path: 'socialMedia', component: SocialMediaComponent},
    {path: 'contactUs', component: SocialMediaComponent},
    {path: 'whoIsUs', component: SocialMediaComponent},
    {path: 'jobs', component: SocialMediaComponent},
    {path: 'inquires', component: SocialMediaComponent},
    {path: 'commonQuestions', component: SocialMediaComponent},
    ]},
    
];
