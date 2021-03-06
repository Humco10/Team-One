import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
//import { PageNotFoundComponent } from './not-found.component';

/**
 * All the compnents and modules a given page uses so that all these can
 * be bundled up in this single module to be imported and used elsewhere.
 */
@NgModule({
	declarations: [
		HistoryComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		HistoryRoutingModule,
		RouterModule.forRoot([])
	]
})
//All that is exported.
export class HistoryModule { }
