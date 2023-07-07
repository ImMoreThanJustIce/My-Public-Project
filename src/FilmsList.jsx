import FilmCard from './components/FilmCard'
import Loader from './components/Loader'
import classes from './components/FilmCard.module.css'
import useFetch from './hooks/useFetch'

function FilmsList() {
  const { data, error, isLoading } = useFetch('//swapi.dev/api/films/')
  const films = data?.results

  return (
    <div className="container">
      <h1>React Wars</h1>

      {isLoading && <Loader />}

      {films && (
        <>
          <p>Il y a {films.length} films Star Wars référencés</p>
          <div className={classes.filmCardContainer}>
            {films.map((film) => (
              <FilmCard key={film.url} film={film} />
            ))}
          </div>
        </>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default FilmsList
