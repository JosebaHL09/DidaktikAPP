import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public alertCtrl: AlertController, private route: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Creditos',
      message: "Esta aplicacion ha sido desarrollada por los alumnos Hodei Monasterio, Aritz Izarcelaya y Joseba Hernandez de DAW-2 del centro Uni Eibar-Ermua en colaboracion con los alumnos Leire Aurrekoetxea, Leire Camacho, Estibaliz Martínez y Jon Rodríguez de magisterio de la UPV.<br><img src='../../assets/img/unilogo.png'> <img src='../../assets/img/upvlogo.png'>",
      buttons: ['OK']
    });
    await alert.present();
  }
  

  goInstrucciones() {
    this.route.navigate(['/instrucciones']);
  }
  goJuego() {
    
    this.route.navigate(['/game']);
  }

}
