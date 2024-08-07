import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../Tasks.model';
import { emptyTask } from '../Tasks.fixtures';
import { FormComponent } from "../../Common/Form/Form.component";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, FormComponent], // This prevents the form submit from submitting the form.
  templateUrl: './TaskForm.component.html',
  styleUrl: './TaskForm.component.scss'
})
export class TaskFormComponent {
  @Output() close = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<ITask>();
  enteredTitle = '';
  // enteredTitle = signal(''); // Signal format. 
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    // TODO: If needed, destroy or clear the form. 
    this.close.emit();
  };
  onSubmitTask() {
    // TDDO: Handle the form submission to a service (?)
    this.taskCreated.emit(emptyTask)
    this.close.emit();
  }
}
