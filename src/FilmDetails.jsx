import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import { useParams } from 'react-router-dom'

function FilmDetails() {
  const { film_id } = useParams()
  const {
    data: film,
    error,
    isLoading,
  } = useFetch(`//swapi.dev/api/films/${film_id}`)

  return (
    <div className="container">
      {isLoading && <Loader />}

      {film && (
        <>
          <h1>{film.title}</h1>
          <ul>
            <li>
              <small>Director: {film.director}</small>
            </li>
            <li>
              <small>Producer: {film.producer}</small>
            </li>
            <li>
              <small>
                Release Date: <time>{film.release_date}</time>
              </small>
            </li>
          </ul>

          <p>{film.opening_crawl}</p>
        </>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default FilmDetails
