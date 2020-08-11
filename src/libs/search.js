import Fuse from 'fuse.js'
import legislation from '../../data/legislation.json'

const search = value => {
  const options = {
    keys: ['sectionNumber', 'title', 'text']
  }
  if (!value || value.length < 3) {
    return false
  }

  const fuse = new Fuse(legislation, {
    threshold: 0.4,
    ...options
  })

  return fuse.search(value.trim())
}

export default search
