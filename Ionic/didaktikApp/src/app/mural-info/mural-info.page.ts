import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { MenuController } from '@ionic/angular'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mural-info',
  templateUrl: './mural-info.page.html',
  styleUrls: ['./mural-info.page.scss'],
})
export class MuralInfoPage implements OnInit {
  sound = new Howl({
    src: ['../assets/audio/Eskorbuto.mp3'],
    onplay: function () {

    },
    onend: function () {
    
    }
  });

  constructor(private route: Router, private menu: MenuController,public alertController: AlertController) { }

  ngOnInit() {
    this.playAudio()
  }

  showInfo() {
    document.getElementById('info').innerHTML =
      "<b>Iosu Expósito</b>: Fue el cantante y guitarrista de la banda. Fue el fundador de la banda que se creó en 1980. En el mural se puede ver su mano derecha. <br><br>" +
      "<b>Juanma Suárez</b>: Fue otro de los fundadores de Eskorbuto. Era el bajo eléctrico, aunque en el mural parece el cantante, y fue más conocido como Jualma Suárez. <br><br>" +
      "<b>Pako Galán</b> : Él fue el tercer fundador junto con Juanma y Iosu. Tocaba el tambor en la banda y poco después fue sustituído por Gugu, otro artista. Se muestra misterioso, ya que no podemos ver su cara entera.";
  }
  goMap() {
    this.stopAudio();
    this.route.navigate(['/game']);
  }
  replay() {
    document.getElementById('info').innerHTML = "Y bueno… pues este es el mural, como bien habéis visto en el puzzle. ¿Sabéis qué es lo que no habréis podido ver en el puzzle? Mira… mira acercaros un poco más al mural. Un poco más… El mural está hecho con trozos de baldosa. Bueno eso era solo para que supierais.A lo que vamos, Eskorbuto fue un grupo de punk nacido aquí en Santurtzi. Se creó hace muchos años y ha sido una de las bandas más importantes de punk en Europa. Por otra parte, la banda fue una de las más conocidas del &#8220;rock radical vasco&#8221;. Por eso, a día de hoy, Eskorbuto es un orgullo para el pueblo, sobre todo para la generación de vuestros padres y madres."
    this.stopAudio();
    this.playAudio();
  }
  playAudio() {
    this.sound.play();
  }
  stopAudio() {
    this.sound.stop();
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
  async jugar() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Aviso',
      message: "<img id='alerta'src='../../assets/img/alerta.png'>¿Seguro que quieres ir a la informacion?",
      buttons: [
        {
          text: 'SI',
          role: 'bai',
          handler: () => {
            this.showInfo();
            this.stopAudio();
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
