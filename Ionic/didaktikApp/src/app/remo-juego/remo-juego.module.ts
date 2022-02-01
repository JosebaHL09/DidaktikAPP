import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoJuegoPageRoutingModule } from './remo-juego-routing.module';

import { RemoJuegoPage } from './remo-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoJuegoPageRoutingModule
  ],
  declarations: [RemoJuegoPage]
})
export class RemoJuegoPageModule {}
