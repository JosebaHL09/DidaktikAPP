import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuralJuegoPage } from './mural-juego.page';

const routes: Routes = [
  {
    path: '',
    component: MuralJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuralJuegoPageRoutingModule {}
