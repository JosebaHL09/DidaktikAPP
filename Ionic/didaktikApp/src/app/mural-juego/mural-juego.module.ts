import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuralJuegoPageRoutingModule } from './mural-juego-routing.module';

import { MuralJuegoPage } from './mural-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuralJuegoPageRoutingModule
  ],
  declarations: [MuralJuegoPage]
})
export class MuralJuegoPageModule {}
