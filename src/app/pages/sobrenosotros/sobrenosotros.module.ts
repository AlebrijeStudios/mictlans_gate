import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrenosotrosPageRoutingModule } from './sobrenosotros-routing.module';

import { SobrenosotrosPage } from './sobrenosotros.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrenosotrosPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [SobrenosotrosPage]
})
export class SobrenosotrosPageModule {}
