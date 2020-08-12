import Fuse from 'fuse.js'
import legislation from '../../data/legislation.json'

const search = value => {
  if (!value || value.length < 4) {
    return false
  }
  const fuse = new Fuse(legislation, {
    threshold: 0.1,
    distance: 100000,
    includeMatches: true,
    keys: ['text', 'sectionNumber', 'title']
  })
  return fuse.search(value.trim())
}

export default search
