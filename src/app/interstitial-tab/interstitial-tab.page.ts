import {Component} from "@angular/core";


@Component({
  selector: 'app-interstitial-tab',
  templateUrl: 'interstitial-tab.page.html',
  styleUrls: []
})
export class InterstitialTabPage {
  private static readonly INTERSTITIAL_SLOT = "interstitial";

  constructor() {}

  public async openAdInspector() {
    await stroeerAds.runAction('openAdInspector')
  }

  public async getInterstitialAd() {
    try {
      await stroeerAds.getInterstitial(InterstitialTabPage.INTERSTITIAL_SLOT)
    } catch (e: unknown) {
      console.error("Failed to get interstitial Ad", e)
    }
  }
}
