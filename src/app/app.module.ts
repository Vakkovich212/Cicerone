import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { AccountDialogComponentComponent } from './account-dialog-component/account-dialog-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    AccountDialogComponentComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyDK93vYrk1XOlWOOZvUVd1RP7gDe9PZW5E",
      authDomain: "cicerone-e5d01.firebaseapp.com",
      databaseURL: "https://cicerone-e5d01.firebaseio.com",
      projectId: "cicerone-e5d01",
      storageBucket: "cicerone-e5d01.appspot.com",
      messagingSenderId: "703609830821"
    },
    () => 'Cicerone',
                {
                  enableFirestoreSync: true, // enable/disable autosync users with firestore
                  toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
                  toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
                  authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
                  authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
                  passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
                  passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
                  // Same as password but for the name
                  nameMaxLength: 50,
                  nameMinLength: 2,
                  // If set, sign-in/up form is not available until email has been verified.
                  // Plus protected routes are still protected even though user is connected.
                  guardProtectedRoutesUntilEmailIsVerified: true,
                  enableEmailVerification: true, // default: true
                }),
    MatPasswordStrengthModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
