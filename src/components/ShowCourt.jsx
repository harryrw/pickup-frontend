import React from 'react'
  
const ShowCourt = ({ name, address}) => {
  return (
      <div className="card">
      <img src="/src/assets/court.jpg" className="card-img-top" style={{height:200, width:300}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{address}</p>
      </div>
    </div>      
  )
}

export default ShowCourt
