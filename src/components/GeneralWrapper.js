/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout'
import { Container, Box } from 'theme-ui'
import '../index.css'

const Wrapper = props => {
  const [showChild, setShowChild] = useState(false)

  useLayoutEffect(() => {
    setShowChild(true)
  }, [])
  return (
    <Layout>
      {showChild && (
        <Box sx={{ fontFamily: 'sansSerif' }}>
          <Container
            sx={{
              width: '100%',
              height: '100%',
              px: [2, 4, 6],
              pb: 5
            }}
          >
            {props.children}
          </Container>
        </Box>
      )}
    </Layout>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
