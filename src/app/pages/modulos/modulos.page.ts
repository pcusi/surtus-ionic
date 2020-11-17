/* tslint:disable */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModulesService} from "../../services/modules.service";
import {Modulo} from "../../models/Modulo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModulosPage implements OnInit {
  public modules: Modulo[];
  public lvl: any;

  constructor(
      private _m: ModulesService,
      private _ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this._ar.params.subscribe(params => {
      const lvl = params.level;
      this.getModuleByLevel(lvl);
    });
  }

  getModuleByLevel(lvl) {
    this._m.getModuleByLevel(lvl).subscribe(data => {
      this.modules = data.modulos;
      this.lvl = data.lvl;
    });
  }
}
