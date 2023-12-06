import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetatagTabPage } from './metatag-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MetatagTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetatagTabPageRoutingModule {}
