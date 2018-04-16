import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { PagesComponent } from './app/pages/pages.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

let pageOne = document.getElementById("page1");

pageOne.addEventListener("click", (evt) => {
  //page.title = "Excelsior the Game";
  //page.pageNum = 2;
}, false);
