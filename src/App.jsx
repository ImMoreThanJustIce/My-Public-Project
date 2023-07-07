import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FilmDetails from './FilmDetails'
import FilmsList from './FilmsList'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FilmsList />} />
        <Route path="/film/:film_id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
