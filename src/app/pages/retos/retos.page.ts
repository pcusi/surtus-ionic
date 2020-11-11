import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {MenuService} from '../../services/menu.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Menu} from '../../models/menu';

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

}
