/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui'
import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'gatsby'

const Favourite = ({ section }) => {
  const [favourites, setFavourites] = useLocalStorage('favourites')
  return (
    <Box sx={{ my: 4 }}>
      <Box>
        {favourites
          .sort((a, b) => a - b)
          .map(f => (
            <Box key={f}>
              <Link to={`/${f}`}>Section {f}</Link>
            </Box>
          ))}
      </Box>
      <Box>
        {favourites.length > 0 ? (
          <Button
            onClick={() => {
              setFavourites([])
            }}
          >
            Clear favourites
          </Button>
        ) : null}
      </Box>
    </Box>
  )
}

export default Favourite
