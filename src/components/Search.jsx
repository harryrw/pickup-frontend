import React from 'react'
import SearchBox from './SearchBox'
import ShowGame from './ShowGame'

const filterGames = (games, query) => {
    if (!query) {
        return games
    }

    return games.filter((game) => {
        const gameState = game.state.name.toLowerCase()
        return gameState.includes(query)
    })
}

const Search = ({ games }) => {
    return (
        <div>
            <SearchBox />
            <h1>Search Results</h1>
            {games.map((game) => (
                <ShowGame key={game.id} game={game} />
            ))}
        </div>
    )
}

export default Search