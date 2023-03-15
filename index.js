const
    {
        getSurahAllData,
        getCity,
        getQuibla,
        getSalat
    } = require("./lib/utils.js");
let allcity;

async function getSurah(chapter) {
    return await getSurahAllData(chapter)
}
exports.getSurah = getSurah;

async function getRandomSurah() {
    const
        max = 114,
        min = 1,
        randomSur = Math.floor(Math.random() * (max - min + 1)) + min;
    return await getSurahAllData(randomSur)

}
exports.getRandomSurah = getRandomSurah;

async function quibla(city) {
    const data = await getCity(allcity, city);
    if (data.allcity) allcity = data.allcity;
    if (!data.city) throw new TypeError(`Quibla city IS NOT valid`);
    city = data.city;
    return getQuibla(city)
}
exports.quibla = quibla;

async function salat(city) {
    const data = await getCity(allcity, city);
    if (data.allcity) allcity = data.allcity;
    if (!data.city) throw new TypeError(`Salat city IS NOT valid`);
    city = data.city;
    return await getSalat(city)
}
exports.salat = salat