import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuneaService } from '../services/gunea.service';
import { Gunea } from '../interfaces/gunea';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {
  visible: boolean = false;
  guneak: Gunea[] = [];
  refresh = false
  constructor(private route: Router,private guneaService: GuneaService) { }

  ngOnInit() {
    this.getGunea();
    console.log(this.guneak)
  }
  getGunea(): void {
    this.guneaService.getGuneak(this.refresh)
      .subscribe(data => { this.guneak = data; },
        error => console.log('Error::' + error));
  }
  goInstrucciones() {
    this.route.navigate(['/castillo-info']);
  }
  showCard() {
    this.visible = !this.visible
  }
}
