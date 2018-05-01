import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomComponent } from './random.component';

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
		path: 'random',
		component: RandomComponent,
		data: {
			title: 'Random Shtuff!',
			pageNum: 4,
			imgPath: 'assets/random.png'
			//Any API variables you may need to display
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
export class RandomRoutingModule { }