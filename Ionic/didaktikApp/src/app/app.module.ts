import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Imports externos
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
//Cache
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';
import { GuneaService } from '../../src/app/services/gunea.service'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot({ driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB] }), HttpClientModule],
  providers: [Geolocation, NativeAudio, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },GuneaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
