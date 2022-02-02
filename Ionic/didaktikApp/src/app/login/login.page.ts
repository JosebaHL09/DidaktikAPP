import { Component } from '@angular/core';
import { IonRouterOutlet, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  user = {
    nombre: 'Peter'
  };

  userNombre;

  constructor(public toastController: ToastController, public loadingController: LoadingController, public router: Router, private routerOutlet: IonRouterOutlet, private menu: MenuController) { }

  async setName(x: string) {
    await Storage.set({
      key: 'name',
      value: x,
    });
  };

  async shared() {
    await Share.share({
      title: 'Joseba sapo',
      text: 'Hasbula canijo',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

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
    this.router.navigateByUrl('home', navigationExtras);
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
  ngOnInit(): void {
    this.routerOutlet.swipeGesture = false;
    this.menu.enable(false);
  }
}
