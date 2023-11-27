import { Component } from '@angular/core';

declare var cordova: any;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  getAd() {
    cordova.plugins.StroeerAdsPlugin.getInterstitial(() => {
      console.log('Excelsior!');
    }, (err: unknown) => {
      console.log('Uh oh... ' + err);
    });
  }
}
