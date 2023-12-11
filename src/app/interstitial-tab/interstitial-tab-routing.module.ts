import { NgModule } from '@angular/core'
import {RouterModule, Routes} from "@angular/router";
import {InterstitialTabPage} from "./interstitial-tab.page";


const routes: Routes = [
  {
    path: '',
    component: InterstitialTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterstitialTabRoutingModule {}
