import { Component } from '@angular/core';
import { CachingService } from './services/caching.service';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  userName2: String;

  constructor(private cachingService: CachingService) { this.cachingService.initStorage(); }
  ngOnInit() {
    this.checkName();
  }
  async checkName() {
    this.userName2 = await Storage.get({ key: 'name' }).then();
    this.userName2 = JSON.stringify(this.userName2);
    this.userName2 =  this.userName2.substring(10,this.userName2.length - 2);

  };
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Instrucciones', url: '/instrucciones', icon: 'information-circle' },
    { title: 'Castillo', url: '/castillo-info', icon: 'heart' },
    { title: 'Mural', url: '/mural-info', icon: 'archive' },
    { title: 'Estatua', url: '/estatua-info', icon: 'trash' },
    { title: 'Juego-castillo', url: '/castillo-juego', icon: 'game-controller' },
    { title: 'Juego-puerto', url: '/puerto-juego', icon: 'game-controller' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

}
