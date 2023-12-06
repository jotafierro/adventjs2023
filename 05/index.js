function cyberReindeer(road, time) {
  let steps = [road]
  let sIndex = road.indexOf('S')
  let replace = '.'

  for (let timeIndex = 1; timeIndex < time; timeIndex++) {
    let newStep = steps[timeIndex-1]

    if (timeIndex === 5) {
      newStep = newStep.replaceAll('|', '*')
    }

    newStep = newStep.split('')

    if (newStep[sIndex + 1] !== '|') {
      // movemos el trineo (S) a la derecha
      newStep[sIndex] = replace

      // si el elemento que estaba a la derecha de S no era un ., lo guardamos para reemplazarlo cuando avance S
      if (newStep[sIndex + 1] !== '.') {
        replace = newStep[sIndex + 1]
      } else {
        replace = '.'
      }

      newStep[sIndex + 1] = 'S'
      steps.push(newStep.join(''))
      sIndex++;
    } else {
      // si el elemento a la derecha de S es un |, el trineo se para
      steps.push(newStep.join(''))
    }
  }

  return steps
}

module.exports = cyberReindeer