if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config()
}
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')

const getCCAData = sections =>
  Promise.all(
    sections.map(async sectionNumber => {
      const url = `${process.env.LEGISLATION_URL}/${sectionNumber}`
      const { data } = await axios(url)
      return { data, sectionNumber }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  const numbers = [...Array(Number(process.env.TOTAL_SECTIONS)).keys()].slice(1)
  const CCAData = await getCCAData(numbers)
  const template = path.resolve(`src/templates/Template.js`)
  CCAData.forEach(async section => {
    const { data, sectionNumber } = section
    const $ = cheerio.load(data)
    let title = $('#viewLegSnippet .LegP1GroupTitleFirst').text()
    title = title.slice(0, title.indexOf('.'))
    const content = $('#viewLegSnippet').html()

    createPage({
      path: `/${sectionNumber}`,
      component: template,
      context: { title, sectionNumber, content }
    })
  })
}
