import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import 'jqueryui';
import 'jquery-ui-touch-punch';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mural-juego',
  templateUrl: './mural-juego.page.html',
  styleUrls: ['./mural-juego.page.scss'],
})
export class MuralJuegoPage implements OnInit {

  constructor(private route: Router, private menu: MenuController, public alertController: AlertController) { }



  ngAfterViewInit() {

    var doneCheck = 0;
    var curZindex = 0;
    $(".pic")
      .draggable({
        containment: "body",
        scroll: false
      })
      .on("mousedown", function () {
        $(this)
          .css("z-index", curZindex + 1)
          .children()
          .addClass("grabbed")
          .mouseup(function () {
            $(this).removeClass("grabbed");
          });
        curZindex++;
      });

    shuffle();
    dropSet();

    function shuffle() {
      for (var k = 1; k <= 5; k++)
        for (var i = 1; i <= 5; i++) {
          var posHolderLeft;
          var posHolderTop;
          var randIndex = Math.floor(Math.random() * 5) + 1;
          var randIndex2 = Math.floor(Math.random() * 5) + 1;
          posHolderTop = $(".pic-" + i + "-" + k).css("top");
          posHolderLeft = $(".pic-" + i + "-" + k).css("left");
          $(".pic-" + i + "-" + k).css(
            "top",
            $(".pic-" + randIndex + "-" + randIndex2).css("top")
          );
          $(".pic-" + randIndex + "-" + randIndex2).css("top", posHolderTop);
          $(".pic-" + i + "-" + k).css(
            "left",
            $(".pic-" + randIndex + "-" + randIndex2).css("left")
          );
          $(".pic-" + randIndex + "-" + randIndex2).css("left", posHolderLeft);
        }
    }
    function dropSet() {
      for (var i = 1; i <= 5; i++)
        for (var k = 1; k <= 5; k++) {
          $(".dz-" + i + "-" + k).droppable({
            accept: ".pic-" + i + "-" + k,
            drop: function (event, ui) {
              doneCheck++;
              $(ui.helper[0]).css("top", $(this).position().top);
              $(ui.helper[0]).css("left", $(this).position().left);
              //$(ui.helper[0]).draggable("disable").css("z-index", "1");
              if (doneCheck == 25) {
                $(".pic").css("border", "none");
                //alert("Good job!");
                $(".marronero").css("display", "block")


              }
            }
          });
        }
    }


  }

  goMap() {
    this.route.navigateByUrl('/game', {
      replaceUrl: true
    });
  }

  goInfo() {
    this.route.navigateByUrl('/mural-info', {
      replaceUrl: true
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }
  async showMarker() {
    const alert = await this.alertController.create({
      cssClass: 'successalert',
      header: 'Aviso',
      message: "<img id='alerta'src='../../assets/img/alerta.png'>??Seguro que quieres salir?",
      buttons: [
        {
          text: 'SI',
          role: 'bai',
          handler: () => {
            this.goInfo();
          }
        },
        {
          text: 'NO',
          role: 'bai',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }
}
