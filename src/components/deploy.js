/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Deploy = () => {
  return (
    <Box>
      <a href='https://app.netlify.com/start/deploy?repository=https://www.netlify.com/img/deploy/button.svg'>
        <img src='https://www.netlify.com/img/deploy/button.svg' />
      </a>
    </Box>
  )
}

export default Deploy
