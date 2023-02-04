import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import AllCourts from './AllCourts'
import ShowCourt from './ShowCourt'
import NewCourt from './NewCourt'
import NewGame from './NewGame'
import ShowGame from './ShowGame'
import GameSelection from './GameSelection'
import Search from './Search'

// dont need anymore, delete when certain -zac
// const seedCourts = [
//     { name: 'Hoop St Court',  address: '123 Hoop St', city: 'Bondi', state: 'NSW', description: 'Sydney Court, hoop in good condition, no net' },
//     { name: 'Quentins court', address: '456 Basket St', city: 'Abbotsford', state: 'VIC', description: 'asphalt, backboard broken' },
//     { name: 'Sportscenter Court', address: '23 City St', city: 'Hobart', state: 'TAS' }
// ]

const App = () => {
  const [courts, setCourts] = useState([])
  const [games, setGames] = useState([])
  const nav = useNavigate() 


  useEffect(() => {
    async function fetchCourts() {
      const res = await fetch('http://localhost:4001/courts')
      const data = await res.json()
      setCourts(data)
    }
    fetchCourts()
  }, [])
 
  useEffect(() => {
    async function fetchGames() {
      const res = await fetch('http://localhost:4001/games')
      const data = await res.json()
      setGames(data)
    } 
    fetchGames()
  }, [])


  // HOC - for court
  const ShowCourtWrapper = () => {
    const { id } = useParams()
    const the_court = courts[id]
    return the_court ? <ShowCourt court={the_court}/> : <h4>Court doesn't exist!</h4>
  }

  // HOC - for game
  const ShowGameWrapper = () => {
    const { id } = useParams()
    const the_game = games[id]
    return the_game ? <ShowGame game={the_game}/> : <h4>Sorry, we can't find that game!</h4>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/courts" element={<AllCourts courts={courts} />}/>
        <Route path="/courts/:id" element={<ShowCourtWrapper />}/>
        <Route path="/games" element={<GameSelection games={games} />}/>
        <Route path="/games/:id" element={<ShowGameWrapper />}/>
        <Route path="/search" element={<Search games={games} />}/>
        {/* <NewCourt /> 
        <NewGame /> */}
      </Routes>
    </>

  )
}

export default App