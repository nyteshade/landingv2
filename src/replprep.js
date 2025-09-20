const { pg } = await window.promises.pg.promise
const repl = document.querySelector('#repl')
const root = repl.shadowRoot
const style = root.querySelector('style').sheet

console.log({ repl: repl, pg, root, style })

repl.pg = pg

style.addRule(':host', '--PGliteRepl-font-size: 16pt;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root', 'width: 1024px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border', 'border-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-output', 'border-top-left-radius: 10px;border-top-right-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-input', 'border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-editor', 'border-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-input div.cm-editor', 'border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-input div.cm-scroller', 'border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;')
style.addRule('div.PGliteRepl-root > div.PGliteRepl-root.PGliteRepl-root-border div.PGliteRepl-editor div[spellcheck]', 'tab-size: 2;')

window.clearIt = function() {
  const output = root.querySelector('.PGliteRepl-output')

  if (output)
    [...output.childNodes].forEach(e => output.removeChild(e))
}
