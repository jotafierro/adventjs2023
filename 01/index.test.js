const findFirstRepeated = require('./index')

describe('Reto #1: 🎁 ¡Primer regalo repetido!', () => {
  test('si no hay regalo repetido devuelve -1', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })

  test('si hay un solo regalo repetido lo devuelve', () => {
    expect(findFirstRepeated([1, 2, 3, 2, 4, 5])).toBe(2)
  })

  test('si hay varios regalos repetidos devuelve el que aparece primero por segunda vez', () => {
    expect(findFirstRepeated([1, 2, 3, 3, 2, 4, 5])).toBe(3)
  })
})