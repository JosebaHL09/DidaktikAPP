import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { Howl } from 'howler';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-remo-info',
  templateUrl: './remo-info.page.html',
  styleUrls: ['./remo-info.page.scss'],
})
export class RemoInfoPage implements OnInit {
  sound = new Howl({
   
    src: ['../assets/audio/Sotera.mp3'],
    volume: 0.15,
    onend: function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = false;
    }
  });
  constructor(private route: Router, private menu: MenuController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.stopAudio()
    });
  }
  showVar
  ngOnInit() {
    this.playAudio();
    this.menu.enable(false);
  }

  playAudio() {
    this.sound.play();
  }
  stopAudio(){
    this.sound.stop();
  }

  playGame() {
    this.stopAudio()
    this.route.navigate(['/nombredeljuego']);
  }
  goMap() {
    this.stopAudio()
    this.route.navigate(['/game']);
  }
}
