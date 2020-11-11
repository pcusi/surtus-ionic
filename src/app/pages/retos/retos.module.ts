import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosPageRoutingModule } from './retos-routing.module';

import { RetosPage } from './retos.page';
import {MenuComponent} from '../../shared/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosPageRoutingModule
  ],
  declarations: [RetosPage, MenuComponent]
})
export class RetosPageModule {}
