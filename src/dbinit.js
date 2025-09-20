import { vector } from 'https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/vector/index.js'
import { PGlite } from 'https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js'

// Create a variable for postgres as it might be instantiated differently
// based on the availability of vector
let pg

// Instantiate the database
if (vector)
  pg = new PGlite('idb://landing2', { extensions: { vector }})
else
  pg = new PGlite('idb://landing2')

// Set our search path for easier querying
pg.exec(`SET search_path TO "$user", public;`)

// Export the imported assets, and resolve the deferred promises
Object.assign(window, { PGlite, pg, vector })
promises.pg.resolve({ PGlite, pg })
