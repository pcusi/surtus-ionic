import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetosModalPage } from './retos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RetosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetosModalPageRoutingModule {}
