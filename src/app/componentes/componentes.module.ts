import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleesceneComponent } from './detalleescene/detalleescene.component';


@NgModule({
  declarations: [HeaderComponent, DetalleComponent, DetalleesceneComponent],
  exports:[HeaderComponent, DetalleComponent, DetalleesceneComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
