const manufacture = require('./index')

describe('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  test('si encuentra todos los materiales devuelve los juguetes que puede construir', () => {
    const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'

    expect(manufacture(gifts, materials)).toEqual(['tren', 'oso'])
  })
})