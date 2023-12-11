import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {InterstitialTabPage} from "./interstitial-tab.page";
import {InterstitialTabRoutingModule} from "./interstitial-tab-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    InterstitialTabRoutingModule
  ],
  declarations: [InterstitialTabPage]
})
export class InterstitialTabPageModule {}
