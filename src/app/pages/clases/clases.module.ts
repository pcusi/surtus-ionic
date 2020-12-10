import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesPageRoutingModule } from './clases-routing.module';

import { ClasesPage } from './clases.page';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import {NgxIonicImageViewerModule} from "ngx-ionic-image-viewer";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClasesPageRoutingModule,
        NgxIonicImageViewerModule
    ],
    exports: [
        MenuComponent
    ],
    declarations: [ClasesPage, MenuComponent]
})
export class ClasesPageModule {}
