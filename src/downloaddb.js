const pg = fetchPG()

// Download the dump
const file = await pg.dumpDataDir()
const url = URL.createObjectURL(file)
const a = document.createElement('a')
a.href = url
a.download = file.name
a.innerHTML = "Export Database"

const button = document.createElement('button')
button.innerHTML = "Export Database"

button.addEventListener('mouseup', function(event) {
  a.click()
})

Object.assign(button.style, {
  position: 'absolute',
  right: '1em',
  bottom: '1em'
})

document.body.append(button)
