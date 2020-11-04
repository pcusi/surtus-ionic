import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  opts: Observable<Menu[]>;

  constructor(
    private menu: MenuController,
    private _menu: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.opts = this._menu.getMenu();
  }

  toggleMenu() {
    this.menu.toggle();
  }

  redirectTo(item: string) {
    this.router.navigate([item]);
  }

}

