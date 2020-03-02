import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  providers = AuthProvider;

  constructor() { }
  printUser(event) {
    console.log(event);
}

printError(event) {
    console.error(event);
}
  ngOnInit(): void {
  }

}
