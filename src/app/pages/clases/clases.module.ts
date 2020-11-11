import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesPageRoutingModule } from './clases-routing.module';

import { ClasesPage } from './clases.page';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClasesPageRoutingModule
    ],
    exports: [
        MenuComponent
    ],
    declarations: [ClasesPage, MenuComponent]
})
export class ClasesPageModule {}
