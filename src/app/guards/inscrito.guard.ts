import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {InscriptionService} from "../services/inscription.service";
import {OtherService} from "../services/other.service";

@Injectable({
  providedIn: 'root'
})
export class InscritoGuard implements CanActivate {

  constructor(
      private _i: InscriptionService,
      private _router: Router
  ) {
  }

  // @ts-ignore
  canActivate():boolean {
    return this._i.isAuth();
  }
  
}
