/* tslint:disable */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModulesService} from "../../services/modules.service";
import {Modulo} from "../../models/Modulo";
import {ActivatedRoute, Router} from "@angular/router";
import {MenuController} from "@ionic/angular";
import {MenuService} from "../../services/menu.service";
import {Observable} from "rxjs";
import {Menu} from "../../models/menu";


@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModulosPage implements OnInit {
  public modules: Modulo[] = [];
  public lvl: any;
  isLoading = false;
  opts: Observable<Menu[]>;

  constructor(
      private _m: ModulesService,
      private _ar: ActivatedRoute,
      private menu: MenuController,
      private _menu: MenuService,
      private router: Router,
  ) { }

  ngOnInit() {
    this._ar.params.subscribe(params => {
      const lvl = params.level;
      if (lvl) {
        this.getModuleByLevel(lvl);
      } else {
        this.getModules();
      }
    });
    this.opts = this._menu.getMenu();
  }

  getModuleByLevel(lvl) {
    this._m.getModuleByLevel(lvl).subscribe(data => {
      this.modules = data.modulos;
      this.lvl = data.lvl;
    });
  }

  getModules() {
    this._m.getModules().subscribe(data => {
      if (data) {
        this.modules = data.modulos;
        this.isLoading = false;
      } else {
        this.isLoading = true;
      }
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }

  redirectTo(item: string) {
    this.router.navigate([item]);
  }
}
