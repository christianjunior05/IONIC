import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperationPageRoutingModule } from './recuperation-routing.module';

import { RecuperationPage } from './recuperation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperationPageRoutingModule
  ],
  declarations: [RecuperationPage]
})
export class RecuperationPageModule {}
