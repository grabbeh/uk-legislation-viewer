/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import useEventListener from '@use-it/event-listener'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { useSwipeable } from 'react-swipeable'
import legislation from '../../data/legislation.json'
import loadable from '@loadable/component'
const Favourite = loadable(() => import('../components/Favourite'))

const convertPath = path => {
  if (path[2] === '/') {
    return path.slice(1, 2)
  } else if (path[3] === '/') {
    return path.slice(1, 3)
  } else if (path[4] === '/') {
    return path.slice(1, 4)
  } else return path.slice(1)
}

const sections = legislation.map(l => l.sectionNumber.toString())
const Template = props => {
  let { pageContext, location, navigate } = props
  const { content, title, sectionNumber } = pageContext
  let section = convertPath(location.pathname)
  let currentIndex = sections.indexOf(section)
  let next = sections[currentIndex + 1]
  let previous = sections[currentIndex - 1]
  const handler = ({ key }) => {
    if (key === 'ArrowLeft' && currentIndex > 0) {
      navigate(`/${previous}`)
    }
    if (key === 'ArrowRight') {
      navigate(`/${next}`)
    }
  }
  useEventListener('keydown', handler)
  const swipeHandlers = useSwipeable({
    onSwipedRight: eventData => {
      if (currentIndex > 0) {
        navigate(`/${previous}`)
      }
    },
    onSwipedLeft: eventData => {
      navigate(`/${next}`)
    }
  })

  return (
    <Layout>
      <Flex {...swipeHandlers} sx={{ justifyContent: 'center' }}>
        <Box sx={{ maxWidth: '1020px', p: 2 }}>
          <Flex>
            {currentIndex > 0 ? (
              <Link
                sx={{
                  color: 'inherit',
                  '&.active': {
                    color: 'primary'
                  }
                }}
                to={`/${previous}`}
              >
                <Text sx={{ fontSize: 8 }}>
                  <FiArrowLeft />
                </Text>
              </Link>
            ) : null}
            <Box sx={{ margin: 'auto' }} />
            <Link
              sx={{
                color: 'inherit',
                '&.active': {
                  color: 'primary'
                }
              }}
              to={`/${next}`}
            >
              <Text sx={{ fontSize: 8 }}>
                <FiArrowRight />
              </Text>
            </Link>
          </Flex>
          <Box>
            <Favourite section={section} />
          </Box>
          <Box>
            <Flex>
              <Text
                as='h1'
                sx={{
                  lineHeight: '1.5',
                  fontSize: 6,
                  fontFamily: 'sansSerif',
                  fontWeight: 'bold'
                }}
              >
                {sectionNumber} {title}
              </Text>
            </Flex>
            <Text
              sx={{
                lineHeight: '1.5',
                fontSize: 3,
                fontFamily: 'sansSerif'
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Template
