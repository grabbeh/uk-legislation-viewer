const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')

const get = section =>
  axios.get(`https://www.legislation.gov.uk/ukpga/1974/39/section/${section}`)

const getCCAData = sections =>
  Promise.all(
    sections.map(async sectionNumber => {
      const { data } = await get(sectionNumber)
      return { data, sectionNumber }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  const numbers = [...Array(100).keys()].slice(1)
  const CCAData = await getCCAData(numbers)
  const template = path.resolve(`src/templates/Template.js`)
  CCAData.forEach(async section => {
    const { data, sectionNumber } = section
    const $ = cheerio.load(data)
    const title = $('#viewLegSnippet .LegP1GroupTitleFirst').text()
    const content = $('#viewLegSnippet').html()

    createPage({
      path: `/${sectionNumber}`,
      component: template,
      context: { title, sectionNumber, content }
    })
  })
}
