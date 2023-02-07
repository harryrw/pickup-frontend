import React, { useState } from 'react'

const ShowGameSingle2 = ({ updateGame, game }) => {
    const [title, setTitle] = useState(game.title)
    const [address, setAddress] = useState(game.address)
    const [city, setCity ] = useState(game.city)
    const [state, setState] = useState(game.state)
    const [time, setTime] = useState(game.time)
    const [date, setDate] = useState(game.date)
    const [skillLevel, setSkillLevel] = useState(game.skillLevel)
    const [description, setDescription] = useState(game.description)
    const [participants, setParticipants] = useState(game.participants)
    const [_id, setId] = useState(game._id)
    const [isClicked, setIsClicked] = useState(false)

    function updateCount(evt) {
        evt.preventDefault()
        if (!isClicked) {
            setParticipants(participants + 1)
            setIsClicked(true)
            console.log(_id)
          }        
        updateGame(_id, title, address, city, state, time, date, skillLevel, description, participants)
        
    }

    return (
        <div className="card mb-3 text-warning bg-dark" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
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
    );
}

export default ShowGameSingle2