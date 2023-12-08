const organizeGifts = require('./index')

describe('Reto #8: 🏬 Ordenando el almacén', () => {
  test('menos de 10 regalos de un tipo deben ir en bolsa ()', () => {
    expect(organizeGifts('4a3b7c')).toEqual('(aaaa)(bbb)(ccccccc)')
  })

  test('más de 10 regalos de un tipo deben ir en caja {} y el resto en bolsa', () => {
    expect(organizeGifts('11a44b17c')).toEqual('{a}(a){b}{b}{b}{b}(bbbb){c}(ccccccc)')
  })

  test('más de 50 regalos de un tipo deben ir en un pale [] y el resto en caja {} o bolsa ()', () => {
    expect(organizeGifts('76a11b')).toEqual('[a]{a}{a}(aaaaaa){b}(b)')
  })
})