import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remo-juego',
  templateUrl: './remo-juego.page.html',
  styleUrls: ['./remo-juego.page.scss'],
})
export class RemoJuegoPage implements OnInit {
  

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goMap() {
    
    this.route.navigate(['/game']);
   
  }

}
