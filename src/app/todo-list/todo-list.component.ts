import { Component, Input, Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasksArr: {id: number, task: string , isConfirmed: boolean}[] = [];
  @Output() tasksArr2 = new EventEmitter<{ id: number; task: string; isConfirmed: boolean }[]>(); 
  
  deleteTask(id:number){
    let x = this.tasksArr.filter((el)=>el.id != id);
    this.tasksArr = x;
    this.tasksArr2.emit(this.tasksArr)
  }

  updateCompleted(id: number){
    let task = this.tasksArr.find(el=>el.id == id);
    if(task){
      task.isConfirmed = true;
    }
  }

}
