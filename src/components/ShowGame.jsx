import React from 'react'


const ShowGame = ({ name = "Game Name", location = "Test Address, 123 Street, Brunswick", skill = "Intermediate" }) => {
    const [participants, setParticipants] = React.useState(0);
  
    const updateCount = () => {
      setParticipants(participants + 1);
    };
  
    return (
      <div className="card mb-3 text-warning bg-dark" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{location}</p>
              <p className="card-text">
                <small className="text-muted">Skill Level: {skill}</small>
              </p>
            </div>
          </div>
          <div className="col-md-6" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="card-text" style={{ padding: "1rem" }}>
              Participants: {participants}
            </p>
            <a onClick={updateCount} href="#" className="btn btn-primary text-dark bg-warning border-secondary">
              Join
            </a>
          </div>
        </div>
      </div>
    );
  };
  

export default ShowGame