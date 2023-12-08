const drawGift = require('./index')

describe('Reto #7: 📦 Las cajas en 3D', () => {
  test('dibujar regalos', () => {
    expect(drawGift(4, '+')).toEqual('   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n')
    expect(drawGift(5, '*')).toEqual('    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n')
  })
})