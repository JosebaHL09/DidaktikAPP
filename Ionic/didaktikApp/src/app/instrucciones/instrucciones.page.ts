import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {
  visible:boolean = false;
  showCard() {
    this.visible = !this.visible
  }
  constructor(private route: Router) { }

  ngOnInit() {

  }

  goInstrucciones() {
    this.route.navigate(['/castillo-info']);
  }
}
