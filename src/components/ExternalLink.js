import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import theme from './theme'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

Link.propTypes = {
  color: PropTypes.string
}

Link.defaultProps = {
  theme: theme
}

export default Link
