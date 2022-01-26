import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstatuaInfoPage } from './estatua-info.page';

const routes: Routes = [
  {
    path: '',
    component: EstatuaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstatuaInfoPageRoutingModule {}
