import {EventEmitter, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userDetails: User;

  @Output()
  loginName = new EventEmitter<string>();

  constructor(private usersService: UserService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value)
  }

  showDetails(details: User) {
    this.userDetails = details
  }

  login() {
    this.dataTransfer.store.next(this.userDetails.username)
    this.loginName.emit(this.dataTransfer.store.getValue())
  }

}
