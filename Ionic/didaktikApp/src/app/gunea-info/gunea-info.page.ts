import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Router } from '@angular/router';




@Component({
  selector: 'app-gunea-info',
  templateUrl: './gunea-info.page.html',
  styleUrls: ['./gunea-info.page.scss'],
})
export class GuneaInfoPage implements OnInit {

  constructor(private nativeAudio: NativeAudio, private route: Router) { }

  ngOnInit() {
    this.playAudio();
  }

  playAudio(){
    this.nativeAudio.preloadSimple('Leyenda', '../../assets/audio/Leyendas.mp3');
    this.nativeAudio.play('Leyenda');
  }

  playGame(){
    this.route.navigate(['/nombredeljuego']);
  }
  goMap(){
    this.route.navigate(['/game']);
  }
}
