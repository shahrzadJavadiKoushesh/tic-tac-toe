import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  board!: Array<string>;
  winningBoard = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  playerTurn = 'x';

  selectedByX : number[] = [];
  selectedByO : number[] = [];
  
  constructor(){
    // create an array with 9 empty elements
    this.board = new Array(9).fill('');
  }


  ngOnInit(): void {

  }

  handlePlayer(index: number){
    this.board[index] = this.playerTurn;
    if (this.playerTurn == 'x'){
      this.selectedByX.push(+this.board[index])
      this.playerTurn = 'o'
    }
    else{
      this.selectedByO.push(+this.board[index])
      this.playerTurn = 'x'
    }
    
    for(let i = 0; i < this.winningBoard.length; i++){
      let winningCheck = this.winningBoard[i];
      let p1 = winningCheck[0];
      let p2 = winningCheck[1];
      let p3 = winningCheck[2];
      if (this.board[p1] != '' && this.board[p1] == this.board[p2] && this.board[p3] == this.board[p2] && this.board[p1] == this.board[p3]){
        if (this.playerTurn == 'x'){
          this.playerTurn = 'o'
        }
        else{
          this.playerTurn = 'x'
        }
        alert("Player " +this.playerTurn+ " Won")
        // console.log("GHJK")
      }
    }

  }

}
