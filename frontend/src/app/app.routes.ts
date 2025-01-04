import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]

    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
