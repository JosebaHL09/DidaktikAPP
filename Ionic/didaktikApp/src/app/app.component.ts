import { Component } from '@angular/core';
import { CachingService } from './services/caching.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private cachingService: CachingService) { this.cachingService.initStorage(); }
  public appPages = [
    { title: 'Inicio', url: '/home/', icon: 'home' },
    { title: 'Instrucciones', url: '/instrucciones/', icon: 'information-circle' },
    { title: 'Castillo', url: '/castillo-info', icon: 'heart' },
    { title: 'Mural', url: '/mural-info', icon: 'archive' },
    { title: 'Estatua', url: '/estatua-info', icon: 'trash' },
    { title: 'Juego-castillo', url: '/castillo-juego', icon: 'game-controller' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

}
