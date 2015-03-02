import React from 'react'
import {range} from 'underscore'
import 'app/styles/game.css'

export default class Game extends React.Component {
  render() {
    let grid = range(0, 16).map((n) => <div key={n} className='game-grid-cell'></div>)
    let tile = this.props.board.tiles.map(function (tile, i) {
      return (
        <div
          key={i}
          className={'game-tile game-tile-' + tile.n}
          style={{transform: 'translate(' + tile.x + 'px,' + tile.y + 'px)' }}>{tile.n}</div>
      )
    })

    return (
      <div className='game-container'>
        <div className='game-grid'>{grid}</div>
        <div className='game-tile-container'>{tile}</div>
      </div>
    )
  }
}
