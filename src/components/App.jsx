import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Hero from './Hero'
import AllCourts from './AllCourts'
import GameSearch from './GameSearch'
import ShowGameSingle from './ShowGameSingle'
import ShowCourtSingle from './ShowCourtSingle'


const App = () => {
  const [courts, setCourts] = useState([])
  const [games, setGames] = useState([])
  const [searchResults, setSearchResults] = useState([])



  // Fetch and store courts
  useEffect(() => {
    async function fetchCourts() {
      const res = await fetch('https://pickup-api-production.up.railway.app/courts')
      const data = await res.json()
      setCourts(data)
    }
    fetchCourts()
  }, [])
 
  // Fetch and store games
  useEffect(() => {
    async function fetchGames() {
      const res = await fetch('https://pickup-api-production.up.railway.app/games')
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
    return the_court ? <ShowCourtSingle court={the_court}/> : <h4>Court doesn't exist!</h4>
  }

  // HOC - for game
  const ShowGameWrapper = () => {
    const { _id } = useParams()
    const the_game = games.find(game => game._id === _id)
    return the_game ? <ShowGameSingle game={the_game}/> : <h4>Sorry, we can't find that game!</h4>
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
    const returnedCourt = await fetch("https://pickup-api-production.up.railway.app/courts/", {
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
    const returnedGame = await fetch("https://pickup-api-production.up.railway.app/games/", {
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
      <Routes>
        <Route path="/" element={<Hero  />}/>
        <Route path="/games" element={<GameSearch games={games} addGame={addGame} searchResults={searchResults} setSearchResults={setSearchResults} />}/>
        <Route path="/games/:_id" element={<ShowGameWrapper/>}/>
        <Route path="/courts" element={<AllCourts courts={courts} addCourt={addCourt} />}/>
        <Route path="/courts/state/:state" element={<AllCourts courts={courts} addCourt={addCourt} />}/>
        <Route path="/courts/:id" element={<ShowCourtWrapper />}/>
      </Routes>
    </>
  )
}

export default App