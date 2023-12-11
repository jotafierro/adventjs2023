const createChristmasTree = require('./index')

describe('Reto #10: 🎄 Crea tu propio árbol de navidad', () => {
  test('crear árbol en base a los caracteres y alto del árbol', () => {
    console.log(createChristmasTree('x', 3))
    expect(createChristmasTree('x', 3)).toBe('  x\n x x\nx x x\n  |\n')
    expect(createChristmasTree('x', 5)).toBe('    x\n   x x\n  x x x\n x x x x\nx x x x x\n    |\n')
    expect(createChristmasTree('xo', 4)).toBe('   x\n  o x\n o x o\nx o x o\n   |\n')
  })
})