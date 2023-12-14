function checkIsValidCopy(original, copy) {
  if (original.length != copy.length) return false

  const originalArray = original.split('')
  const copyArray = copy.split('')

  const availableChars = ['#', '+', ':', '.', ' ']

  const isValidDegradationInOrder = (available, originalChar, copyChar) => {
    const originalIndex = available.indexOf(originalChar)
    const copyIndex = available.indexOf(copyChar)

    if (originalIndex > copyIndex) return false

    return true
  }

  for (let i = 0; i < originalArray.length; i++) {
    const originalChar = originalArray[i]
    const copyChar = copyArray[i]

    if (originalChar === copyChar) continue

    if (
      /[A-Z]/.test(originalChar)
      && isValidDegradationInOrder(
        [originalChar, originalChar.toLowerCase(), ...availableChars],
        originalChar,
        copyChar
      )
    )
      continue

    // si es minúscula o un carácter de la lista disponible y no está en la lista de caracteres disponibles, entonces no es una copia válida
    if (
      /[a-z]/.test(originalChar)
      && isValidDegradationInOrder(
        [originalChar, ...availableChars],
        originalChar,
        copyChar
      )
    )
      continue

    if (
      availableChars.includes(originalChar)
      && isValidDegradationInOrder(
        [...availableChars],
        originalChar,
        copyChar
      )
    )
      continue

    return false
  }

  return true
}

module.exports = checkIsValidCopy