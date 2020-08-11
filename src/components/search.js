/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useEffect, useState } from 'react'

import search from '../libs/search'
import SearchInput from './searchInput'

const Search = () => {
  let [searchTerm, setSearchTerm] = useState('')
  //let [liveInput, setLiveInput] = useState(false)
  let [results, setResults] = useState()

  const clearSearchTerm = event => setSearchTerm('')

  const getSearchResults = (value = '') => {
    return search(value)
  }

  const handleSearchInput = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (searchTerm.length > 0) {
      setResults(getSearchResults(searchTerm))
    }
  }, [searchTerm])

  return (
    <Box>
      <SearchInput
        handleSearchInput={handleSearchInput}
        clear={clearSearchTerm}
        searchTerm={searchTerm}
      />
      <Box>
        {results &&
          results.map(r => (
            <Box key={r.item.title}>
              <Text sx={{ fontSize: 5 }}>{r.item.title}</Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default Search
