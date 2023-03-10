## 使用バージョン
* node.js v18.13.0
* yarn v1.22.19

## インストール 
```bash
$ yarn install
```

## Docker 
```bash
docker compose build
docker compose run --rm app yarn {COMMAND}
```

## テスト
```bash
$ yarn test
```
## Lint
```bash
$ yarn lint
$ yarn lint:fix
```

## コンソール呼び出し
```bash
$ yarn ts-node
```

## 入力例
基本的にフレーム単位で入力することを前提に作られています。  
- ストライク => [10, 0]  
- スペア => [3, 7], [9, 1]
- ガター => [0, 4], [5, 0], [0, 0]

```
$ yarn ts-node
> import Game from './src/game';
> let game = new Game([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
> game.calclate();
Scores are 30, 60, 90, 120, 150, 180, 210, 240, 270, 300
Total score is 300
```
