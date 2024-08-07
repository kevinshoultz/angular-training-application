import { Component, computed, Input, input, OnInit, output } from '@angular/core';
import { IUser } from '../Users.model';
import { ITask } from '../../Tasks/Tasks.model';
import { TasksService } from '../../Tasks/Tasks.service';
import { TaskItemComponent } from '../../Tasks/TaskItem/TaskItem.component';
import { TaskModalComponent } from "../../Tasks/TaskModal/TaskModal.component";
  
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [TaskItemComponent, TaskModalComponent],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.scss'
})

export class UserCardComponent implements OnInit {
  tasks: ITask[] = [];
  user = input.required<IUser | undefined>();
  isTaskModalVisible = false;

  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }

  avatar = computed(() => {
    return this.user()?.avatar;
  })

  imagePath = computed(() => {
    return `assets/users/${this.user()?.avatar}`;
  });

  ngOnInit() {
    this.tasksService.getTasks();
  }

  onAddTask() {
    this.isTaskModalVisible = true;
    console.log(`Adding task for user with id ${this.user()?.id}`);
  }
  onCancelAddTask() {
    this.isTaskModalVisible = false;
    console.log(`Cancelling task for user with id ${this.user()?.id}`);
  }
}
