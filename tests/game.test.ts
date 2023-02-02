import Game from "../src/game";

describe("Game クラス", () => {
    let game = new Game([]);
    /*describe("validate()のテスト", () => {

    });*/

    describe("calculate()のテスト", () => {
    
        /*describe("ストライク", () => {
            
        });*/

        describe("スペア", () => {
            it("パターン1", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [2, 3], [2, 3]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25, 30, 35, 47, 52, 57]);
                expect(game.totalScore).toBe(57);
            });

            it("パターン2", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [2, 8], [2, 3]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25, 30, 35, 47, 59, 64]);
                expect(game.totalScore).toBe(64);
            });

            it("パターン3", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [2, 8], [2, 8, 2]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25, 30, 35, 47, 59, 71]);
                expect(game.totalScore).toBe(71);
            });
        });

        describe("ストライクでもスペアでもない場合", () => {
            it("パターン1", () => {
                game = new Game([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
                game.calculate();
                expect(game.scores).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                expect(game.totalScore).toBe(0);
            });

            it("パターン2", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
                expect(game.totalScore).toBe(50);
            });
        });

        /*describe("ストライク、スペア、それ以外を含む場合", () => {
            
        })*/
        
    });
});