import React from 'react'
import SearchBox from './SearchBox'
import ShowGame from './ShowGame'
import { Link } from 'react-router-dom'
import NewGame from './NewGame'


const SearchGames = ({ games, addGame, searchResults, setSearchResults }) => {
    

    const results = searchResults.map((game, index) => (
    <div className="col-lg-6 mb-3" key={index}>
        <Link to={`/games/${index}`} className="text-reset text-decoration-none">
            <ShowGame game={game} />
        </Link>
    </div>
    ))

    const content = results?.length ? results : <h4>Sorry, we couldn't any matching games!</h4>

    return (
        <div className="container">
            <div className="mt-2 d-flex justify-content-between">
                <h1>Games</h1>
                <SearchBox games={games} setSearchResults={setSearchResults}/>    
                <NewGame addGame={addGame} />
            </div>
            <main className="container d-flex flex-wrap">
                {content}
            </main>
        </div>
    )
}

export default SearchGames