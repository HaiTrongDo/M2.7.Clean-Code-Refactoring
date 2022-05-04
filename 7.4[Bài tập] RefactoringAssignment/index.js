"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TennisGame_1 = require("./TennisGame");
var Player_1 = require("./Player");
var player1 = new Player_1.Player('player1', 2);
var player2 = new Player_1.Player('player2', 2);
var game = new TennisGame_1.TennisGame(player1, player2);
game.getScore();
console.log(game.gameResult);
