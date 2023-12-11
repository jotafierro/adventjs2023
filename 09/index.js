function adjustLights(lights) {
  // primera idea, pero no funciono para todos los casos
  // let changes = 0
  // let firstLight = lights[0]

  // for (let i = 1; i < lights.length; i++) {
  //   if (i % 2 === 0 && lights[i] !== firstLight) changes++
  //   if (i % 2 !== 0 && lights[i] === lights[0]) changes++
  // }

  let changesRed = 0
  let changesGreen = 0
  const firstRed = '🔴'

  for (let i = 0; i < lights.length; i++) {
    const light = lights[i]
    if (i % 2 === 0) {
      (light === firstRed) ? changesGreen++ : changesRed++
    } else {
      (light === firstRed) ? changesRed++ : changesGreen++
    }
  }

  return Math.min(changesRed, changesGreen)
}

module.exports = adjustLights