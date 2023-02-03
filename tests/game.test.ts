import Game from "../src/game";

describe("Game クラス", () => {
    let game;
    /*describe("validate()のテスト", () => {

    });*/

    describe("calculate()のテスト", () => {
    
        describe("ストライク", () => {
            it("パターン1", () => {
                game = new Game([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
                game.calculate();
                expect(game.scores).toStrictEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
                expect(game.totalScore).toBe(300);
            });

            it("計算出来るところまで算出する", () => {
                game = new Game([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0]]);
                game.calculate();
                expect(game.scores).toStrictEqual([30, 60, 90, 120]);
                expect(game.totalScore).toBe(120);
            });


        });

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

            it("", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25]);
                expect(game.totalScore).toBe(25);
            });

            it("パターン4", () => {
                game = new Game([[2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [2, 3]]);
                game.calculate();
                expect(game.scores).toStrictEqual([5, 10, 15, 20, 25, 37, 42]);
                expect(game.totalScore).toBe(42);
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

        describe("ストライク、スペア、それ以外を含む場合", () => {
            it("パターン1", () => {
                game = new Game([[0, 0], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [10, 0], [2, 8, 2]]);
                game.calculate();
                expect(game.scores).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 50, 70, 82]);
                expect(game.totalScore).toBe(82);
            });
            
            it("パターン3", () => {
                game = new Game([[0, 0], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 8], [9, 1], [10, 8, 2]]);
                game.calculate();
                expect(game.scores).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 49, 69, 89]);
                expect(game.totalScore).toBe(89);
            });

            it("パターン3", () => {
                game = new Game([[0, 0], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [10, 0], [9, 1], [10, 8, 2]]);
                game.calculate();
                expect(game.scores).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 60, 80, 100]);
                expect(game.totalScore).toBe(100);
            });
            
        });
        
    });
});