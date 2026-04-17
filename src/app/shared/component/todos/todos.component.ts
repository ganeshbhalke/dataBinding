import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icricket, IFlowers, Ifruits, IMobile, Itodo,  } from '../../modules/std.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @ViewChild('todosItem')todosItemRef !: ElementRef
  @ViewChild('fruitsItem')fruitsItemRef !: ElementRef
  @ViewChild('Bookes')BooksRef !: ElementRef
  @ViewChild('Flowerrs')FlowerrsRef !: ElementRef
  @ViewChild('Mobiles')MobilesRef !: ElementRef
  isInEditMode : boolean = false

  todoArr = [
  {
    todoItem: "JS ⚡",
    todoId: '123'
  },
  {
    todoItem: "TS 🔷",
    todoId: '124'
  },
  {
    todoItem: "Angular 🅰️",
    todoId: '125'
  },
  {
    todoItem: "HTML5 🌐",
    todoId: '1234'
  }
];


 todoArr1 = [
  {
    todoItem: "APPLE 🍎",
    todoId: '1233'
  },
  {
    todoItem: "BANANA 🍌",
    todoId: '1243'
  },
  {
    todoItem: "KIWI 🥝",
    todoId: '1252'
  },
  {
    todoItem: "ORANGE 🍊",
    todoId: '12341'
  }
];

todoArr2 = [
  {
    todoItem: "Virat Kohli 🏏🔥",
    todoId: '1233'
  },
  {
    todoItem: "Rohit Sharma 🏏💪",
    todoId: '12421'
  },
  {
    todoItem: "Shubman Gill 🏏⭐",
    todoId: '1205'
  },
  {
    todoItem: "Hardik Pandya 🏏😎",
    todoId: '12384'
  }
];

todoArr3 = [
    {
      todoItem : "Rose 🌹",
      todoId : '1223'
  },
    {
      todoItem : "Lotus 🌸",
      todoId : '12121'
  },
      {
      todoItem : "Marigold 🌼",
      todoId : '1215'
  },
   {
    todoItem:"Jasmine🌺",
    todoId:'1204'
  }
]


todoArr4 = [
    {
      todoItem : "iPhone 15 Pro Max 📱",
      todoId : '1223'
  },
    {
      todoItem : "Samsung Galaxy S24 Ultra 📱",
      todoId : '12121'
  },
      {
      todoItem : "Vivo #15 📱",
      todoId : '1215'
  },
   {
    todoItem:"Google Pixel 8 Pro 📱",
    todoId:'1204'
  },
     {
    todoItem:"Realme C33 📱",
    todoId:'1204'
  }
]
  todoObj: any;
  editObj!: Itodo;
  editObj1!: Ifruits;
  editObj2!: Icricket;
  editObj3!: IFlowers;
  editObj4!: IMobile;
  


  constructor() { }

  ngOnInit(): void {
  }



  @ViewChild ('producName')pn!:ElementRef

searchProduct =this.pn

  @ViewChild ('MobileName')sn!:ElementRef

searchMobile =this.sn

@ViewChild ('FruitName') gn!:ElementRef

searchFruit =this.gn

@ViewChild ('BookName')gana!:ElementRef

searchBooks =this.gana

@ViewChild ('FlowerName')ng!:ElementRef

searchFlowers =this.ng

//================================================todo===================================
 todoSub(){
  let val:string =this.todosItemRef.nativeElement.value
  if(val.length >0){
    let newTodo:Itodo={
      todoItem: val,
      todoId: Date.now().toString(),
    
    }
    this.todoArr.push(newTodo)
    this.todosItemRef.nativeElement.value='';
  }
 }

 onEdit(todo:Itodo){
  console.log(todo);
  this.isInEditMode=true
  this.editObj=todo;
  this.todosItemRef.nativeElement.value= this.editObj.todoItem
  
 }

  onUpdate(){
    let UPDATE_ID=this.editObj.todoId

    let UPDATE_OBJ:Itodo={
      todoItem: this.todosItemRef.nativeElement.value,
      todoId: UPDATE_ID,
      
    }
    console.log(UPDATE_OBJ)
    let getIndex =this.todoArr.findIndex(n =>n.todoId === UPDATE_ID)
    this.todoArr[getIndex]=UPDATE_OBJ
    this.todosItemRef.nativeElement.value='';
    this.isInEditMode=false
  }

  onRemove(id :string){
    console.log(id);
    let getIndex =this.todoArr.findIndex(n => n.todoId === id)
    this.todoArr.splice(getIndex,1)
    
  }

  //========================================================fruitsItem================================================
  onfruits(){
    let val:string =this.fruitsItemRef.nativeElement.value
    if(val.length > 0){
      let NewTodo:Ifruits={
        todoItem:val,
        todoId:Date.now().toString()
      }
      this.todoArr1.push(NewTodo)
      this.fruitsItemRef.nativeElement.value='';
    }
  }

  onEditt(gana0:Ifruits){
    console.log(gana0);
    this.isInEditMode=true
    this.editObj1=gana0;
    this.fruitsItemRef.nativeElement.value = this.editObj1.todoItem
    
  }

  onUudate(){
    let UPDATE_ID=this.editObj1.todoId

    let UPADTE_OBJ:Ifruits={
      todoItem:this.fruitsItemRef.nativeElement.value,
      todoId:UPDATE_ID,
    }

    console.log(UPDATE_ID);
    let getIndex=this.todoArr1.findIndex(n => n.todoId === UPDATE_ID)
    this.todoArr1[getIndex]=UPADTE_OBJ
    this.fruitsItemRef.nativeElement.value='';
    this.isInEditMode=false;
    
  }

    onRemoved(id :string){
    console.log(id);
    let getIndex =this.todoArr1.findIndex(n => n.todoId === id)
    this.todoArr1.splice(getIndex,1)
    
  }

  //===========================================cricket============================================
 onbooks(){
  let val:string=this.BooksRef.nativeElement.value
  if(val.length >0){
    let todoNew:Icricket={
      todoItem:val,
      todoId:Date.now().toString()
    }
    this.todoArr2.push(todoNew)
    this.BooksRef.nativeElement.value='';
  }
 }

 onEdiet(nan:Icricket){
  console.log(nan);
  this.isInEditMode=true
  this.editObj2=nan;
  this.BooksRef.nativeElement.value=this.editObj2.todoItem
  
 }

 onUpPdate(){
  let UPDATE_ID=this.editObj2.todoId

  let UPDATE_OBJ:Icricket={
    todoItem:this.BooksRef.nativeElement.value,
    todoId:UPDATE_ID,
  }
  console.log(UPDATE_ID);
  let getIndex=this.todoArr2.findIndex(h =>h.todoId === UPDATE_ID)
  this.todoArr2[getIndex]=UPDATE_OBJ,
  this.BooksRef.nativeElement.value='';
  this.isInEditMode=false
  
 }

  onRemoveed(id :string){
    console.log(id);
    let getIndex =this.todoArr2.findIndex(n => n.todoId === id)
    this.todoArr2.splice(getIndex,1)
    
  }

//=========================================================Flowers================================================
 onAddtodo(){
  let val:string=this.FlowerrsRef.nativeElement.value
  if(val.length > 0 ){
    let NewObj:IFlowers={
      todoItem:val,
      todoId:Date.now().toString()
    }
    this.todoArr3.push(NewObj)
    this.FlowerrsRef.nativeElement.value='';
  }
 }

 onEdiit(ganii:IFlowers){
  console.log(ganii);
  this.isInEditMode=true
  this.editObj3=ganii,
  this.FlowerrsRef.nativeElement.value=this.editObj3.todoItem
  
 }

 onUpDate(){
  let UPADTE_ID=this.editObj3.todoId

  let UPDATE_OBJ:IFlowers={
    todoItem:this.FlowerrsRef.nativeElement.value,
    todoId:UPADTE_ID,
  }
  console.log(UPADTE_ID);
  let getIndex=this.todoArr3.findIndex(n => n.todoId === UPADTE_ID)
  this.todoArr3[getIndex]=UPDATE_OBJ
  this.FlowerrsRef.nativeElement.value='';
  this.isInEditMode=false
  
 }

  onRemoveid(id :string){
    console.log(id);
    let getIndex=this.todoArr3.findIndex(t => t.todoId === id)
    this.todoArr3.splice(getIndex,1)
    
  }
//===================================================================================mobile================
  onAddMobile(){
    let val:string =this.MobilesRef.nativeElement.value
    if(val.length > 0){
      let NewOBjj:IMobile={
        todoItem:val,
        todoId:Date.now().toString()
      }
      this.todoArr4.push(NewOBjj)
      this.MobilesRef.nativeElement.value='';
    }
  }

  onEDit(GN:IMobile){
    console.log(GN);
    this.isInEditMode=true
    this.editObj4=GN
    this.MobilesRef.nativeElement.value=this.editObj4.todoItem
    
  }

  onUpDAte(){
    let UPADTE_ID=this.editObj4.todoId

    let UPDATE_OBJ:IMobile={
      todoItem:this.MobilesRef.nativeElement.value,
      todoId:UPADTE_ID,
    }
    console.log(UPADTE_ID);
    let getIndex=this.todoArr4.findIndex(g => g.todoId === UPADTE_ID)
    this.todoArr4[getIndex]=UPDATE_OBJ
    this.MobilesRef.nativeElement.value='';
    this.isInEditMode=false
    
  }

  onRemoves(id :string){
    console.log(id);
    let getIndex=this.todoArr4.findIndex(v => v.todoId === id)
    this.todoArr4.splice(getIndex,1)
    
  }
 
}

  


