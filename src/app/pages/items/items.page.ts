import { Component, OnInit } from '@angular/core';
import { MictlansService } from 'src/app/services/mictlans.service';
import { datositem, items } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

 ItemsRecientes: datositem[] = [];

  constructor(
    private serviciosM: MictlansService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.serviciosM.getItems()
    .subscribe((resp)=>{
      console.log(resp[0].payload.doc)
      resp.forEach (obj=>{
        this.ItemsRecientes.push({
          id: obj.payload.doc.id,
          data: <items>obj.payload.doc.data(),
        });
      });
    });
  }

}
