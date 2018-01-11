import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';

export const router: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'contactUs', component: ContactUsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);