import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild("bannerAd", {static: false})
  bannerAd: ElementRef | undefined

  constructor(private renderer: Renderer2) {}

  async getBannerAd() {
    try {
      const ad = await cordova.plugins.StroeerAdsPlugin.getBanner('banner')
      const iframe: HTMLIFrameElement = this.renderer.createElement('iframe');
      this.renderer.appendChild(this.bannerAd?.nativeElement, iframe)

      const iframeWindow = iframe.contentWindow;

      // Check if contentWindow is available
      if (iframeWindow) {
        // Append content to the iframe
        iframeWindow.document.open();
        iframeWindow.document.write(ad);
        iframeWindow.document.close();
      } 
      console.log("AD is here", iframe)
      console.log('Excelsior!');
    } catch (error: unknown) {
      console.log('Uh oh... ' + error);
    }
  }
}
