import vbus from 'app/vbus'
import Board from 'app/board'

export default vbus.scan(Board.empty, (board, nextValue) => nextValue)
