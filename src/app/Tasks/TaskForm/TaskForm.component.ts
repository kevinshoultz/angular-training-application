import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../Tasks.model';
import { emptyTask } from '../Tasks.fixtures';
import { FormComponent } from "../../Common/Form/Form.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../Tasks.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, FormComponent, DatePipe], // This prevents the form submit from submitting the form.
  templateUrl: './TaskForm.component.html',
  styleUrl: './TaskForm.component.scss'
})
export class TaskFormComponent {
  @Input() userId: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<ITask>();
  enteredTitle = '';
  // enteredTitle = signal(''); // Signal format. 
  enteredSummary = '';
  enteredDate = '';

  private TasksService = inject(TasksService); // Inject the task service.

  onCancel() {
    // TODO: If needed, destroy or clear the form. 
    this.close.emit();
  };
  onSubmitTask() {
    const task: ITask = {
      id: Math.random().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      userId: ''
    };
    this.TasksService.createTask(task, this.userId);
    this.taskCreated.emit(task);
    this.close.emit();
  }
}
