import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
//import { PageNotFoundComponent } from './not-found.component';

const pageRoutes: Routes = [
	{
		path: '',
		component: PagesComponent,
		data: {
			title: 'Login Through Twitter!',
			pageNum: 1,
			imgPath: 'assets/siteImage.png'
		}
	},
	{
		path: 'applet',
		component: PagesComponent,
		data: {
			title: 'Excelsior The Game!',
			pageNum: 2,
			imgPath: 'assets/random.png'
		}
	},
	{
		path: 'tweets',
		component: PagesComponent,
		data: {
			title: 'Find a Tweet!',
			pageNum: 3,
			imgPath: 'assets/api.png'
		}
	},
	{
		path: 'random',
		component: PagesComponent,
		data: {
			title: 'Random Shtuff!',
			pageNum: 4,
			imgPath: 'assets/random.png'
		}
	}//,
	/*{ path: '',
	  redirectTo: '/heroes',
	  pathMatch: 'full'
	}*/
];

@NgModule({
	imports: [
		RouterModule.forChild(pageRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PageRoutingModule { }