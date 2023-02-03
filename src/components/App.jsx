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

const seedCourts = [
    { name: 'Hoop St Court',  address: '123 Hoop St', city: 'Bondi', state: 'NSW', description: 'Sydney Court, hoop in good condition, no net' },
    { name: 'Quentins court', address: '456 Basket St', city: 'Abbotsford', state: 'VIC', description: 'asphalt, backboard broken' },
    { name: 'Sportscenter Court', address: '23 City St', city: 'Hobart', state: 'TAS' }
]

const App = () => {
  const [courts, setCourts] = useState([])
  // const [courts, setCourts] = useState(seedCourts)
  const nav = useNavigate() 

  // only on mount
  useEffect(async () => {
    const res = await fetch('http://localhost:4001/courts')
    const data = await res.json()
    setCourts(data)
  }, [])

  // HOC
  const ShowCourtWrapper = () => {
    const { id } = useParams()
    const the_court = courts[id]
    console.log(the_court)
    return the_court ? <ShowCourt court={the_court}/> : <h4>Court doesn't exist!</h4>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/courts" element={<AllCourts courts={courts} />}/>
        <Route path="/courts/:id" element={<ShowCourtWrapper />}/>
        {/* <NewCourt /> 
        <NewGame /> */}
      </Routes>
    </>

  )
}

export default App