import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // this is tu use ngModule
import { HttpModule } from '@angular/http';


import { routes } from './app.router';
import { AppComponent }  from './app.component';
import { AboutComponent } from './components/about/about.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  imports:      [ BrowserModule, routes, FormsModule, HttpModule ],
  declarations: [ 
                  AppComponent, 
                  NavbarComponent, 
                  AboutComponent, 
                  ContactUsComponent, 
                  SearchComponent ,
                  ArtistComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
