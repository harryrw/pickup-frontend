import React from 'react'
  
const ShowCourt = ({ name="Test Name", address="Fawkner Park, 24-88 Commercial Rd, South Yarra VIC 3141", img="/src/assets/court.jpg"}) => {
  return (
    <div className="card" style={{width: '25rem'}}>
      <img src={img} className="card-img-top" style={{height:'15rem', width: '25rem'}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{address}</p>
      </div>
    </div>      
  )
}

export default ShowCourt
