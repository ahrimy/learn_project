import { MAX_POS } from "../constant";
import { getRandomInteger } from "./number";

export function getInitialTileList() {
  const tileList = [];
  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);
  return tileList;
}

export function checkCollision(tileList, tile) {
  return tileList.some((item) => item.x === tile.x && item.y === tile.y);
}

export function makeTile(tileList) {
  let tile;
  //겹치는 타일인지 확인
  while (!tile || checkCollision(tileList, tile)) {
    tile = {
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
    };
  }
  return tile;
}
