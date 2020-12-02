/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Clase } from 'src/app/models/Clases';
import { ClassService } from 'src/app/services/class.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {MenuController, Platform} from '@ionic/angular';
import {MenuService} from "../../services/menu.service";
import {Observable} from "rxjs";
import {Menu} from "../../models/menu";

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  public clases: Clase[] = [];
  public title: any;
  opts: Observable<Menu[]>;

  constructor(
    private _ar: ActivatedRoute,
    private _c: ClassService,
    private _v: VideoPlayer,
    private platform: Platform,
    private menu: MenuController,
    private _menu: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._ar.params.subscribe(params => {
      let id = params.id;
      this.getClassByModuleId(id);
    });
    this.opts = this._menu.getMenu();
  }

  getClassByModuleId(id) {
    this._c.getClassByModuleId(id).subscribe(data => {
      this.clases = data.clases;
      this.title = data.clases[0].titulo;
    });
  }

  startVideo(video: any) {
    if (this.platform.is('cordova')) {
      this._v.play(video).then(() => {
        console.log(video);
      }).catch(err => {
        console.log(err);
      });
    } else {
      console.log('No cordova')
    }
  }

  toggleMenu() {
    this.menu.toggle();
  }

  redirectTo(item: string) {
    this.router.navigate([item]);
  }
}
