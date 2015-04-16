import Atom from 'app/core/atom'
import vbus from 'app/core/vbus'
import Board from 'app/board'

let board = new Atom(Board.empty)
vbus.onValue(v => Atom.swap(board, v))
export default board
