import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-castillo-juego',
  templateUrl: './castillo-juego.page.html',
  styleUrls: ['./castillo-juego.page.scss'],
})
export class CastilloJuegoPage implements OnInit {
  public aukeratutakoerantzuna1
  public aukeratutakoerantzuna2
  constructor(public alertController: AlertController,private route:Router) { }

  ngOnInit() {

  }

  check() {
    if (this.aukeratutakoerantzuna1 == 1 && this.aukeratutakoerantzuna2 == 1) {
      this.correct()
    }else{
      this.incorrect()
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
