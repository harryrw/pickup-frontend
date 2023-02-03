import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ShowCourt from './ShowCourt'
import NewCourt from './NewCourt'
import NewGame from './NewGame'
import CourtSelection from './CourtSelection'
import ShowGame from './ShowGame'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <p> space</p>
      </div>
      <ShowGame />
      {/* <ShowCourt />
      <NewCourt /> 
      <NewGame /> */}
    </>
  )
}

export default App