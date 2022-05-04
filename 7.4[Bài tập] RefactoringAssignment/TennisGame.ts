import {Player} from "./Player";

export class TennisGame {
    gameResult: string = '';
    PlayerList: Player[]
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2: Player) {
        this.PlayerList = [player1, player2];
        this.player1 = player1
        this.player2 = player2
    }

    getAdvantagePlayer(): void {
        let minusResult = this.player1.score - this.player2.score;
        if (minusResult == 1) this.gameResult = "Advantage player1";
        else if (minusResult == -1) this.gameResult = "Advantage player2";
        else if (minusResult >= 2) this.gameResult = "Win for player1";
        else this.gameResult = "Win for player2";
    }

    bothMoreThanFour() {
        return this.player1.score >= 4 || this.player2.score >= 4
    }


    getScore() {
        if (this.checkEqualPoint()) {
            this.gameResult = this.showEqualPoint()
        } else if (this.bothMoreThanFour()) {
            this.getAdvantagePlayer()
        } else {
            this.gameResult = `${this.showPoint(this.player1.score)} - ${this.showPoint(this.player2.score)}`
        }
    }

    checkEqualPoint(): boolean {
        return this.player1.score == this.player2.score
    }

    showPoint(score) {
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
    }

    showEqualPoint() {
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
    }
}
