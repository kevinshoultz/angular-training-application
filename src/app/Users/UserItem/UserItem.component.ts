import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../Users.model';
  
@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './UserItem.component.html',
  styleUrl: './UserItem.component.scss'
})

export class UserItemComponent {
  @Input() user?: IUser;
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    const id = this.user?.id;
    this.select.emit(id);
  }
}
