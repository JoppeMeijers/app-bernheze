var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Component({
            selector: 'app-verify-email',
            templateUrl: './verify-email.component.html',
            styleUrls: ['./verify-email.component.css']
        }),
        __metadata("design:paramtypes", [AuthService])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());
export { VerifyEmailComponent };
//# sourceMappingURL=verify-email.component.js.map