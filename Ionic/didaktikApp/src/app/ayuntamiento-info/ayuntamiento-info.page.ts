import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-ayuntamiento-info',
  templateUrl: './ayuntamiento-info.page.html',
  styleUrls: ['./ayuntamiento-info.page.scss'],
})
export class AyuntamientoInfoPage implements OnInit {

  constructor(private route: Router, /*private document: DocumentViewer*/) { }
  
   /*options: DocumentViewerOptions = {
    title: 'Cuento'
  }*/
  ngOnInit() {
  }
  goMap(){
    this.route.navigate(['/game']);

  }
  verLibro(){
    //this.document.viewDocument('../assets/cuento.pdf', 'application/pdf', options)
  }
 
}
