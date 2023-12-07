const maxDistance = require('./index')

describe('Reto #6: 🦌 Los renos a prueba', () => {
  test('calcular máxima distancia recorrida', () => {
    expect(maxDistance('>>*<')).toBe(2)
    expect(maxDistance('<<<>')).toBe(2)
    expect(maxDistance('><<<*')).toBe(3)
    expect(maxDistance('>***>')).toBe(5)
  })
})