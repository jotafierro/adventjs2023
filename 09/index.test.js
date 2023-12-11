const adjustLights = require('./index')

describe('Reto #9: 🚦 Alterna las luces', () => {
  test('cantidad minima de luces que hay que cambiar para que las luces sean alternadas', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toEqual(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toEqual(2)
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toEqual(0)
    expect(adjustLights(['🔴', '🔴', '🔴'])).toEqual(1)
    expect(adjustLights(['🔴'])).toEqual(0)
    expect(adjustLights(['🔴', '🟢', '🔴', '🟢'])).toEqual(0)
    expect(adjustLights(['🟢', '🟢', '🔴', '🟢'])).toEqual(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴'])).toEqual(1)
    expect(adjustLights(['🔴', '🟢', '🔴', '🟢', '🟢', '🟢', '🔴', '🟢'])).toEqual(1)
  })
})