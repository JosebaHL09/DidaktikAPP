import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { MenuController } from '@ionic/angular'


@Component({
  selector: 'app-estatua-info',
  templateUrl: './estatua-info.page.html',
  styleUrls: ['./estatua-info.page.scss'],
})
export class EstatuaInfoPage implements OnInit {

  constructor(private route: Router) { }

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
      (document.getElementById('btn') as HTMLInputElement).disabled = false;
      (document.getElementById('replay') as HTMLInputElement).disabled = false;
    }
  });
  sound2 = new Howl({
    src: ['../assets/audio/cancion_estatua.mp3'],
    volume: 0.15,
    onplay: function () {
      (document.getElementById('cancion') as HTMLInputElement).disabled = true;
    },
    onend: function () {
      (document.getElementById('cancion') as HTMLInputElement).disabled = false;
    }
  });

  playAudio1() {
    document.getElementById('info').innerHTML = "Una pregunta, si os pido que penséis qué harías si quisierais comprar pescado" +
      "¿cuál sería la respuesta ? Igual lo primero que harías sería decirle a aita o ama, pero.. ¿No es cierto que lo más" +
      "probable es que fuerais a la pescadería ? Pues hace muchos años tendrías que comprarle el pescado a aquellas" +
      "mujeres que se dedicaban a comprar el pescado que entraba en el puerto para luego venderlo en lugares cercanos.La" +
      "estatua que tenéis enfrente es la representación de ese oficio que hoy en día ya no existe.El paso del tiempo y" +
      "el desarrollo de medios más eficaces para la conservación y distribución de alimentos caducos hicieron que" +
      "desapareciera este comercio.Curioso, ¿verdad ? Ahora escuchemos una de las canciones que se creó en homenaje a" +
      "estas mujeres, a ver si juntos podemos entender un poco mejor lo que hacían."
      this.sound1.play()
  }
  playAudio2() {
    document.getElementById('title').innerHTML = "Las Sardineras";

    this.sound2.play()
  }
  goMap() {
    this.sound1.stop()
    this.sound2.stop()
    this.route.navigate(['/game']);
  }

  disableBtn() {
    this.disable = !this.disable;
  }

}
