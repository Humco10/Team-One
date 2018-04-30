import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';

/**
 * Just like the page-routing.component, this one contains all the other
 * routes besides those expressed for the 4 pages our site is going to
 * contain. At the moment this is only the wildcard route but there
 * may be more in the future. Basically what this wildcard does is if the route
 * requested does not exist (a path that does not exist) it loads this default
 * component here. The Default currently is the PageNotFound Component which
 * loads a page basically stating that there is nothing available here and
 * for the user to try a different page.
 */
const appRoutes: Routes = [
	{ path: '**', component: PageNotFoundComponent } //If path is not found
];

//A bunch of stuff angular needs to do things. I'm guessing it imports all the
//available routes into this module, and then exports this module as a given name.
@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }