import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/page.module';


//import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * The modules and components that this app is going to include or use. Basically 
 * all this module does it compiles them all into one module so only this module
 * has to be imported to use all the other modules and components
 */
@NgModule({
  declarations: [
    AppComponent,
    //PagesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//What is exported by this module (This module itself, and what a page object is)
export class AppModule { }
export class Page {
  id: number;
  name: string;
  imgPath: string;
}