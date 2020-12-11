import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
      private _router: Router
  ) { }

  ngOnInit() {
    this.goToHome()
  }

  goToHome() {
    setTimeout(() => {
      this._router.navigate(['/principal']);
    }, 4000);
  }

}
