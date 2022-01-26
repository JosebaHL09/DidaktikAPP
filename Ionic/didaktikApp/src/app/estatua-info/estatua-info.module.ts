import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstatuaInfoPageRoutingModule } from './estatua-info-routing.module';

import { EstatuaInfoPage } from './estatua-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstatuaInfoPageRoutingModule
  ],
  declarations: [EstatuaInfoPage]
})
export class EstatuaInfoPageModule {}
