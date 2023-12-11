function createChristmasTree(ornaments, height) {
  let tree = ''
  const hasSeveralOrnaments = ornaments.length > 1
  let ornamentsIndex = 0

  for (let i = 0; i < height; i++) {
    const items = i + 1
    tree += ' '.repeat(height - items)

    // repetir el patrón de adornos
    for (let j = 0; j < items; j++) {
      if (hasSeveralOrnaments) {
        tree += ornaments[ornamentsIndex]
        ornamentsIndex = (ornamentsIndex + 1) % ornaments.length
      } else {
        tree += ornaments
      }

      tree += (j + 1 < items) ? ' ' : ''
    }

    tree += '\n'
  }

  tree += ' '.repeat(height - 1) + '|\n'

  return tree
}

module.exports = createChristmasTree