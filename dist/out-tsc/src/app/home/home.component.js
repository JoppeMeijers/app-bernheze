var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        this.db = db;
        this.idGenerate = 0;
        this.backupsRef = db.list('/backups');
        this.backups$ = this.backupsRef.valueChanges();
        this.backups$.subscribe(function (res) { return console.log(res); });
        console.log(this.backups$);
    }
    HomeComponent.prototype.add = function (backup) {
        this.db.object('/backups/' + this.idGenerate).set({
            naam: (backup.value),
            url: "test.nl",
            datum: "01-01-2019",
            id: this.idGenerate
        });
        backup.value = '';
        this.idGenerate++;
    };
    HomeComponent.prototype.delete = function (backup) {
        this.db.object('/backups/' + backup).remove();
    };
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [AngularFireDatabase])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map