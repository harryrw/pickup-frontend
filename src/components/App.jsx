import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import  SearchBox  from './SearchBox'
import ShowCourt from './ShowCourt'
import NewCourt from './NewCourt'
import NewGame from './NewGame'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <ShowCourt />
      <NewCourt /> 
      <NewGame />
    </>
  )
}

export default App