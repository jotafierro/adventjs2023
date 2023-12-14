function calculateTime(deliveries) {
  let timeInSeconds = 7 * 60 * 60 // 7 hours in seconds
  let result = '-'

  const formatNumber = (n) =>  (n < 10) ? `0${n}` : n

  for (let i = 0; i < deliveries.length; i++) {
    const [hours, minutes, seconds] = deliveries[i].split(':')

    timeInSeconds -= parseInt(hours) * 60 * 60
    timeInSeconds -= parseInt(minutes) * 60
    timeInSeconds -= parseInt(seconds)
  }

  if (timeInSeconds < 1) {
    timeInSeconds = Math.abs(timeInSeconds)
    result = ''
  }

  result += `${formatNumber(Math.floor(timeInSeconds / 60 / 60))}`
  result += `:${formatNumber(Math.floor(timeInSeconds / 60) % 60)}`
  result += `:${formatNumber(timeInSeconds % 60)}`

  return result
}

module.exports = calculateTime