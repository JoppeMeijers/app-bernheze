var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { NgForm } from '@angular/forms';
var AddComponent = /** @class */ (function () {
    function AddComponent(QuestionService, route) {
        this.QuestionService = QuestionService;
        this.route = route;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (event) {
            _this.id = event.id;
        });
    };
    AddComponent.prototype.add = function (newQuestion) {
        this.QuestionService.add(newQuestion);
        this.p.resetForm();
    };
    __decorate([
        ViewChild("p"),
        __metadata("design:type", NgForm)
    ], AddComponent.prototype, "p", void 0);
    AddComponent = __decorate([
        Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.css']
        }),
        __metadata("design:paramtypes", [QuestionService, ActivatedRoute])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=add.component.js.map