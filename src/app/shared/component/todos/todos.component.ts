import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

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

  onEdit(){
    this.isInEditMode=true
  }

}
