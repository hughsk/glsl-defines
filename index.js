module.exports = defines

function defines(data) {
  if (Array.isArray(data)) {
    data = data.reduce(function(defs, key) {
      defs[key] = null
      return defs
    }, {})
  }

  var out = Object.keys(data).map(function(key) {
    if (/\s/gi.test(key)) throw new Error(
      'Invalid define key (contains whitespace): "' + key + '"'
    )

    var value = data[key]
    if (typeof value === 'undefined') value = ''
    if (value === null) value = ''

    return '#define ' + key + ' ' + value
  }, [])

  return out.join('\n') + '\n'
}
