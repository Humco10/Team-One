import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HistoryComponent } from './history/history.component';
import { AppletComponent } from './applet/applet.component';
import { LoginComponent } from './login/login.component';
import { RandomComponent } from './random/random.component';

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
		component: PagesComponent,
		children: [{
			path: '',
			component: LoginComponent
		}],
		data: {
			title: 'Humbyrd and Knapp Games',
			pageNum: 1,
			imgPath: 'assets/siteImage.png'
		}
	},
	{
		path: 'applet',
		component: PagesComponent,
		children: [{
			path: '',
			component: AppletComponent
		}],
		data: {
			title: 'Excelcior The Game!',
			pageNum: 2,
			imgPath: 'assets/game.png'
		}
	},
	{
		path: 'history',
		component: PagesComponent,
		children: [{
			path: '',
			component: HistoryComponent
		}],
		data: {
			title: 'Version history of Excelsior to date',
			pageNum: 3,
			imgPath: 'assets/game.png'
		}
	},
	{
		path: 'random',
		component: PagesComponent,
		children: [{
			path: '',
			component: RandomComponent
		}],
		data: {
			title: 'Currently Trending News Articles!',
			pageNum: 4,
			imgPath: 'assets/news.png'
		}
	}//,
	/*{ path: '',
	  redirectTo: '/heroes',
	  pathMatch: 'full'
	}*/
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
export class PageRoutingModule { }