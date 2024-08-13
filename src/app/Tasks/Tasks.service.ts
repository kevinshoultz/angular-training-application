import { inject, Injectable } from "@angular/core";
import { ITask } from "./Tasks.model";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TasksService {
    private httpClient = inject(HttpClient);
    private tasks: ITask[] = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        }, {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        }, {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];
    
    getTasks(userId?: string): ITask[] {
        // TODO: Implement a filter for userId.
        // if (userId) {
        //     return this.tasks.filter(task => task.userId === userId);
        // }
        // TODO: Revisit the tutorial to move the subscription to the component:
        // https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116338#overview
        // TODO: Implement Error handling:
        // https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/44116322#overview
        this.httpClient.get<ITask[]>('https://api.example.com/tasks').subscribe(tasks => { this.tasks = tasks; });
        return this.tasks;
    }

    getTask(id: string): ITask | undefined {
        return this.tasks.find(task => task.id === id);
    }

    createTask(task: ITask, userId: string): void {
        // INFO: This is a simple implementation of a task creation.
        task.userId = userId;
        this.tasks.push(task);

        // TDDO: I want to submit this to an api. 
        this.httpClient.post('https://api.example.com/tasks', task).subscribe();
        
    }
}