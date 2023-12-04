import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationTestTabPageRoutingModule } from './integration-test-tab-routing.module';
import { IntegrationTestTabPage } from './integration-test-tab.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    IntegrationTestTabPageRoutingModule
  ],
  declarations: [IntegrationTestTabPage]
})
export class IntegrationTestTabPageModule {}
