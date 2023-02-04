import React from 'react'
import SearchBox from './SearchBox'
import ShowGame from './ShowGame'
import { Link } from 'react-router-dom'


const Search = ({ games, searchResults, setSearchResults }) => {
    
    const results = searchResults.map((game, index) => (
    <Link to={`/games/${index}`} className="text-reset text-decoration-none">
        <ShowGame key={index} game={game} />
    </Link>
    ))

    // <div className="col-6 mb-3" key={index}>
    //         <Link to={`/games/${index}`} className="text-reset text-decoration-none"><ShowGame game={game}/></Link>
    // </div>

    const content = results?.length ? results : <h4>Sorry, we couldn't any matching games!</h4>

    return (
        <div className="container">
            <SearchBox games={games} setSearchResults={setSearchResults}/>
            <h1>Search Results</h1>
            <main>{content}</main>
        </div>
    )
}

export default Search