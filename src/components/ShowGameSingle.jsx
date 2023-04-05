import React, { useState, useEffect } from 'react'
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

    const gameDate = game.date.substring(0, 10).split("-")
    const dateOrder = `${gameDate[2]}-${gameDate[1]}-${gameDate[0]}`

  // Update game participants
  function updateCount(event) {
    event.preventDefault()
    if (!isClicked) {
      setParticipants(participants + 1) // increment local state counter
      setIsClicked(true)
      fetch(`https://pickup-api-production.up.railway.app/games/${game._id}`, { // update MongoDB participants count
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          participants: game.participants + 1
        })
      })
        .then(response => response.json())
        .then(data => {
          fetch(`https://pickup-api-production.up.railway.app/games/${game._id}`)
            .then(response => response.json())
            .then(data => {
              // set state with updated game data
              setParticipants(data.participants)
            })
            .catch(error => {
              console.error(error)
            })
          console.log("Success:", data)
        })
        .catch(error => {
          console.error(error)
        })  
    }
  }


    return (
      <>
      <Navbar />
      <div className="game-card-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", fontSize:"2rem"}}>
        <div className="card mb-3 text-warning" style={{ border: "2px solid #ffc107", borderRadius: "20px", backgroundColor: "#383F45" }}>
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
            <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "1rem" }}>
              <p style={{paddingTop: "1rem", paddingRight: "1rem"}}>
                  {game.description}
              </p>
              <p>
               Time: {game.time}
              </p>
              <p>
                Date: {dateOrder}
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