import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShowCourt from './ShowCourt'
import CourtStateSelector from './CourtStateSelector'
import NewCourt from './NewCourt'
import Navbar from './Navbar'

const AllCourts = ({ courts, addCourt }) => {
  const [filteredCourts, setFilteredCourts] = useState([])
  const { state } = useParams()
  const [title, setTitle] = useState("All Courts")

  useEffect(() => {
    const lowerCaseState = state ? state.toLowerCase() : state
    if (lowerCaseState) {
      setFilteredCourts(courts.filter(court => court.state.toLowerCase() === lowerCaseState))
      setTitle(`${state.toUpperCase()}`)
    } else {
      setFilteredCourts(courts)
      setTitle("All Courts")
    }
  }, [state, courts])

  return (
    <>
    <Navbar />
    <div className="container-lg d-md-flex flex-column flex-wrap align-items-center pt-2 " >
      <div className="container-lg d-flex flex-row justify-content-around" >
        <h2 className="text-warning">{title}</h2>
        <CourtStateSelector />
        <NewCourt addCourt={addCourt}/>
      </div>
      <div className="container d-flex flex-wrap">
      {filteredCourts.map((court, index) => ( 
        <div className="col-lg-6 mb-3" key={index}>    
            <Link to={`/courts/${index}`} className="text-reset text-decoration-none"><ShowCourt court={court}/></Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default AllCourts

