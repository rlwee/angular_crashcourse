import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/Board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  boards:Board[];

  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.boardService.getBoard().subscribe(boards => {
      this.boards = boards;
    });
  }

  deleteBoard(board:Board){
    // remove from ui
    this.boards = this.boards.filter(b => b.id !== board.id);
    // remove from server
    this.boardService.deleteBoard(board).subscribe();
  }

  addBoard(board:Board){
    this.boardService.addBoard(board).subscribe(board => {
      this.boards.push(board);
    });
  }

}
