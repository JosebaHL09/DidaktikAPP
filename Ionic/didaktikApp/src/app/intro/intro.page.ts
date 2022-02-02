import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  img:string;

  constructor(public router:Router, private menu: MenuController) { 
    setTimeout(()=>{
      this.router.navigateByUrl('login');
    },2000);
  }

  ngOnInit() {
    this.img ='../../assets/img/imgintro.png';
    this.menu.enable(false);
  }

  ngOnDestroy(){
 
  }
}
