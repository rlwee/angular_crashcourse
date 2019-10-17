import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addBoard: EventEmitter<any> = new EventEmitter()

  title:string
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const board = {
      title: this.title,
      archived: false
    }

    this.addBoard.emit(board);

  }

}
