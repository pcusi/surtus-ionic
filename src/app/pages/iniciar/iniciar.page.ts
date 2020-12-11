import { Component, OnInit } from '@angular/core';
import {InscriptionService} from "../../services/inscription.service";
import {Inscritos} from "../../models/Inscritos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
  public inscritos: Inscritos;

  constructor(
      private _ins: InscriptionService,
      private _router: Router
  ) {
    this.inscritos = new Inscritos('', '', '', '');
  }

  ngOnInit() {
  }

  login(form) {
    this._ins.login(this.inscritos).subscribe((data: any) => {
        if (data) {
          this._ins.setToken(data.token)
          this._ins.setIdentity(data.user);
          this._router.navigate(['/onboarding']);
          form.reset();
        }
    }, err => {
      console.log(err);
    });
  }

}
