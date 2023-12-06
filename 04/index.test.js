const decode = require('./index')

describe('Reto #4: 😵‍💫 Dale la vuelta a los paréntesis', () => {
  test('ordenar al reverso las letras que están dentro de un paréntesis', () => {
    expect(decode('hola (odnum)')).toEqual('hola mundo')
    expect(decode('(olleh) (dlrow)!')).toEqual('hello world!')
  })

  test('ordenar al reverso en orden de los paréntesis anidados', () => {
    expect(decode('sa(u(cla)atn)s')).toEqual('santaclaus')
  })
})