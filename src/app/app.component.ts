import { Component, OnInit } from '@angular/core';

import { TaskService } from './shared/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskManagementApp';

  // TODO: testing task service calling api
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.getTasks().subscribe(() => {
      console.log('found task!');
    });
  }


}
