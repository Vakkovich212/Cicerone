import { Component } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AccountDialogComponentComponent } from './account-dialog-component/account-dialog-component.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog)  {}
  
  providers = AuthProvider;

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AccountDialogComponentComponent, {
      
    });
  }
  printUser(event) {
    console.log(event);
}

printError(event) {
    console.error(event);
}
  title = 'Cicerone';
}
