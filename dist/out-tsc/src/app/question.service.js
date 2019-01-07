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
var QuestionService = /** @class */ (function () {
    function QuestionService(db, router) {
        this.db = db;
        this.router = router;
        this.projectsRef = db.list('/projects');
        this.projects$ = this.projectsRef.valueChanges();
    }
    QuestionService.prototype.add = function (newQuestion) {
        this.idQuestion = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
        this.db.object('/Questions/' + this.idQuestion).set({
            questionId: (this.idQuestion),
            subject: (newQuestion.subject),
            desc: (newQuestion.type),
            description: (newQuestion.description),
            isActive: true
        });
    };
    QuestionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFireDatabase, Router])
    ], QuestionService);
    return QuestionService;
}());
export { QuestionService };
//# sourceMappingURL=question.service.js.map