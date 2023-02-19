function getShortMessages(messages) {
 const filtered = messages.filter(m => m.message.length < 50)
  const r = filtered.map(item => item.message )
  return r
}
module.exports = getShortMessages
