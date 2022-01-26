import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyuntamientoInfoPage } from './ayuntamiento-info.page';

const routes: Routes = [
  {
    path: '',
    component: AyuntamientoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyuntamientoInfoPageRoutingModule {}
