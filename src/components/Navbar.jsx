import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link to="/">Films List</Link>
    </nav>
  )
}

export default Navbar
