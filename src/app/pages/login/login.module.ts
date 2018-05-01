import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
//import { PageNotFoundComponent } from './not-found.component';

/**
 * All the compnents and modules a given page uses so that all these can
 * be bundled up in this single module to be imported and used elsewhere.
 */
@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule
	]
})
//All that is exported.
export class LoginModule { }