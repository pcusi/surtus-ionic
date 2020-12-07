import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController, ModalController} from '@ionic/angular';
import {MenuService} from '../../services/menu.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Menu} from '../../models/menu';
import {RetosModalPage} from "../../modals/retos-modal/retos-modal.page";

@Component({
  selector: 'app-retos',
  templateUrl: './retos.page.html',
  styleUrls: ['./retos.page.scss'],
})
export class RetosPage implements OnInit {

  opts: Observable<Menu[]>;

  constructor(
      private menu: MenuController,
      private _menu: MenuService,
      private router: Router,
      private _modal: ModalController,
      private _alert: AlertController
  ) { }

  ngOnInit() {
    this.opts = this._menu.getMenu();
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
      swipeToClose: true
    });
    return await modal.present();
  }

}
