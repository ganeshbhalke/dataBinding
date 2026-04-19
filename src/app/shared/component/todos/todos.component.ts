import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../../modules/std.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @ViewChild('todoItems')todosRef!:ElementRef
isInEditMode:boolean=false




todoArr=[
  {
  todoItem:"Angular",
  todoId:"123"
  },
  {
  todoItem:"javascript",
  todoId:"98767"
  },
 {
  todoItem:"CSS3",
  todoId:"876"
  },
 {
  todoItem:"TYpeScript",
  todoId:"2937"
  },
 {
  todoItem:"HTML5",
  todoId:"887766"
  },
 
 
]
  editObj!: Itodos;








 constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('TodoName')pn!:ElementRef

  searchTodo=this.pn


  ontodo(){
    let val:string =this.todosRef.nativeElement.value
    if(val.length >0){
      let newOBJ:Itodos={
        todoItem:val,
        todoId:Date.now().toString()

      }
      this.todoArr.push(newOBJ)
      this.todosRef.nativeElement.value='';
    }
  }

  onEdit(gana:Itodos){
    console.log(gana);
    this.isInEditMode=true
    this.editObj=gana;
    this.todosRef.nativeElement.value=this.editObj.todoItem
  }

  onupdate(){
    let UPDATEID=this.editObj.todoId

    let UPDATEOBJ:Itodos={
      todoItem:this.todosRef.nativeElement.value,
      todoId:UPDATEID,

    }
    console.log(UPDATEID);
    let getIndex=this.todoArr.findIndex(n => n.todoId === UPDATEID)
    this.todoArr[getIndex]=UPDATEOBJ

    this.todosRef.nativeElement.value;
    this.isInEditMode=false
    
  }

  onRemove(id:string){ 
    console.log(id);
    let getIndex=this.todoArr.findIndex(n =>n.todoId === id)
    this.todoArr.splice(getIndex,1)
  }










}

  


