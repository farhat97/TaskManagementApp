import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm) {
    console.log(contactForm.value);

    // pass contactForm object to post method
    this.taskService.addNewTask(contactForm.value);
  }
}
