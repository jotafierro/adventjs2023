function decode(message) {
  if (!message.includes('(')) return message

  let start, end
  for (let i = 0; i < message.length; i++) {
    // ultimo paréntesis que abre
    if (message[i] === '(') {
      start = i
    }
    // primer paréntesis que cierra
    if (message[i] === ')') {
      end = i
      break;
    }
  }
  // slice(start, end) no incluye el carácter en la posición end
  let newMessage = message.slice(0, start)

  newMessage += message.slice(start+1, end).split('').reverse().join('')

  newMessage += message.slice(end+1)

  // recursividad
  newMessage = decode(newMessage)

  return newMessage
}

module.exports = decode