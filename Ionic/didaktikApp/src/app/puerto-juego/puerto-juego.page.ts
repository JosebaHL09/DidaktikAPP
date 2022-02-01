import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puerto-juego',
  templateUrl: './puerto-juego.page.html',
  styleUrls: ['./puerto-juego.page.scss'],
})
export class PuertoJuegoPage implements OnInit {

  peces = ['../assets/img/pez1.jpg', '../assets/img/pez2.jpg', '../assets/img/pez3.jpg', '../assets/img/pez4.jpg'];

  id

  constructor(public alertController: AlertController, private route: Router) { }

  ngOnInit() {

  }

  elegir(i) {
    this.id = i;
    console.log(this.id);
    if (this.id == 3) {
      this.correct();
    }
    else {
      this.incorrect();
    }
  }

  async correct() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Correcto',
      message: "<img src='../../assets/img/success.png'>",
      buttons: [
        {
          text: 'OK',
          role: 'bai',
          handler: () => {
            this.goMap();
          }
        },
      ]
    });
    await alert.present();
  }
  async incorrect() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Incorrecto',
      message: "<img src='../../assets/img/incorrect.png'>",
      buttons: ['OK']
    });
    await alert.present();
  }

  goMap() {
    this.route.navigate(['/game']);
  }
}