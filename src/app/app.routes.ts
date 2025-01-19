import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { SocialMediaComponent } from './Pages/social-media/social-media.component';

export const routes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'home',component: HomeComponent, children: [
       {
        path: 'socialMedia', component: SocialMediaComponent
       }
    ]},
];
