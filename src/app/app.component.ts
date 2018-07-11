import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user : User;
  constructor() {
    this.user = new User();
    this.user.name = "Ankush Kaistha";
    this.user.address = "6634 coral rose rd";
    this.user.phone = ['999-999-9999', '111-111-1111']
  }
}
