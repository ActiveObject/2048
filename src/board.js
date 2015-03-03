import {flatten, range, random} from 'underscore'

export default class Board {
  constructor(attrs) {
    this.matrix = attrs.matrix

    let tiles = this.matrix.map(function (row, r) {
      return row.map(function (v, c) {
        return {
          n: v,
          x: c * 110,
          y: r * 110
        }
      })
    })

    this.tiles = flatten(tiles).filter((v) => v.n > 0)
  }

  moveLeft() {
    return new Board({
      matrix: addTile(this.matrix.map((line) => merge(line, [], [])))
    })
  }

  moveTop() {
    return new Board({
      matrix: addTile(colMap(this.matrix, (line) => merge(line, [], [])))
    })
  }

  moveRight() {
    return new Board({
      matrix: addTile(this.matrix.map((line) => merge(line.reverse(), [], []).reverse()))
    })
  }

  moveBottom() {
    return new Board({
      matrix: addTile(colMap(this.matrix, (line) => merge(line.reverse(), [], []).reverse()))
    })
  }
}

Board.empty = new Board({
  matrix: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
})

Board.random = function () {
  return new Board({
    matrix: [
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 0, 2],
      [0, 2, 0, 0]
    ]
  })
}


function merge(line, left, right) {
  if (line.length < 2) {
    return left.concat(line).concat(right);
  }

  if (line[0] === 0) {
    return merge(line.slice(1), left, right.concat(0));
  }

  if (line[1] === 0) {
    return merge([line[0]].concat(line.slice(2)), left, right.concat(0));
  }

  if (line[0] === line[1]) {
    return merge(line.slice(2), [line[0] + line[1]].concat(left), right.concat(0));
  }

  return merge(line.slice(1), left.concat(line[0]), right);
}

function addTile(matrix) {
  var emptyTiles = flatten(matrix)
    .map((v, i) => ({ value: v, index: i }))
    .filter(v => v.value === 0)

  var n = emptyTiles[random(0, emptyTiles.length - 1)].index;

  return matrix.map(function (row, ri) {
    return row.map(function (cell, ci) {
      return ri * 4 + ci === n ? 2 : cell
    })
  })
}

let item = (i) => (array) => array[i]
let columnOf = (matrix) => (i) => matrix.map(item(i))
let columnsCount = (matrix) => matrix[0].length
let transpose = (matrix) => range(0, columnsCount(matrix)).map(columnOf(matrix))

function colMap(matrix, fn) {
  return transpose(transpose(matrix).map(fn));
}
