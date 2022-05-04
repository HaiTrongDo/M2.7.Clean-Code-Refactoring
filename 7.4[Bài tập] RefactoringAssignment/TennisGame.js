"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame(player1, player2) {
        this.gameResult = '';
        this.PlayerList = [player1, player2];
        this.player1 = player1;
        this.player2 = player2;
    }
    TennisGame.prototype.getAdvantagePlayer = function () {
        var minusResult = this.player1.score - this.player2.score;
        if (minusResult == 1)
            this.gameResult = "Advantage player1";
        else if (minusResult == -1)
            this.gameResult = "Advantage player2";
        else if (minusResult >= 2)
            this.gameResult = "Win for player1";
        else
            this.gameResult = "Win for player2";
    };
    TennisGame.prototype.bothMoreThanFour = function () {
        return this.player1.score >= 4 || this.player2.score >= 4;
    };
    TennisGame.prototype.getScore = function () {
        if (this.checkEqualPoint()) {
            this.gameResult = this.showEqualPoint();
        }
        else if (this.bothMoreThanFour()) {
            this.getAdvantagePlayer();
        }
        else {
            this.gameResult = "".concat(this.showPoint(this.player1.score), " - ").concat(this.showPoint(this.player2.score));
        }
    };
    TennisGame.prototype.checkEqualPoint = function () {
        return this.player1.score == this.player2.score;
    };
    TennisGame.prototype.showPoint = function (score) {
        switch (score) {
            case 0:
                return "Love";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
        }
    };
    TennisGame.prototype.showEqualPoint = function () {
        switch (this.player1.score) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            case 3:
                return "Forty-All";
            default:
                return this.gameResult = "Deuce";
        }
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
