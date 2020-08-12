/** @jsx jsx */
import { jsx, Box, Button, Input, Text } from 'theme-ui'

const SearchInput = props => {
  return (
    <Box sx={{ mt: 3 }}>
      <Input
        sx={{
          p: 2,
          borderBottomWidth: '3px',
          borderTopWidth: '0px',
          borderRightWidth: '0px',
          borderLeftWidth: '0px',
          borderRadius: 0,
          fontSize: 5,
          fontFamily: 'sansSerif'
        }}
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
