import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmailFormComponent } from './email-form/email-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: '', component: EmailFormComponent },
    { path: 'home', component: HomepageComponent },
];
