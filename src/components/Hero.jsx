import SearchBox from "./SearchBox"

const Hero = () => {
  return (
<div className="col-md-6 w-100">
        <div className="h-100 p-5 text-warning bg-dark text-center">
          <h2>Pick Up</h2>
          <p>Find games near you:</p>
          <SearchBox />
          </div>
      </div>
  )
}

export default Hero