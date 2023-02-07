import React, { useState } from 'react'


const ShowGameSingle = ({ game }) => {
    const [participants, setParticipants] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const updateCount = (event) => {
        event.preventDefault();
        if (!isClicked) {
            setParticipants(participants + 1);
            setIsClicked(true);
        }
    };

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
              Participants: {game.participants}
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
};

export default ShowGameSingle