const puppeteer = require('puppeteer')

async function scrape (mon) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://bulbapedia.bulbagarden.net/wiki/${mon}_(Pok%C3%A9mon)`, {waitUntil: 'domcontentloaded'})

  const pic = await page.evaluate(() => {
    let sauce = document.body.querySelector(`a.image`).innerHTML.split('src="//')[1].split('" ')[0]
    return sauce
  })

  browser.close()
  console.log(mon, ': ', pic)
  return pic
}

module.exports = { scrape }
