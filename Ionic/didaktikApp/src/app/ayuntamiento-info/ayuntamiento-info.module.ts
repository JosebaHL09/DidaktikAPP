import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyuntamientoInfoPageRoutingModule } from './ayuntamiento-info-routing.module';

import { AyuntamientoInfoPage } from './ayuntamiento-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyuntamientoInfoPageRoutingModule
  ],
  declarations: [AyuntamientoInfoPage]
})
export class AyuntamientoInfoPageModule {}
