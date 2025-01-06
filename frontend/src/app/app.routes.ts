import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TableComponent } from './components/partials/table/table.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { IncidentsTableComponent } from './components/partials/incidents-table/incidents-table.component';

export const routes: Routes = [
    
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard],
        children: [
            {
                path: 'table',
                component: TableComponent,
            },
            {
                path: 'incidents',
                component: IncidentsTableComponent,
            },
            {
                path: '',
                component: IncidentsTableComponent,
            },
        ]

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
