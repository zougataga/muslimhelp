const

    ztitle = document.querySelector('.zone_titre'),
    ar = ztitle.querySelector('.ar'),
    title = ztitle.querySelector('h1'),
    desc = ztitle.querySelector('p'),

    titreday = document.querySelector('#titreday'),
    salatday = document.querySelector('#salatday'),
    titreweek = document.querySelector('#titreweek'),
    salatweek = document.querySelector('#salatweek'),
    voirPl = document.querySelector('#voirplus'),
    titremonth = document.querySelector('#titremonth'),
    salatmonth = document.querySelector('#salatmonth'),

    input = document.querySelector(".salat .input input"),
    button = document.querySelector(".salat .input button");

let
    allcity = [],
    calendar,
    last,
    week,
    mois;

(async () => {
    const data = await getAllCity();
    allcity.push(...data);

    const ipSave = getCookie("city"), exist = allcity.filter(e => e.city.toLowerCase().includes(ipSave?.toLowerCase()))[0];
    if (ipSave && exist) modifSalat(exist.city)
    else {
        getIp().then(e => {
            modifSalat(e.city)
            setCookie("city", e.city)
        })
    }
})()


button.addEventListener("click", () => {
    calendar = false;
    modifSalat(input.value.trim())
});
input.addEventListener("input", (ev) => {
    const value = ev.target.value.trim();
    const novalid = () => {
        ev.target.classList.remove("valid");
        ev.target.classList.add("novalid");
        button.setAttribute("disabled", "");
    };
    if (!value) return novalid();
    const exist = allcity.filter(e => e.city.toLowerCase().includes(value.toLowerCase()))[0];
    if (!exist) return novalid();
    else {
        ev.target.classList.remove("novalid");
        ev.target.classList.add("valid");
        button.removeAttribute("disabled");
        return;
    }
});
function voirPlus(ev, n) {
    ev.style.display = "none";
    if (n == 1) week = true;
    else if (n == 2) mois = true;
    if (last) modifSalat(last);
}



async function modifSalat(city) {


    last = city;
    salatday.innerHTML = "<h1>Chargement...</h1>";

    if (week) {
        titreweek.style = "";
        salatweek.style = "";
        voirPl.style = "";
        salatweek.innerHTML = "<h1>Chargement...</h1>"
    };
    if (mois) {
        voirPl.style = "display:none;";
        titremonth.style = "";
        salatmonth.style = "";
        salatmonth.innerHTML = "<h1>Chargement...</h1>"
    };

    const
        info = allcity.filter(e => e.city.toLowerCase().includes(city.toLowerCase()))[0],
        now = new Date(),
        anne = now.getFullYear(),
        month = now.getMonth() + 1,
        jourmonth = new Date(anne, month, 0).getDate(),
        jour = now.getDate(),
        heure = now.getHours(),
        min = now.getMinutes();
    if (!info) return;
    if (!calendar) calendar = await getCalendar(info.lat, info.lng, month, anne);

    ar.innerHTML = `${jour.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${anne}`;
    title.innerHTML = `Heures de prières à ${city}`;
     desc.innerHTML = `Prochaine pirère (????): ??:??`;

    input.value = city;
    input.classList.remove("novalid");
    input.classList.add("valid");
    button.removeAttribute("disabled");

    titreday.innerHTML = `Du jour: ${jour.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${anne}`;
    const a = calendar[0];
    salatday.innerHTML = getPriere(a);

    let allH = [], hr;
    // const rh = heure.toString().padStart(2, "0"), rm = min.toString().padStart(2, "0");
    allH.push({ n: "Imsak", h: Number(a.timings.Imsak.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Imsak.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Fajr", h: Number(a.timings.Fajr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Fajr.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Sunrise", h: Number(a.timings.Sunrise.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Sunrise.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Dhuhr", h: Number(a.timings.Dhuhr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Dhuhr.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Asr", h: Number(a.timings.Asr.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Asr.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Sunset", h: Number(a.timings.Sunset.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Sunset.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Maghrib", h: Number(a.timings.Maghrib.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Maghrib.split(" ")[0].split(":")[1]) || 0 });
    allH.push({ n: "Isha", h: Number(a.timings.Isha.split(" ")[0].split(":")[0]) || 0, m: Number(a.timings.Isha.split(" ")[0].split(":")[1]) || 0 });

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
    if(hr) desc.innerHTML = `Prochaine pirère (${hr.n}): ${hr.h.toString().padStart(2,"0")}:${hr.m.toString().padStart(2,"0")}`
    console.log(hr);

    if (week) {
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
        const p0 = realsemaine[0];
        const p1 = realsemaine[realsemaine.length - 1];

        let fields = [];
        calendar.forEach(async a => {
            fields.push({
                name: `${a.date.readable}`,
                value: `<h3>${a.date.readable}</h3>
${getPriere(a)}`
            })
        });
        titreweek.innerHTML = `De la semaine: ${fields[p0].name.split(" ")[0]} / ${fields[p1 - 1].name}`;
        salatweek.innerHTML = fields.slice(p0, p1).map(e => e.value).join("<br>\n")
    };
    if (mois) {
        let fields = [];
        calendar.forEach(async a => {
            fields.push({
                name: `${a.date.readable}`,
                value: `<h3>${a.date.readable}</h3>
                ${getPriere(a)}`
            })
        });
        titremonth.innerHTML = `Du mois: ${month} / ${anne}`;
        salatmonth.innerHTML = fields.map(e => e.value).join("<br>\n")
    }
    function getPriere(a) {
        return `
        <p><span>Imsak: </span><strong>${a.timings.Imsak || 0}</strong></p>
        <p><span>Fajr: </span><strong>${a.timings.Fajr || 0}</strong></p>
        <p><span>Sunrise: </span><strong>${a.timings.Sunrise || 0}</strong></p>
        <p><span>Dhuhr: </span><strong>${a.timings.Dhuhr || 0}</strong></p>
        <p><span>Asr: </span><strong>${a.timings.Asr || 0}</strong></p>
        <p><span>Sunset: </span><strong>${a.timings.Sunset || 0}</strong></p>
        <p><span>Maghrib: </span><strong>${a.timings.Maghrib || 0}</strong></p>
        <p><span>Isha: </span><strong>${a.timings.Isha || 0}</strong></p>
        `
    }
}
function getIp() {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://api.ipify.org?format=json`, true);
        request.responseType = 'json';
        request.onload = async function () {
            const status = request.status;
            const info = await ipinfo(request?.response?.ip)
            resolve(status === 200 && info ? info : false)
        };
        request.send();
    })
}
function ipinfo(ip) {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://ipapi.co/${ip}/json/`, true);
        request.responseType = 'json';
        request.onload = function () {
            const status = request.status;
            resolve(status === 200 ? request.response : false)
        };
        request.send();
    })
}
function getAllCity() {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://raw.githubusercontent.com/kevinroberts/city-timezones/master/data/cityMap.json`, true);
        request.responseType = 'json';
        request.onload = function () {
            const status = request.status;
            resolve(status === 200 ? request.response : false)
        };
        request.send();
    })
}
function getCalendar(lat, lng, month, anne) {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lng}&method=2&month=${month}&year=${anne}`, true);
        request.responseType = 'json';
        request.onload = function () {
            const status = request.status;
            resolve(status === 200 ? request.response?.data : false)
        };
        request.send();
    })
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}