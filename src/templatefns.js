function sql(strings, ...replacements) {
  let string = []

  for (let [i, s] of Object.entries(strings)) {
    string.push(s)

    if (i < replacements.length)
      string.push(replacements[i])
  }

  return db.exec(string.join(''))
}

Object.assign(window, {
  sql
})
