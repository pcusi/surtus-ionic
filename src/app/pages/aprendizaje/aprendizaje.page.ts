import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Aprendizaje} from "../../models/Aprendizaje";
import {MenuController} from "@ionic/angular";
import {Observable} from "rxjs";
import {Menu} from "../../models/menu";

@Component({
  selector: 'app-aprendizaje',
  templateUrl: './aprendizaje.page.html',
  styleUrls: ['./aprendizaje.page.scss'],
})
export class AprendizajePage implements OnInit {
  public aprendizaje: Aprendizaje[];
  opts: Observable<Menu[]>;

  constructor(
      private _m: MenuService,
      private menu: MenuController,
      private _menu: MenuService,
  ) { }

  ngOnInit() {
    this.getLearning();
    this.opts = this._menu.getMenu();
  }

  getLearning() {
    this._m.getLearning().subscribe((data: any) => {
        this.aprendizaje = data.aprendizaje;
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }

}
