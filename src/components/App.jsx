import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import AllCourts from './AllCourts'
import ShowCourt from './ShowCourt'
import NewCourt from './NewCourt'
import NewGame from './NewGame'
import ShowGame from './ShowGame'
import Search from './Search'




const App = () => {
  const [courts, setCourts] = useState([])
  const [games, setGames] = useState([])
  const [searchResults, setSearchResults] = useState([])
  // const nav = useNavigate() 


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
      setSearchResults(data)
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

  // Add new court
  const addCourt = async (name, address, city, state, description) => {
    const newCourt = {
      name: name,
      address: address,
      city: city,
      state: state,
      description: description
    }
    // Post new court to DB
    const returnedCourt = await fetch("http://localhost:4001/courts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourt)
    })
    const data = await returnedCourt.json()
    setCourts([...courts, data])
  }

  // Add new game
  const addGame = async (title, address, city, state, time, date, skillLevel, description) => {
    const newGame = {
      title: title,
      address: address,
      city: city,
      state: state,
      time: time,
      date: date,
      skillLevel: skillLevel,
      description: description,
    }
    // Post new game to DB
    const returnedGame = await fetch("http://localhost:4001/games/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame)
    })
    const data = await returnedGame.json()
    setGames([...games, data])
  }



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero  />}/>
        <Route path="/games" element={<Search games={games} searchResults={searchResults} setSearchResults={setSearchResults} />}/>
        <Route path="/games/:id" element={<ShowGameWrapper />}/>
        <Route path="/games/new" element={<NewGame addGame={addGame} />}/>
        <Route path="/courts" element={<AllCourts courts={courts} addCourt={addCourt} />}/>
        <Route path="/courts/state/:state" element={<AllCourts courts={courts} addCourt={addCourt} />}/>
        <Route path="/courts/new" element={<NewCourt addCourt={addCourt} />}/>
        <Route path="/courts/:id" element={<ShowCourtWrapper />}/>
      </Routes>
    </>

  )
}

export default App