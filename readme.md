## MuslimHelp

[![muslimhelp on npm](https://img.shields.io/npm/v/muslimhelp.svg)](https://www.npmjs.com/package/muslimhelp)
[![muslimhelp site](https://img.shields.io/static/v1?label=Site&color=blue&message=https://zougataga.github.io/muslimhelp/site/)](https://zougataga.github.io/muslimhelp/site/)


## Installation

```python
npm i muslimhelp
```

## Example

```js
const {
    getSurah,
    getRandomSurah,
    quibla,
    salat
} = require("muslimhelp");

(async () => {
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

    await quibla();
    // City from your ip
    // -> { direction: 112, distance: { city: 'Toulouse', distance: 4305.9 } }

    //  await quibla("Paris");
    // -> { direction: 119, distance: { city: 'Paris', distance: 4499.2 } }

    await salat();
    // City from your ip
    // -> {SALAT OBJECT}
    // {
    //     city: 'Toulouse',
    //     date: '15/03/2023',
    //     jour: { salat: { timings: [Object], date: [Object], meta: [Object] } },
    //     prochaine: { salat: 'Dhuhr', heure: '13:07' },
    //     semaine: {
    //       date: '15 / 20 Mar 2023',
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

    //  await salat("Paris");
    // -> {SALAT OBJECT}
    // {
    //     city: 'Paris',
    //     date: '15/03/2023',
    //     jour: { salat: { timings: [Object], date: [Object], meta: [Object] } },
    //     prochaine: { salat: 'Dhuhr', heure: '13:03' },
    //     semaine: {
    //       date: '15 / 20 Mar 2023',
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

})()
```