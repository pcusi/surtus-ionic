import { Injectable } from '@angular/core';
import {OtherService} from "./other.service";
import {Challenge} from "../models/Challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
      private _o: OtherService
  ) { }

  newChallenge(ch: Challenge, token:any) {
    return this._o.postToken('/new-challenge', token,  ch);
  }

  getUserChallenges(token: any) {
    return this._o.getRequestToken('/user-challenges', token);
  }

}
