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
    src: ['../assets/audio/Las_Sardinas.mp3'],
    volume: 0.15,
    onplay: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = true;
    },
    onend: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = false;
    }
  });
  sound2 = new Howl({
    src: ['../assets/audio/cancion_estatua.mp3'],
    volume: 0.15,
    onplay: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = true;
    },
    onend: function () {
      (document.getElementById('replay') as HTMLInputElement).disabled = false;
    }
  });

  playAudio1() {
    this.sound1.play()
  }
  playAudio2() {
    document.getElementById('info').innerHTML = "";
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
