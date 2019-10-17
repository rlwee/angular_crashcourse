import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { BoardService } from '../../services/board.service';

import { Board } from 'src/app/models/Board';


@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() board: Board;
  @Output() deleteBoard: EventEmitter<Board> = new EventEmitter();

  constructor(private boardService:BoardService) { }

  ngOnInit() {
  }

  //setting dynamic classes

  setClasses(){ 
    let classes = {
      board: true,
      'is-archived': this.board.archived,
    }

    return classes;

  }

  onToggle(board){
    // toggle in UI
    this.board.archived = !this.board.archived;
    //toggle in server
    this.boardService.toggleArchived(board).subscribe(board => console.log(board));
  }

  onDelete(board){
    this.deleteBoard.emit(board);
  }

}



