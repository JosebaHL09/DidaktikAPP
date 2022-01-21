import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuralInfoPage } from './mural-info.page';

const routes: Routes = [
  {
    path: '',
    component: MuralInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuralInfoPageRoutingModule {}
