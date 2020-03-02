import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
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