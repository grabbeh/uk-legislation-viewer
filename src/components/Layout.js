import React from 'react'
import { Helmet } from 'react-helmet'
import { css, useColorMode, Box } from 'theme-ui'
import { Global } from '@emotion/core'
import '../index.css'

const styles = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`
const Layout = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>mbg.codes</title>
      </Helmet>
      <Global styles={styles} />
      <Box>
        <header>
          <button
            onClick={e => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
          >
            Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
          </button>
        </header>
        {props.children}
      </Box>
    </div>
  )
}

export default Layout
