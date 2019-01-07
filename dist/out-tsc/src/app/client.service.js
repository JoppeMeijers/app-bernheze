var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var ClientService = /** @class */ (function () {
    function ClientService(db, router) {
        this.db = db;
        this.router = router;
    }
    ClientService.prototype.getClients = function () {
        this.clientsRef = this.db.list('/clients');
        this.clients$ = this.clientsRef.valueChanges();
        this.clients$.subscribe(function (res) { return console.log(res); });
    };
    ClientService.prototype.add = function (newclient) {
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
    };
    ClientService.prototype.update = function (client, id) {
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
        });
    };
    ClientService.prototype.delete = function (id) {
        this.db.object('/clients/' + id).update({
            isActive: false,
        });
        this.router.navigateByUrl('/existingCustomers');
    };
    ClientService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFireDatabase, Router])
    ], ClientService);
    return ClientService;
}());
export { ClientService };
//# sourceMappingURL=client.service.js.map