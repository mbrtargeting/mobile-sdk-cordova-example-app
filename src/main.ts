import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare global {
  interface Window { 
    SDG: any; 
    showSdgDebug: () => void;
  }
  var SDG: Window['SDG']
  var stroeerAds: any;
} 

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(onDeviceRead)
  .catch(err => console.log(err));


function onDeviceRead() {
  document.addEventListener('deviceready', async () => {
    await stroeerAds.init("appDfpTest")
  });
}

