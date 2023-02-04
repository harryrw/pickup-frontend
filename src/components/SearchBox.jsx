const SearchBox = () => {
  return (
    <div className="mb-3 w-50 text-center">
    <input 
      type="text" 
      className="form-control" 
      id="game-search" 
      aria-describedby="emailHelp" 
      placeholder="Search Suburb or State for local games!" />
      <button type="submit" className="btn btn-primary">Search</button>
  </div>
  )
}

export default SearchBox