import { dataConnect } from './app.js'
import { listMovies, createMovie } from '@movie-app/movies'

try {
  const result = await createMovie(dataConnect, {
    title: 'New Records',
    genre: 'Action',
    imageUrl:
      'https://fastly.picsum.photos/id/534/200/200.jpg?hmac=fFEUULhOfD3o0WvBKAcTIKeSps59JC49BsTEBu5Z3eI',
  })
  console.log(result.data)

  const result2 = await listMovies(dataConnect)
  console.log(result2.data.movies)
} catch (error) {
  console.error(error)
}

