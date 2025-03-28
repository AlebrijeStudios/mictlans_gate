import { Component, OnInit } from '@angular/core';
import { datosescene, escenarios } from 'src/app/interfaces/interfaces';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular';


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
  

  ngOnInit() {
    this.serviciosM.getEscenarios()
    .subscribe((resp)=>{
      console.log(resp[0].payload.doc)
      resp.forEach (obj=>{
        this.EscenariosRecientes.push({
          id: obj.payload.doc.id,
          data: <escenarios>obj.payload.doc.data(),
        });
      });
    });
  }

}


