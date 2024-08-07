import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Common/Header/Header.component';
import { UserItemComponent } from "./Users/UserItem/UserItem.component";
import { UserCardComponent } from "./Users/UserCard/UserCard.component";
import { IUser } from './Users/Users.model';
import { UsersService } from './Users/Users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserItemComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  selectedUser: IUser | undefined;
  title = 'angular-training-application';
  
  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers()
  }

  ngOnInit() {
    this.usersService.getUsers();
  }

  onSelectUser(id: string) {
    if (!id) {
      console.log(`No user selected. id = ${id}`);
      return;
    }; //TODO: Handle or gracefully ignore.
    this.selectedUser = this.usersService.getUser(id);
    console.log(`Selected user with id ${id}`);
  }
}
