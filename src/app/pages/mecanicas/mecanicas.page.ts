import { Component, OnInit } from '@angular/core';
import { datosmeca, mecanicas } from 'src/app/interfaces/interfaces';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-mecanicas',
  templateUrl: './mecanicas.page.html',
  styleUrls: ['./mecanicas.page.scss'],
})
export class MecanicasPage implements OnInit {

 MecanicasRecientes: datosmeca[] = [];

  constructor(
    private serviciosM: MictlansService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }
  

  ngOnInit() {
    this.serviciosM.getMecanicas()
    .subscribe((resp)=>{
      console.log(resp[0].payload.doc)
      resp.forEach (obj=>{
        this.MecanicasRecientes.push({
          id: obj.payload.doc.id,
          data: <mecanicas>obj.payload.doc.data(),
        });
      });
    });
  }

}

