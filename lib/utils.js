
async function getSurahAllData(chapter) {
    // Merci chat gpt mdr
    const allSurah = [{ name: 'Al-Faatiha', arab: 'سُورَةُ ٱلْفَاتِحَةِ', n: 1 }, { name: 'Al-Baqara', arab: 'سُورَةُ البَقَرَةِ', n: 2 }, { name: 'Aal-i-Imraan', arab: 'سُورَةُ آلِ عِمۡرَانَ', n: 3 }, { name: 'An-Nisaa', arab: 'سُورَةُ النِّسَاءِ', n: 4 }, { name: 'Al-Maaida', arab: 'سُورَةُ المَائـِدَةِ', n: 5 }, { name: "Al-An'aam',arab: 'سُورَةُ الأَنۡعَامِ)", n: 6 }, { name: "Al-A'raaf',arab: 'سُورَةُ الأَعۡرَافِ)", n: 7 }, { name: 'Al-Anfaal', arab: 'سُورَةُ الأَنفَالِ', n: 8 }, { name: 'At-Tawba', arab: 'سُورَةُ التَّوۡبَةِ', n: 9 }, { name: 'Yunus', arab: 'سُورَةُ يُونُسَ', n: 10 }, { name: 'Hud', arab: 'سُورَةُ هُودٍ', n: 11 }, { name: 'Yusuf', arab: 'سُورَةُ يُوسُفَ', n: 12 }, { name: "Ar-Ra'd',arab: 'سُورَةُ الرَّعۡدِ)", n: 13 }, { name: 'Ibrahim', arab: 'سُورَةُ إِبۡرَاهِيمَ', n: 14 }, { name: 'Al-Hijr', arab: 'سُورَةُ الحِجۡرِ', n: 15 }, { name: 'An-Nahl', arab: 'سُورَةُ النَّحۡلِ', n: 16 }, { name: 'Al-Israa', arab: 'سُورَةُ الإِسۡرَاءِ', n: 17 }, { name: 'Al-Kahf', arab: 'سُورَةُ الكَهۡفِ', n: 18 }, { name: 'Maryam', arab: 'سُورَةُ مَرۡيَمَ', n: 19 }, { name: 'Taa-Haa', arab: 'سُورَةُ طه', n: 20 }, { name: 'Al-Anbiyaa', arab: 'سُورَةُ الأَنبِيَاءِ', n: 21 }, { name: 'Al-Hajj', arab: 'سُورَةُ الحَجِّ', n: 22 }, { name: 'Al-Muminoon', arab: 'سُورَةُ المُؤۡمِنُونَ', n: 23 }, { name: 'An-Noor', arab: 'سُورَةُ النُّورِ', n: 24 }, { name: 'Al-Furqaan', arab: 'سُورَةُ الفُرۡقَانِ', n: 25 }, { name: "Ash-Shu'araa',arab: 'سُورَةُ الشُّعَرَاءِ)", n: 26 }, { name: 'An-Naml', arab: 'سُورَةُ النَّمۡلِ', n: 27 }, { name: 'Al-Qasas', arab: 'سُورَةُ القَصَصِ', n: 28 }, { name: 'Al-Ankaboot', arab: 'سُورَةُ العَنكَبُوتِ', n: 29 }, { name: 'Ar-Room', arab: 'سُورَةُ الرُّومِ', n: 30 }, { name: 'Luqman', arab: 'سُورَةُ لُقۡمَانَ', n: 31 }, { name: 'As-Sajda', arab: 'سُورَةُ السَّجۡدَةِ', n: 32 }, { name: 'Al-Ahzaab', arab: 'سُورَةُ الأَحۡزَابِ', n: 33 }, { name: 'Saba', arab: 'سُورَةُ سَبَإٍ', n: 34 }, { name: 'Faatir', arab: 'سُورَةُ فَاطِرٍ', n: 35 }, { name: 'Yaseen', arab: 'سُورَةُ يسٓ', n: 36 }, { name: 'As-Saaffaat', arab: 'سُورَةُ الصَّافَّاتِ', n: 37 }, { name: 'Saad', arab: 'سُورَةُ صٓ', n: 38 }, { name: 'Az-Zumar', arab: 'سُورَةُ الزُّمَرِ', n: 39 }, { name: 'Ghafir', arab: 'سُورَةُ غَافِرٍ', n: 40 }, { name: 'Fussilat', arab: 'سُورَةُ فُصِّلَتۡ', n: 41 }, { name: 'Ash-Shura', arab: 'سُورَةُ الشُّورَىٰ', n: 42 }, { name: 'Az-Zukhruf', arab: 'سُورَةُ الزُّخۡرُفِ', n: 43 }, { name: 'Ad-Dukhaan', arab: 'سُورَةُ الدُّخَانِ', n: 44 }, { name: 'Al-Jaathiya', arab: 'سُورَةُ الجَاثِيَةِ', n: 45 }, { name: 'Al-Ahqaf', arab: 'سُورَةُ الأَحۡقَافِ', n: 46 }, { name: 'Muhammad', arab: 'سُورَةُ مُحَمَّدٍ', n: 47 }, { name: 'Al-Fath', arab: 'سُورَةُ الفَتۡحِ', n: 48 }, { name: 'Al-Hujuraat', arab: 'سُورَةُ الحُجُرَاتِ', n: 49 }, { name: 'Qaaf', arab: 'سُورَةُ قٓ', n: 50 }, { name: 'Adh-Dhaariyat', arab: 'سُورَةُ الذَّارِيَاتِ', n: 51 }, { name: 'At-Tur', arab: 'سُورَةُ الطُّورِ', n: 52 }, { name: 'An-Najm', arab: 'سُورَةُ النَّجۡمِ', n: 53 }, { name: 'Al-Qamar', arab: 'سُورَةُ القَمَرِ', n: 54 }, { name: 'Ar-Rahmaan', arab: 'سُورَةُ الرَّحۡمَٰن', n: 55 }, { name: 'Al-Waaqia', arab: 'سُورَةُ الوَاقِعَةِ', n: 56 }, { name: 'Al-Hadid', arab: 'سُورَةُ الحَدِيدِ', n: 57 }, { name: 'Al-Mujaadila', arab: 'سُورَةُ المُجَادلَةِ', n: 58 }, { name: 'Al-Hashr', arab: 'سُورَةُ الحَشۡرِ', n: 59 }, { name: 'Al-Mumtahana', arab: 'سُورَةُ المُمۡتَحنَةِ', n: 60 }, { name: 'As-Saff', arab: 'سُورَةُ الصَّفِّ', n: 61 }, { name: "Al-Jumu'a',arab: 'سُورَةُ الجُمُعَةِ)", n: 62 }, { name: 'Al-Munaafiqoon', arab: 'سُورَةُ المُنَافِقُونَ', n: 63 }, { name: 'At-Taghaabun', arab: 'سُورَةُ التَّغَابُنِ', n: 64 }, { name: 'At-Talaaq', arab: 'سُورَةُ الطَّلَاقِ', n: 65 }, { name: 'At-Tahrim', arab: 'سُورَةُ التَّحۡرِيمِ', n: 66 }, { name: 'Al-Mulk', arab: 'سُورَةُ المُلۡكِ', n: 67 }, { name: 'Al-Qalam', arab: 'سُورَةُ القَلَمِ', n: 68 }, { name: 'Al-Haaqqa', arab: 'سُورَةُ الحَاقَّةِ', n: 69 }, { name: "Al-Ma'aarij',arab: 'سُورَةُ المَعَارِجِ)", n: 70 }, { name: 'Nooh', arab: 'سُورَةُ نُوحٍ', n: 71 }, { name: 'Al-Jinn', arab: 'سُورَةُ الجِنِّ', n: 72 }, { name: 'Al-Muzzammil', arab: 'سُورَةُ المُزَّمِّلِ', n: 73 }, { name: 'Al-Muddaththir', arab: 'سُورَةُ المُدَّثِّرِ', n: 74 }, { name: 'Al-Qiyaama', arab: 'سُورَةُ القِيَامَةِ', n: 75 }, { name: 'Al-Insaan', arab: 'سُورَةُ الإِنسَانِ', n: 76 }, { name: 'Al-Mursalaat', arab: 'سُورَةُ المُرۡسَلَاتِ', n: 77 }, { name: 'An-Naba', arab: 'سُورَةُ النَّبَإِ', n: 78 }, { name: "An-Naazi'aat',arab: 'سُورَةُ النَّازِعَاتِ)", n: 79 }, { name: 'Abasa', arab: 'سُورَةُ عَبَسَ', n: 80 }, { name: 'At-Takwir', arab: 'سُورَةُ التَّكۡوِيرِ', n: 81 }, { name: 'Al-Infitaar', arab: 'سُورَةُ الانفِطَارِ', n: 82 }, { name: 'Al-Mutaffifin', arab: 'سُورَةُ المُطَفِّفِينَ', n: 83 }, { name: 'Al-Inshiqaaq', arab: 'سُورَةُ الانشِقَاقِ', n: 84 }, { name: 'Al-Burooj', arab: 'سُورَةُ البُرُوجِ', n: 85 }, { name: 'At-Taariq', arab: 'سُورَةُ الطَّارِقِ', n: 86 }, { name: "Al-A'laa',arab: 'سُورَةُ الأَعۡلَىٰ)", n: 87 }, { name: 'Al-Ghaashiya', arab: 'سُورَةُ الغَاشِيَةِ', n: 88 }, { name: 'Al-Fajr', arab: 'سُورَةُ الفَجۡرِ', n: 89 }, { name: 'Al-Balad', arab: 'سُورَةُ البَلَدِ', n: 90 }, { name: 'Ash-Shams', arab: 'سُورَةُ الشَّمۡسِ', n: 91 }, { name: 'Al-Lail', arab: 'سُورَةُ اللَّيۡلِ', n: 92 }, { name: 'Ad-Dhuhaa', arab: 'سُورَةُ الضُّحَىٰ', n: 93 }, { name: 'Ash-Sharh', arab: 'سُورَةُ الشَّرۡحِ', n: 94 }, { name: 'At-Tin', arab: 'سُورَةُ التِّينِ', n: 95 }, { name: 'Al-Alaq', arab: 'سُورَةُ العَلَقِ', n: 96 }, { name: 'Al-Qadr', arab: 'سُورَةُ القَدۡرِ', n: 97 }, { name: 'Al-Bayyina', arab: 'سُورَةُ البَيِّنَةِ', n: 98 }, { name: 'Az-Zalzala', arab: 'سُورَةُ الزَّلۡزَلَةِ', n: 99 }, { name: 'Al-Aadiyaat', arab: 'سُورَةُ العَادِيَاتِ', n: 100 }, { name: "Al-Qaari'a',arab: 'سُورَةُ القَارِعَةِ)", n: 101 }, { name: 'At-Takaathur', arab: 'سُورَةُ التَّكَاثُرِ', n: 102 }, { name: 'Al-Asr', arab: 'سُورَةُ العَصۡرِ', n: 103 }, { name: 'Al-Humaza', arab: 'سُورَةُ الهُمَزَةِ', n: 104 }, { name: 'Al-Fil', arab: 'سُورَةُ الفِيلِ', n: 105 }, { name: 'Quraish', arab: 'سُورَةُ قُرَيۡشٍ', n: 106 }, { name: "Al-Maa'un',arab: 'سُورَةُ المَاعُونِ)", n: 107 }, { name: 'Al-Kawthar', arab: 'سُورَةُ الكَوۡثَرِ', n: 108 }, { name: 'Al-Kaafiroon', arab: 'سُورَةُ الكَافِرُونَ', n: 109 }, { name: 'An-Nasr', arab: 'سُورَةُ النَّصۡرِ', n: 110 }, { name: 'Al-Masad', arab: 'سُورَةُ المَسَدِ', n: 111 }, { name: 'Al-Ikhlaas', arab: 'سُورَةُ الإِخۡلَاصِ', n: 112 }, { name: 'Al-Falaq', arab: 'سُورَةُ الفَلَقِ', n: 113 }, { name: 'An-Naas', arab: 'سُورَةُ النَّاسِ', n: 114 }];
    if (!chapter || !Number(chapter)) chapter = 1;
    const
        info = allSurah.filter(e => e.n == chapter)[0],
        allAudio = (await getAudio(chapter)) || {},
        audio = { audio: `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${chapter}.mp3`, ...allAudio },
        data = await getSurahData(chapter);
    return { info, audio, data };
    async function getSurahData(n) {
        try {
            const response = await fetch(`https://quranenc.com/api/v1/translation/sura/french_montada/${n}`);
            return response.ok ? (await response.json())?.result : false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    async function getAudio(n) {
        try {
            const response = await fetch(`https://api.alquran.cloud/v1/surah/${n}/editions/ar.alafasy,en.asad,ur.jalandhry`);
            return response.ok ? (await response.json())?.data[0] : false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.getSurahAllData = getSurahAllData;

async function getIp() {
    const response = await fetch('https://api.ipify.org?format=json');
    const
        json = await response.json(),
        info = await ipinfo(json?.ip);
    return info ? info : false;
}
async function ipinfo(ip) {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    return response.status === 200 ? await response.json() : false;
}
async function getCity(allcity, city) {
    if (!allcity) allcity = await get();
    if (!city) city = (await getIp())?.city;
    const exist = allcity.filter(e => e.city.toLowerCase().includes(city?.toLowerCase()))[0];
    if (city && exist) return { allcity, city: { city, ...exist } };
    return false;
    async function get() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/kevinroberts/city-timezones/master/data/cityMap.json');
            return response.ok ? await response.json() : false;
        } catch (error) {
            return false;
        }
    }
}
exports.getCity = getCity;


function getQuibla(cityObj) {
    const
        { lat, lng, city } = cityObj,
        point = {
            lat: 21.422487,
            lng: 39.826206
        },
        phiK = (point.lat * Math.PI) / 180.0,
        lambdaK = (point.lng * Math.PI) / 180.0,
        phi = (lat * Math.PI) / 180.0,
        lambda = (lng * Math.PI) / 180.0,
        psi =
            (180.0 / Math.PI) *
            Math.atan2(
                Math.sin(lambdaK - lambda),
                Math.cos(phi) * Math.tan(phiK) -
                Math.sin(phi) * Math.cos(lambdaK - lambda)
            ),
        direction = Math.round(psi),
        distance = {
            city,
            distance: getDistance(
                { latitude: 21.422487, longitude: 39.826206 },
                { latitude: lat, longitude: lng })
        };
    return {
        direction,
        distance
    }
    function getDistance(lat, lng) {
        return getDistanceBetween(lat, lng);
        function _convertMeasurements(distance, measurement = 'km') {
            let rawValue = '';
            switch (measurement.toLowerCase()) {
                case 'mi':
                    rawValue = (distance * 0.62137).toFixed(1);
                    break;
                case 'km':
                    rawValue = distance.toFixed(1);
                    break;
                case 'm':
                    rawValue = (distance * 1000).toFixed();
                    break;
                default:
                    rawValue = distance.toFixed(1);
            }
            return parseFloat(rawValue);
        }

        function _haversine(...args) {
            const rad = args.map((deg) => deg / 180.0 * Math.PI);
            const lat1 = rad[0];
            const lon1 = rad[1];
            const lat2 = rad[2];
            const lon2 = rad[3];
            const R = 6372.8;
            const dLat = lat2 - lat1;
            const dLon = lon2 - lon1;

            const a = Math.sin(dLat / 2) *
                Math.sin(dLat / 2) +
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2) *
                Math.cos(lat1) *
                Math.cos(lat2);

            const c = 2 * Math.asin(Math.sqrt(a));

            return R * c;
        };

        function isGeolocationAvailable() {
            return new Promise((resolve, reject) => {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition((data) => {
                        resolve(data);
                    }, (error) => {
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                reject(new Error("Error: Permission denied"));
                                break;
                            case error.POSITION_UNAVAILABLE:
                                reject(new Error("Error: Position unavailable"));
                                break;
                            case error.TIMEOUT:
                                reject(new Error("Error: Timeout"));
                                break;
                        }
                    });
                } else {
                    reject(new Error("Error: Geolocation disabled in your browser"));
                }
            });
        };

        function getDistanceBetween(p1, p2, measurement) {
            if (p1.hasOwnProperty('latitude') && p1.hasOwnProperty('longitude') &&
                p2.hasOwnProperty('latitude') && p2.hasOwnProperty('longitude')) {
                const distance = _haversine(
                    p1.latitude,
                    p1.longitude,
                    p2.latitude,
                    p2.longitude
                );

                return _convertMeasurements(distance, measurement)

            } else {
                throw new Error("Error: Position latitude or longitude is not correct");
            }
        }

        function getClosestPosition(current, otherPoints, measurement) {
            const distances = otherPoints.map((value) => getDistanceBetween(current, value, measurement));
            const indexOfSmallest = distances.indexOf(Math.min(...distances));

            return {
                ...otherPoints[indexOfSmallest],
                haversine: {
                    distance: distances[indexOfSmallest],
                    measurement,
                    accuracy: current.accuracy
                },
            };
        };

    }
}
exports.getQuibla = getQuibla;

async function getSalat(cityObj) {
    const
        { lat, lng, city } = cityObj,
        now = new Date(),
        anne = now.getFullYear(),
        month = now.getMonth() + 1,
        jourmonth = new Date(anne, month, 0).getDate(),
        jour = now.getDate(),
        heure = now.getHours(),
        min = now.getMinutes(),
        calendar = await getCalendar(lat, lng, month, anne);
    return {
        city,
        date: `${jour.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${anne}`,
        jour: {
            salat: calendar[0]
        },
        prochaine: getProchaine(calendar[0]),
        semaine: getSemaineSalat(),
        mois: {
            date: `${month} / ${anne}`,
            salat: calendar
        }
    };;
    function getProchaine(a) {
        let
            allH = [
                { n: "Imsak", h: Number(a.timings.Imsak.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Imsak.split(" ")[0].split(":")[1]) || 0 },
                { n: "Fajr", h: Number(a.timings.Fajr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Fajr.split(" ")[0].split(":")[1]) || 0 },
                { n: "Sunrise", h: Number(a.timings.Sunrise.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Sunrise.split(" ")[0].split(":")[1]) || 0 },
                { n: "Dhuhr", h: Number(a.timings.Dhuhr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Dhuhr.split(" ")[0].split(":")[1]) || 0 },
                { n: "Asr", h: Number(a.timings.Asr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Asr.split(" ")[0].split(":")[1]) || 0 },
                { n: "Sunset", h: Number(a.timings.Sunset.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Sunset.split(" ")[0].split(":")[1]) || 0 },
                { n: "Maghrib", h: Number(a.timings.Maghrib.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Maghrib.split(" ")[0].split(":")[1]) || 0 },
                { n: "Isha", h: Number(a.timings.Isha.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Isha.split(" ")[0].split(":")[1]) || 0 }
            ], hr;
        // const rh = heure.toString().padStart(2, "0"), rm = min.toString().padStart(2, "0");
        allH.forEach(e => {
            if (e.h == heure) {
                if (e.m < min) {
                    hr = e
                }
            }
        });
        if (!hr) {
            let val = [];
            for (i = 0; i < allH.length; i++) {
                if (allH[i].h > heure) {
                    val.push(allH[i]);
                }
            };
            hr = val[0];
        };
        if (hr) hr = { salat: hr.n, heure: `${hr.h.toString().padStart(2, "0")}:${hr.m.toString().padStart(2, "0")}` }
        return hr;
    }
    function getSemaineSalat() {
        let semaine = [], all = [], i = 1, n = 1;
        while (n <= jourmonth) {
            if (i === 7) i = 0, semaine.push(all), all = [];
            all.push(n);
            i++;
            n++;
        };
        if (i != 0) semaine.push(all);
        let realsemaine = [];
        semaine.forEach(o => {
            for (var i = 0; i < o.length; i++) {
                if (jour === o[i]) realsemaine.push(o);

            }
        });
        realsemaine = realsemaine[0];
        const
            p0 = realsemaine[0],
            p1 = realsemaine[realsemaine.length - 1];
        return {
            date: `${calendar[p0].date.readable.split(" ")[0]} / ${calendar[p1 - 1].date.readable}`,
            salat: calendar.slice(p0, p1)
        }
    }
};
exports.getSalat = getSalat;

async function getCalendar(lat, lng, month, year) {
    try {
        const response = await fetch(`https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${month}&year=${year}`);
        return response.ok ? (await response.json())?.data : false;
    } catch (error) {
        console.error(error);
        return false;
    }
}
exports.getCalendar = getCalendar;


