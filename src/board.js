import {flatten} from 'underscore'

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
      matrix: [
        [4,0,0,0],
        [0,0,0,0],
        [2,0,0,0],
        [0,0,0,0]
      ]
    })
  }

  moveTop() {
    return new Board({
      matrix: [
        [0,0,4,0],
        [0,0,2,0],
        [0,0,0,0],
        [0,0,0,0]
      ]
    })
  }

  moveRight() {
    return new Board({
      matrix: [
        [0,0,0,4],
        [0,0,0,0],
        [0,0,0,2],
        [0,0,0,0]
      ]
    })
  }

  moveBottom() {
    return new Board({
      matrix: [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,4,0],
        [0,0,2,0]
      ]
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
      [0, 0, 0, 0]
    ]
  })
}
