import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../Tasks.model';
import { ItemComponent } from '../../Common/Item/Item.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './TaskItem.component.html',
  styleUrl: './TaskItem.component.scss'
})
export class TaskItemComponent {
  @Input({ required: true }) task: ITask | undefined;
  @Output() select = new EventEmitter<string>(); // Emit for parent components.

  onSelectTask() {
    if (!this.task) return; // TODO: Handle or gracefully ignore when the user is not present.
    this.select.emit(this.task.id);
  }
}
