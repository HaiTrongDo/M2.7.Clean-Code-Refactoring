import {TennisGame} from "./TennisGame";
import {Player} from "./Player";

let player1 = new Player('player1',2)
let player2 = new Player('player2',2)
let game = new TennisGame(player1,player2);
game.getScore();
console.log(game.gameResult)