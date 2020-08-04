/** @jsx jsx */
import { jsx, Box, Flex, Text } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import useEventListener from '@use-it/event-listener'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import loadable from '@loadable/component'
const Favourite = loadable(() => import('../components/Favourite'))

const Template = ({ pageContext, location, navigate }) => {
  const { content, title, sectionNumber } = pageContext
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
                <Box ml={3}>
                  <Favourite section={section} />
                </Box>
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
