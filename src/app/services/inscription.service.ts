import { Injectable } from '@angular/core';
import {OtherService} from "./other.service";
import {Inscritos} from "../models/Inscritos";
import {BehaviorSubject} from "rxjs";
import {Platform} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  authState = new BehaviorSubject(false);
  public token: string;

  constructor(
      private _o: OtherService,
      private _p: Platform
  ) {
    this._p.ready().then(() => {
      this.checkToken();
    });
  }

  newInscription(insc: Inscritos) {
    return this._o.postRequest('/inscription', insc);
  }

  login(insc: Inscritos) {
    return this._o.postRequest('/login', insc);
  }

  isAuth(): boolean {
    return this.authState.value;
  }

  checkToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token != null) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token != null) {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  setToken(token) {
    let tokenStorage = localStorage.setItem('token', JSON.stringify(token));
    this.authState.next(true);
    return tokenStorage;
  }

  setIdentity(identity) {
    let identityStorage = localStorage.setItem('identity', JSON.stringify(identity));
    return identityStorage;
  }

}
