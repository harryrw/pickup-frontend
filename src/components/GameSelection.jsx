import React from 'react'
import { Link } from 'react-router-dom'
import ShowGame from './ShowGame'


const GameList = ({ games }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {games.map((game, index) => (
          <p className="col-6 mb-3" key={index}>
            <Link to={`/games/${index}`} className="text-reset text-decoration-none"><ShowGame game={game}/></Link>
          </p>
          ))}
        </div>
      </div>
    </>
  )
}
  

export default GameList;
