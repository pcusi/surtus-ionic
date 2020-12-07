import { Component, OnInit } from '@angular/core';
import { Modulo } from 'src/app/models/Modulo';
import { ModulesService } from 'src/app/services/modules.service';
import {OtherService} from "../../services/other.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public identity: [];
  public modules: Modulo[] = [];

  constructor(
    private _m: ModulesService,
    private _o: OtherService
  ) {
    this.identity = this._o.getIdentity();
  }

  ngOnInit() {
    this.getModules();
  }

  getModules() {
    return this._m.getModules().subscribe(data => {
      if (data) {
        this.modules = data.modulos;
      }
    });
  }
}
