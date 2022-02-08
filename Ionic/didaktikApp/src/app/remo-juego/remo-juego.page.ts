import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-remo-juego',
  templateUrl: './remo-juego.page.html',
  styleUrls: ['./remo-juego.page.scss'],
})
export class RemoJuegoPage implements OnInit {


  constructor(private route: Router, private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false)
  }

  goMap() {
    this.menu.enable(true)
    this.route.navigate(['/game']);

  }

}
