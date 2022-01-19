import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuneaInfoPageRoutingModule } from './gunea-info-routing.module';

import { GuneaInfoPage } from './gunea-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuneaInfoPageRoutingModule
  ],
  declarations: [GuneaInfoPage]
})
export class GuneaInfoPageModule {}
