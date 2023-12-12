const getIndexsForPalindrome = require('./index')

describe('Reto #11: 📖 Los elfos estudiosos', () => {
  test('array vació si ya es un palindrome', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([])
    expect(getIndexsForPalindrome('abba')).toEqual([])
    expect(getIndexsForPalindrome('abba')).toEqual([])
    expect(getIndexsForPalindrome('aaaa')).toEqual([])
    expect(getIndexsForPalindrome('bbbb')).toEqual([])
  })

  test('array con posiciones si es posible hacer un cambio de elemento para formar un palindrome', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
  })

  test('null si no es posible hacer un cambio de elemento para formar un palindrome', () => {
    expect(getIndexsForPalindrome('abac')).toEqual(null)
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })
})