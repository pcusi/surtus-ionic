import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModulosPageRoutingModule } from './modulos-routing.module';

import { ModulosPage } from './modulos.page';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModulosPageRoutingModule
  ],
  declarations: [ModulosPage, MenuComponent]
})
export class ModulosPageModule {}
