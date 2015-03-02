function whatMove(keyCode) {
  switch (keyCode) {
    case 37: return 'left'
    case 38: return 'top'
    case 39: return 'right'
    case 40: return 'bottom'
  }
}

export default function whenMove(keyCode, onMove) {
  var move = whatMove(keyCode);

  if (move) {
    onMove(move);
  }
}
