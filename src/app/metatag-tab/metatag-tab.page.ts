import { Component } from '@angular/core';

declare var SDG: Sdg

@Component({
  selector: 'app-matatag-tab',
  templateUrl: 'matatag-tab.page.html',
  styleUrls: []
})
export class MetatagTabPage {
  constructor() {}

  public ngAfterViewInit() {
    window.SDG.cmd.push(() => {
      SDG.Publisher.loadAllSlots()
    })
  }

  public showMetatagDebug(): void {
    window.showSdgDebug();
  }
}
