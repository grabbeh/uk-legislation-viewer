if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config()
}
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)

const getCCAData = sections =>
  Promise.all(
    sections.map(async sectionNumber => {
      const url = `${process.env.LEGISLATION_URL}/${sectionNumber}`
      const { data } = await axios(url)
      const $ = cheerio.load(data)
      let title = $('#viewLegSnippet .LegP1GroupTitleFirst').text()
      title = title.slice(0, title.indexOf('.U'))
      const content = $('#viewLegSnippet').html()
      return { title, content, sectionNumber }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  const numbers = [...Array(Number(process.env.TOTAL_SECTIONS)).keys()].slice(1)
  const CCAData = await getCCAData(numbers)
  writeFileAsync('./data/legislation.json', JSON.stringify(CCAData))
  const template = path.resolve(`src/templates/Template.js`)
  CCAData.forEach(async section => {
    const { title, content, sectionNumber } = section
    createPage({
      path: `/${sectionNumber}`,
      component: template,
      context: { title, sectionNumber, content }
    })
  })
}
