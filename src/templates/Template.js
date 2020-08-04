/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import useEventListener from '@use-it/event-listener'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import Favourite from '../components/Favourite'

const Template = ({ pageContext, location, navigate }) => {
  const { content } = pageContext
  let section = Number(location.pathname.slice(1))
  const handler = ({ key }) => {
    if (key === 'ArrowLeft' && section > 1) {
      navigate(`/${section - 1}`)
    }
    if (key === 'ArrowRight') {
      navigate(`/${section + 1}`)
    }
  }
  useEventListener('keydown', handler)
  return (
    <Layout>
      <Flex sx={{ justifyContent: 'center' }}>
        <Box sx={{ maxWidth: '1020px' }}>
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
            <Box>
              <Favourite section={section} />

              <Text
                sx={{
                  color: 'dark-gray',
                  lineHeight: '1.5',
                  fontSize: 3,
                  fontFamily: 'sansSerif'
                }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Box>
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
        </Box>
      </Flex>
    </Layout>
  )
}

export default Template
