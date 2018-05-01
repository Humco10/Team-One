import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RandomComponent } from './random.component';
import { RandomRoutingModule } from './random-routing.module';
//import { PageNotFoundComponent } from './not-found.component';

/**
 * All the compnents and modules a given page uses so that all these can
 * be bundled up in this single module to be imported and used elsewhere.
 */
@NgModule({
	declarations: [
		RandomComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RandomRoutingModule
	]
})
//All that is exported.
export class RandomModule { }