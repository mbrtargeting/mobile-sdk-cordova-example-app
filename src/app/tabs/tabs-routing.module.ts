import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'metatag',
        loadChildren: () => import('../metatag-tab/matatag-tab.module').then(m => m.MatatagTabPageModule)
      },
      {
        path: 'stroeer-sdk',
        loadChildren: () => import('../stroeer-sdk-tab/stroeer-sdk-tab.module').then(m => m.StroeerSdkTabPageModule)
      },
      {
        path: 'integration-test',
        loadChildren: () => import('../integration-test-tab/integration-test-tab.module').then(m => m.IntegrationTestTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/stroeer-sdk',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/stroeer-sdk',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
