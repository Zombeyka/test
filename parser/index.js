const cheerio = require('cheerio'); // парсит HTML страницу
const axios = require('axios'); // отправка запросов на сервер для получения данных и html страниц
const iconv = require('iconv-lite'); // менять кодировку 
const fs = require('fs/promises'); // работа с файловой системой (создавать/удалять/менять файлы внутри пк)
// async function name(params) {

// }
// const getWeather = async () => {
//     const response = await axios.get('https://yandex.ru/pogoda/ru/rostov-na-donu?lat=47.196986&lon=39.632793')
//     const $ = cheerio.load(response.data)
//     const html = $.html()
//     const weathereData = $('.AppFact_warning__8kUUn').text()
//     console.log(weathereData)
// }
// getWeather()
const urlAuthor = 'https://ilibrary.ru/text/436/'
const getPage = async (url, page) => { // async делает функцию ассинхронной, что позволяет добавить await
    // const response = await axios.get('https://ilibrary.ru/text/436/p.1/index.html')
    const response = await axios.get(`${url}p.${page}/index.html`, { // await говорит компьютеру подождать выполнения 
        responseType: 'arraybuffer'
    });
    const html = iconv.decode(response.data, 'win1251'); // меняет тип кодировки
    const $ = cheerio.load(html); // парсит страницу
    const title = $('.title').text()
    const ignore = $('#pt1').text().replace('poems.push(ge("pmt1"));', '')
    // const epigraf = $('.epigraf').text()
    const text = $('#pmt1').text().replace('poems.push(ge("pmt1"));', '').trim() // парсит конкретный элемент с HTML страницы.
    return (`${title} ${ignore}\n ${text}`)
}

const getCountPage = async (url) => {
    const response = await axios.get(`${url}p.1/index.html`)
    const $ = cheerio.load(response.data)
    const countPage = $('#toc').text()
    const totalCountPage = countPage.slice(2)
    return totalCountPage
}

const getTextData = async (url) => {
    const totalPage = await getCountPage(url)
    for (let page = 1; page <= Number(totalPage); page++) {
        const text = await getPage(url, page);
        // console.log(text)
        await fs.writeFile(`./onegin/${page}.txt`, text, 'UTF-8')
    }
}
getTextData(urlAuthor)