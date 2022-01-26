import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertoInfoPage } from './puerto-info.page';

const routes: Routes = [
  {
    path: '',
    component: PuertoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertoInfoPageRoutingModule {}
