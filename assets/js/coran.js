
const
    ztitle = document.querySelector('.zone_titre'),
    ar = ztitle.querySelector('.ar'),
    title = ztitle.querySelector('h1'),
    desc = ztitle.querySelector('p'),

    surah = document.querySelector('.surah'),
    chapterInput = document.getElementById('chapter_input'),
    all = [{ name: 'Al-Faatiha', arab: 'سُورَةُ ٱلْفَاتِحَةِ', n: 1 }, { name: 'Al-Baqara', arab: 'سُورَةُ البَقَرَةِ', n: 2 }, { name: 'Aal-i-Imraan', arab: 'سُورَةُ آلِ عِمۡرَانَ', n: 3 }, { name: 'An-Nisaa', arab: 'سُورَةُ النِّسَاءِ', n: 4 }, { name: 'Al-Maaida', arab: 'سُورَةُ المَائـِدَةِ', n: 5 }, { name: "Al-An'aam',arab: 'سُورَةُ الأَنۡعَامِ)", n: 6 }, { name: "Al-A'raaf',arab: 'سُورَةُ الأَعۡرَافِ)", n: 7 }, { name: 'Al-Anfaal', arab: 'سُورَةُ الأَنفَالِ', n: 8 }, { name: 'At-Tawba', arab: 'سُورَةُ التَّوۡبَةِ', n: 9 }, { name: 'Yunus', arab: 'سُورَةُ يُونُسَ', n: 10 }, { name: 'Hud', arab: 'سُورَةُ هُودٍ', n: 11 }, { name: 'Yusuf', arab: 'سُورَةُ يُوسُفَ', n: 12 }, { name: "Ar-Ra'd',arab: 'سُورَةُ الرَّعۡدِ)", n: 13 }, { name: 'Ibrahim', arab: 'سُورَةُ إِبۡرَاهِيمَ', n: 14 }, { name: 'Al-Hijr', arab: 'سُورَةُ الحِجۡرِ', n: 15 }, { name: 'An-Nahl', arab: 'سُورَةُ النَّحۡلِ', n: 16 }, { name: 'Al-Israa', arab: 'سُورَةُ الإِسۡرَاءِ', n: 17 }, { name: 'Al-Kahf', arab: 'سُورَةُ الكَهۡفِ', n: 18 }, { name: 'Maryam', arab: 'سُورَةُ مَرۡيَمَ', n: 19 }, { name: 'Taa-Haa', arab: 'سُورَةُ طه', n: 20 }, { name: 'Al-Anbiyaa', arab: 'سُورَةُ الأَنبِيَاءِ', n: 21 }, { name: 'Al-Hajj', arab: 'سُورَةُ الحَجِّ', n: 22 }, { name: 'Al-Muminoon', arab: 'سُورَةُ المُؤۡمِنُونَ', n: 23 }, { name: 'An-Noor', arab: 'سُورَةُ النُّورِ', n: 24 }, { name: 'Al-Furqaan', arab: 'سُورَةُ الفُرۡقَانِ', n: 25 }, { name: "Ash-Shu'araa',arab: 'سُورَةُ الشُّعَرَاءِ)", n: 26 }, { name: 'An-Naml', arab: 'سُورَةُ النَّمۡلِ', n: 27 }, { name: 'Al-Qasas', arab: 'سُورَةُ القَصَصِ', n: 28 }, { name: 'Al-Ankaboot', arab: 'سُورَةُ العَنكَبُوتِ', n: 29 }, { name: 'Ar-Room', arab: 'سُورَةُ الرُّومِ', n: 30 }, { name: 'Luqman', arab: 'سُورَةُ لُقۡمَانَ', n: 31 }, { name: 'As-Sajda', arab: 'سُورَةُ السَّجۡدَةِ', n: 32 }, { name: 'Al-Ahzaab', arab: 'سُورَةُ الأَحۡزَابِ', n: 33 }, { name: 'Saba', arab: 'سُورَةُ سَبَإٍ', n: 34 }, { name: 'Faatir', arab: 'سُورَةُ فَاطِرٍ', n: 35 }, { name: 'Yaseen', arab: 'سُورَةُ يسٓ', n: 36 }, { name: 'As-Saaffaat', arab: 'سُورَةُ الصَّافَّاتِ', n: 37 }, { name: 'Saad', arab: 'سُورَةُ صٓ', n: 38 }, { name: 'Az-Zumar', arab: 'سُورَةُ الزُّمَرِ', n: 39 }, { name: 'Ghafir', arab: 'سُورَةُ غَافِرٍ', n: 40 }, { name: 'Fussilat', arab: 'سُورَةُ فُصِّلَتۡ', n: 41 }, { name: 'Ash-Shura', arab: 'سُورَةُ الشُّورَىٰ', n: 42 }, { name: 'Az-Zukhruf', arab: 'سُورَةُ الزُّخۡرُفِ', n: 43 }, { name: 'Ad-Dukhaan', arab: 'سُورَةُ الدُّخَانِ', n: 44 }, { name: 'Al-Jaathiya', arab: 'سُورَةُ الجَاثِيَةِ', n: 45 }, { name: 'Al-Ahqaf', arab: 'سُورَةُ الأَحۡقَافِ', n: 46 }, { name: 'Muhammad', arab: 'سُورَةُ مُحَمَّدٍ', n: 47 }, { name: 'Al-Fath', arab: 'سُورَةُ الفَتۡحِ', n: 48 }, { name: 'Al-Hujuraat', arab: 'سُورَةُ الحُجُرَاتِ', n: 49 }, { name: 'Qaaf', arab: 'سُورَةُ قٓ', n: 50 }, { name: 'Adh-Dhaariyat', arab: 'سُورَةُ الذَّارِيَاتِ', n: 51 }, { name: 'At-Tur', arab: 'سُورَةُ الطُّورِ', n: 52 }, { name: 'An-Najm', arab: 'سُورَةُ النَّجۡمِ', n: 53 }, { name: 'Al-Qamar', arab: 'سُورَةُ القَمَرِ', n: 54 }, { name: 'Ar-Rahmaan', arab: 'سُورَةُ الرَّحۡمَٰن', n: 55 }, { name: 'Al-Waaqia', arab: 'سُورَةُ الوَاقِعَةِ', n: 56 }, { name: 'Al-Hadid', arab: 'سُورَةُ الحَدِيدِ', n: 57 }, { name: 'Al-Mujaadila', arab: 'سُورَةُ المُجَادلَةِ', n: 58 }, { name: 'Al-Hashr', arab: 'سُورَةُ الحَشۡرِ', n: 59 }, { name: 'Al-Mumtahana', arab: 'سُورَةُ المُمۡتَحنَةِ', n: 60 }, { name: 'As-Saff', arab: 'سُورَةُ الصَّفِّ', n: 61 }, { name: "Al-Jumu'a',arab: 'سُورَةُ الجُمُعَةِ)", n: 62 }, { name: 'Al-Munaafiqoon', arab: 'سُورَةُ المُنَافِقُونَ', n: 63 }, { name: 'At-Taghaabun', arab: 'سُورَةُ التَّغَابُنِ', n: 64 }, { name: 'At-Talaaq', arab: 'سُورَةُ الطَّلَاقِ', n: 65 }, { name: 'At-Tahrim', arab: 'سُورَةُ التَّحۡرِيمِ', n: 66 }, { name: 'Al-Mulk', arab: 'سُورَةُ المُلۡكِ', n: 67 }, { name: 'Al-Qalam', arab: 'سُورَةُ القَلَمِ', n: 68 }, { name: 'Al-Haaqqa', arab: 'سُورَةُ الحَاقَّةِ', n: 69 }, { name: "Al-Ma'aarij',arab: 'سُورَةُ المَعَارِجِ)", n: 70 }, { name: 'Nooh', arab: 'سُورَةُ نُوحٍ', n: 71 }, { name: 'Al-Jinn', arab: 'سُورَةُ الجِنِّ', n: 72 }, { name: 'Al-Muzzammil', arab: 'سُورَةُ المُزَّمِّلِ', n: 73 }, { name: 'Al-Muddaththir', arab: 'سُورَةُ المُدَّثِّرِ', n: 74 }, { name: 'Al-Qiyaama', arab: 'سُورَةُ القِيَامَةِ', n: 75 }, { name: 'Al-Insaan', arab: 'سُورَةُ الإِنسَانِ', n: 76 }, { name: 'Al-Mursalaat', arab: 'سُورَةُ المُرۡسَلَاتِ', n: 77 }, { name: 'An-Naba', arab: 'سُورَةُ النَّبَإِ', n: 78 }, { name: "An-Naazi'aat',arab: 'سُورَةُ النَّازِعَاتِ)", n: 79 }, { name: 'Abasa', arab: 'سُورَةُ عَبَسَ', n: 80 }, { name: 'At-Takwir', arab: 'سُورَةُ التَّكۡوِيرِ', n: 81 }, { name: 'Al-Infitaar', arab: 'سُورَةُ الانفِطَارِ', n: 82 }, { name: 'Al-Mutaffifin', arab: 'سُورَةُ المُطَفِّفِينَ', n: 83 }, { name: 'Al-Inshiqaaq', arab: 'سُورَةُ الانشِقَاقِ', n: 84 }, { name: 'Al-Burooj', arab: 'سُورَةُ البُرُوجِ', n: 85 }, { name: 'At-Taariq', arab: 'سُورَةُ الطَّارِقِ', n: 86 }, { name: "Al-A'laa',arab: 'سُورَةُ الأَعۡلَىٰ)", n: 87 }, { name: 'Al-Ghaashiya', arab: 'سُورَةُ الغَاشِيَةِ', n: 88 }, { name: 'Al-Fajr', arab: 'سُورَةُ الفَجۡرِ', n: 89 }, { name: 'Al-Balad', arab: 'سُورَةُ البَلَدِ', n: 90 }, { name: 'Ash-Shams', arab: 'سُورَةُ الشَّمۡسِ', n: 91 }, { name: 'Al-Lail', arab: 'سُورَةُ اللَّيۡلِ', n: 92 }, { name: 'Ad-Dhuhaa', arab: 'سُورَةُ الضُّحَىٰ', n: 93 }, { name: 'Ash-Sharh', arab: 'سُورَةُ الشَّرۡحِ', n: 94 }, { name: 'At-Tin', arab: 'سُورَةُ التِّينِ', n: 95 }, { name: 'Al-Alaq', arab: 'سُورَةُ العَلَقِ', n: 96 }, { name: 'Al-Qadr', arab: 'سُورَةُ القَدۡرِ', n: 97 }, { name: 'Al-Bayyina', arab: 'سُورَةُ البَيِّنَةِ', n: 98 }, { name: 'Az-Zalzala', arab: 'سُورَةُ الزَّلۡزَلَةِ', n: 99 }, { name: 'Al-Aadiyaat', arab: 'سُورَةُ العَادِيَاتِ', n: 100 }, { name: "Al-Qaari'a',arab: 'سُورَةُ القَارِعَةِ)", n: 101 }, { name: 'At-Takaathur', arab: 'سُورَةُ التَّكَاثُرِ', n: 102 }, { name: 'Al-Asr', arab: 'سُورَةُ العَصۡرِ', n: 103 }, { name: 'Al-Humaza', arab: 'سُورَةُ الهُمَزَةِ', n: 104 }, { name: 'Al-Fil', arab: 'سُورَةُ الفِيلِ', n: 105 }, { name: 'Quraish', arab: 'سُورَةُ قُرَيۡشٍ', n: 106 }, { name: "Al-Maa'un',arab: 'سُورَةُ المَاعُونِ)", n: 107 }, { name: 'Al-Kawthar', arab: 'سُورَةُ الكَوۡثَرِ', n: 108 }, { name: 'Al-Kaafiroon', arab: 'سُورَةُ الكَافِرُونَ', n: 109 }, { name: 'An-Nasr', arab: 'سُورَةُ النَّصۡرِ', n: 110 }, { name: 'Al-Masad', arab: 'سُورَةُ المَسَدِ', n: 111 }, { name: 'Al-Ikhlaas', arab: 'سُورَةُ الإِخۡلَاصِ', n: 112 }, { name: 'Al-Falaq', arab: 'سُورَةُ الفَلَقِ', n: 113 }, { name: 'An-Naas', arab: 'سُورَةُ النَّاسِ', n: 114 }];
let chapter = 1, lastaudio;
changeChapter();

async function changeChapter(n) {
    surah.innerHTML = "<h1>Chargement...</h1>";
    ar.innerHTML = "";
    title.innerHTML = `Chargement...`;
    desc.innerHTML = ``;

    if (n == "-") chapter--;
    else if (n == "+") chapter++;
    if (Number(n)) chapter = n;

    if (chapter < 1) chapter = 1;
    if (chapter > 114) chapter = 114;
    if (!Number.isInteger(chapter)) chapter = 1;
    const surahD = await getSurah(chapter),
        surahI = all.filter(e => e.n == chapter)[0];

    ar.innerHTML = surahI.arab;
    title.innerHTML = `Sourate ${surahI.name.toUpperCase()} / ${surahI.arab} en arabe | Sourate ${chapter}`;
    desc.innerHTML = `${surahI.name.toUpperCase()} · ${surahD.length} versets`;

    let aya = [];
    surahD.forEach(async a => {
        aya.push(`<p onclick="audioverset(this, ${a.sura}, ${a.aya})"><span>${a.aya}) </span><strong>${a.arabic_text}</strong><br>${a.translation.split(".")[1].replace(" ", "")}</p>`);
    });
    surah.innerHTML = `
    <audio
        controls
        src="https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${chapter}.mp3">
            <a href="https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${chapter}.mp3">
                Download audio
            </a>
    </audio><br>
${aya.join("\n")}
    `;
    chapterInput.value = chapter;
    document.querySelector("audio").addEventListener("play", () => {
        if (lastaudio) {
            lastaudio.pause();
            // document.querySelectorAll("p").forEach(e => e.classList.remove("click"))
        }
    })
    document.querySelector("audio").addEventListener("pause", () => {
        if (lastaudio) {
            lastaudio.play();
            // document.querySelectorAll("p").forEach(e => e.classList.remove("click"))
        }
    })
}



async function audioverset(ev, surah, aya) {
    if (lastaudio) return;
    const allaudio = await getAudio(surah),
        audioD = allaudio.ayahs[Number(aya) - 1]?.audio,
        audio = new Audio(audioD);
    ev.classList.add("click");
    lastaudio = audio;
    if (!document.querySelector("audio")?.paused) {
        document.querySelector("audio").pause();
        audio.addEventListener("ended", () => {
            ev.classList.remove("click");
            lastaudio = false
            document.querySelector("audio").play()
        })
    } else audio.addEventListener("ended", () => { ev.classList.remove("click"); lastaudio = false });
    audio.play();
}


// --


function getSurah(n) {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://quranenc.com/api/v1/translation/sura/french_montada/${n}`, true);
        request.responseType = 'json';
        request.onload = function () {
            const status = request.status;
            resolve(status === 200 ? request.response?.result : false)
        };
        request.send();
    })
}

function getAudio(n) {
    return new Promise(resolve => {
        const request = new XMLHttpRequest();
        request.open('GET', `https://api.alquran.cloud/v1/surah/${n}/editions/ar.alafasy,en.asad,ur.jalandhry`, true);
        request.responseType = 'json';
        request.onload = function () {
            const status = request.status;
            resolve(status === 200 ? request.response?.data[0] : false)
        };
        request.send();
    })
}