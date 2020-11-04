import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

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
      console.log(data);
    });
  }

}
