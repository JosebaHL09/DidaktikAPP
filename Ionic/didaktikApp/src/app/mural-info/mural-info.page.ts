import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mural-info',
  templateUrl: './mural-info.page.html',
  styleUrls: ['./mural-info.page.scss'],
})
export class MuralInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  showInfo() {
    document.getElementById('info').innerHTML =
      "<b>Iosu Expósito</b>: Fue el cantante y guitarrista de la banda. Fue el fundador de la banda que se creó en 1980. En el mural se puede ver su mano derecha. <br>" +
      "<b>Juanma Suárez</b>: Fue otro de los fundadores de Eskorbuto. Era el bajo eléctrico, aunque en el mural parece el cantante, y fue más conocido como Jualma Suárez. <br>" +
      "<b>Pako Galán</b> : Él fue el tercer fundador junto con Juanma y Iosu. Tocaba el tambor en la banda y poco después fue sustituído por Gugu, otro artista. Se muestra misterioso, ya que no podemos ver su cara entera.";
  }
  goMap(){
    this.route.navigate(['/game']);
  }
}
