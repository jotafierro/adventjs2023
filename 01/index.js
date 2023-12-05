function findFirstRepeated(gifts) {
  let repeats = {}

  for (let i = 0; i < gifts.length; i++) {
    if (repeats[gifts[i]]) {
      return gifts[i]
    }

    repeats[gifts[i]] = 1
  }

  return -1
}

module.exports = findFirstRepeated