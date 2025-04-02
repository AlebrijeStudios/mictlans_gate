import { Component, OnInit } from '@angular/core';
import { datosnoso, nosotros } from 'src/app/interfaces/interfaces';
import { MictlansService } from 'src/app/services/mictlans.service';
import { ModalController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-sobrenosotros',
  templateUrl: './sobrenosotros.page.html',
  styleUrls: ['./sobrenosotros.page.scss'],
})
export class SobrenosotrosPage implements OnInit {

NosotrosRecientes: datosnoso[] = [];

  constructor(
    private serviciosM: MictlansService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }
  

  ngOnInit() {
    this.serviciosM.getNosotros()
    .subscribe((resp)=>{
      console.log(resp[0].payload.doc)
      resp.forEach (obj=>{
        this.NosotrosRecientes.push({
          id: obj.payload.doc.id,
          data: <nosotros>obj.payload.doc.data(),
        });
      });
    });
  }

}

