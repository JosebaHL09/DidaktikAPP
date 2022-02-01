import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuertoJuegoPage } from './puerto-juego.page';

const routes: Routes = [
  {
    path: '',
    component: PuertoJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertoJuegoPagePageRoutingModule {}
