import { Component, OnInit } from '@angular/core';
import { datosper, personajes } from 'src/app/interfaces/interfaces';
import { MictlansService } from 'src/app/services/mictlans.service';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
import { ModalController } from '@ionic/angular';


@Component({
  standalone: false,
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  PersonajesRecientes: datosper[] = [];

  constructor(
    private serviciosM: MictlansService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id }
    });
    modal.present();
  }
  

  ngOnInit() {
    this.serviciosM.getDatos()
    .subscribe((resp)=>{
      console.log(resp[0].payload.doc)
      resp.forEach (obj=>{
        this.PersonajesRecientes.push({
          id: obj.payload.doc.id,
          data: <personajes>obj.payload.doc.data(),
        });
      });
    });
  }

}
