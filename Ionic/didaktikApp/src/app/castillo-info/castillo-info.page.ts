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
  sound = new Howl({
    src: ['../assets/audio/Leyendas.mp3']
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
