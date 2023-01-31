import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import  SearchBox  from './SearchBox'
import ShowCourt from './ShowCourt'
import NewGame from './NewGame'

const styles = {
  color: 'red',
  fontSize: '30px'
}

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBox />
      <ShowCourt />
      <NewGame />
    </>
  )
}

export default App