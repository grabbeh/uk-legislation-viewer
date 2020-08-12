/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { BsStarFill, BsStar } from 'react-icons/bs'

const Favourite = ({ section }) => {
  const [favourite, setFavourite] = useState(false)
  const [favourites, setFavourites] = useLocalStorage('favourites')

  useEffect(() => {
    if (!favourites) setFavourites([])
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
    <Box onClick={updateFavourites}>
      {favourite ? (
        <StarFillWrapper>
          <BsStarFill />
        </StarFillWrapper>
      ) : (
        <StarWrapper>
          <BsStar />
        </StarWrapper>
      )}
    </Box>
  )
}

export default Favourite

const StarWrapper = styled.div`
  cursor: pointer;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 75px;
  text-align: center;
  width: 100px;
  height: 100px;
  &:hover {
    background-color: #fbf1a9;
    color: #ffbf00;
    font-size: 60px;
  }
  transition: 0.3s;
`
const StarFillWrapper = styled.div`
  cursor: pointer;
  border-radius: 999px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffbf00;
  font-size: 75px;
  transition: 0.3s;
  &:hover {
    font-size: 60px;
    background-color: #fbf1a9;
  }
`
