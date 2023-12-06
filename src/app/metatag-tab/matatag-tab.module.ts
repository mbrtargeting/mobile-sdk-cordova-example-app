import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetatagTabPage } from './metatag-tab.page';

import { MetatagTabPageRoutingModule } from './metatag-tab-routing.module';
import { AdComponent } from '../ad/ad.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MetatagTabPageRoutingModule
  ],
  declarations: [MetatagTabPage, AdComponent]
})
export class MatatagTabPageModule {}
