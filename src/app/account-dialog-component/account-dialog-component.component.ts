import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-dialog-component',
  templateUrl: './account-dialog-component.component.html',
  styleUrls: ['./account-dialog-component.component.css']
})
export class AccountDialogComponentComponent implements OnInit {

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
