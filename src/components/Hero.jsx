import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="col-md-6 w-100 h-100">
      <div className="h-100 p-5 text-warning bg-dark text-center flex-column" style={{ display: 'flex', alignItems: 'center' }}>
        <h1>Pick Up</h1>
        <img src="../src/assets/hoophero.png" alt="Basketball court at sunset" style={{ borderRadius: '15px', width: '75%', height: '75%', objectFit: 'cover' }} />
        <p style={{fontSize: "2rem"}}>
          <br></br>
          Looking to play local basketball games but don't know where to get started?
          <br></br>
          Click below to find games or courts in your area.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', marginTop: '30px' }}>
          <Link className="text-warning" to="/games" style={{ backgroundColor: '#383F45', padding: '1rem 2rem', fontSize: '2rem', borderRadius: '10px', color: 'white', border: '2px solid #ffc107', textDecoration: "none" }}>
            Games
          </Link>
          <Link className="text-warning" to="/courts" style={{ backgroundColor: '#383F45', padding: '1rem 2rem', fontSize: '2rem', borderRadius: '10px', color: 'white', border: '2px solid #ffc107', textDecoration: "none"}}>
            Courts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero