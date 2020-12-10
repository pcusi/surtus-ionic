import { Injectable } from '@angular/core';
import { OtherService } from './other.service';
import {Clase} from "../models/Clases";
import {Subject} from 'rxjs/Subject';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private refreshClass$ = new Subject<void>();

  get _refreshClass() {
    return this.refreshClass$;
  }

  constructor(
    private _o: OtherService
  ) { }

  getClassByModuleId(id) {
    return this._o.getRequest('/classes/' + id);
  }

  classView(id, clase?: Clase) {
    return this._o.putRequest('/viewed/' +id, clase)
        .pipe(tap(() => {
          this.refreshClass$.next();
        }));
  }
}
