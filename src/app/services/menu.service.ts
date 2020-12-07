import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    return this.http.get<Menu[]>('assets/json/opts.json');
  }

  getLearning() {
    return this.http.get('assets/json/aprendizaje.json');
  }

}
