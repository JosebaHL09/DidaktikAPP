import { Component } from '@angular/core';
import { IonRouterOutlet, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import * as $ from "jquery";
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  user = {
    nombre: 'Peter'
  };

  userNombre;
  i = 0;

  constructor(public toastController: ToastController, public loadingController: LoadingController, public router: Router, private routerOutlet: IonRouterOutlet, private route: Router, private menu: MenuController) { }

  ngOnInit(): void {
    this.menu.enable(false)
    this.routerOutlet.swipeGesture = false;

    $("#3").css("display", "none");
    $("#4").css("display", "none");
    $("#5").css("display", "none");
    $("#6").css("display", "none");
    $(".boton").css("display", "none");


  }

  async setName(x: string) {
    await Storage.set({
      key: 'name',
      value: x,
    });
  };

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Tienes que introducir un nombre',
      duration: 1000
    });
    toast.present();
  }

  async clickBoton() {
    if (this.userNombre == null) {
      this.openToast();
    }
    else {
      this.presentLoading();
      setTimeout(() => {
        this.abrirMenu();
        this.route.navigate(['/home']);
      }, 2000);

    }
  }
  async abrirMenu() {
    let apodo = this.userNombre[0].toUpperCase() + this.userNombre.slice(1).toLowerCase();
    this.user.nombre = apodo;
    this.setName(apodo);
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigateByUrl('menu', navigationExtras);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espera...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
  async shared() {
    await Share.share({
      title: 'Cuestionario Previo',
      text: "1-" + $("#value1").val() + "\n 2-" + $("#value2").val() + "\n 3-" + $("#value3").val() + " ",
      dialogTitle: 'Compartelo con tus amigos',
    });
  }

  async sig() {
    this.i = this.i + 1;

    if (this.i == 1) {

      $("#3").css("display", "block");
      $("#4").css("display", "block");

      $("#1").css("display", "none");
      $("#2").css("display", "none");

    }
    if (this.i == 2) {

      $("#5").css("display", "block");
      $("#6").css("display", "block");

      $("#3").css("display", "none");
      $("#4").css("display", "none");

      $("#boton").text("Finalizar");

    }

    if (this.i == 3) {
      this.shared();
      $(".boton").css("display", "block");
      $("#boton").css("display", "none");
      $("#5").css("display", "none");
      $("#6").css("display", "none");

    }
  }


}