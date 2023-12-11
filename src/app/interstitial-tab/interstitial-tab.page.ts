import {AfterViewInit, Component, OnInit} from "@angular/core";

declare var cordova: any;

@Component({
  selector: 'app-interstitial-tab',
  templateUrl: 'interstitial-tab.page.html',
  styleUrls: []
})
export class InterstitialTabPage implements AfterViewInit {
  private static readonly APPLICATION_NAME = "appDfpTest";
  private static readonly INTERSTITIAL_SLOT = "interstitial";

  constructor() {}

  public async ngAfterViewInit() {
    try {
      await cordova.plugins.StroeerAdsPlugin.setApplicationName(InterstitialTabPage.APPLICATION_NAME)
    } catch (e: unknown) {
      console.error("Failed to set application name", e)
    }
  }

  public async getInterstitialAd() {
    try {
      await cordova.plugins.StroeerAdsPlugin.getInterstitial(InterstitialTabPage.INTERSTITIAL_SLOT)
    } catch (e: unknown) {
      console.error("Failed to get interstitial Ad", e)
    }
  }
}
