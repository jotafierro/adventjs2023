const cyberReindeer = require('./index')

describe('Reto #5: 🛷 El CyberTruck de Santa', () => {
  test('validar que el trineo de santa se mueva a la derecha según explica el challenge', () => {
    const road = 'S..|...|..'
    const time = 10 // unidades de tiempo

    expect(cyberReindeer(road, time)).toEqual([
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ])
  })
})