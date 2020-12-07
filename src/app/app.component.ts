import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {OtherService} from "./services/other.service";
import {Router} from "@angular/router";
import {InscriptionService} from "./services/inscription.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _i: InscriptionService,
    private _router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this._i.authState.subscribe(state => {
        if (state) this._router.navigate(['/principal']);
        else this._router.navigate(['/iniciar']);
      })
    });
  }
}
