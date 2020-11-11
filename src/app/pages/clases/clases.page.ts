/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clase } from 'src/app/models/Clases';
import { ClassService } from 'src/app/services/class.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  public clases: Clase[] = [];
  public title: any;

  constructor(
    private _ar: ActivatedRoute,
    private _c: ClassService,
    private _v: VideoPlayer,
    private platform: Platform
  ) { }

  ngOnInit() {
    this._ar.params.subscribe(params => {
      let id = params.id;
      this.getClassByModuleId(id);
    });
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
}
