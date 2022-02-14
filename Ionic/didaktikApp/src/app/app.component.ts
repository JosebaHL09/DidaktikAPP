import { Component } from '@angular/core';
import { CachingService } from './services/caching.service';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userName2: String;
  platform;
  constructor(private cachingService: CachingService, platform: Platform) {
    this.cachingService.initStorage();
    this.platform = platform
  }
  ngOnInit() {
    this.checkName();
  }
  async checkName() {
    this.userName2 = await Storage.get({ key: 'name' }).then();
    this.userName2 = JSON.stringify(this.userName2);
    this.userName2 = this.userName2.substring(10, this.userName2.length - 2);

  };
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Instrucciones', url: '/instrucciones', icon: 'information-circle' },
    { title: 'Creditos', url: '/creditos', icon: 'people' },
    { title: 'Bai', url: '/mural-juego', icon: 'people' },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  exitApp() {
    this.platform.exitApp();
  }
}
