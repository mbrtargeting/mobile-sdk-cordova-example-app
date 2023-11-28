import { Component } from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private static readonly APPLICATION_NAME = "appDfpTest";

  constructor() {}

  async ngOnInit() {
    try {
      await cordova.plugins.StroeerAdsPlugin.setApplicationName(TabsPage.APPLICATION_NAME)
      console.log('Excelsior!');
    } catch (error: unknown) {
      console.log('Uh oh... ' + error);
    }
  }
}
