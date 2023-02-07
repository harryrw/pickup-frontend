import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBox from './SearchBox'

const games = [
  {
    name: 'Prahran Game',
  },
  {
    name: 'Melbourne Game',
  },
]

describe('SearchBox component', () => {
  it('filters elements that contain the search text', () => {
    let searchResults
    const setSearchResults = (results) => {
      searchResults = results
    }

    const { getByPlaceholderText } = render(
      <SearchBox games={games} setSearchResults={setSearchResults} />
    )

    const input = getByPlaceholderText("Enter text to filter games (i.e. 'VIC', or 'practice')")
    fireEvent.change(input, { target: { value: 'Prahran' } })

    expect(searchResults).toHaveLength(1)
    expect(searchResults[0].name).toBe('Prahran Game')
  })
})