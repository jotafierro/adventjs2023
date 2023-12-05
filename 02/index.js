function manufacture(gifts, materials) {
  let result = []
  const materialsSet = new Set(materials)

  for (let i = 0; i < gifts.length; i++) {
    const giftSet = new Set(gifts[i])
    const intersect = new Set([...giftSet].filter(g => materialsSet.has(g)));

    if (intersect.size === giftSet.size) {
      result.push(gifts[i])
    }
  }

  return result
}

module.exports = manufacture