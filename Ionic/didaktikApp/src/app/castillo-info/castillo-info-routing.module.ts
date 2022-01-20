import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastilloInfoPage } from './castillo-info.page';

const routes: Routes = [
  {
    path: '',
    component: CastilloInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastilloInfoPageRoutingModule {}
