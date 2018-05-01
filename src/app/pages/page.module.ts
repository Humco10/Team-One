import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppletModule } from './applet/applet.module';
import { RandomModule } from './random/random.module';
import { LoginModule } from './login/login.module';
import { HistoryModule } from './history/history.module';

import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './page-routing.module';
//import { PageNotFoundComponent } from './not-found.component';

/**
 * All the compnents and modules a given page uses so that all these can
 * be bundled up in this single module to be imported and used elsewhere.
 */
@NgModule({
	declarations: [
		PagesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		PageRoutingModule,
		AppletModule,
		LoginModule,
		HistoryModule,
		RandomModule
	]
})
//All that is exported.
export class PagesModule { }
export class Page {
	id: number;
	name: string;
	imgPath: string;
}