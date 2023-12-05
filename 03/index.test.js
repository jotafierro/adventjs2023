const findNaughtyStep = require('./index')

describe('Reto #3: 😏 El elfo travieso', () => {
  test('encontrar diferencia entre textos', () => {
    const original = 'abcd'
    const modified = 'abcde'
    expect(findNaughtyStep(original, modified)).toBe('e')

    const original2 = 'abcde'
    const modified2 = 'abxdue'
    expect(findNaughtyStep(original2, modified2)).toBe('x')

    const original3 = 'stepfor'
    const modified3 = 'stepor'
    expect(findNaughtyStep(original3, modified3)).toBe('f')
  })

  test('no se encuentra diferencia devuelve un string vació', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toBe('')
  })
})