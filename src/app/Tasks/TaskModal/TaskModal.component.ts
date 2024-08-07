import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskFormComponent } from '../TaskForm/TaskForm.component';
import { DialogComponent } from "../../Common/Dialog/Dialog.component";
import { IUser } from '../../Users/Users.model';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [TaskFormComponent, DialogComponent],
  templateUrl: './TaskModal.component.html',
  styleUrl: './TaskModal.component.scss'
})
export class TaskModalComponent {
  @Input() userId?: string;
  @Output() close = new EventEmitter<void>();
  onCloseModal() {
    this.close.emit();
  };
}
