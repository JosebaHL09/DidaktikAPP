import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastilloJuegoPageRoutingModule } from './castillo-juego-routing.module';

import { CastilloJuegoPage } from './castillo-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastilloJuegoPageRoutingModule
  ],
  declarations: [CastilloJuegoPage]
})
export class CastilloJuegoPageModule {}
