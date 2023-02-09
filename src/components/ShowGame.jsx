import React, { useState } from 'react'


const ShowGame = ({ game }) => {

    const gameDate = game.date.substring(0, 10).split("-")
    const dateOrder = `${gameDate[2]}-${gameDate[1]}-${gameDate[0]}`

    return (
      <div className="card min-w-75 m-3 text-warning" style={{ maxWidth: "540px", border: "2px solid #ffc107", borderRadius: "20px", backgroundColor: "#383F45" }}>
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
            <p className="card-text" style={{ padding: "1rem" }}>
              Time: {game.time}
            </p>
            <p className="card-text" style={{ padding: "1rem" }}>
              Date: {dateOrder}
            </p>
          </div>
        </div>
      </div>
    );
  };
  

export default ShowGame