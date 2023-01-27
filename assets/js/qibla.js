const input = document.querySelector(".salat .input input"),
    button = document.querySelector(".salat .input button"),
    compassCircle = document.querySelector(".compass-circle"),
    myPoint = document.querySelector(".my-point"),
    direction = document.querySelector("#direction"),
    distance = document.querySelector("#distance");




let allcity = [];

(async () => {
    const data = await getAllCity();
    allcity.push(...data);

    const ipSave = getCookie("city"), exist = allcity.filter(e => e.city.toLowerCase().includes(ipSave?.toLowerCase()))[0];
    if (ipSave && exist) modifDirection(exist.city)
    else {
        getIp().then(e => {
            modifDirection(e.city)
            setCookie("city", e.city)
        })
    }
})()

button.addEventListener("click", () => {
    modifDirection(input.value.trim())
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


function modifDirection(city) {
    myPoint.style.opacity = 0
    direction.innerHTML = `Chargement...`;
    distance.innerHTML = `Chargement...`;
    const
        info = allcity.filter(e => e.city.toLowerCase().includes(city.toLowerCase()))[0],
        now = new Date(),
        anne = now.getFullYear(),
        month = now.getMonth() + 1,
        jour = now.getDate();
    if (!info) return;

    input.value = city;
    input.classList.remove("novalid");
    input.classList.add("valid");
    button.removeAttribute("disabled");

    let pointDegree = Qibla(info.lat, info.lng);
    if (pointDegree < 0) pointDegree = pointDegree + 360;

    compassCircle.style.transform = `translate(-50%, -50%) rotate(${pointDegree}deg)`;
    myPoint.style.opacity = 1;
    direction.innerHTML = `Direction du Compas: ${pointDegree}°`;

    const points = [
        {
            latitude: 21.422487,
            longitude: 39.826206
        },
        {
            latitude: info.lat,
            longitude: info.lng
        }
    ];
    const dis = getDistance(points[0], points[1]);

    distance.innerHTML = `La <strong>Qibla</strong> est à <strong>${dis} km</strong> de <strong>${city}</strong>`;



}

function Qibla(latitude, longitude) {
    const point = {
        lat: 21.422487,
        lng: 39.826206
    };

    const phiK = (point.lat * Math.PI) / 180.0;
    const lambdaK = (point.lng * Math.PI) / 180.0;
    const phi = (latitude * Math.PI) / 180.0;
    const lambda = (longitude * Math.PI) / 180.0;
    const psi =
        (180.0 / Math.PI) *
        Math.atan2(
            Math.sin(lambdaK - lambda),
            Math.cos(phi) * Math.tan(phiK) -
            Math.sin(phi) * Math.cos(lambdaK - lambda)
        );
    return Math.round(psi);
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