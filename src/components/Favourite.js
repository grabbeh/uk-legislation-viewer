/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { BsStarFill, BsStar } from 'react-icons/bs'

const Favourite = ({ section }) => {
  const [favourite, setFavourite] = useState(false)
  const [favourites, setFavourites] = useLocalStorage('favourites')

  useEffect(() => {
    if (!favourites) favourites = []
    if (favourites && favourites.includes(section)) {
      console.log(favourites)
      setFavourite(true)
    }
  }, [])

  const updateFavourites = () => {
    if (favourite) {
      setFavourite(false)
      setFavourites(
        favourites.filter(f => {
          return f !== section
        })
      )
    } else {
      setFavourite(true)
      setFavourites([...favourites, section])
    }
  }

  return (
    <Text
      as='span'
      sx={{ cursor: 'pointer', fontSize: 8 }}
      onClick={updateFavourites}
    >
      {favourite ? <BsStarFill style={{ color: '#ffbf00' }} /> : <BsStar />}
    </Text>
  )
}

export default Favourite
