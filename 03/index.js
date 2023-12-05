function findNaughtyStep(original, modified) {
  for (let i = 0; i < modified.length; i++) {
    if (original[i] !== modified[i]) {
      if (original.length > modified.length) {
        return original[i]
      } else {
        return modified[i]
      }
    }
  }

  return ''
}

module.exports = findNaughtyStep