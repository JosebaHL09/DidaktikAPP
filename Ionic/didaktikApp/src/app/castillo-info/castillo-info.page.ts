import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import {Howl, Howler} from 'howler';




@Component({
  selector: 'app-castillo-info',
  templateUrl: './castillo-info.page.html',
  styleUrls: ['./castillo-info.page.scss'],
})
export class CastilloInfoPage implements OnInit {

  constructor(private nativeAudio: NativeAudio, private route: Router,private menu: MenuController) { }
  showVar
  ngOnInit() {
    this.playAudio();
    this.menu.enable(false);
  }

  playAudio(){
    var sound = new Howl({
      src: ['../assets/audio/Leyendas.mp3']
    });
    sound.play();
  }

  playGame(){
    this.route.navigate(['/nombredeljuego']);
  }
  goMap(){
    this.route.navigate(['/game']);
  }
  openNav() {
    document.getElementById("overlay").classList.add('overlayshow');
  }
  closeNav() {
    document.getElementById("overlay").classList.remove('overlayshow');
  }

  changeSrc(){
    this.showVar = !this.showVar;
  }
}
