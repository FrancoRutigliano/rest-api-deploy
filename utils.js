import { createRequire } from 'node:module'
// importamos informacion sobre nuestro propio proyecto
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)