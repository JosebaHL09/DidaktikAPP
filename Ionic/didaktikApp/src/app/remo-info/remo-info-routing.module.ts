import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoInfoPage } from './remo-info.page';

const routes: Routes = [
  {
    path: '',
    component: RemoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoInfoPageRoutingModule {}
