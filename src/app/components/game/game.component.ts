import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  board!: Array<string>;

  constructor(){
    // create an array with 9 empty elements
    this.board = new Array(9).fill('');
  }


  ngOnInit(): void {

  }

  handlePlayer(index: number){
    this.board[index] = (index+1).toString();
  }

}
