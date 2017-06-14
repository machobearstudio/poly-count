function count(data) {
  if (data === undefined || data === null) {
    return 0
  } else if (typeof data === 'object') {
    return Object.keys(data).length
  }

  return 1
}

module.exports = count
