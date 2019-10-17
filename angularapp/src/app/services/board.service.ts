import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Board } from '../models/Board'
import { Observable } from 'rxjs';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  boardLimit = '?_limit=10';

  constructor( private http:HttpClient ) { }

  // Get Boards
  getBoard():Observable<Board[]> {
    return this.http.get<Board[]>(`${this.boardUrl}${this.boardLimit}`);
  } 

  //Toggle Archived
  toggleArchived(board: Board):Observable<any>{
    const url = `${this.boardUrl}/${board.id}`;

    return this.http.put(url, board, httpOptions);
  }

  //Delete board
  deleteBoard(board: Board):Observable<Board>{
    const url = `${this.boardUrl}/${board.id}`;
    return this.http.delete<Board>(url, httpOptions);
  }

  //Add Board

  addBoard(board:Board):Observable<Board>{
    return this.http.post<Board>(this.boardUrl, board, httpOptions);
  }
    
}
