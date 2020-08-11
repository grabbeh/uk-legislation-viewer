/** @jsx jsx */
import { jsx, Box, Button, Input, Text } from 'theme-ui'

const SearchInput = props => {
  return (
    <Box>
      <Text as='span' sx={{ fontWeight: 'bold' }}>
        Search
      </Text>

      <Input
        sx={{ p: 3 }}
        className='mt1 fl w-100 bb bw1 b--black-20 font pa1 mw5'
        value={props.searchTerm}
        onChange={props.handleSearchInput}
      />
      <Text as='span' onClick={props.clear}>
        <i className='fa fa-close' />
      </Text>
    </Box>
  )
}

export default SearchInput
