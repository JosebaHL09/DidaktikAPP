import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private menu: MenuController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.menu.enable(true)
  }

  async openMenu() {
    await this.menu.open();
  }
  goInstrucciones() {
    this.route.navigate(['/instrucciones']);
  }
  goJuego() {

    this.route.navigate(['/game']);
  }


}
