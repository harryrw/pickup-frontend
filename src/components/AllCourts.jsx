import React from 'react'
import { Link } from 'react-router-dom'
import ShowCourt from './ShowCourt'

const AllCourts = ({ courts }) => {
  return (
    <>
        <h2>All Courts</h2>
        {courts.map((court, index) => ( 
            <div key={index}>    
                <Link to={`/courts/${index}`} className="text-reset text-decoration-none"><ShowCourt court={court}/></Link>
                {/* <ShowCourt court={court}/> */}
            </div>
        ))}
    </>
  )
}

export default AllCourts