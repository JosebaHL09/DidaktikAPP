import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertoJuegoPagePageRoutingModule } from './puerto-juego-routing.module';

import { PuertoJuegoPage } from './puerto-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertoJuegoPagePageRoutingModule
  ],
  declarations: [PuertoJuegoPage]
})
export class PuertoJuegoPageModule {}
