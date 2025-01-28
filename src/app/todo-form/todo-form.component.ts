import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  inputValue: string = '';
  @Input() tasksArr: {id: number, task: string , isConfirmed: boolean}[] = [];
  @Output() tasksArr2 = new EventEmitter<{ id: number; task: string; isConfirmed: boolean }[]>(); 

  addTask(str:string){
    let task = {id: Date.now(), task: str , isConfirmed: false};
    this.tasksArr.push(task);
    this.tasksArr2.emit(this.tasksArr)
  }

}
