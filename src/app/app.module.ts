import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './not-found.component';


const appRoutes: Routes = [
  //{ path: 'applet', component: PagesComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: '',
    component: PagesComponent,
    data: {
      title: 'Login Through Twitter!',
      pageNum: 1
    }
  },
  {
    path: 'applet',
    component: PagesComponent,
    data: {
      title: 'Excelsior The Game!',
      pageNum: 2
    }
  },
  {
    path: 'tweets',
    component: PagesComponent,
    data: {
      title: 'Find a Tweet!',
      pageNum: 3
    }
  },
  {
    path: 'random',
    component: PagesComponent,
    data: {
      title: 'Random Shtuff!',
      pageNum: 4
    }
  }
  //{ path: '**', component: PageNotFoundComponent } //If path is not found
  /*{ path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }*/,
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class Page {
  id: number;
  name: string;
}