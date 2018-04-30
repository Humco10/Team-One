import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Start Production mode
if (environment.production) {
  enableProdMode();
}

//Uhhhhh...... No idea what this does but it starts the app basically
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

