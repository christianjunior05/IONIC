import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperationPage } from './recuperation.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperationPageRoutingModule {}
