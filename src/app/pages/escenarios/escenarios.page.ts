import { Component, OnInit } from '@angular/core';
import { datosescene, escenarios } from 'src/app/interfaces/interfaces';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular';
import { DetalleesceneComponent } from 'src/app/componentes/detalleescene/detalleescene.component';


@Component({
  standalone: false,
  selector: 'app-escenarios',
  templateUrl: './escenarios.page.html',
  styleUrls: ['./escenarios.page.scss'],
})
export class EscenariosPage implements OnInit {

EscenariosRecientes: datosescene[] = [];

  constructor(
    private serviciosM: MictlansService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }
  
    async verDetalleScene(id: string) {
      const modal = await this.modalCtrl.create({
        component: DetalleesceneComponent,
        componentProps: { id }
      });
      modal.present();
    }

    ngOnInit() {
      this.serviciosM.getEscenarios()
        .subscribe((resp) => {
          this.EscenariosRecientes = resp.map(obj => ({
            id: obj.payload.doc.id,
            data: <escenarios>obj.payload.doc.data(),
          })).sort((a, b) => a.data.nivel - b.data.nivel); // Ordenar por nivel
          
          console.log(this.EscenariosRecientes); // Verificar el orden
        });
    }
    
}


