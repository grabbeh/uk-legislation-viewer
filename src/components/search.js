/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useEffect, useState } from 'react'

import search from '../libs/search'
import SearchInput from './searchInput'
import { Link } from 'gatsby'

const Search = () => {
  let [searchTerm, setSearchTerm] = useState('')
  //let [liveInput, setLiveInput] = useState(false)
  let [results, setResults] = useState()
  console.log(results)

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
        {results && (
          <Box>
            <Box sx={{ mt: 3 }}>
              <Text sx={{ fontSize: 6, fontWeight: 'bold' }}>
                {results.length} results
              </Text>
            </Box>
            {results.sort().map((r, i) => (
              <Box sx={{ my: 4 }} key={i}>
                <Link to={`/${r.item.sectionNumber}`}>
                  <Text sx={{ fontWeight: 'bold', fontSize: 5 }}>
                    {r.item.sectionNumber} {r.item.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Search
