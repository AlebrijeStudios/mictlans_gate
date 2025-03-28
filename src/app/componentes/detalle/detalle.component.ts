import { Component, OnInit, Input } from '@angular/core';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular'; 
import { datosescene, datositem, datosmeca, datosper } from 'src/app/interfaces/interfaces';
import { personajes } from 'src/app/interfaces/interfaces';

@Component({
  standalone:false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id:any;
  PersonajeDet={} as personajes;

  constructor(private detalle: MictlansService,
    private modalCtrl:ModalController) { }

    //Funcion para cerrar la ventana de detalles de Personajes, Items, Escenarios y Mecanicas
  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() { /*Ejecutamos la llamada el método de detalle y
    almacenamos los datos e información general*/
    this.detalle.getDetalle(this.id)
    .subscribe((respuesta)=>{
    console.log('Detalle Personaje', respuesta)
    this.PersonajeDet=<personajes>respuesta;
    });
    }

}
