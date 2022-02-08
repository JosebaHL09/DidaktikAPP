import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage implements OnInit {
   us = [
    {
      "name": "Joseba Hernandez",
      "img": "../../assets/img/user1.jpg"
    }, {
      "name": "Aritz Izarcelaya",
      "img": "../../assets/img/user2.jpg"
    }, {
      "name": "Hodei Monasterio",
      "img": "../../assets/img/user3.jpg"
    }
    
  ];
  upv = [
    {
      "name": "Leire Aurrekoetxea",
      "img": "../../assets/img/user4.jpg"
    }, {
      "name": "Leire Camacho",
      "img": "../../assets/img/user4.jpg"
    }, {
      "name": "Estibaliz Martínez",
      "img": "../../assets/img/user4.jpg"
    }, {
      "name": "Jon Rodríguez",
      "img": "../../assets/img/user4.jpg"
    } 
  ];
  constructor() { }

  ngOnInit() {
  }

}
