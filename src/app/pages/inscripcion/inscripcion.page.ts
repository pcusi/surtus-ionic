import { Component, OnInit } from '@angular/core';
import {Inscritos} from "../../models/Inscritos";
import {InscriptionService} from "../../services/inscription.service";

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.page.html',
  styleUrls: ['./inscripcion.page.scss'],
})
export class InscripcionPage implements OnInit {
  public inscritos: Inscritos;

  constructor(
      private _ins: InscriptionService
  ) {
    this.inscritos = new Inscritos('', '', '', '');
  }

  ngOnInit() {
  }

  newInscription(form) {
    this._ins.newInscription(this.inscritos).subscribe(data => {
      if (data) {
        console.log(data);
      }
    });
  }

}
