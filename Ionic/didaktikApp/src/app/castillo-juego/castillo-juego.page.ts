import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-castillo-juego',
  templateUrl: './castillo-juego.page.html',
  styleUrls: ['./castillo-juego.page.scss'],
})
export class CastilloJuegoPage implements OnInit {
  public aukeratutakoerantzuna1
  public aukeratutakoerantzuna2
  constructor(public alertController: AlertController, private route: Router, private menu: MenuController) { }

  hidden
  toggle1: boolean;
  toggle2: boolean;
  toggle3: boolean;
  toggle4: boolean;

  ngOnInit() {
    this.menu.enable(false)
    this.hidden = false
    this.toggle1 = false
    this.toggle2 = false
    this.toggle3 = false
    this.toggle4 = false
  }
  ngOnDestroy() {
    this.hidden = false
    this.toggle1 = false
    this.toggle2 = false
    this.toggle3 = false
    this.toggle4 = false
  }
  toggleShow(id) {
    switch (id) {
      case 1:
        this.toggle1 = !this.toggle1;
        break;
      case 2:
        this.toggle2 = !this.toggle2;
        break;
      case 3:
        this.toggle3 = !this.toggle3;
        break;
      case 4:
        this.toggle4 = !this.toggle4;
        break
    }
    //this.toggle = !this.toggle;
  }

  check() {
    if (this.hidden == false) {
      if (this.aukeratutakoerantzuna1 == 1 && this.aukeratutakoerantzuna2 == 1) {
        this.correct()
      } else {
        this.incorrect()
      }
    } else {
      this.menu.enable(true)
      this.goMap()
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
            this.hidden = !this.hidden
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

  cambiarFondo() {

  }

  goMap() {
    this.route.navigateByUrl('/game', {
      replaceUrl: true
    });
  }
}
