import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import  SearchBox  from './SearchBox'
import ShowCourt from './ShowCourt'

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
    </>
  )
}

export default App