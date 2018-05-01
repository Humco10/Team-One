import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

/*
 * Creates a list of Routes called pageRoutes. Each Route object in the list
 * is made up of a path variable (the path in the url that tells the router to
 * fire up a particular route to change the view accordingly), a component object
 * (which uses one of the Component modules that you load in and specify) that holds
 * the ngOnInit method that fires when this route is loaded. Each component also holds the
 * modules, eventlisteners, etc... that the particular view you are loading will contain.
 * Then there is the data object that contains whatever you want to sent into the page
 * to change various values and redraw the view. Using these routes, the page technically
 * is never "refreshed" or "reloaded" it just dynamically resets the view.
 * 
 */
const pageRoutes: Routes = [
	{
		path: '',
		component: LoginComponent,
		data: {
			title: 'Login Through Twitter!',
			pageNum: 1,
			imgPath: 'assets/siteImage.png'
			//Any logging in stuff we need
		}
	}
];

//What this module imports and exports. I don't really understand this except
//for the fact angular needs it to do stuff... yeah.
@NgModule({
	imports: [
		RouterModule.forChild(pageRoutes)
	],
	exports: [
		RouterModule
	]
})
export class LoginRoutingModule { }