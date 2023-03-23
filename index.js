const
    {
        allSurah,
        getSurahAllData,
        getCity,
        getQuibla,
        getSalat
    } = require("./lib/utils.js");
let allcity;

function getAllSurah() {
    return allSurah
}
exports.getAllSurah = getAllSurah;


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

async function salat(options = {}) {
    try {
        let
            {
                city,
                type
            } = options;
        const data = await getCity(allcity, city);
        if (data.allcity) allcity = data.allcity;
        if (!data.city) throw new TypeError(`Salat city IS NOT valid`);
        city = data.city;
        return await getSalat(city, type)
    } catch (error) {
        console.log(error);
    }
}
exports.salat = salat;

async function watchSalat(options = {}, call) {

    if (
        (!call) ||
        (call && typeof call !== "function")
    ) return;

    let
        {
            city,
            type,
            interval = 1000
        } = options;

    setInterval(async () => {
        let result = await salat({ city, type });
        if (!result?.jour) return;
        result = result.jour?.salat?.timings;
        const
            currentDate = new Date(),
            currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
        for (const [prayer, time] of Object.entries(result)) {
            if (currentTime === time.split(" ")[0]) {
                call(prayer, time);
            }
        }
    }, interval);

}
exports.watchSalat = watchSalat;