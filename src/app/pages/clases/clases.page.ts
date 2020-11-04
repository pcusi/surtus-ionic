import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clase } from 'src/app/models/Clases';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  public clases: Clase[] = [];

  constructor(
    private _ar: ActivatedRoute,
    private _c: ClassService
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
    });
  }

}
