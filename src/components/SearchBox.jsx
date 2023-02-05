import React from 'react'

const SearchBox = ({ games, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSeachChange = (e) => {
    if (!e.target.value) return setSearchResults(games)
    const lowercaseValue = e.target.value.toLowerCase()
    const gameSearchResultsArray = games.filter(game => 
      Object.values(game)
        .map(value => value.toString().toLowerCase())
        .some(value => value.includes(lowercaseValue))
    )
    setSearchResults(gameSearchResultsArray)
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