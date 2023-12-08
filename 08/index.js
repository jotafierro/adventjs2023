function organizeGifts(gifts) {
  // matchAll nos permite obtener todas las coincidencias de una expresión regular
  const numberByGifts = [...gifts.matchAll(/\d+\w/g)].map(m => m[0])
  let result = ''

  for (let i = 0; i < numberByGifts.length; i++) {
    const number = parseInt(numberByGifts[i].slice(0, -1))
    const type = numberByGifts[i].slice(-1)

    // comencé así!, pero cuando llegue a la de 50 me di cuenta que no era necesario
    // if (number < 10) {
    //   result += `(${type.repeat(number)})`
    // }

    // if (number >= 10 && number < 50) {
    //   const boxes = number / 10
    //   const bags = number % 10
    //   result += `{${type}}`.repeat(boxes)
    //   if (bags) result += `(${type.repeat(bags)})`
    // }

    // if (number >= 50) {
      const pallets = number / 50
      const boxes = (number % 50) / 10
      const bags = (number % 50) % 10
      result += `[${type}]`.repeat(pallets)
      if (boxes) result += `{${type}}`.repeat(boxes)
      if (bags) result += `(${type.repeat(bags)})`
    // }
  }

  return result
}

module.exports = organizeGifts