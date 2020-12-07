import { Injectable } from '@angular/core';
import {OtherService} from "./other.service";
import {Inscritos} from "../models/Inscritos";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(
      private _o: OtherService
  ) { }

  newInscription(insc: Inscritos) {
    return this._o.postRequest('/inscription', insc);
  }
}
