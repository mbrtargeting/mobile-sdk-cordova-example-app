import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {StroeerSdkTabPage} from "./stroeer-sdk-tab.page";
import {StroeerSdkTabRoutingModule} from "./stroeer-sdk-tab-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    StroeerSdkTabRoutingModule
  ],
  declarations: [StroeerSdkTabPage]
})
export class StroeerSdkTabPageModule {}
