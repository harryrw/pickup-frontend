import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ShowCourt from './ShowCourt'
import NewCourt from './NewCourt'
import NewGame from './NewGame'
import ShowGame from './ShowGame'
import GameSelection from './GameSelection'

const App = () => {
  return (
    <>
      <Navbar />
      <GameSelection />
      {/* <Hero /> */}
      {/* <ShowGame /> */}
      {/* <ShowCourt /> */}
      {/* <NewCourt />  */}
      {/* <NewGame />  */}
    </>
  )
}

export default App