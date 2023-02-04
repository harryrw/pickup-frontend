import React, { useState } from 'react'
import CourtModal from './NewCourt';


const ShowGame = ({ game }) => {
    const [participants, setParticipants] = useState(0);
  
    const updateCount = (event) => {
        event.preventDefault();
        setParticipants(participants + 1);
    };
  
    return (
      <div className="card mb-3 text-warning bg-dark" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.address}, {game.city}</p>
              <p className="card-text">
                <small className="card-text">Skill Level: {game.skillLevel}</small>
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="card-text" style={{ padding: "1rem" }}>
              Participants: {participants}
            </p>
            <button onClick={updateCount} href="#" className="btn btn-primary text-dark bg-warning border-secondary">
              Join
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default ShowGame