import Flame from "../src/flame";

describe("Flame クラス",() => {
    const flame = new Flame([]);
    describe("isSpareメソッドのテスト", () => {
        describe("正常系", () => {
            it("2投で10本倒せなかったらスペアではない", () => {
                flame.rolls = [4, 5];
                expect(flame.isSpare()).toBe(false);
            });
    
            it("1投目に10本倒すのはスペアではない", () => {
                flame.rolls = [10, 0];
                expect(flame.isSpare()).toBe(false);
            });

            it("2投で10本倒すとスペア", () => {
                flame.rolls = [5, 5];
                expect(flame.isSpare()).toBe(true);
            });
        });

        describe("異常系", () => {
            it("2投で10本以上倒すのはスペアではない", () => {
                flame.rolls = [6, 5];
                expect(flame.isSpare()).toBe(false);
            });
        });
    });

    describe("isStrikeメソッドのテスト", () => {
        describe("正常系", () => {
            it("1投目で10本倒さないとストライクではない", () => {
                flame.rolls = [5, 5];
                expect(flame.isStrike()).toBe(false);
            });
    
            it("1投目で10本倒すとストライク", () => {
                flame.rolls = [10, 0];            
                expect(flame.isStrike()).toBe(true);
                flame.rolls = [10];
                expect(flame.isStrike()).toBe(true);
            });
        });

        describe("異常系", () => {
            it("1投目で10本以上倒すのはストライクではない", () => {
                flame.rolls = [11, 0];
            });
        });
    });

    describe("sumBySecondRolls()", () => {
        describe("正常系", () => {
            it("パターン1", () => {
                flame.rolls = [2, 3];
                expect(flame.sumBySecondRolls()).toBe(5);
            });

            it("パターン2", () => {
                flame.rolls = [10, 0];
                expect(flame.sumBySecondRolls()).toBe(10);
            });
        });
    });
});