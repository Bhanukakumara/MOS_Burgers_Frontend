import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerAddComponent } from './modules/customer-management/customer-add/customer-add.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'admin',component: DashboardComponent},
    {path: 'add-new',component: CustomerAddComponent}
];
