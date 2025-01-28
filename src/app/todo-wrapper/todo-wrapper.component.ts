import { Component } from '@angular/core';
// import { TodoFormComponent } from "../todo-form/todo-form.component";
// import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-wrapper',
  imports: [],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  tasks: { id: number; task: string; isConfirmed: boolean }[] = [];

  updateTasks(updatedTasks: { id: number; task: string; isConfirmed: boolean }[]) {
    this.tasks = updatedTasks;
    console.log(this.tasks);
  }
}
