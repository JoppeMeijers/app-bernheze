import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { controllers } from 'chart.js';
import { defineBase } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ClientService{


  clientsRef: AngularFireList<any>;
  clients$: Observable<any[]>;


idClient;

  constructor(private db: AngularFireDatabase,private router: Router) { 


    
  }

  getClients(){
    this.clientsRef = this.db.list('/clients');
    this.clients$ = this.clientsRef.valueChanges();
    this.clients$.subscribe(res=> console.log(res));
  }




  add(newclient){
    this.idClient = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);

    this.db.object('/clients/' + this.idClient).set({
      id: (this.idClient),
      clientName: (newclient.clientName),
      companyName: (newclient.companyName),
      destination: (newclient.destination),
      email: (newclient.email),
      location: (newclient.location),
      notes: (newclient.notes),
      phonenumber: (newclient.phonenumber),
      kvk: (newclient.kvk),
      btw: (newclient.btw),
      isActive: true,
  });
//  this.clientRef.update({
  //  clientId: (this.idClient),
  //})

}
  update(client, id){
    console.log(id);
    this.db.object('/clients/' + id).update({
      clientName: (client.clientName),
      companyName: (client.companyName),
      destination: (client.destination),
      email: (client.email),
      location: (client.location),
      notes: (client.notes),
      phonenumber: (client.phonenumber),
      kvk: (client.kvk),
      btw: (client.btw)
    })
  }

  delete(id){
    this.db.object('/clients/' + id).update({
      isActive: false,
    });
    this.router.navigateByUrl('/existingCustomers');
  }
}






