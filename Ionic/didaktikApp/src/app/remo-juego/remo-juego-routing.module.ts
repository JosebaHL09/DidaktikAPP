import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoJuegoPage } from './remo-juego.page';

const routes: Routes = [
  {
    path: '',
    component: RemoJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoJuegoPageRoutingModule {}
