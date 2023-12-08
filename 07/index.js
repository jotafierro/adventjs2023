function drawGift(size, symbol) {
  let result = ''

  for (let row = 0; row < size; row++) {
    const spaces = size - (row + 1)

    result += ' '.repeat(spaces)

    if (row === 0 || row === size - 1) {
      result += '#'.repeat(size)
    } else {
      result += '#' + symbol.repeat(size - 2) + '#'
    }

    if (size - spaces > 1) {
      result += symbol.repeat(size - spaces - 2) + '#'
    } else if (row !== 0 && row !== size - 1) {
      result += '#'
    }

    result += '\n'
  }

  for (let row = size - 2; row >= 0; row--) {
    if (row === 0) {
      result += '#'.repeat(size)
    } else {
      result += '#' + symbol.repeat(size - 2) + '#'
    }

    const spaces = size - (row + 1)

    if (size - spaces > 1) {
      result += symbol.repeat(size - spaces - 2) + '#'
    } else if (row !== 0) {
      result += '#'
    }

    result += '\n'
  }

  return result
}

module.exports = drawGift