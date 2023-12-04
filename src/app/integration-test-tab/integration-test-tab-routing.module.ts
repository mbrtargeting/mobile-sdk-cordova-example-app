import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationTestTabPage } from './integration-test-tab.page';

const routes: Routes = [
  {
    path: '',
    component: IntegrationTestTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationTestTabPageRoutingModule {}
