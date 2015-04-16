import Bacon from 'baconjs'

function whatMove(keyCode) {
  switch (keyCode) {
    case 37: return 'left'
    case 38: return 'top'
    case 39: return 'right'
    case 40: return 'bottom'
  }
}

function isMove(keyCode) {
  return keyCode >= 37 && keyCode <=40
}

export default Bacon.fromEvent(document, 'keyup')
  .map(e => e.keyCode)
  .filter(isMove)
  .map(whatMove)
