if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config()
}
const axios = require('axios')
const cheerio = require('cheerio')
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)
const alphabet = ['a', 'b', 'c', 'd', 'za']

const smallAlphabet = ['a']

const addLetters = (numbers, alphabet) => {
  return numbers.map(number => {
    return alphabet.map(letter => {
      return [number, `${number}${letter.toUpperCase()}`]
    })
  })
}

const getCCAData = sections => {
  let promises = sections.map(async sectionNumber => {
    const url = `${process.env.LEGISLATION_URL}/${sectionNumber}`

    const { data } = await axios(url)
    const $ = cheerio.load(data)
    let title = $('#viewLegSnippet .LegP1GroupTitleFirst').text()
    title = title.slice(0, title.indexOf('.U'))
    const content = $('#viewLegSnippet').html()
    const text = $('#viewLegSnippet').text()
    return { title, content, text, sectionNumber }
  })

  return Promise.all(
    promises.map(p =>
      p.catch(e => {
        return e
      })
    )
  )
}

exports.createPages = async ({ actions: { createPage } }) => {
  const numbers = [...Array(Number(process.env.TOTAL_SECTIONS)).keys()].slice(1)
  const fullPossibleSections = _.uniq(
    _.flattenDeep(addLetters(numbers, alphabet))
  )

  const CCAData = await getCCAData(fullPossibleSections)
  const filteredCCAData = CCAData.filter(result => !(result instanceof Error))
  console.log(filteredCCAData.length)
  writeFileAsync('./data/legislation.json', JSON.stringify(filteredCCAData))
  const template = path.resolve(`src/templates/Template.js`)
  filteredCCAData.forEach(async section => {
    const { title, content, sectionNumber } = section
    createPage({
      path: `/${sectionNumber}`,
      component: template,
      context: { title, sectionNumber, content }
    })
  })
}
