import Flame  from "./flame";

type _Game = {
    flames: Flame[];
    scores: number[];
    totalScore: number;
    calculate(): void;
    validate(): void;
}

export default class Game implements _Game {
    flames: Flame[];
    scores: number[] = [];
    totalScore: number = 0;

    constructor(scoreSheet: number[][]) {
        this.flames = scoreSheet.map(flame => new Flame(flame));
    }

    /* フレームを追加出来るようにしたかったがcalculate実装時にべき等性を考えていなかったので保留    
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
        } else if (flameSize === 10 ) {
            if ((this.flames[9].isStrike() || this.flames[9].isSpare()) && this.flames[9].rolls.length === 2) {
                throw new Error("Need more 1 throw");        
            }
        }
    }

    calculate(): void {
        this.validate();
        
        this.flames.forEach((flame, index) => {
            if (index !== 9 && flame.isStrike()) {
                let score = 0;
                // ストライクの処理を追加
                if(this.flames[index+2] !== undefined) {
                    const bonus1 = this.flames[index+1].sumBySecondRolls();
                    const bonus2 = this.flames[index+2].sumBySecondRolls();
                    // 第8フレームのみ第10フレームの1投目までボーナスとして入る
                    score = index !== 7 ? bonus1 + bonus2 + 10 : bonus1 + this.flames[index+2].rolls[0] +10;
                    
                    this.setScore(index, score);
                } else if(index === 8) {
                    // 第9フレームは第10フレームの2投目までボーナスとして入る
                    score = this.flames[index+1].sumBySecondRolls() + 10;
                    
                    this.setScore(index, score);
                } 
            } else if (index !== 9 && flame.isSpare()) {
                let score = 0;
                if(this.flames[index+1] !== undefined) {
                    score = this.flames[index+1].rolls[0] + 10;
                    
                    this.setScore(index, score);
                }
            } else {
                const score = flame.rolls.reduce(function(score, pins)  { return score + pins; });
                
                this.setScore(index, score);
            }
        });
        console.log("Scores are "+ this.scores.toString());
        console.log("Total score is "+ this.totalScore.toString());
    }

    setScore(index: number, score: number): void {
        this.totalScore += score;
        this.scores[index] = this.totalScore;
    }
    
}