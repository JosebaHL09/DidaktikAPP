import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-ayuntamiento-info',
  templateUrl: './ayuntamiento-info.page.html',
  styleUrls: ['./ayuntamiento-info.page.scss'],
})
export class AyuntamientoInfoPage implements OnInit {

  constructor(private route: Router,public alertController: AlertController) { }
  ngOnInit() {
  }
  goMap(){
    this.route.navigate(['/game']);

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
}
