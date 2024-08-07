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

  userName = computed(() => {
    return this.user?.name;
  });
  imagePath = computed(() => {
    return `assets/users/${this.user?.avatar}`;
  });

  onSelectUser() {
    const id = this.user?.id;
    console.log(`Selected user with id ${id}`);
    this.select.emit(id);
  }
}
