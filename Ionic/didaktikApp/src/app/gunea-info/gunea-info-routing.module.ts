import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuneaInfoPage } from './gunea-info.page';

const routes: Routes = [
  {
    path: '',
    component: GuneaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuneaInfoPageRoutingModule {}
