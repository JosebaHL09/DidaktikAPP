import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuntamiento-info',
  templateUrl: './ayuntamiento-info.page.html',
  styleUrls: ['./ayuntamiento-info.page.scss'],
})
export class AyuntamientoInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goMap(){
    this.route.navigate(['/game']);

  }
}
