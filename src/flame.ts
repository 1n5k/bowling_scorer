type _Flame = {
    rolls: number[];
    isSpare(): boolean;
    isStrike(): boolean;
}

export default class Flame implements _Flame {
    rolls: number[];
    
    constructor(rolls: number[]) {
        this.rolls = rolls;
    }

    isSpare(): boolean {
        return this.rolls[0] !== 10 && (this.rolls[0] + this.rolls[1]) === 10;
    }

    isStrike(): boolean {
        return this.rolls[0] === 10;
    }

    sumBySecondRolls(): number {
        return this.rolls[0] + this.rolls[1];
    }
}
