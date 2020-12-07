import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, ModalController} from '@ionic/angular';
import {MenuService} from '../../services/menu.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Menu} from '../../models/menu';
import {RetosModalPage} from "../../modals/retos-modal/retos-modal.page";
import { IonRouterOutlet } from '@ionic/angular';
import {ChallengeService} from "../../services/challenge.service";
import {InscriptionService} from "../../services/inscription.service";
import {Challenge} from "../../models/Challenge";

@Component({
  selector: 'app-retos',
  templateUrl: './retos.page.html',
  styleUrls: ['./retos.page.scss'],
})
export class RetosPage implements OnInit {

  opts: Observable<Menu[]>;
  public token: string;
  public challenges: Challenge[] = [];

  constructor(
      private menu: MenuController,
      private _menu: MenuService,
      private router: Router,
      private _modal: ModalController,
      private _alert: AlertController,
      private routerOutlet: IonRouterOutlet,
      private _ch: ChallengeService,
      private _i: InscriptionService
  ) {
    this.token = this._i.getToken();
  }

  ngOnInit() {
    this.opts = this._menu.getMenu();
    this.getUserChallenges();
  }

  toggleMenu() {
    this.menu.toggle();
  }

  redirectTo(item: string) {
    this.router.navigate([item]);
  }

  async newChallenge() {
    const modal = await this._modal.create({
      component: RetosModalPage,
      cssClass: 'new-modal',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  getUserChallenges() {
    this._ch.getUserChallenges(this.token).subscribe((data: any) => {
        this.challenges = data.retos;
    });
  }

}
