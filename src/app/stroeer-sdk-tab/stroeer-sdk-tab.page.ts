import {Component} from "@angular/core";


@Component({
  selector: 'app-stroeer-sdk-tab',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          SDK Interstitial Ad
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-button expand="full" (click)="openAdInspector()">Ad Inspector</ion-button>
      <ion-button expand="full" (click)="getInterstitialAd()">Get SDK Interstitial Ad</ion-button>
    </ion-content>
  `,
  styleUrls: []
})
export class StroeerSdkTabPage {
  private static readonly INTERSTITIAL_SLOT = "interstitial";

  constructor() {}

  public async openAdInspector() {
    await stroeerAds.runAction('openAdInspector')
  }

  public async getInterstitialAd() {
    try {
      await stroeerAds.getInterstitial(StroeerSdkTabPage.INTERSTITIAL_SLOT)
    } catch (e: unknown) {
      console.error("Failed to get interstitial Ad", e)
    }
  }
}
