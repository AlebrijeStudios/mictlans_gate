import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecanicasPageRoutingModule } from './mecanicas-routing.module';

import { MecanicasPage } from './mecanicas.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecanicasPageRoutingModule,
    ComponentesModule,
    
  ],
  declarations: [MecanicasPage]
})
export class MecanicasPageModule {}
