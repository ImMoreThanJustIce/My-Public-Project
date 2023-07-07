import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './FilmCard.module.css'

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    opening_crawl: PropTypes.string,
    producer: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    characters: PropTypes.array,
    starships: PropTypes.array,
    planets: PropTypes.array,
    vehicles: PropTypes.array,
    species: PropTypes.array,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

function FilmCard({
  film: { title, episode_id, opening_crawl, producer, url },
}) {
  const film_id = url.split('/').at(-2)
  return (
    <Link to={`/film/${film_id}`}>
      <div className={classes.filmCard}>
        <h3>
          {title} (Episode {episode_id})
        </h3>
        <p>{opening_crawl.slice(0, 40)}...</p>
        <p>
          <small>
            Produced by <strong>{producer}</strong>
          </small>
        </p>
      </div>
    </Link>
  )
}

export default FilmCard
