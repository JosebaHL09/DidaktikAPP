import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertoInfoPageRoutingModule } from './puerto-info-routing.module';

import { PuertoInfoPage } from './puerto-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertoInfoPageRoutingModule
  ],
  declarations: [PuertoInfoPage]
})
export class PuertoInfoPageModule {}
