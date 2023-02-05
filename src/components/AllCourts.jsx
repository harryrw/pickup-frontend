import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowCourt from './ShowCourt'
import CourtStateSelector from './CourtStateSelector'
import NewCourt from './NewCourt'

const AllCourts = ({ courts, addCourt }) => {
  const [filteredCourts, setFilteredCourts] = useState([]);
  const { state } = useParams();

  useEffect(() => {
    const lowerCaseState = state ? state.toLowerCase() : state;
    if (lowerCaseState) {
      setFilteredCourts(courts.filter(court => court.state.toLowerCase() === lowerCaseState));
    } else {
      setFilteredCourts(courts);
    }
  }, [state, courts]);

  return (
    <>
    <div className="container-lg bg-light d-md-flex flex-column flex-wrap align-items-center pt-2" >
      <div className="container-lg d-flex flex-row justify-content-around bg-light">
        <h2>All Courts</h2>
        <CourtStateSelector />
        <NewCourt addCourt={addCourt}/>
      </div>
      {filteredCourts.map((court, index) => ( 
        <div className="col-6 mb-3" key={index}>    
            <Link to={`/courts/${index}`} className="text-reset text-decoration-none"><ShowCourt court={court}/></Link>
          </div>
        ))}
    </div>
    </>
  )
}

export default AllCourts

