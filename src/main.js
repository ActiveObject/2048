import React from 'react'
import Atom from 'app/core/atom'
import vbus from 'app/core/vbus'
import board from 'app/entities/board'
import Board from 'app/board'
import Game from 'app/components/game.jsx'
import whenMove from 'app/whenMove'

import 'app/styles/main.css'

Atom.listen(board, (v) => React.render(<Game board={v} />, document.getElementById('app')))

document.addEventListener('keyup', function (e) {
  whenMove(e.keyCode, function (move) {
    switch (move) {
      case 'left':   return vbus.push(board.value.moveLeft())
      case 'top':    return vbus.push(board.value.moveTop())
      case 'right':  return vbus.push(board.value.moveRight())
      case 'bottom': return vbus.push(board.value.moveBottom())
    }
  })
}, false)

vbus.log()
vbus.push(Board.random())
