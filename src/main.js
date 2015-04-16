import React from 'react'
import vbus from 'app/vbus'
import board from 'app/entities/board'
import Board from 'app/board'
import Game from 'app/components/game.jsx'
import moves from 'app/moves'

import 'app/styles/main.css'

board.onValue((v) => React.render(<Game board={v} />, document.getElementById('app')))

let boardChanges = board.sampledBy(moves, function(board, move) {
  switch (move) {
    case 'left':   return board.moveLeft()
    case 'top':    return board.moveTop()
    case 'right':  return board.moveRight()
    case 'bottom': return board.moveBottom()
  }
})

vbus.plug(boardChanges)
vbus.log()
vbus.push(Board.random())
