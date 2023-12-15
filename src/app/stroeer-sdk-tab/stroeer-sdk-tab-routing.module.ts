import { NgModule } from '@angular/core'
import {RouterModule, Routes} from "@angular/router";
import {StroeerSdkTabPage} from "./stroeer-sdk-tab.page";


const routes: Routes = [
  {
    path: '',
    component: StroeerSdkTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StroeerSdkTabRoutingModule {}
