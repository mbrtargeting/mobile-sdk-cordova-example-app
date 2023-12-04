import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import AdMob from 'admob-plus-cordova';

declare global {
  type Sdg = any;
  interface Window { 
    SDG: Sdg; 
    showSdgDebug: () => void;
  }
}

declare var admob: AdMob;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(onDeviceRead)
  .catch(err => console.log(err));


function onDeviceRead() {
  document.addEventListener('deviceready', async () => {
    await admob.start(); // or start loading ads
    initiateMetatag()
  });
}

function initiateMetatag() {
  const initSdgScript = document.createElement('script');
  initSdgScript.type = 'text/javascript'
  initSdgScript.innerHTML = `
    window.SDG = window.SDG || {};
    window.SDG.cmd = window.SDG.cmd || [];
  `;
  document.head.appendChild(initSdgScript);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://cdn.stroeerdigitalgroup.de/metatag/live/transfermarkt.de_android/metaTag.min.js';
  document.head.appendChild(script);
}
