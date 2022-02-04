import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { MenuController } from '@ionic/angular'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-estatua-info',
  templateUrl: './estatua-info.page.html',
  styleUrls: ['./estatua-info.page.scss'],
})
export class EstatuaInfoPage implements OnInit {

  constructor(private route: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.playAudio1();
  }

  disable
  sound1 = new Howl({
    src: ['../assets/audio/Las_Sardineras.mp3'],
    volume: 0.15,
    onplay: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = true;

    },
    onend: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = false;
      (document.getElementById('cancion') as HTMLInputElement).disabled = false;
    }
  });
  sound2 = new Howl({
    src: ['../assets/audio/cancion_estatua.mp3'],
    volume: 0.15,
    onplay: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = true;
      (document.getElementById('cancion') as HTMLInputElement).disabled = true;
    },
    onend: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = false;
      (document.getElementById('cancion') as HTMLInputElement).disabled = false;
    }
  });

  playAudio1() {
    this.sound1.play()
    document.getElementById('content').innerHTML = "<p>Una pregunta, si os pido que penséis qué harías si quisierais comprar pescado" +
      "¿cuál sería la respuesta ? Igual lo primero que harías sería decirle a aita o ama, pero.. ¿No es cierto que lo más" +
      "probable es que fuerais a la pescadería ? Pues hace muchos años tendrías que comprarle el pescado a aquellas" +
      "mujeres que se dedicaban a comprar el pescado que entraba en el puerto para luego venderlo en lugares cercanos.La" +
      "estatua que tenéis enfrente es la representación de ese oficio que hoy en día ya no existe.El paso del tiempo y" +
      "el desarrollo de medios más eficaces para la conservación y distribución de alimentos caducos hicieron que" +
      "desapareciera este comercio.Curioso, ¿verdad ? Ahora escuchemos una de las canciones que se creó en homenaje a" +
      "estas mujeres, a ver si juntos podemos entender un poco mejor lo que hacían.</p>"
  }
  playAudio2() {
    document.getElementById('title').innerHTML = "Las Sardineras";
    document.getElementById('content').innerHTML =
      "Desde Santurce a Bilbao <br> " +
      "Vengo por toda la orilla,<br>" +
      "Con mi salla remangada <br>" +
      "Luciendo la pantorrilla,<br>" +
      "Vengo deprisa y corriendo<br>" +
      "Porque me oprime el corsé,<br>" +
      "Voy gritando por las calles<br>" +
      "¡Quién compra!<br>" +
      "Sardinas frescué<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>" +
      "La del primero me llama,<br>" +
      "La del segundo también,<br>" +
      "La del tercero me dice<br>" +
      "¿A cómo las trae usted ?<br>" +
      "Y yo le digo que, a cuatro,<br>" +
      "Ella me dice que, a tres,<br>" +
      "Cojo la cesta y me marcho,<br>" +
      "¡Quién compra!<br>" +
      "Sardinas frescué<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>" +
      "Y yo le digo que, a cuatro,<br>" +
      "Ella me dice que, a tres,<br>" +
      "Cojo la cesta y me marcho,<br>" +
      "¡Quién compra!<br>" +
      "Sardinas frescué<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>" +
      "Mis sardinitas<br>" +
      "Que ricas son<br>" +
      "Son de Santurce<br>" +
      "Las traigo yo<br>"
    this.sound2.play()
  }
  goMap() {
    this.sound1.stop()
    this.sound2.stop()
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
  async jugar() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Aviso',
      message: "<img id='alerta'src='../../assets/img/alerta.png'>¿Quieres salar el audio y escuchar la cancion?",
      buttons: [
        {
          text: 'SI',
          role: 'bai',
          handler: () => {
            this.sound1.stop();
            this.playAudio2();
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
