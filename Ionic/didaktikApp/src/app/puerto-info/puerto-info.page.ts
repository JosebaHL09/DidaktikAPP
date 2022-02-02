import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { Howl } from 'howler';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-puerto-info',
  templateUrl: './puerto-info.page.html',
  styleUrls: ['./puerto-info.page.scss'],
})
export class PuertoInfoPage implements OnInit {
  showVar

  sound = new Howl({
    src: ['../assets/audio/Las_Sardinas.mp3'],
    volume: 0.80,
    onplay: function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = true;
    },
    onend: function () {
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


  playAudio() {
    this.sound.play();
  }
  stopAudio() {
    this.sound.stop();
  }

  playGame() {
    this.stopAudio()
    this.route.navigate(['/puerto-juego']);
  }
  goMap() {
    this.stopAudio()
    this.route.navigate(['/game']);
  }

}
