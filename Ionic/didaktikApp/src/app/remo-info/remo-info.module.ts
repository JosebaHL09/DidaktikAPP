import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoInfoPageRoutingModule } from './remo-info-routing.module';

import { RemoInfoPage } from './remo-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoInfoPageRoutingModule
  ],
  declarations: [RemoInfoPage]
})
export class RemoInfoPageModule {}
