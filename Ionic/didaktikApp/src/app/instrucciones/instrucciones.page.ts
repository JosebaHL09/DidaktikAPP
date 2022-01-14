import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {

  }
}
