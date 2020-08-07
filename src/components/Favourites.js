/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'gatsby'

const Favourite = ({ section }) => {
  const [favourites] = useLocalStorage('favourites')
  return (
    <Box>
      {favourites.sort((a, b) => a - b)).map(f => (
        <Box>
          <Link to={`/${f}`}>Section {f}</Link>
        </Box>
      ))}
    </Box>
  )
}

export default Favourite
