export interface ITask {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}

export class Task implements ITask {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;

    constructor(task: ITask) {
        this.id = task.id;
        this.userId = task.userId;
        this.title = task.title;
        this.summary = task.summary;
        this.dueDate = task.dueDate;
    }
}