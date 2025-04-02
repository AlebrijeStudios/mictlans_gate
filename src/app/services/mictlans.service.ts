import { Injectable } from '@angular/core';
import { datosper,datositem,datosescene,datosmeca } from '../interfaces/interfaces'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { personajes } from '../interfaces/interfaces';
import { escenarios } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MictlansService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getDatos() {
    return this.firestore.collection('personajes').snapshotChanges();
  }

  getDetalle(id: string) {
    return this.firestore.collection('personajes').doc<personajes>(id).valueChanges();
  }

  getControles() {
    return this.firestore.collection('controles').snapshotChanges();
  }

  getItems() {
    return this.firestore.collection('items').snapshotChanges();
  }

  getMecanicas() {
    return this.firestore.collection('mecanicas').snapshotChanges();
  }

  getEscenarios() {
    return this.firestore.collection('escenarios', ref => ref.orderBy('nivel', 'asc'))
      .snapshotChanges();
  }  

  getDetallesEscenario(id: string) {
    return this.firestore.collection('escenarios').doc<escenarios>(id).valueChanges();
  }

  getNosotros() {
    return this.firestore.collection('nosotros').snapshotChanges();
  }

}
