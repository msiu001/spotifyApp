import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { routes } from './app.router';
import { AppComponent }  from './app.component';
import { AboutComponent } from './components/about/about.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';


@NgModule({
  imports:      [ BrowserModule, routes ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, ContactUsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
