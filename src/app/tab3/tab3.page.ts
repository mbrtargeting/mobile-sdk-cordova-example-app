import { Component } from '@angular/core';

declare var cordova: any;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private static readonly INTERSTITIAL_SLOT = "interstitial";

  constructor() {}

  async getAd() {
    try {
      await cordova.plugins.StroeerAdsPlugin.getInterstitial(Tab3Page.INTERSTITIAL_SLOT)
      console.log('Excelsior!');
    } catch (error: unknown) {
      console.log('Uh oh... ' + error);
    }
  }
}
