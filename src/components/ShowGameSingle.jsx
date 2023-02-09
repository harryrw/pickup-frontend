import React, { useState } from 'react'
import Navbar from './Navbar'

const ShowGameSingle = ({ game }) => {
    const [participants, setParticipants] = useState(game.participants)
    const [isClicked, setIsClicked] = useState(false)
    const title = useState(game.title)
    const address = useState(game.address)
    const city = useState(game.city)
    const state = useState(game.state)
    const time = useState(game.time)
    const date = useState(game.date)
    const skillLevel = useState(game.skillLevel)
    const description= useState(game.description)


  function updateCount(event) {
      event.preventDefault()
      if (!isClicked) {
          setParticipants(game.participants + 1)
          setIsClicked(true)
        }
        game(title, address, city, state, time, date, skillLevel, description)
  }

    return (
      <>
      <Navbar />
      <div className="game-card-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", fontSize:"3rem", zIndex: "2", paddingTop: "150px", paddingBottom: "150px" }}>
        <div className="card mb-3 text-warning bg-dark" style={{ border: "2px solid #ffc107", borderRadius: "20px" }}>
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-title" >{game.title}</p>
                <p className="card-text">{game.address}, {game.city}, {game.state}</p>
                <p className="card-text">
                  <small className="card-text">Skill Level: {game.skillLevel}</small>
                </p>
              </div>
            </div>
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{paddingTop: "1rem"}}>
                  {game.description}
              </p>
              <p className="card-text" style={{ padding: "0.5rem" }}>
                Participants: {participants}
              </p>
              {!isClicked ? (
                <button onClick={updateCount} href="#" className="btn btn-primary text-dark bg-warning border-secondary">
                      Join
                  </button>
              ) : (
                <p>You're in the game!</p>
                )}
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default ShowGameSingle