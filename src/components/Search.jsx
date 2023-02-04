import React from 'react'
import SearchBox from './SearchBox'
import ShowGame from './ShowGame'


const Search = ({ games, searchResults, setSearchResults }) => {
    
    const results = searchResults.map(game => <ShowGame key={game.id} game={game} />)

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