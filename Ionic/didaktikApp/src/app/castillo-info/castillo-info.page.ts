import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'
import { Howl } from 'howler';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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

    },
    onend: function () {
      document.getElementById("overlay").classList.add('overlayshow');
    }
  });
  constructor(private route: Router, private menu: MenuController, private platform: Platform, public alertController: AlertController) {
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
  async salir() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Aviso',
      message: "<img id='alerta'src='../../assets/img/alerta.png'>¿Seguro que quieres salir?",
      buttons: [
        {
          text: 'SI',
          role: 'bai',
          handler: () => {
            this.menu.enable(true)
            this.goMap();
          }
        },
        {
          text: 'NO',
          role: 'bai',
          handler: () => {
            
          }
        }
      ]
    });
    await alert.present();
  }
  async jugar() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Aviso',
      message: "<img id='alerta'src='../../assets/img/alerta.png'>¿Seguro que quieres ir al juego?",
      buttons: [
        {
          text: 'SI',
          role: 'bai',
          handler: () => {
            this.playGame();
          }
        },
        {
          text: 'NO',
          role: 'bai',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
}
