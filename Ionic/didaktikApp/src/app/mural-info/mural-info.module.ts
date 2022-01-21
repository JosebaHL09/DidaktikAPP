import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuralInfoPageRoutingModule } from './mural-info-routing.module';

import { MuralInfoPage } from './mural-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuralInfoPageRoutingModule
  ],
  declarations: [MuralInfoPage]
})
export class MuralInfoPageModule {}
