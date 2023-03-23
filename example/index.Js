const {
    getAllSurah,
    getSurah,
    getRandomSurah,
    salat,
    watchSalat,
    quibla
} = require("../");

(async () => {
    getAllSurah()
    // -> {ALL SURAH ARRAY}
    // [
    //     { name: 'Al-Faatiha', arab: 'سُورَةُ ٱلْفَاتِحَةِ', n: 1 },    
    //     { name: 'Al-Baqara', arab: 'سُورَةُ البَقَرَةِ', n: 2 },       
    //     { name: 'Aal-i-Imraan', arab: 'سُورَةُ آلِ عِمۡرَانَ', n: 3 },
    //     { name: 'An-Nisaa', arab: 'سُورَةُ النِّسَاءِ', n: 4 },        
    //     { name: 'Al-Maaida', arab: 'سُورَةُ المَائـِدَةِ', n: 5 },     
    //     { name: "Al-An'aam',arab: 'سُورَةُ الأَنۡعَامِ)", n: 6 },      
    //     { name: "Al-A'raaf',arab: 'سُورَةُ الأَعۡرَافِ)", n: 7 },      
    //     { name: 'Al-Anfaal', arab: 'سُورَةُ الأَنفَالِ', n: 8 },       
    //     { name: 'At-Tawba', arab: 'سُورَةُ التَّوۡبَةِ', n: 9 },       
    //     { name: 'Yunus', arab: 'سُورَةُ يُونُسَ', n: 10 },
    //     { name: 'Hud', arab: 'سُورَةُ هُودٍ', n: 11 },
    //     { name: 'Yusuf', arab: 'سُورَةُ يُوسُفَ', n: 12 },
    //     { name: "Ar-Ra'd',arab: 'سُورَةُ الرَّعۡدِ)", n: 13 },
    //     { name: 'Ibrahim', arab: 'سُورَةُ إِبۡرَاهِيمَ', n: 14 },
    //     { name: 'Al-Hijr', arab: 'سُورَةُ الحِجۡرِ', n: 15 },
    //     { name: 'An-Nahl', arab: 'سُورَةُ النَّحۡلِ', n: 16 },
    //     { name: 'Al-Israa', arab: 'سُورَةُ الإِسۡرَاءِ', n: 17 },
    //     { name: 'Al-Kahf', arab: 'سُورَةُ الكَهۡفِ', n: 18 },
    //     { name: 'Maryam', arab: 'سُورَةُ مَرۡيَمَ', n: 19 },
    //     { name: 'Taa-Haa', arab: 'سُورَةُ طه', n: 20 },
    //     { name: 'Al-Anbiyaa', arab: 'سُورَةُ الأَنبِيَاءِ', n: 21 },
    //     { name: 'Al-Hajj', arab: 'سُورَةُ الحَجِّ', n: 22 },
    //     { name: 'Al-Muminoon', arab: 'سُورَةُ المُؤۡمِنُونَ', n: 23 },
    //     { name: 'An-Noor', arab: 'سُورَةُ النُّورِ', n: 24 },
    //     { name: 'Al-Furqaan', arab: 'سُورَةُ الفُرۡقَانِ', n: 25 },
    //     { name: "Ash-Shu'araa',arab: 'سُورَةُ الشُّعَرَاءِ)", n: 26 },
    //     { name: 'An-Naml', arab: 'سُورَةُ النَّمۡلِ', n: 27 },
    //     { name: 'Al-Qasas', arab: 'سُورَةُ القَصَصِ', n: 28 },
    //     { name: 'Al-Ankaboot', arab: 'سُورَةُ العَنكَبُوتِ', n: 29 },
    //     { name: 'Ar-Room', arab: 'سُورَةُ الرُّومِ', n: 30 },
    //     { name: 'Luqman', arab: 'سُورَةُ لُقۡمَانَ', n: 31 },
    //     { name: 'As-Sajda', arab: 'سُورَةُ السَّجۡدَةِ', n: 32 },
    //     { name: 'Al-Ahzaab', arab: 'سُورَةُ الأَحۡزَابِ', n: 33 },
    //     { name: 'Saba', arab: 'سُورَةُ سَبَإٍ', n: 34 },
    //     { name: 'Faatir', arab: 'سُورَةُ فَاطِرٍ', n: 35 },
    //     { name: 'Yaseen', arab: 'سُورَةُ يسٓ', n: 36 },
    //     { name: 'As-Saaffaat', arab: 'سُورَةُ الصَّافَّاتِ', n: 37 },
    //     { name: 'Saad', arab: 'سُورَةُ صٓ', n: 38 },
    //     { name: 'Az-Zumar', arab: 'سُورَةُ الزُّمَرِ', n: 39 },
    //     { name: 'Ghafir', arab: 'سُورَةُ غَافِرٍ', n: 40 },
    //     { name: 'Fussilat', arab: 'سُورَةُ فُصِّلَتۡ', n: 41 },
    //     { name: 'Ash-Shura', arab: 'سُورَةُ الشُّورَىٰ', n: 42 },
    //     { name: 'Az-Zukhruf', arab: 'سُورَةُ الزُّخۡرُفِ', n: 43 },
    //     { name: 'Ad-Dukhaan', arab: 'سُورَةُ الدُّخَانِ', n: 44 },
    //     { name: 'Al-Jaathiya', arab: 'سُورَةُ الجَاثِيَةِ', n: 45 },
    //     { name: 'Al-Ahqaf', arab: 'سُورَةُ الأَحۡقَافِ', n: 46 },
    //     { name: 'Muhammad', arab: 'سُورَةُ مُحَمَّدٍ', n: 47 },
    //     { name: 'Al-Fath', arab: 'سُورَةُ الفَتۡحِ', n: 48 },
    //     { name: 'Al-Hujuraat', arab: 'سُورَةُ الحُجُرَاتِ', n: 49 },
    //     { name: 'Qaaf', arab: 'سُورَةُ قٓ', n: 50 },
    //     { name: 'Adh-Dhaariyat', arab: 'سُورَةُ الذَّارِيَاتِ', n: 51 },
    //     { name: 'At-Tur', arab: 'سُورَةُ الطُّورِ', n: 52 },
    //     { name: 'An-Najm', arab: 'سُورَةُ النَّجۡمِ', n: 53 },
    //     { name: 'Al-Qamar', arab: 'سُورَةُ القَمَرِ', n: 54 },
    //     { name: 'Ar-Rahmaan', arab: 'سُورَةُ الرَّحۡمَٰن', n: 55 },
    //     { name: 'Al-Waaqia', arab: 'سُورَةُ الوَاقِعَةِ', n: 56 },
    //     { name: 'Al-Hadid', arab: 'سُورَةُ الحَدِيدِ', n: 57 },
    //     { name: 'Al-Mujaadila', arab: 'سُورَةُ المُجَادلَةِ', n: 58 },
    //     { name: 'Al-Hashr', arab: 'سُورَةُ الحَشۡرِ', n: 59 },
    //     { name: 'Al-Mumtahana', arab: 'سُورَةُ المُمۡتَحنَةِ', n: 60 },
    //     { name: 'As-Saff', arab: 'سُورَةُ الصَّفِّ', n: 61 },
    //     { name: "Al-Jumu'a',arab: 'سُورَةُ الجُمُعَةِ)", n: 62 },
    //     { name: 'Al-Munaafiqoon', arab: 'سُورَةُ المُنَافِقُونَ', n: 63 },
    //     { name: 'At-Taghaabun', arab: 'سُورَةُ التَّغَابُنِ', n: 64 },
    //     { name: 'At-Talaaq', arab: 'سُورَةُ الطَّلَاقِ', n: 65 },
    //     { name: 'At-Tahrim', arab: 'سُورَةُ التَّحۡرِيمِ', n: 66 },
    //     { name: 'Al-Mulk', arab: 'سُورَةُ المُلۡكِ', n: 67 },
    //     { name: 'Al-Qalam', arab: 'سُورَةُ القَلَمِ', n: 68 },
    //     { name: 'Al-Haaqqa', arab: 'سُورَةُ الحَاقَّةِ', n: 69 },
    //     { name: "Al-Ma'aarij',arab: 'سُورَةُ المَعَارِجِ)", n: 70 },
    //     { name: 'Nooh', arab: 'سُورَةُ نُوحٍ', n: 71 },
    //     { name: 'Al-Jinn', arab: 'سُورَةُ الجِنِّ', n: 72 },
    //     { name: 'Al-Muzzammil', arab: 'سُورَةُ المُزَّمِّلِ', n: 73 },
    //     { name: 'Al-Muddaththir', arab: 'سُورَةُ المُدَّثِّرِ', n: 74 },
    //     { name: 'Al-Qiyaama', arab: 'سُورَةُ القِيَامَةِ', n: 75 },
    //     { name: 'Al-Insaan', arab: 'سُورَةُ الإِنسَانِ', n: 76 },
    //     { name: 'Al-Mursalaat', arab: 'سُورَةُ المُرۡسَلَاتِ', n: 77 },
    //     { name: 'An-Naba', arab: 'سُورَةُ النَّبَإِ', n: 78 },
    //     { name: "An-Naazi'aat',arab: 'سُورَةُ النَّازِعَاتِ)", n: 79 },
    //     { name: 'Abasa', arab: 'سُورَةُ عَبَسَ', n: 80 },
    //     { name: 'At-Takwir', arab: 'سُورَةُ التَّكۡوِيرِ', n: 81 },
    //     { name: 'Al-Infitaar', arab: 'سُورَةُ الانفِطَارِ', n: 82 },
    //     { name: 'Al-Mutaffifin', arab: 'سُورَةُ المُطَفِّفِينَ', n: 83 },
    //     { name: 'Al-Inshiqaaq', arab: 'سُورَةُ الانشِقَاقِ', n: 84 },
    //     { name: 'Al-Burooj', arab: 'سُورَةُ البُرُوجِ', n: 85 },
    //     { name: 'At-Taariq', arab: 'سُورَةُ الطَّارِقِ', n: 86 },
    //     { name: "Al-A'laa',arab: 'سُورَةُ الأَعۡلَىٰ)", n: 87 },
    //     { name: 'Al-Ghaashiya', arab: 'سُورَةُ الغَاشِيَةِ', n: 88 },
    //     { name: 'Al-Fajr', arab: 'سُورَةُ الفَجۡرِ', n: 89 },
    //     { name: 'Al-Balad', arab: 'سُورَةُ البَلَدِ', n: 90 },
    //     { name: 'Ash-Shams', arab: 'سُورَةُ الشَّمۡسِ', n: 91 },
    //     { name: 'Al-Lail', arab: 'سُورَةُ اللَّيۡلِ', n: 92 },
    //     { name: 'Ad-Dhuhaa', arab: 'سُورَةُ الضُّحَىٰ', n: 93 },
    //     { name: 'Ash-Sharh', arab: 'سُورَةُ الشَّرۡحِ', n: 94 },
    //     { name: 'At-Tin', arab: 'سُورَةُ التِّينِ', n: 95 },
    //     { name: 'Al-Alaq', arab: 'سُورَةُ العَلَقِ', n: 96 },
    //     { name: 'Al-Qadr', arab: 'سُورَةُ القَدۡرِ', n: 97 },
    //     { name: 'Al-Bayyina', arab: 'سُورَةُ البَيِّنَةِ', n: 98 },
    //     { name: 'Az-Zalzala', arab: 'سُورَةُ الزَّلۡزَلَةِ', n: 99 },
    //     { name: 'Al-Aadiyaat', arab: 'سُورَةُ العَادِيَاتِ', n: 100 },
    //     ... 14 more items
    //   ]

    await getSurah(1)
    // -> {SURAH OBJECT}
    // {
    //     info: { name: 'Al-Faatiha', arab: 'سُورَةُ ٱلْفَاتِحَةِ', n: 1 },
    //     audio: {
    //       audio: 'https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3',
    //       number: 1,
    //       name: 'سُورَةُ ٱلْفَاتِحَةِ',
    //       englishName: 'Al-Faatiha',
    //       englishNameTranslation: 'The Opening',
    //       revelationType: 'Meccan',
    //       numberOfAyahs: 7,
    //       ayahs: [
    //         [Object], [Object],
    //         [Object], [Object],
    //         [Object], [Object],
    //         [Object]
    //       ],
    //       edition: {
    //         identifier: 'ar.alafasy',
    //         language: 'ar',
    //         name: 'مشاري العفاسي',
    //         englishName: 'Alafasy',
    //         format: 'audio',
    //         type: 'versebyverse',
    //         direction: null
    //       }
    //     },
    //     data: [
    //       {
    //         id: '1',
    //         sura: '1',
    //         aya: '1',
    //         arabic_text: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
    //         translation: '1. Au nom d’Allah, le Tout Clément, le Tout Miséricordieux.[2]',
    //         footnotes: '[2] La traduction par « Le Tout Miséricordieux, le Très Miséricordieux », du reste très heureuse quant à sa fidélité à la paronymie de l’expression d’origine : raḥmân, raḥîm, polyptote formé sur la racine commune « raḥama », ne bénéficie malheureusement pas de la même réussite sur le plan du rythme et de l’euphonie. La formule « Le Tout Clément, le Tout Miséricordieux », quoique moins fidèle à la dérivation littérale, nous a semblé plus naturelle et plus fluide. L’intensification deux fois par l’adverbe « Tout » plutôt que par « Très », traduit bien celle qui, propre à l’arabe, utilise le superlatif interne : « ân » dans « raḥmân », « îm » dans « raḥîm ». L’adverbe « Tout » est différent de « Très », superlatif externe qui se traduit ordinairement par جدّا ; tel n’est pas le cas de « Tout », aux valeurs sémantiques plus absolues et qui s’inscrit harmonieusement dans la nature absolue et « toute puissante » des Attributs divins.'
    //       },
    //       {
    //         id: '2',
    //         sura: '1',
    //         aya: '2',
    //         arabic_text: 'ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ',
    //         translation: '2. Louange à Allah, Seigneur de l’Univers.',
    //         footnotes: ''
    //       },
    //       {
    //         id: '3',
    //         sura: '1',
    //         aya: '3',
    //         arabic_text: 'ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ',
    //         translation: '3. Le Tout Clément, le Tout Miséricordieux.',
    //         footnotes: ''
    //       },
    //       {
    //         id: '4',
    //         sura: '1',
    //         aya: '4',
    //         arabic_text: 'مَٰلِكِ يَوۡمِ ٱلدِّينِ',
    //         translation: '4. Souverain[3] du Jour de la Rétribution.',
    //         footnotes: '[3] ملك se lit de deux façons : en allongeant la première syllabe, au sens littéral de « possesseur », ou en la raccourcissant, au sens de « roi ». La traduction par « souverain » inclut, nous semble-t-il, les deux sens. Notons que la lecture de Hafç, adoptée pour la présente traduction, opte pour la première prononciation. '
    //       },
    //       {
    //         id: '5',
    //         sura: '1',
    //         aya: '5',
    //         arabic_text: 'إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ',
    //         translation: '5. C’est Toi (Seul) Que nous adorons, et c’est Toi (Seul) Dont nous cherchons l’assistance.',
    //         footnotes: ''
    //       },
    //       {
    //         id: '6',
    //         sura: '1',
    //         aya: '6',
    //         arabic_text: 'ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ',
    //         translation: '6. Guide-nous sur la voie droite,',
    //         footnotes: ''
    //       },
    //       {
    //         id: '7',
    //         sura: '1',
    //         aya: '7',
    //         arabic_text: 'صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ',
    //         translation: '7. voie de ceux que Tu as comblés de Tes grâces, non celle des réprouvés,[4] ni celle des égarés.',
    //         footnotes: '[4] Par Ta colère. Nous avons préféré traduire غير المغضوب عليهم par le passif, plus fidèle à la structure du texte coranique, et en évitant de traduire par la proposition relative « ceux qui sont réprouvés », « ceux qui ont encouru Ta colère », qui sont des traductions de segments arabes introduits par الذين. Or, ce pronom relatif ne s’est produit que dans الذين 
    //   أنعمت عليهم , que nous avons effectivement traduit par « ceux que Tu as comblés de Tes grâces ». Du reste, l’égalité et la symétrie des segments : « non celle des réprouvés, ni celle des égarés » évite au rythme le trébuchement dû à la structure déséquilibrée : « non de ceux qui sont réprouvés, ni des égarés », ou « non de ceux qui ont encouru Ta colère, ni des égarés ».'
    //       }
    //     ]
    //   }

    await getRandomSurah();
    // -> {SURAH OBJECT}

    await salat({
        city: "Toulouse", // (Default = from your ip)
        type: "all" // all, obligatoire, faculatif
    });
    // -> {SALAT OBJECT}
    // {
    //     city: 'Toulouse',
    //     type: 'all',
    //     jour: {
    //       date: '23/03/2023',
    //       salat: { timings: [Object], date: [Object], meta: [Object] }
    //     },
    //     prochaine: { salat: 'Asr', time: '16:11 (CET)' },
    //     semaine: {
    //       date: '22 / 27 Mar 2023',
    //       salat: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
    //     },
    //     mois: {
    //       date: '3 / 2023',
    //       salat: [
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object], [Object], [Object],
    //         [Object]
    //       ]
    //     }
    //   }

    await salat({ city: "Paris" });
    // -> {SALAT OBJECT}


    watchSalat({
        city: "Toulouse", // (Default = from your ip)
        type: "obligatoire" // all, obligatoire, faculatif
        // interval: 5000 (Default: 1000)
    }, (name, time) => {
        console.log(`Il est temps pour la prière de ${name} (${time})`);
    });

    await quibla();
    // direction = angle 
    // City from your ip
    // -> { direction: 112, distance: { city: 'Toulouse', distance: 4305.9 } }

    await quibla("Paris");
    // -> { direction: 119, distance: { city: 'Paris', distance: 4499.2 } }
})()