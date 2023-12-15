import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import AdMob from 'admob-plus-cordova';

declare global {
  interface Window { 
    SDG: any; 
    showSdgDebug: () => void;
  }
  var SDG: Window['SDG']
  var stroeerAds: any;

  //CMP TEST: DO NOT USE
  var createCmpMock: any;
  var createCmpStub: any;
  var __tcfapi: any;
} 

declare var admob: AdMob;

type TCFData = any;
interface TCFApi {
  getInAppTCData: () => Promise<TCFData>
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
    const tcfapi = await loadTestCMP();
    const tcfdata = await tcfapi.getInAppTCData();
    await admob.start();
    await stroeerAds.init("appDfpTest");
    await stroeerAds.consent(tcfdata);
  });
}

function loadTestCMP(): Promise<TCFApi> {
  if (createCmpMock) {
    return createCmpMock({cmpId: 6, acceptAll: true, uiVisible: false})
      .isReady()
      .then(() => console.log('Test CMP ready'))
      .then(() => ({
        getInAppTCData: (): Promise<TCFData> => new Promise((resolve, reject) => {
          window.__tcfapi('getInAppTCData', 2, (inAppTCData: any, success: boolean) => {
            console.log('getInAppTCData called');
            if (success) {
              resolve(inAppTCData);
            } else {
              reject(new Error("Failed to get InAppTCData"));
            }
          })
        })
      }));
  }
  
  return Promise.reject(new Error("Test CMP not loaded: createCmpStub, createCmpMock functions are not available"));
}


