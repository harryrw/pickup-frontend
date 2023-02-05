import React from 'react'

const SearchBox = ({ games, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSeachChange = (e) => {
    if (!e.target.value) return setSearchResults(games)
    const gameResultsArray = games.filter(game => game.state.includes(e.target.value) || game.city.includes(e.target.value))
    setSearchResults(gameResultsArray) || games.filter(game => game.description.includes(e.target.value)) || games.filter(game => game.name.includes(e.target.value))
  }

  return (
  <div className="w-75">
    <form className="mb-3 w-100 d-flex flex-row" action="/search" method="get" onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="game-search" 
        className="form-control me-1 mr-auto-2" 
        onChange={handleSeachChange}
        aria-describedby="game-search" 
        placeholder="Enter text to filter games (i.e. 'VIC', or 'practice')" 
        />
      <label htmlFor="game-search" className="form-label invisible">Search</label>
    </form>
  </div>
  )
}

export default SearchBox