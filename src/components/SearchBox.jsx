import React from 'react'

const SearchBox = ({ games, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSeachChange = (e) => {
    if (!e.target.value) return setSearchResults(games)
    const gameResultsArray = games.filter(game => game.state.includes(e.target.value) || game.city.includes(e.target.value))
    setSearchResults(gameResultsArray)
  }

  return (
  <div className="w-50">
    <form className="mb-3 w-100 text-center d-flex flex-row" action="/search" method="get" onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="game-search" 
        className="form-control me-1 mr-auto-2" 
        onChange={handleSeachChange}
        aria-describedby="game-search" 
        placeholder="Search Suburb or State for local games!" 
        />
      <a ><button type="submit" className="btn btn-warning">Search</button></a>
      <label htmlFor="game-search" className="form-label invisible">Search</label>
    </form>
  </div>
  )
}

export default SearchBox