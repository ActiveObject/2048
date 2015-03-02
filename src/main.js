import React from 'react'
import app from 'app'
import Game from 'app/components/game.jsx'
import Board from 'app/board'
import Atom from 'app/core/atom'
import eventBus from 'app/core/event-bus'
import whenMove from 'app/utils/whenMove'

import 'app/styles/main.css'

Atom.listen(app, (v) => React.render(<Game board={v.get('board')} />, document.getElementById('app')))

document.addEventListener('keyup', function (e) {
  whenMove(e.keyCode, function (move) {
    switch (move) {
      case 'left':   return eventBus.push({ e: 'app', a: ':app/move-left', v: true })
      case 'top':    return eventBus.push({ e: 'app', a: ':app/move-top', v: true })
      case 'right':  return eventBus.push({ e: 'app', a: ':app/move-right', v: true })
      case 'bottom': return eventBus.push({ e: 'app', a: ':app/move-bottom', v: true })
    }
  })
}, false)

app.use(function (receive) {
  receive(':app/started', (appstate) => appstate.set('board', Board.random()))
  receive(':app/move-left', (appstate) => appstate.update('board', (v) => v.moveLeft()))
  receive(':app/move-top', (appstate) => appstate.update('board', (v) => v.moveTop()))
  receive(':app/move-right', (appstate) => appstate.update('board', (v) => v.moveRight()))
  receive(':app/move-bottom', (appstate) => appstate.update('board', (v) => v.moveBottom()))
})

app.start()
