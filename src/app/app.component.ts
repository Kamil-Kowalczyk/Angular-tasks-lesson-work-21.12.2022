import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';

  tasks: Array<Task> = [];
  tasksAfter: Array<Task> = [];

  taskName!: string;
  taskDate!: string;

  delete(task: Task): void {
    this.tasksAfter = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (i == this.tasks.indexOf(task))
        continue;
      this.tasksAfter.push(this.tasks[i]);
    }
    this.tasks = this.tasksAfter;
    //this.tasks.filter(t=> t.taskName == task.taskName && t.taskDate == task.taskDate);
    
  }

  submit(): void {
    
    this.tasks.push(new Task(this.taskName, this.taskDate));
    //console.log(this.tasks[0].checkIfIsValid());
  }
}
