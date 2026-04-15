import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../modules/std.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @ViewChild('todosItem')todosItemRef !: ElementRef
  isInEditMode : boolean = false

  todoArr = [
    {
      todoItem : "JS",
      todoId : '123'
  },
    {
      todoItem : "TS",
      todoId : '124'
  },
      {
      todoItem : "Angular",
      todoId : '125'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild ('producName')pn!:ElementRef

searchProduct =this.pn


  onEdit(){
    this.isInEditMode=true

     console.log('js');
    
   let todoObj : Itodo = {
    todoItem:  this.todosItemRef.nativeElement.value,
    todoId: Date.now().toString()
    }

   this.todosItemRef.nativeElement.value=todoObj

    console.log(todoObj);
  
    this.todosItemRef.nativeElement.value=''
  }

  todoSub(){
    console.log('js');
    
   let todoObj : Itodo = {
    todoItem:  this.todosItemRef.nativeElement.value,
    todoId: Date.now().toString()
    }

    console.log(todoObj);
    this.todoArr.push(todoObj)

    this.todosItemRef.nativeElement.value=''


  }

}
