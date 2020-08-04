/** @jsx jsx */
import { jsx, Box, Flex, Text, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import useEventListener from '@use-it/event-listener'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import { useSwipeable } from 'react-swipeable'
import loadable from '@loadable/component'
const Favourite = loadable(() => import('../components/Favourite'))

const convertPath = path => {
  if (path[2] === '/') {
    return Number(path.slice(1, 2))
  } else if (path[3] === '/') {
    return Number(path.slice(1, 3))
  } else if (path[4] === '/') {
    return Number(path.slice(1, 4))
  } else return Number(path.slice(1))
}
const modes = ['dark', 'cyan', 'gray', 'book', 'magenta']
const Template = ({ pageContext, location, navigate }) => {
  const { content, title, sectionNumber } = pageContext
  let section = convertPath(location.pathname)
  const [mode, setMode] = useColorMode()
  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }
  const handler = ({ key }) => {
    if (key === 'ArrowLeft' && section > 1) {
      navigate(`/${section - 1}`)
    }
    if (key === 'ArrowRight') {
      navigate(`/${section + 1}`)
    }
  }
  useEventListener('keydown', handler)
  const swipeHandlers = useSwipeable({
    onSwipedRight: eventData => {
      if (section > 1) {
        navigate(`/${section - 1}`)
      }
    },
    onSwipedLeft: eventData => {
      navigate(`/${section + 1}`)
    }
  })
  return (
    <Layout>
      <Flex {...swipeHandlers} sx={{ justifyContent: 'center' }}>
        <Box sx={{ maxWidth: '1020px', p: 2 }}>
          <Flex>
            {section > 1 ? (
              <Link
                sx={{
                  color: 'inherit',
                  '&.active': {
                    color: 'primary'
                  }
                }}
                to={`/${section + -1}`}
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
              to={`/${section + 1}`}
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
