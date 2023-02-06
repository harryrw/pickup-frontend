import React from 'react'
  
const ShowCourt = ({ court }) => {
  return (
    <div className="card min-w-75 m-3 text-warning bg-dark" style={{ maxWidth: "540px" }}>
      <div className="card-body">
        <h5 className="card-title">{court.name}</h5>
        <p className="card-text">{court.address}, {court.city}, {court.state}</p>
        <p className="card-text">{court.description}</p>
      </div>
    </div>      
  )
}

export default ShowCourt
