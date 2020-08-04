/** @jsx jsx */
import { Helmet } from 'react-helmet'
import { jsx, css, useColorMode, Box } from 'theme-ui'
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

const modes = ['dark', 'cyan', 'gray', 'book', 'magenta']
const Layout = props => {
  const [mode, setMode] = useColorMode()
  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }
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
            title='Toggle Color Mode'
            sx={{
              fontFamily: 'sansSerif',
              appearance: 'none',
              fontSize: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 'bold',
              border: 'none',
              m: 3,
              p: 2,
              color: 'text',
              bg: 'gray',
              '&:focus': {
                outline: '2px solid'
              }
            }}
            onClick={cycleMode}
          >
            {mode}
          </button>
        </header>
        {props.children}
      </Box>
    </div>
  )
}

export default Layout
