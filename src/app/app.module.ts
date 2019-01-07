import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ClientService } from './client.service';
import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, LOCALE_ID } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddComponent } from './add/add.component';
import { QuestionService } from './question.service';
import { KccComponent } from './kcc/kcc.component';
import { WebComponent } from './web/web.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddComponent,
    KccComponent,
    WebComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'register-user', component: SignUpComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'forgot-password', component: ForgotPasswordComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'verify-email-address', component: VerifyEmailComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'add', component: AddComponent, canActivate: [AuthGuard]},
      { path: 'kcc', component: KccComponent, canActivate: [AuthGuard]},
      { path: 'web', component: WebComponent, canActivate: [AuthGuard]},

    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,  
    AngularFirestoreModule,

  ],
  providers: [AngularFireDatabase, ClientService, AuthService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
