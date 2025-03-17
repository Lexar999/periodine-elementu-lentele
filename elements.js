// Periodic table elements data with Lithuanian names
const elements = [
    {
        number: 1,
        symbol: "H",
        name: "Vandenilis",
        mass: "1.008",
        type: "nonmetal",
        group: 1,
        period: 1
    },
    {
        number: 2,
        symbol: "He",
        name: "Helis",
        mass: "4.0026",
        type: "noble-gas",
        group: 18,
        period: 1
    },
    {
        number: 3,
        symbol: "Li",
        name: "Litis",
        mass: "6.94",
        type: "alkali-metal",
        group: 1,
        period: 2
    },
    {
        number: 4,
        symbol: "Be",
        name: "Berilis",
        mass: "9.0122",
        type: "alkaline-earth",
        group: 2,
        period: 2
    },
    {
        number: 5,
        symbol: "B",
        name: "Boras",
        mass: "10.81",
        type: "metalloid",
        group: 13,
        period: 2
    },
    {
        number: 6,
        symbol: "C",
        name: "Anglis",
        mass: "12.011",
        type: "nonmetal",
        group: 14,
        period: 2
    },
    {
        number: 7,
        symbol: "N",
        name: "Azotas",
        mass: "14.007",
        type: "nonmetal",
        group: 15,
        period: 2
    },
    {
        number: 8,
        symbol: "O",
        name: "Deguonis",
        mass: "15.999",
        type: "nonmetal",
        group: 16,
        period: 2
    },
    {
        number: 9,
        symbol: "F",
        name: "Fluoras",
        mass: "18.998",
        type: "halogen",
        group: 17,
        period: 2
    },
    {
        number: 10,
        symbol: "Ne",
        name: "Neonas",
        mass: "20.180",
        type: "noble-gas",
        group: 18,
        period: 2
    },
    {
        number: 11,
        symbol: "Na",
        name: "Natris",
        mass: "22.990",
        type: "alkali-metal",
        group: 1,
        period: 3
    },
    {
        number: 12,
        symbol: "Mg",
        name: "Magnis",
        mass: "24.305",
        type: "alkaline-earth",
        group: 2,
        period: 3
    },
    {
        number: 13,
        symbol: "Al",
        name: "Aliuminis",
        mass: "26.982",
        type: "post-transition-metal",
        group: 13,
        period: 3
    },
    {
        number: 14,
        symbol: "Si",
        name: "Silicis",
        mass: "28.085",
        type: "metalloid",
        group: 14,
        period: 3
    },
    {
        number: 15,
        symbol: "P",
        name: "Fosforas",
        mass: "30.974",
        type: "nonmetal",
        group: 15,
        period: 3
    },
    {
        number: 16,
        symbol: "S",
        name: "Siera",
        mass: "32.06",
        type: "nonmetal",
        group: 16,
        period: 3
    },
    {
        number: 17,
        symbol: "Cl",
        name: "Chloras",
        mass: "35.45",
        type: "halogen",
        group: 17,
        period: 3
    },
    {
        number: 18,
        symbol: "Ar",
        name: "Argonas",
        mass: "39.948",
        type: "noble-gas",
        group: 18,
        period: 3
    },
    {
        number: 19,
        symbol: "K",
        name: "Kalis",
        mass: "39.098",
        type: "alkali-metal",
        group: 1,
        period: 4
    },
    {
        number: 20,
        symbol: "Ca",
        name: "Kalcis",
        mass: "40.078",
        type: "alkaline-earth",
        group: 2,
        period: 4
    },
    {
        number: 21,
        symbol: "Sc",
        name: "Skandis",
        mass: "44.956",
        type: "transition-metal",
        group: 3,
        period: 4
    },
    {
        number: 22,
        symbol: "Ti",
        name: "Titanas",
        mass: "47.867",
        type: "transition-metal",
        group: 4,
        period: 4
    },
    {
        number: 23,
        symbol: "V",
        name: "Vanadis",
        mass: "50.942",
        type: "transition-metal",
        group: 5,
        period: 4
    },
    {
        number: 24,
        symbol: "Cr",
        name: "Chromas",
        mass: "51.996",
        type: "transition-metal",
        group: 6,
        period: 4
    },
    {
        number: 25,
        symbol: "Mn",
        name: "Manganas",
        mass: "54.938",
        type: "transition-metal",
        group: 7,
        period: 4
    },
    {
        number: 26,
        symbol: "Fe",
        name: "Geležis",
        mass: "55.845",
        type: "transition-metal",
        group: 8,
        period: 4
    },
    {
        number: 27,
        symbol: "Co",
        name: "Kobaltas",
        mass: "58.933",
        type: "transition-metal",
        group: 9,
        period: 4
    },
    {
        number: 28,
        symbol: "Ni",
        name: "Nikelis",
        mass: "58.693",
        type: "transition-metal",
        group: 10,
        period: 4
    },
    {
        number: 29,
        symbol: "Cu",
        name: "Varis",
        mass: "63.546",
        type: "transition-metal",
        group: 11,
        period: 4
    },
    {
        number: 30,
        symbol: "Zn",
        name: "Cinkas",
        mass: "65.38",
        type: "transition-metal",
        group: 12,
        period: 4
    },
    {
        number: 31,
        symbol: "Ga",
        name: "Galis",
        mass: "69.723",
        type: "post-transition-metal",
        group: 13,
        period: 4
    },
    {
        number: 32,
        symbol: "Ge",
        name: "Germanis",
        mass: "72.630",
        type: "metalloid",
        group: 14,
        period: 4
    },
    {
        number: 33,
        symbol: "As",
        name: "Arsenas",
        mass: "74.922",
        type: "metalloid",
        group: 15,
        period: 4
    },
    {
        number: 34,
        symbol: "Se",
        name: "Selenas",
        mass: "78.971",
        type: "nonmetal",
        group: 16,
        period: 4
    },
    {
        number: 35,
        symbol: "Br",
        name: "Bromas",
        mass: "79.904",
        type: "halogen",
        group: 17,
        period: 4
    },
    {
        number: 36,
        symbol: "Kr",
        name: "Kriptonas",
        mass: "83.798",
        type: "noble-gas",
        group: 18,
        period: 4
    },
    {
        number: 37,
        symbol: "Rb",
        name: "Rubidis",
        mass: "85.468",
        type: "alkali-metal",
        group: 1,
        period: 5
    },
    {
        number: 38,
        symbol: "Sr",
        name: "Stroncis",
        mass: "87.62",
        type: "alkaline-earth",
        group: 2,
        period: 5
    },
    {
        number: 39,
        symbol: "Y",
        name: "Itris",
        mass: "88.906",
        type: "transition-metal",
        group: 3,
        period: 5
    },
    {
        number: 40,
        symbol: "Zr",
        name: "Cirkonis",
        mass: "91.224",
        type: "transition-metal",
        group: 4,
        period: 5
    },
    {
        number: 41,
        symbol: "Nb",
        name: "Niobis",
        mass: "92.906",
        type: "transition-metal",
        group: 5,
        period: 5
    },
    {
        number: 42,
        symbol: "Mo",
        name: "Molibdenas",
        mass: "95.95",
        type: "transition-metal",
        group: 6,
        period: 5
    },
    {
        number: 43,
        symbol: "Tc",
        name: "Technecis",
        mass: "[98]",
        type: "transition-metal",
        group: 7,
        period: 5
    },
    {
        number: 44,
        symbol: "Ru",
        name: "Rutenis",
        mass: "101.07",
        type: "transition-metal",
        group: 8,
        period: 5
    },
    {
        number: 45,
        symbol: "Rh",
        name: "Rodis",
        mass: "102.91",
        type: "transition-metal",
        group: 9,
        period: 5
    },
    {
        number: 46,
        symbol: "Pd",
        name: "Paladis",
        mass: "106.42",
        type: "transition-metal",
        group: 10,
        period: 5
    },
    {
        number: 47,
        symbol: "Ag",
        name: "Sidabras",
        mass: "107.87",
        type: "transition-metal",
        group: 11,
        period: 5
    },
    {
        number: 48,
        symbol: "Cd",
        name: "Kadmis",
        mass: "112.41",
        type: "transition-metal",
        group: 12,
        period: 5
    },
    {
        number: 49,
        symbol: "In",
        name: "Indis",
        mass: "114.82",
        type: "post-transition-metal",
        group: 13,
        period: 5
    },
    {
        number: 50,
        symbol: "Sn",
        name: "Alavas",
        mass: "118.71",
        type: "post-transition-metal",
        group: 14,
        period: 5
    },
    {
        number: 51,
        symbol: "Sb",
        name: "Stibis",
        mass: "121.76",
        type: "metalloid",
        group: 15,
        period: 5
    },
    {
        number: 52,
        symbol: "Te",
        name: "Telūras",
        mass: "127.60",
        type: "metalloid",
        group: 16,
        period: 5
    },
    {
        number: 53,
        symbol: "I",
        name: "Jodas",
        mass: "126.90",
        type: "halogen",
        group: 17,
        period: 5
    },
    {
        number: 54,
        symbol: "Xe",
        name: "Ksenonas",
        mass: "131.29",
        type: "noble-gas",
        group: 18,
        period: 5
    },
    {
        number: 55,
        symbol: "Cs",
        name: "Cezis",
        mass: "132.91",
        type: "alkali-metal",
        group: 1,
        period: 6
    },
    {
        number: 56,
        symbol: "Ba",
        name: "Baris",
        mass: "137.33",
        type: "alkaline-earth",
        group: 2,
        period: 6
    },
    {
        number: 57,
        symbol: "La",
        name: "Lantanas",
        mass: "138.91",
        type: "lanthanide",
        group: 3,
        period: 6
    },
    {
        number: 58,
        symbol: "Ce",
        name: "Ceris",
        mass: "140.12",
        type: "lanthanide",
        group: 4,
        period: 6
    },
    {
        number: 59,
        symbol: "Pr",
        name: "Prazeodimis",
        mass: "140.91",
        type: "lanthanide",
        group: 5,
        period: 6
    },
    {
        number: 60,
        symbol: "Nd",
        name: "Neodimis",
        mass: "144.24",
        type: "lanthanide",
        group: 6,
        period: 6
    },
    {
        number: 61,
        symbol: "Pm",
        name: "Prometis",
        mass: "[145]",
        type: "lanthanide",
        group: 7,
        period: 6
    },
    {
        number: 62,
        symbol: "Sm",
        name: "Samaris",
        mass: "150.36",
        type: "lanthanide",
        group: 8,
        period: 6
    },
    {
        number: 63,
        symbol: "Eu",
        name: "Europis",
        mass: "151.96",
        type: "lanthanide",
        group: 9,
        period: 6
    },
    {
        number: 64,
        symbol: "Gd",
        name: "Gadolinis",
        mass: "157.25",
        type: "lanthanide",
        group: 10,
        period: 6
    },
    {
        number: 65,
        symbol: "Tb",
        name: "Terbis",
        mass: "158.93",
        type: "lanthanide",
        group: 11,
        period: 6
    },
    {
        number: 66,
        symbol: "Dy",
        name: "Disprozis",
        mass: "162.50",
        type: "lanthanide",
        group: 12,
        period: 6
    },
    {
        number: 67,
        symbol: "Ho",
        name: "Holmis",
        mass: "164.93",
        type: "lanthanide",
        group: 13,
        period: 6
    },
    {
        number: 68,
        symbol: "Er",
        name: "Erbis",
        mass: "167.26",
        type: "lanthanide",
        group: 14,
        period: 6
    },
    {
        number: 69,
        symbol: "Tm",
        name: "Tulis",
        mass: "168.93",
        type: "lanthanide",
        group: 15,
        period: 6
    },
    {
        number: 70,
        symbol: "Yb",
        name: "Iterbis",
        mass: "173.05",
        type: "lanthanide",
        group: 16,
        period: 6
    },
    {
        number: 71,
        symbol: "Lu",
        name: "Liutecis",
        mass: "174.97",
        type: "lanthanide",
        group: 17,
        period: 6
    },
    {
        number: 72,
        symbol: "Hf",
        name: "Hafnis",
        mass: "178.49",
        type: "transition-metal",
        group: 4,
        period: 6
    },
    {
        number: 73,
        symbol: "Ta",
        name: "Tantalas",
        mass: "180.95",
        type: "transition-metal",
        group: 5,
        period: 6
    },
    {
        number: 74,
        symbol: "W",
        name: "Volframas",
        mass: "183.84",
        type: "transition-metal",
        group: 6,
        period: 6
    },
    {
        number: 75,
        symbol: "Re",
        name: "Renis",
        mass: "186.21",
        type: "transition-metal",
        group: 7,
        period: 6
    },
    {
        number: 76,
        symbol: "Os",
        name: "Osmis",
        mass: "190.23",
        type: "transition-metal",
        group: 8,
        period: 6
    },
    {
        number: 77,
        symbol: "Ir",
        name: "Iridis",
        mass: "192.22",
        type: "transition-metal",
        group: 9,
        period: 6
    },
    {
        number: 78,
        symbol: "Pt",
        name: "Platina",
        mass: "195.08",
        type: "transition-metal",
        group: 10,
        period: 6
    },
    {
        number: 79,
        symbol: "Au",
        name: "Auksas",
        mass: "196.97",
        type: "transition-metal",
        group: 11,
        period: 6
    },
    {
        number: 80,
        symbol: "Hg",
        name: "Gyvsidabris",
        mass: "200.59",
        type: "transition-metal",
        group: 12,
        period: 6
    },
    {
        number: 81,
        symbol: "Tl",
        name: "Talis",
        mass: "204.38",
        type: "post-transition-metal",
        group: 13,
        period: 6
    },
    {
        number: 82,
        symbol: "Pb",
        name: "Švinas",
        mass: "207.2",
        type: "post-transition-metal",
        group: 14,
        period: 6
    },
    {
        number: 83,
        symbol: "Bi",
        name: "Bismutas",
        mass: "208.98",
        type: "post-transition-metal",
        group: 15,
        period: 6
    },
    {
        number: 84,
        symbol: "Po",
        name: "Polonis",
        mass: "[209]",
        type: "post-transition-metal",
        group: 16,
        period: 6
    },
    {
        number: 85,
        symbol: "At",
        name: "Astatis",
        mass: "[210]",
        type: "halogen",
        group: 17,
        period: 6
    },
    {
        number: 86,
        symbol: "Rn",
        name: "Radonas",
        mass: "[222]",
        type: "noble-gas",
        group: 18,
        period: 6
    },
    {
        number: 87,
        symbol: "Fr",
        name: "Francis",
        mass: "[223]",
        type: "alkali-metal",
        group: 1,
        period: 7
    },
    {
        number: 88,
        symbol: "Ra",
        name: "Radis",
        mass: "[226]",
        type: "alkaline-earth",
        group: 2,
        period: 7
    },
    {
        number: 89,
        symbol: "Ac",
        name: "Aktinis",
        mass: "[227]",
        type: "actinide",
        group: 3,
        period: 7
    },
    {
        number: 90,
        symbol: "Th",
        name: "Toris",
        mass: "232.04",
        type: "actinide",
        group: 4,
        period: 7
    },
    {
        number: 91,
        symbol: "Pa",
        name: "Protaktinis",
        mass: "231.04",
        type: "actinide",
        group: 5,
        period: 7
    },
    {
        number: 92,
        symbol: "U",
        name: "Uranas",
        mass: "238.03",
        type: "actinide",
        group: 6,
        period: 7
    },
    {
        number: 93,
        symbol: "Np",
        name: "Neptūnis",
        mass: "[237]",
        type: "actinide",
        group: 7,
        period: 7
    },
    {
        number: 94,
        symbol: "Pu",
        name: "Plutonis",
        mass: "[244]",
        type: "actinide",
        group: 8,
        period: 7
    },
    {
        number: 95,
        symbol: "Am",
        name: "Americis",
        mass: "[243]",
        type: "actinide",
        group: 9,
        period: 7
    },
    {
        number: 96,
        symbol: "Cm",
        name: "Kiuris",
        mass: "[247]",
        type: "actinide",
        group: 10,
        period: 7
    },
    {
        number: 97,
        symbol: "Bk",
        name: "Berklis",
        mass: "[247]",
        type: "actinide",
        group: 11,
        period: 7
    },
    {
        number: 98,
        symbol: "Cf",
        name: "Kalifornis",
        mass: "[251]",
        type: "actinide",
        group: 12,
        period: 7
    },
    {
        number: 99,
        symbol: "Es",
        name: "Einšteinis",
        mass: "[252]",
        type: "actinide",
        group: 13,
        period: 7
    },
    {
        number: 100,
        symbol: "Fm",
        name: "Fermis",
        mass: "[257]",
        type: "actinide",
        group: 14,
        period: 7
    },
    {
        number: 101,
        symbol: "Md",
        name: "Mendelevis",
        mass: "[258]",
        type: "actinide",
        group: 15,
        period: 7
    },
    {
        number: 102,
        symbol: "No",
        name: "Nobelis",
        mass: "[259]",
        type: "actinide",
        group: 16,
        period: 7
    },
    {
        number: 103,
        symbol: "Lr",
        name: "Laurencis",
        mass: "[266]",
        type: "actinide",
        group: 17,
        period: 7
    },
    {
        number: 104,
        symbol: "Rf",
        name: "Rezerfordis",
        mass: "[267]",
        type: "transition-metal",
        group: 4,
        period: 7
    },
    {
        number: 105,
        symbol: "Db",
        name: "Dubnis",
        mass: "[268]",
        type: "transition-metal",
        group: 5,
        period: 7
    },
    {
        number: 106,
        symbol: "Sg",
        name: "Siborgis",
        mass: "[269]",
        type: "transition-metal",
        group: 6,
        period: 7
    },
    {
        number: 107,
        symbol: "Bh",
        name: "Boris",
        mass: "[270]",
        type: "transition-metal",
        group: 7,
        period: 7
    },
    {
        number: 108,
        symbol: "Hs",
        name: "Hasis",
        mass: "[269]",
        type: "transition-metal",
        group: 8,
        period: 7
    },
    {
        number: 109,
        symbol: "Mt",
        name: "Meitneris",
        mass: "[278]",
        type: "transition-metal",
        group: 9,
        period: 7
    },
    {
        number: 110,
        symbol: "Ds",
        name: "Darmštatis",
        mass: "[281]",
        type: "transition-metal",
        group: 10,
        period: 7
    },
    {
        number: 111,
        symbol: "Rg",
        name: "Rentgenis",
        mass: "[282]",
        type: "transition-metal",
        group: 11,
        period: 7
    },
    {
        number: 112,
        symbol: "Cn",
        name: "Kopernikis",
        mass: "[285]",
        type: "transition-metal",
        group: 12,
        period: 7
    },
    {
        number: 113,
        symbol: "Nh",
        name: "Nihonis",
        mass: "[286]",
        type: "post-transition-metal",
        group: 13,
        period: 7
    },
    {
        number: 114,
        symbol: "Fl",
        name: "Flerovijus",
        mass: "[289]",
        type: "post-transition-metal",
        group: 14,
        period: 7
    },
    {
        number: 115,
        symbol: "Mc",
        name: "Moskovis",
        mass: "[290]",
        type: "post-transition-metal",
        group: 15,
        period: 7
    },
    {
        number: 116,
        symbol: "Lv",
        name: "Livermonis",
        mass: "[293]",
        type: "post-transition-metal",
        group: 16,
        period: 7
    },
    {
        number: 117,
        symbol: "Ts",
        name: "Tenesas",
        mass: "[294]",
        type: "halogen",
        group: 17,
        period: 7
    },
    {
        number: 118,
        symbol: "Og",
        name: "Oganesonis",
        mass: "[294]",
        type: "noble-gas",
        group: 18,
        period: 7
    }
]; 