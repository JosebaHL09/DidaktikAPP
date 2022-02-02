import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { Howl } from 'howler';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-castillo-info',
  templateUrl: './castillo-info.page.html',
  styleUrls: ['./castillo-info.page.scss'],
})
export class CastilloInfoPage implements OnInit {
  showVar
  sound = new Howl({
    src: ['../assets/audio/Leyendas.mp3'],
    onplay:function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = true;
    },
    onend: function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = false;
      document.getElementById("overlay").classList.add('overlayshow');
    }
  });
  constructor(private route: Router, private menu: MenuController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.stopAudio()
    });
  }
  ngOnInit() { 
    this.playAudio();
    this.menu.enable(false);
  }

  playAudio() {
    this.sound.play();
  }
  stopAudio() {
    this.sound.stop();
  }
  replayAudio() {
    this.closeNav();
    this.stopAudio();
    this.playAudio();
  }
  playGame() {
    this.stopAudio()
    this.route.navigate(['/castillo-juego']);
  }
  goMap() {
    this.stopAudio()
    this.route.navigate(['/game']);
  }
  openNav() {
    document.getElementById("overlay").classList.add('overlayshow');
  }
  closeNav() {
    document.getElementById("overlay").classList.remove('overlayshow');
  }

  changeSrc() {
    this.showVar = !this.showVar;
  }
}
