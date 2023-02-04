import React from 'react'
  
const ShowCourt = ({ court }) => {
  return (
    <div className="card" style={{width: '25rem'}}>
      {/* <img src={img} className="card-img-top" style={{height:'15rem', width: '25rem'}} alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{court.name}</h5>
        <p className="card-text">{court.address}, {court.city}, {court.state}</p>
        <p className="card-text">{court.description}</p>
      </div>
    </div>      
  )
}

export default ShowCourt
