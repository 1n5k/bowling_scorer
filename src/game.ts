import Flame  from "./flame";

type _Game = {
    flames: Flame[];
    scores: number[];
    totalScore: number;
    calculate(): void;
}

export default class Game implements _Game {
    flames: Flame[];
    scores: number[] = [];
    totalScore: number = 0;

    constructor(scoreSheet: number[][]) {
        this.flames = scoreSheet.map(flame => new Flame(flame));
    }

    /* validateInit(): void {
        
    }

    calculateTotalScore(): void {
        
    }

    addFlame(flame: number[]): void {
        this.flames.push(new Flame(flame));
        this.calculate();
    }*/

    validate(): void {
        const flameSize = this.flames.length;
        if (flameSize > 10) {
            throw new Error("Flame is up to 10 flames.");
        } else if (flameSize < 1) {
            throw new Error("Required more than 1 frame to calculate score");
        } else if (flameSize === 10 && this.flames[9].isStrike() || this.flames[9].isSpare()) {
            // 第10フレームでストライクかスペアを出すと3投目の記録が必要
        }
    }

    calculate(): void {
        this.validate();
        
        this.flames.forEach((flame, index) => {
            if (flame.isStrike()) {
                // ストライクの処理を追加
            } else if (flame.isSpare()) {
                let bonus = 0;
                // TODO: 要リファクタ
                if(this.flames[index+1] !== undefined) {
                    // 1〜9フレームかつ投げているフレームまで計算する
                    bonus = this.flames[index+1].rolls[0];
                    const score = 10 + bonus;
                    this.totalScore += score;
                    this.scores[index] = this.totalScore;
                } else if (index === 9) {
                    // undefinedになったもののうち10フレームのみスコア計算する
                    bonus = flame.rolls[2];
                    const score = 10 + bonus;
                    this.totalScore += score;
                    this.scores[index] = this.totalScore;
                }
            } else {
                const score = flame.rolls.reduce(function(score, pins)  { return score + pins; });
                this.totalScore += score;
                this.scores[index] = this.totalScore;
            }
        });
        console.log("Scores are "+ this.scores.toString());
        console.log("Total score is "+ this.totalScore.toString());
    }
    
}