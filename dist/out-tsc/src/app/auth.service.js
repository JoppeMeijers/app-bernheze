var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['home']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new auth.GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AngularFireAuth,
            Router,
            NgZone // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map