import express, { json } from 'express' // require -> commonJS

import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'



const app = express()
app.use(json())
app.use(corsMiddleware)
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// cada vez que express detecte que estoy entrando a la ruta en este caso /movies
// preguntaré por las rutas que tengo en moviesRouter
app.use('/movies', moviesRouter)


const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})