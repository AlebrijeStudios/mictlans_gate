import { Component, OnInit, Input } from '@angular/core';
import { escenarios } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MictlansService } from 'src/app/services/mictlans.service';

@Component({
  standalone:false,
  selector: 'app-detalleescene',
  templateUrl: './detalleescene.component.html',
  styleUrls: ['./detalleescene.component.scss'],
})
export class DetalleesceneComponent  implements OnInit {



  @Input() id:any;
  EscenarioDet={} as escenarios;

  constructor(private detalle: MictlansService,
    private modalCtrl:ModalController) { }

    //Funcion para cerrar la ventana de detalles de los Escenarios.
  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() { /*Ejecutamos la llamada el método de detalle y
    almacenamos los datos e información general*/
    this.detalle.getDetallesEscenario(this.id)
    .subscribe((respuesta)=>{
    console.log('Detalle Escenario', respuesta)
    this.EscenarioDet=<escenarios>respuesta;
    });
    }

}
