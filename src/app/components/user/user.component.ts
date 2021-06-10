import { EventEmitter } from '@angular/core';
import {Component, Input, Output} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input()
  user: User;

  @Output()
  userUp = new EventEmitter<User>();


  openUser() {
    this.userUp.emit(this.user);
  }

}
