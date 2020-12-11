import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {LoadingController} from "@ionic/angular";
import {delay, finalize, retryWhen, take, tap} from "rxjs/operators";

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(
      private loadingCtrl: LoadingController
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingCtrl.getTop().then(isLoading => {
      if (!isLoading) {
        this.loadingCtrl.create({
          spinner: 'circular',
          translucent: true
        }).then(loading => loading.present());
      }
    }), finalize(() => {
      this.loadingCtrl.getTop().then(isLoading => {
        if (isLoading) {
          this.loadingCtrl.dismiss();
        }
      });
    });
    return next.handle(request).pipe(retryWhen(err => {
      return err.pipe(
          tap(() => {
            console.log('loading')
          })
      );
    }));
  }
}
