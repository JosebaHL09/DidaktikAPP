import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastilloJuegoPage } from './castillo-juego.page';

const routes: Routes = [
  {
    path: '',
    component: CastilloJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastilloJuegoPageRoutingModule {}
