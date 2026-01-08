const cheerio = require('cheerio');
const axios = require('axios');

const urlMovie = 'https://www.kinopoisk.ru/film/843650/'
const getMovieInformation = async (url) => {
    const response = await axios.get(`${url}`)
    const $ = cheerio.load(response.data);
    // const movie = $('.styles_root__wAxKR styles_basicInfoSection__nsRc1').text()
    // return movie;
    console.log($.html())
}
getMovieInformation(urlMovie)