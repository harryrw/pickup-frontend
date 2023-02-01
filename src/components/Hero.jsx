import SearchBox from "./SearchBox"

const Hero = () => {
  return (
<div className="col-md-6 w-100 h-100">
  <div className="h-100 p-5 text-warning bg-dark text-center flex-column" style={{display: 'flex', alignItems: 'center'}}>
    <h2>Pick Up</h2>
    <img src="/src/assets/hoophero.png" alt="Basketball court at sunset" style={{ borderRadius: '15px', width: '75%', height: '75%', objectFit: 'cover' }} />
    <p>Find games near you:</p>
    <SearchBox />
  </div>
</div>
  )
}

import React from 'react'

export default Hero