import React from 'react'
import { Link } from 'react-router-dom'
import ShowGame from './ShowGame'


const GameList = ({ games }) => {
  return (
    <>
      <div className="container">
        <div className="container d-flex flex-wrap">
          {games.map((game, index) => (
          <div className="col-lg-6 mb-3" key={index}>
            <Link to={`/games/${index}`} className="text-reset text-decoration-none"><ShowGame game={game}/></Link>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}
  

export default GameList;
