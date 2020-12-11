import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../services/challenge.service";
import {OtherService} from "../../services/other.service";
import {Challenge} from "../../models/Challenge";
import {ModalController} from "@ionic/angular";
import {InscriptionService} from "../../services/inscription.service";

@Component({
  selector: 'app-retos-modal',
  templateUrl: './retos-modal.page.html',
  styleUrls: ['./retos-modal.page.scss'],
})
export class RetosModalPage implements OnInit {
  public token: any;
  public ch: Challenge;

  constructor(
      private _ch: ChallengeService,
      private _i: InscriptionService,
      private _modal: ModalController
  ) {
    this.token = this._i.getToken();
    this.ch = new Challenge('', 1);
  }

  ngOnInit() {
  }

  newChallenge(form) {
    this._ch.newChallenge(this.ch, this.token).subscribe((data:any) => {
      if (data) {
        form.reset();
        setTimeout(() => {
          this._modal.dismiss();
        }, 1000);
      }
    }, err => {
      console.log(err);
    });
  }

}
