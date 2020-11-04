import { Injectable } from '@angular/core';
import { OtherService } from './other.service';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private _o: OtherService
  ) { }

  getClassByModuleId(id) {
    return this._o.getRequest('/classes/' + id);
  }
}
