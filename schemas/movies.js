import z from 'zod'

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string',
        required_error: 'Movie title is required.'
    }),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Romance', 'Sci-Fi', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller']),
        {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movie genre must be an array of enum genre'
        }
    ),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string().url({
        message: 'Poster must be a url'
    })
})

export function validateMovie(object) {
    return movieSchema.safeParse(object)
}

export function validatePartialMovie(object) {
    // el metodo partial, lo que hace es: del objeto x, los valores que esten se validan como corresponde.
    // Pero los que no esten directamente especificados en json, se dejan pasar
    return movieSchema.partial().safeParse(object)
}
