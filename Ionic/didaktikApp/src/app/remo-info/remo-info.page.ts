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
  showVar
  sound = new Howl({
    src: ['../assets/audio/Sotera.mp3'],
    volume: 0.15,
    onend: function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = false;
    },
    onload: function () {
      (document.getElementById('btn') as HTMLInputElement).disabled = true;
      document.getElementById("overlay").classList.add('overlayshow');
    }
  });
  constructor(private route: Router, private menu: MenuController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.stopAudio()
    });
  }
  ngOnInit() {
    this.menu.enable(false);
  }
  playAudio() {
    this.sound.play();
  }
  stopAudio(){
    this.sound.stop();
  }
  replayAudio() {
    this.stopAudio();
    this.playAudio();
  }

  playGame() {
    this.stopAudio()
    this.route.navigate(['/remo-juego']);
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
    this.playAudio();
  }
}
