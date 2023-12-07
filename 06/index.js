function maxDistance(movements) {
  const movementsArray = movements.split('')
  let countMayor = 0
  let countMenor = 0
  let countAsterisk = 0

  for (let i = 0; i < movementsArray.length; i++) {
    if (movementsArray[i] === '>') {
      countMayor++
    } else if (movementsArray[i] === '<') {
      countMenor++
    } else {
      countAsterisk++
    }
  }

  let maxDistance = countMayor - countMenor

  if (countAsterisk > 0) {
    if (countMayor > countMenor) {
      maxDistance += countAsterisk
    } else {
      maxDistance -= countAsterisk
    }
  }

  return (maxDistance > 0) ? maxDistance : maxDistance * -1
}

module.exports = maxDistance