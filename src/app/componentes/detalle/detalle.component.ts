import { Component, OnInit } from '@angular/core';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular'; 
import { datosescene, datositem, datosmeca, datosper } from 'src/app/interfaces/interfaces';


@Component({
  standalone:false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  constructor(private detalle: MictlansService,
    private modalCtrl:ModalController) { }

    //Funcion para cerrar la ventana de detalles de Personajes, Items, Escenarios y Mecanicas
  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

}
