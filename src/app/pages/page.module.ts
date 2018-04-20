import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './page-routing.module';
//import { PageNotFoundComponent } from './not-found.component';

@NgModule({
	declarations: [
		PagesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		PageRoutingModule
	]
})
export class PagesModule { }
export class Page {
	id: number;
	name: string;
}