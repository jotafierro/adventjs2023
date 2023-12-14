const checkIsValidCopy = require('./index')

describe('Reto #12: 📸 ¿Es una copia válida?', () => {
  test('validar las copias', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')).toBe(true) // true
    expect(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')).toBe(false) // false (por la p inicial)
    expect(checkIsValidCopy('S9anta Claus', 's9#+:. c:. s')).toBe(true) // true
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false) // false (hay un # donde no debería)
    expect(checkIsValidCopy('Santa Claus is', 's#+:.#c:. s')).toBe(false) // diferente longitud de la copía
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBe(true) // true
  })
})