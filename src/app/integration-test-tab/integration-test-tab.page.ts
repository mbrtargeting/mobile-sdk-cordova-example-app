import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-integration-test-tab',
  templateUrl: 'integration-test-tab.page.html',
  styleUrls: []
})
export class IntegrationTestTabPage implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    try {
      await admob.WebViewAd.checkIntegration()
    } catch (err: unknown) {
      console.log("INTEGRATION ERROR", err)
    }
  }
}
