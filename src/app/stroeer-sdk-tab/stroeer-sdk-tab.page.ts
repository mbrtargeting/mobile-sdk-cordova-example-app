import {Component, HostListener} from "@angular/core";

interface InterstitialAd {
  show(): Promise<void>;
  id(): string;
}

interface AdEvent {
  adId: string;
}

interface AdShowFailedEvent extends AdEvent{
  reason: string;
}

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
     

      <h1>Interstial Ad</h1>
      <ion-button expand="full" (click)="loadInterstitialAd(true)">Load and show later </ion-button>
      <ion-button expand="full" (click)="showLoadedInterstitialAd()">Show loaded</ion-button>

      <ion-button expand="full" (click)="loadInterstitialAd(false)">Load and show on loaded</ion-button>
      
      <h2>Status:</h2>
      <p>
        {{message}}
      </p>
    </ion-content>
  `,
  styleUrls: []
})
export class StroeerSdkTabPage {
  private static readonly INTERSTITIAL_SLOT = "interstitial";
  private ad: InterstitialAd | null = null

  public message: string = "No ad is loaded";
  public showOnLoaded: boolean = false;

  public async loadInterstitialAd(saveAdReference: boolean) {
    try {
      this.showOnLoaded = !saveAdReference;
      const loadedAd = await stroeerAds.loadInterstitial(StroeerSdkTabPage.INTERSTITIAL_SLOT)

      if (saveAdReference) {
        this.ad = loadedAd;
      }
    } catch (e: unknown) {
      console.error("Failed to load interstitial Ad", e)
    }
  }

  public async showLoadedInterstitialAd() {
    try {
      if (this.ad !== null) {
        await this.ad.show()
      } else {
        this.message = `There is no ad loaded`
      }
    } catch (e: any) {
      this.message = e.message
    }
  }

  @HostListener("document:adLoaded", ['$event'])
  public async onAdLoaded(ev: AdEvent) {
    this.message = `${ev.adId} loaded`

    if (this.showOnLoaded) {
      try {
        await stroeerAds.showInterstitial(ev.adId)
      } catch (e: unknown) {
        this.message = `${ev.adId} not found`
      }
    }
  }

  @HostListener("document:adDismissed", ['$event'])
  public async onAdDismissed(ev: AdEvent) {
    this.message = `${ev.adId} dismissed`
    console.log(this.message)
  }

  @HostListener("document:adShowFailed", ['$event'])
  public async onAdShowFailed(ev: AdShowFailedEvent) {
    this.message = `${ev.adId} show failed (${ev.reason})`
    console.log(this.message)
  }

  @HostListener("document:adClicked", ['$event'])
  public async onAdClicked(ev: AdEvent) {
    console.log(`${ev.adId} clicked`)
  }

  @HostListener("document:adImpression", ['$event'])
  public async onAdImpression(ev: AdEvent) {
    console.log(`${ev.adId} impression`)
  }

  @HostListener("document:adShowed", ['$event'])
  public async onAdShowed(ev: AdEvent) {
    console.log(`${ev.adId} showed`)
  }
}
