// TODO: for the moment, I am using this as opposed to the ITask interface in order to 
// follow this approach: https://florimond.dev/blog/articles/2018/09/consuming-apis-in-angular-the-model-adapter-pattern/

import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Task {
    constructor(
        taskId: number,
        taskType: string,
        contactPerson: string,
        dueDate: string, // TODO: change to date type
        userId: number,
        taskName: string,
        taskDescription: string
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class TaskAdapter implements Adapter<Task> {
    
    adapt(item: any): Task {
        return new Task(item.id, item.taskType, item.contactPerson, 
                        item.dueDate, item.userId, item.TaskName,
                        item.taskDescription);
    }

}