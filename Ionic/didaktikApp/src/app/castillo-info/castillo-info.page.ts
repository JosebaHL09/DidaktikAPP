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
  disable
  sound = new Howl({
    src: ['../assets/audio/Leyendas.mp3'],
    onend: function () {
      document.getElementById("overlay").classList.add('overlayshow');
      (document.getElementById('btn') as HTMLInputElement).disabled = false;
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

  disableBtn() {
    this.disable = !this.disable;
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
    this.route.navigate(['/nombredeljuego']);
  }
  goMap() {
    this.stopAudio()
    this.route.navigate(['/game']);
    this.disableBtn()
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
