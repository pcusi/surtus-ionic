import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetosModalPageRoutingModule } from './retos-modal-routing.module';

import { RetosModalPage } from './retos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetosModalPageRoutingModule
  ],
  declarations: [RetosModalPage]
})
export class RetosModalPageModule {}
