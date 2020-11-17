import { Injectable } from '@angular/core';
import { OtherService } from './other.service';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(
    private _o: OtherService
  ) { }

  getModules() {
    return this._o.getRequest('/modules');
  }

  getModuleByLevel(level) {
    return this._o.getRequest('/module-level/' + level);
  }

}
