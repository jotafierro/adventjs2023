function getIndexsForPalindrome(word) {
  if (word.split('').reverse().join('') === word) {
    return []
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const wordArrayCopy = [...word]
      wordArrayCopy[i] = word[j]
      wordArrayCopy[j] = word[i]

      if (wordArrayCopy.join('') === wordArrayCopy.reverse().join('')) {
        return [i, j]
      }
    }
  }

  return null

  // otra posible solución
  // if (word.split('').reverse().join('') === word) {
  //   return []
  // }

  // const replaceAt = (string, index, replacement) => {
  //   let newString = string.substring(0, index)
  //   newString += replacement
  //   newString += string.substring(index + replacement.length);

  //   return newString
  // }

  // for (let i = 0; i < word.length; i++) {
  //   for (let j = i + 1; j < word.length; j++) {
  //     let string = replaceAt(word, i, word[j])
  //     string = replaceAt(string, j, word[i])

  //     if (string === string.split('').reverse().join('')) {
  //       return [i, j]
  //     }
  //   }
  // }

  // return null
}

module.exports = getIndexsForPalindrome