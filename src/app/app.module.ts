import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ModuloPipe } from './pipes/modulo.pipe';
import {HttpLoadingInterceptor} from "./interceptor/http-loading.interceptor";

// @ts-ignore
@NgModule({
  declarations: [AppComponent, ModuloPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxIonicImageViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DocumentViewer
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
