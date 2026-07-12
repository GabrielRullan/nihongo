const pokemonData = [
  {
    "id": 1,
    "ndex": "#0001",
    "english": "Bulbasaur",
    "simplified": "妙蛙种子",
    "pinyin": "Miàowāzhǒngzǐ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "characters": [
      {
        "char": "妙",
        "pinyin": "miao4",
        "definition": "clever",
        "definitionEs": "ingenioso"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      },
      {
        "char": "种",
        "pinyin": "zhong3",
        "definition": "seed",
        "definitionEs": "semilla"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 2,
    "ndex": "#0002",
    "english": "Ivysaur",
    "simplified": "妙蛙草",
    "pinyin": "Miàowācǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "characters": [
      {
        "char": "妙",
        "pinyin": "miao4",
        "definition": "clever",
        "definitionEs": "ingenioso"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 3,
    "ndex": "#0003",
    "english": "Venusaur",
    "simplified": "妙蛙花",
    "pinyin": "Miàowāhuā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    "characters": [
      {
        "char": "妙",
        "pinyin": "miao4",
        "definition": "clever",
        "definitionEs": "ingenioso"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 4,
    "ndex": "#0004",
    "english": "Charmander",
    "simplified": "小火龙",
    "pinyin": "Xiǎohuǒlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 5,
    "ndex": "#0005",
    "english": "Charmeleon",
    "simplified": "火恐龙",
    "pinyin": "Huǒkǒnglóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "恐",
        "pinyin": "kong3",
        "definition": "afraid",
        "definitionEs": "asustado"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 6,
    "ndex": "#0006",
    "english": "Charizard",
    "simplified": "喷火龙",
    "pinyin": "Pēnhuǒlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    "characters": [
      {
        "char": "喷",
        "pinyin": "pen1",
        "definition": "to spray",
        "definitionEs": "rociar"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Fuego / Volador",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 7,
    "ndex": "#0007",
    "english": "Squirtle",
    "simplified": "杰尼龟",
    "pinyin": "Jiéníguī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    "characters": [
      {
        "char": "杰",
        "pinyin": "jie2",
        "definition": "hero",
        "definitionEs": "héroe"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 8,
    "ndex": "#0008",
    "english": "Wartortle",
    "simplified": "卡咪龟",
    "pinyin": "Kǎmīguī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "咪",
        "pinyin": "mi1",
        "definition": "meow",
        "definitionEs": "miau"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 9,
    "ndex": "#0009",
    "english": "Blastoise",
    "simplified": "水箭龟",
    "pinyin": "Shuǐjiànguī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "箭",
        "pinyin": "jian4",
        "definition": "arrow",
        "definitionEs": "flecha"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 10,
    "ndex": "#0010",
    "english": "Caterpie",
    "simplified": "绿毛虫",
    "pinyin": "Lǜmáochóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    "characters": [
      {
        "char": "绿",
        "pinyin": "lv4",
        "definition": "green",
        "definitionEs": "verde"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ],
    "type": "Bicho",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 11,
    "ndex": "#0011",
    "english": "Metapod",
    "simplified": "铁甲蛹",
    "pinyin": "Tiějiáyǒng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "蛹",
        "pinyin": "yong3",
        "definition": "pupa",
        "definitionEs": "pupa"
      }
    ],
    "type": "Bicho",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 12,
    "ndex": "#0012",
    "english": "Butterfree",
    "simplified": "巴大蝶",
    "pinyin": "Bādàdié",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    "characters": [
      {
        "char": "巴",
        "pinyin": "ba1",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      }
    ],
    "type": "Bicho / Volador",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 13,
    "ndex": "#0013",
    "english": "Weedle",
    "simplified": "独角虫",
    "pinyin": "Dújiǎochóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    "characters": [
      {
        "char": "独",
        "pinyin": "du2",
        "definition": "lone",
        "definitionEs": "solo"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ],
    "type": "Bicho / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 14,
    "ndex": "#0014",
    "english": "Kakuna",
    "simplified": "铁壳蛹",
    "pinyin": "Tiěkéyǒng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "蛹",
        "pinyin": "yong3",
        "definition": "pupa",
        "definitionEs": "pupa"
      }
    ],
    "type": "Bicho / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 15,
    "ndex": "#0015",
    "english": "Beedrill",
    "simplified": "大针蜂",
    "pinyin": "Dàzhēnfēng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "针",
        "pinyin": "zhen1",
        "definition": "needle",
        "definitionEs": "aguja"
      },
      {
        "char": "蜂",
        "pinyin": "feng1",
        "definition": "bee",
        "definitionEs": "abeja"
      }
    ],
    "type": "Bicho / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 16,
    "ndex": "#0016",
    "english": "Pidgey",
    "simplified": "波波",
    "pinyin": "Bōbō",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 17,
    "ndex": "#0017",
    "english": "Pidgeotto",
    "simplified": "比比鸟",
    "pinyin": "Bǐbǐniǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "characters": [
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 18,
    "ndex": "#0018",
    "english": "Pidgeot",
    "simplified": "大比鸟",
    "pinyin": "Dàbǐniǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 19,
    "ndex": "#0019",
    "english": "Rattata",
    "simplified": "小拉达",
    "pinyin": "Xiǎolādá",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 20,
    "ndex": "#0020",
    "english": "Raticate",
    "simplified": "拉达",
    "pinyin": "Lādá",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    "characters": [
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 21,
    "ndex": "#0021",
    "english": "Spearow",
    "simplified": "烈雀",
    "pinyin": "Lièquè",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 22,
    "ndex": "#0022",
    "english": "Fearow",
    "simplified": "大嘴雀",
    "pinyin": "Dàzuǐquè",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 23,
    "ndex": "#0023",
    "english": "Ekans",
    "simplified": "阿柏蛇",
    "pinyin": "Ābóshé",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    "characters": [
      {
        "char": "阿",
        "pinyin": "a1",
        "definition": "(prefix)",
        "definitionEs": "(prefijo)"
      },
      {
        "char": "柏",
        "pinyin": "bai3",
        "definition": "cypress",
        "definitionEs": "ciprés"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 24,
    "ndex": "#0024",
    "english": "Arbok",
    "simplified": "阿柏怪",
    "pinyin": "Ābóguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "characters": [
      {
        "char": "阿",
        "pinyin": "a1",
        "definition": "(prefix)",
        "definitionEs": "(prefijo)"
      },
      {
        "char": "柏",
        "pinyin": "bai3",
        "definition": "cypress",
        "definitionEs": "ciprés"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 25,
    "ndex": "#0025",
    "english": "Pikachu",
    "simplified": "皮卡丘",
    "pinyin": "Píkǎqiū",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "characters": [
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "丘",
        "pinyin": "qiu1",
        "definition": "hill",
        "definitionEs": "colina"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 26,
    "ndex": "#0026",
    "english": "Raichu",
    "simplified": "雷丘",
    "pinyin": "Léiqiū",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "丘",
        "pinyin": "qiu1",
        "definition": "hill",
        "definitionEs": "colina"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 27,
    "ndex": "#0027",
    "english": "Sandshrew",
    "simplified": "穿山鼠",
    "pinyin": "Chuānshānshǔ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    "characters": [
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "to wear",
        "definitionEs": "vestir"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 28,
    "ndex": "#0028",
    "english": "Sandslash",
    "simplified": "穿山王",
    "pinyin": "Chuānshānwáng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    "characters": [
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "to wear",
        "definitionEs": "vestir"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 29,
    "ndex": "#0029",
    "english": "Nidoran♀",
    "simplified": "尼多兰",
    "pinyin": "Níduōlán",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "兰",
        "pinyin": "lan2",
        "definition": "orchid",
        "definitionEs": "orquídea"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 30,
    "ndex": "#0030",
    "english": "Nidorina",
    "simplified": "尼多娜",
    "pinyin": "Níduōnà",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "娜",
        "pinyin": "na4",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 31,
    "ndex": "#0031",
    "english": "Nidoqueen",
    "simplified": "尼多后",
    "pinyin": "Níduōhòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "queen",
        "definitionEs": "reina"
      }
    ],
    "type": "Veneno / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 32,
    "ndex": "#0032",
    "english": "Nidoran♂",
    "simplified": "尼多朗",
    "pinyin": "Níduōláng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "朗",
        "pinyin": "lang3",
        "definition": "clear",
        "definitionEs": "claro"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 33,
    "ndex": "#0033",
    "english": "Nidorino",
    "simplified": "尼多力诺",
    "pinyin": "Níduōlìnuò",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "诺",
        "pinyin": "nuo4",
        "definition": "promise",
        "definitionEs": "promesa"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 34,
    "ndex": "#0034",
    "english": "Nidoking",
    "simplified": "尼多王",
    "pinyin": "Níduōwáng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    "characters": [
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ],
    "type": "Veneno / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 35,
    "ndex": "#0035",
    "english": "Clefairy",
    "simplified": "皮皮",
    "pinyin": "Pípí",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    "characters": [
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      }
    ],
    "type": "Hada",
    "level": "Gén 1",
    "colorTheme": "from-pink-400 to-rose-600"
  },
  {
    "id": 36,
    "ndex": "#0036",
    "english": "Clefable",
    "simplified": "皮可西",
    "pinyin": "Píkěxī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    "characters": [
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "西",
        "pinyin": "xi1",
        "definition": "west",
        "definitionEs": "oeste"
      }
    ],
    "type": "Hada",
    "level": "Gén 1",
    "colorTheme": "from-pink-400 to-rose-600"
  },
  {
    "id": 37,
    "ndex": "#0037",
    "english": "Vulpix",
    "simplified": "六尾",
    "pinyin": "Liùwěi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    "characters": [
      {
        "char": "六",
        "pinyin": "liu4",
        "definition": "six",
        "definitionEs": "seis"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 38,
    "ndex": "#0038",
    "english": "Ninetales",
    "simplified": "九尾",
    "pinyin": "Jiǔwěi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    "characters": [
      {
        "char": "九",
        "pinyin": "jiu3",
        "definition": "nine",
        "definitionEs": "nueve"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 39,
    "ndex": "#0039",
    "english": "Jigglypuff",
    "simplified": "胖丁",
    "pinyin": "Pàngdīng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    "characters": [
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "丁",
        "pinyin": "ding1",
        "definition": "small",
        "definitionEs": "pequeño"
      }
    ],
    "type": "Normal / Hada",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 40,
    "ndex": "#0040",
    "english": "Wigglytuff",
    "simplified": "胖可丁",
    "pinyin": "Pàngkědīng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    "characters": [
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "丁",
        "pinyin": "ding1",
        "definition": "small",
        "definitionEs": "pequeño"
      }
    ],
    "type": "Normal / Hada",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 41,
    "ndex": "#0041",
    "english": "Zubat",
    "simplified": "超音蝠",
    "pinyin": "Chāoyīnfú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ],
    "type": "Veneno / Volador",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 42,
    "ndex": "#0042",
    "english": "Golbat",
    "simplified": "大嘴蝠",
    "pinyin": "Dàzuǐfú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ],
    "type": "Veneno / Volador",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 43,
    "ndex": "#0043",
    "english": "Oddish",
    "simplified": "走路草",
    "pinyin": "Zǒulùcǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    "characters": [
      {
        "char": "走",
        "pinyin": "zou3",
        "definition": "to walk",
        "definitionEs": "caminar"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 44,
    "ndex": "#0044",
    "english": "Gloom",
    "simplified": "臭臭花",
    "pinyin": "Chòuchòuhuā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    "characters": [
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 45,
    "ndex": "#0045",
    "english": "Vileplume",
    "simplified": "霸王花",
    "pinyin": "Bàwánghuā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    "characters": [
      {
        "char": "霸",
        "pinyin": "ba4",
        "definition": "tyrant",
        "definitionEs": "tirano"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 46,
    "ndex": "#0046",
    "english": "Paras",
    "simplified": "派拉斯",
    "pinyin": "Pàilāsī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    "characters": [
      {
        "char": "派",
        "pinyin": "pai4",
        "definition": "faction",
        "definitionEs": "facción"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Bicho / Planta",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 47,
    "ndex": "#0047",
    "english": "Parasect",
    "simplified": "派拉斯特",
    "pinyin": "Pàilāsītè",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    "characters": [
      {
        "char": "派",
        "pinyin": "pai4",
        "definition": "faction",
        "definitionEs": "facción"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "特",
        "pinyin": "te4",
        "definition": "special",
        "definitionEs": "especial"
      }
    ],
    "type": "Bicho / Planta",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 48,
    "ndex": "#0048",
    "english": "Venonat",
    "simplified": "毛球",
    "pinyin": "Máoqiú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    "characters": [
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ],
    "type": "Bicho / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 49,
    "ndex": "#0049",
    "english": "Venomoth",
    "simplified": "摩鲁蛾",
    "pinyin": "Mólǔ'é",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    "characters": [
      {
        "char": "摩",
        "pinyin": "mo2",
        "definition": "to rub",
        "definitionEs": "frotar"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ],
    "type": "Bicho / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 50,
    "ndex": "#0050",
    "english": "Diglett",
    "simplified": "地鼠",
    "pinyin": "Dìshǔ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    "characters": [
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 51,
    "ndex": "#0051",
    "english": "Dugtrio",
    "simplified": "三地鼠",
    "pinyin": "Sāndìshǔ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    "characters": [
      {
        "char": "三",
        "pinyin": "san1",
        "definition": "three",
        "definitionEs": "tres"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 52,
    "ndex": "#0052",
    "english": "Meowth",
    "simplified": "喵喵",
    "pinyin": "Miāomiāo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    "characters": [
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 53,
    "ndex": "#0053",
    "english": "Persian",
    "simplified": "猫老大",
    "pinyin": "Māolǎodà",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    "characters": [
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "老",
        "pinyin": "lao3",
        "definition": "old",
        "definitionEs": "viejo"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 54,
    "ndex": "#0054",
    "english": "Psyduck",
    "simplified": "可达鸭",
    "pinyin": "Kědáyā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    "characters": [
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 55,
    "ndex": "#0055",
    "english": "Golduck",
    "simplified": "哥达鸭",
    "pinyin": "Gēdáyā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    "characters": [
      {
        "char": "哥",
        "pinyin": "ge1",
        "definition": "brother",
        "definitionEs": "hermano"
      },
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 56,
    "ndex": "#0056",
    "english": "Mankey",
    "simplified": "猴怪",
    "pinyin": "Hóuguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    "characters": [
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 57,
    "ndex": "#0057",
    "english": "Primeape",
    "simplified": "火暴猴",
    "pinyin": "Huǒbàohóu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 58,
    "ndex": "#0058",
    "english": "Growlithe",
    "simplified": "卡蒂狗",
    "pinyin": "Kǎdìgǒu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "蒂",
        "pinyin": "di4",
        "definition": "stem",
        "definitionEs": "tallo"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 59,
    "ndex": "#0059",
    "english": "Arcanine",
    "simplified": "风速狗",
    "pinyin": "Fēngsùgǒu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    "characters": [
      {
        "char": "风",
        "pinyin": "feng1",
        "definition": "wind",
        "definitionEs": "viento"
      },
      {
        "char": "速",
        "pinyin": "su4",
        "definition": "fast",
        "definitionEs": "rápido"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 60,
    "ndex": "#0060",
    "english": "Poliwag",
    "simplified": "蚊香蝌蚪",
    "pinyin": "Wénxiāngkēdǒu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    "characters": [
      {
        "char": "蚊",
        "pinyin": "wen2",
        "definition": "mosquito",
        "definitionEs": "mosquito"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "蝌",
        "pinyin": "ke1",
        "definition": "tadpole",
        "definitionEs": "renacuajo"
      },
      {
        "char": "蚪",
        "pinyin": "dou3",
        "definition": "tadpole",
        "definitionEs": "renacuajo"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 61,
    "ndex": "#0061",
    "english": "Poliwhirl",
    "simplified": "蚊香君",
    "pinyin": "Wénxiāngjūn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    "characters": [
      {
        "char": "蚊",
        "pinyin": "wen2",
        "definition": "mosquito",
        "definitionEs": "mosquito"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "君",
        "pinyin": "jun1",
        "definition": "lord",
        "definitionEs": "señor"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 62,
    "ndex": "#0062",
    "english": "Poliwrath",
    "simplified": "蚊香泳士",
    "pinyin": "Wénxiāngyǒngshì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    "characters": [
      {
        "char": "蚊",
        "pinyin": "wen2",
        "definition": "mosquito",
        "definitionEs": "mosquito"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "泳",
        "pinyin": "yong3",
        "definition": "to swim",
        "definitionEs": "nadar"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      }
    ],
    "type": "Agua / Lucha",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 63,
    "ndex": "#0063",
    "english": "Abra",
    "simplified": "凯西",
    "pinyin": "Kǎixī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    "characters": [
      {
        "char": "凯",
        "pinyin": "kai3",
        "definition": "triumphant",
        "definitionEs": "triunfante"
      },
      {
        "char": "西",
        "pinyin": "xi1",
        "definition": "west",
        "definitionEs": "oeste"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 64,
    "ndex": "#0064",
    "english": "Kadabra",
    "simplified": "勇基拉",
    "pinyin": "Yǒngjīlā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    "characters": [
      {
        "char": "勇",
        "pinyin": "yong3",
        "definition": "brave",
        "definitionEs": "valiente"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 65,
    "ndex": "#0065",
    "english": "Alakazam",
    "simplified": "胡地",
    "pinyin": "Húdì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    "characters": [
      {
        "char": "胡",
        "pinyin": "hu2",
        "definition": "beard",
        "definitionEs": "barba"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 66,
    "ndex": "#0066",
    "english": "Machop",
    "simplified": "腕力",
    "pinyin": "Wànlì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    "characters": [
      {
        "char": "腕",
        "pinyin": "wan4",
        "definition": "wrist",
        "definitionEs": "muñeca"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 67,
    "ndex": "#0067",
    "english": "Machoke",
    "simplified": "豪力",
    "pinyin": "Háolì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    "characters": [
      {
        "char": "豪",
        "pinyin": "hao2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 68,
    "ndex": "#0068",
    "english": "Machamp",
    "simplified": "怪力",
    "pinyin": "Guàilì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    "characters": [
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 69,
    "ndex": "#0069",
    "english": "Bellsprout",
    "simplified": "喇叭芽",
    "pinyin": "Lǎbāyá",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    "characters": [
      {
        "char": "喇",
        "pinyin": "la3",
        "definition": "trumpet",
        "definitionEs": "trompeta"
      },
      {
        "char": "叭",
        "pinyin": "ba1",
        "definition": "(onomatopoeia)",
        "definitionEs": "(onomatopeya)"
      },
      {
        "char": "芽",
        "pinyin": "ya2",
        "definition": "bud",
        "definitionEs": "brote"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 70,
    "ndex": "#0070",
    "english": "Weepinbell",
    "simplified": "口呆花",
    "pinyin": "Kǒudāihuā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    "characters": [
      {
        "char": "口",
        "pinyin": "kou3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 71,
    "ndex": "#0071",
    "english": "Victreebel",
    "simplified": "大食花",
    "pinyin": "Dàshíhuā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ],
    "type": "Planta / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 72,
    "ndex": "#0072",
    "english": "Tentacool",
    "simplified": "玛瑙水母",
    "pinyin": "Mǎnǎoshuǐmǔ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "瑙",
        "pinyin": "nao3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "母",
        "pinyin": "mu3",
        "definition": "mother",
        "definitionEs": "madre"
      }
    ],
    "type": "Agua / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 73,
    "ndex": "#0073",
    "english": "Tentacruel",
    "simplified": "毒刺水母",
    "pinyin": "Dúcìshuǐmǔ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "母",
        "pinyin": "mu3",
        "definition": "mother",
        "definitionEs": "madre"
      }
    ],
    "type": "Agua / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 74,
    "ndex": "#0074",
    "english": "Geodude",
    "simplified": "小拳石",
    "pinyin": "Xiǎoquánshí",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "拳",
        "pinyin": "quan2",
        "definition": "fist",
        "definitionEs": "puño"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      }
    ],
    "type": "Roca / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 75,
    "ndex": "#0075",
    "english": "Graveler",
    "simplified": "隆隆石",
    "pinyin": "Lónglóngshí",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    "characters": [
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      }
    ],
    "type": "Roca / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 76,
    "ndex": "#0076",
    "english": "Golem",
    "simplified": "隆隆岩",
    "pinyin": "Lónglóngyán",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    "characters": [
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      }
    ],
    "type": "Roca / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 77,
    "ndex": "#0077",
    "english": "Ponyta",
    "simplified": "小火马",
    "pinyin": "Xiǎohuǒmǎ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 78,
    "ndex": "#0078",
    "english": "Rapidash",
    "simplified": "烈焰马",
    "pinyin": "Lièyànmǎ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 79,
    "ndex": "#0079",
    "english": "Slowpoke",
    "simplified": "呆呆兽",
    "pinyin": "Dāidāishòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    "characters": [
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Agua / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 80,
    "ndex": "#0080",
    "english": "Slowbro",
    "simplified": "呆壳兽",
    "pinyin": "Dāikéshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    "characters": [
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Agua / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 81,
    "ndex": "#0081",
    "english": "Magnemite",
    "simplified": "小磁怪",
    "pinyin": "Xiǎocíguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "磁",
        "pinyin": "ci2",
        "definition": "magnetic",
        "definitionEs": "magnético"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Eléctrico / Acero",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 82,
    "ndex": "#0082",
    "english": "Magneton",
    "simplified": "三合一磁怪",
    "pinyin": "Sānhéyīcíguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    "characters": [
      {
        "char": "三",
        "pinyin": "san1",
        "definition": "three",
        "definitionEs": "tres"
      },
      {
        "char": "合",
        "pinyin": "he2",
        "definition": "to join",
        "definitionEs": "unir"
      },
      {
        "char": "一",
        "pinyin": "yi1",
        "definition": "one",
        "definitionEs": "uno"
      },
      {
        "char": "磁",
        "pinyin": "ci2",
        "definition": "magnetic",
        "definitionEs": "magnético"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Eléctrico / Acero",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 83,
    "ndex": "#0083",
    "english": "Farfetch'd",
    "simplified": "大葱鸭",
    "pinyin": "Dàcōngyā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "葱",
        "pinyin": "cong1",
        "definition": "scallion",
        "definitionEs": "cebolleta"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 84,
    "ndex": "#0084",
    "english": "Doduo",
    "simplified": "嘟嘟",
    "pinyin": "Dūdū",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    "characters": [
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      },
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 85,
    "ndex": "#0085",
    "english": "Dodrio",
    "simplified": "嘟嘟利",
    "pinyin": "Dūdūlì",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    "characters": [
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      },
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      }
    ],
    "type": "Normal / Volador",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 86,
    "ndex": "#0086",
    "english": "Seel",
    "simplified": "小海狮",
    "pinyin": "Xiǎohǎishī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 87,
    "ndex": "#0087",
    "english": "Dewgong",
    "simplified": "白海狮",
    "pinyin": "Báihǎishī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    "characters": [
      {
        "char": "白",
        "pinyin": "bai2",
        "definition": "white",
        "definitionEs": "blanco"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ],
    "type": "Agua / Hielo",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 88,
    "ndex": "#0088",
    "english": "Grimer",
    "simplified": "臭泥",
    "pinyin": "Chòuní",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    "characters": [
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 89,
    "ndex": "#0089",
    "english": "Muk",
    "simplified": "臭臭泥",
    "pinyin": "Chòuchòuní",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    "characters": [
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 90,
    "ndex": "#0090",
    "english": "Shellder",
    "simplified": "大舌贝",
    "pinyin": "Dàshébèi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "舌",
        "pinyin": "she2",
        "definition": "tongue",
        "definitionEs": "lengua"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 91,
    "ndex": "#0091",
    "english": "Cloyster",
    "simplified": "刺甲贝",
    "pinyin": "Cìjiǎbèi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    "characters": [
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      }
    ],
    "type": "Agua / Hielo",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 92,
    "ndex": "#0092",
    "english": "Gastly",
    "simplified": "鬼斯",
    "pinyin": "Guǐsī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    "characters": [
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Fantasma / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-violet-600 to-purple-900"
  },
  {
    "id": 93,
    "ndex": "#0093",
    "english": "Haunter",
    "simplified": "鬼斯通",
    "pinyin": "Guǐsītōng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    "characters": [
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "通",
        "pinyin": "tong1",
        "definition": "through",
        "definitionEs": "a través"
      }
    ],
    "type": "Fantasma / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-violet-600 to-purple-900"
  },
  {
    "id": 94,
    "ndex": "#0094",
    "english": "Gengar",
    "simplified": "耿鬼",
    "pinyin": "Gěngguǐ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    "characters": [
      {
        "char": "耿",
        "pinyin": "geng3",
        "definition": "bright",
        "definitionEs": "brillante"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      }
    ],
    "type": "Fantasma / Veneno",
    "level": "Gén 1",
    "colorTheme": "from-violet-600 to-purple-900"
  },
  {
    "id": 95,
    "ndex": "#0095",
    "english": "Onix",
    "simplified": "大岩蛇",
    "pinyin": "Dàyánshé",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ],
    "type": "Roca / Tierra",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 96,
    "ndex": "#0096",
    "english": "Drowzee",
    "simplified": "催眠貘",
    "pinyin": "Cuīmiánmò",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    "characters": [
      {
        "char": "催",
        "pinyin": "cui1",
        "definition": "to urge",
        "definitionEs": "instar"
      },
      {
        "char": "眠",
        "pinyin": "mian2",
        "definition": "to sleep",
        "definitionEs": "dormir"
      },
      {
        "char": "貘",
        "pinyin": "mo4",
        "definition": "tapir",
        "definitionEs": "tapir"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 97,
    "ndex": "#0097",
    "english": "Hypno",
    "simplified": "引梦貘人",
    "pinyin": "Yǐnmèngmòrén",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    "characters": [
      {
        "char": "引",
        "pinyin": "yin3",
        "definition": "to attract",
        "definitionEs": "atraer"
      },
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "貘",
        "pinyin": "mo4",
        "definition": "tapir",
        "definitionEs": "tapir"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 98,
    "ndex": "#0098",
    "english": "Krabby",
    "simplified": "大钳蟹",
    "pinyin": "Dàqiánxiè",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "钳",
        "pinyin": "qian2",
        "definition": "pincers",
        "definitionEs": "tenazas"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 99,
    "ndex": "#0099",
    "english": "Kingler",
    "simplified": "巨钳蟹",
    "pinyin": "Jùqiánxiè",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "钳",
        "pinyin": "qian2",
        "definition": "pincers",
        "definitionEs": "tenazas"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 100,
    "ndex": "#0100",
    "english": "Voltorb",
    "simplified": "霹雳电球",
    "pinyin": "Pīlìdiànqiú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    "characters": [
      {
        "char": "霹",
        "pinyin": "pi1",
        "definition": "thunderbolt",
        "definitionEs": "rayo"
      },
      {
        "char": "雳",
        "pinyin": "li4",
        "definition": "thunderbolt",
        "definitionEs": "rayo"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 101,
    "ndex": "#0101",
    "english": "Electrode",
    "simplified": "顽皮雷弹",
    "pinyin": "Wánpíléidàn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    "characters": [
      {
        "char": "顽",
        "pinyin": "wan2",
        "definition": "mischievous",
        "definitionEs": "travieso"
      },
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "弹",
        "pinyin": "dan4",
        "definition": "bullet",
        "definitionEs": "bala"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 102,
    "ndex": "#0102",
    "english": "Exeggcute",
    "simplified": "蛋蛋",
    "pinyin": "Dàndàn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    "characters": [
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      }
    ],
    "type": "Planta / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 103,
    "ndex": "#0103",
    "english": "Exeggutor",
    "simplified": "椰蛋树",
    "pinyin": "YédànshùYēdànshù",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    "characters": [
      {
        "char": "椰",
        "pinyin": "ye1",
        "definition": "coconut",
        "definitionEs": "coco"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      },
      {
        "char": "树",
        "pinyin": "shu4",
        "definition": "tree",
        "definitionEs": "árbol"
      }
    ],
    "type": "Planta / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 104,
    "ndex": "#0104",
    "english": "Cubone",
    "simplified": "卡拉卡拉",
    "pinyin": "Kǎlākǎlā",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 105,
    "ndex": "#0105",
    "english": "Marowak",
    "simplified": "嘎啦嘎啦",
    "pinyin": "Gālagāla",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    "characters": [
      {
        "char": "嘎",
        "pinyin": "ga1",
        "definition": "cackle",
        "definitionEs": "cacareo"
      },
      {
        "char": "啦",
        "pinyin": "la",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "嘎",
        "pinyin": "ga1",
        "definition": "cackle",
        "definitionEs": "cacareo"
      },
      {
        "char": "啦",
        "pinyin": "la",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      }
    ],
    "type": "Tierra",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 106,
    "ndex": "#0106",
    "english": "Hitmonlee",
    "simplified": "飞腿郎",
    "pinyin": "Fēituǐláng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    "characters": [
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "腿",
        "pinyin": "tui3",
        "definition": "leg",
        "definitionEs": "pierna"
      },
      {
        "char": "郎",
        "pinyin": "lang2",
        "definition": "minister",
        "definitionEs": "ministro"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 107,
    "ndex": "#0107",
    "english": "Hitmonchan",
    "simplified": "快拳郎",
    "pinyin": "Kuàiquánláng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    "characters": [
      {
        "char": "快",
        "pinyin": "kuai4",
        "definition": "fast",
        "definitionEs": "rápido"
      },
      {
        "char": "拳",
        "pinyin": "quan2",
        "definition": "fist",
        "definitionEs": "puño"
      },
      {
        "char": "郎",
        "pinyin": "lang2",
        "definition": "minister",
        "definitionEs": "ministro"
      }
    ],
    "type": "Lucha",
    "level": "Gén 1",
    "colorTheme": "from-red-600 to-orange-800"
  },
  {
    "id": 108,
    "ndex": "#0108",
    "english": "Lickitung",
    "simplified": "大舌头",
    "pinyin": "Dàshétóu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "舌",
        "pinyin": "she2",
        "definition": "tongue",
        "definitionEs": "lengua"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 109,
    "ndex": "#0109",
    "english": "Koffing",
    "simplified": "瓦斯弹",
    "pinyin": "Wǎsīdàn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    "characters": [
      {
        "char": "瓦",
        "pinyin": "wa3",
        "definition": "tile",
        "definitionEs": "teja"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "弹",
        "pinyin": "dan4",
        "definition": "bullet",
        "definitionEs": "bala"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 110,
    "ndex": "#0110",
    "english": "Weezing",
    "simplified": "双弹瓦斯",
    "pinyin": "Shuāngdànwǎsī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "弹",
        "pinyin": "dan4",
        "definition": "bullet",
        "definitionEs": "bala"
      },
      {
        "char": "瓦",
        "pinyin": "wa3",
        "definition": "tile",
        "definitionEs": "teja"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Veneno",
    "level": "Gén 1",
    "colorTheme": "from-purple-400 to-indigo-600"
  },
  {
    "id": 111,
    "ndex": "#0111",
    "english": "Rhyhorn",
    "simplified": "独角犀牛",
    "pinyin": "Dújiǎoxīniú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    "characters": [
      {
        "char": "独",
        "pinyin": "du2",
        "definition": "lone",
        "definitionEs": "solo"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "犀",
        "pinyin": "xi1",
        "definition": "rhinoceros",
        "definitionEs": "rinoceronte"
      },
      {
        "char": "牛",
        "pinyin": "niu2",
        "definition": "ox",
        "definitionEs": "buey"
      }
    ],
    "type": "Tierra / Roca",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 112,
    "ndex": "#0112",
    "english": "Rhydon",
    "simplified": "钻角犀兽",
    "pinyin": "Zuànjiǎoxīshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    "characters": [
      {
        "char": "钻",
        "pinyin": "zuan1",
        "definition": "to drill",
        "definitionEs": "taladrar"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "犀",
        "pinyin": "xi1",
        "definition": "rhinoceros",
        "definitionEs": "rinoceronte"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Tierra / Roca",
    "level": "Gén 1",
    "colorTheme": "from-yellow-600 to-amber-800"
  },
  {
    "id": 113,
    "ndex": "#0113",
    "english": "Chansey",
    "simplified": "吉利蛋",
    "pinyin": "Jílìdàn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    "characters": [
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 114,
    "ndex": "#0114",
    "english": "Tangela",
    "simplified": "蔓藤怪",
    "pinyin": "Mànténgguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    "characters": [
      {
        "char": "蔓",
        "pinyin": "man2",
        "definition": "vine",
        "definitionEs": "vid"
      },
      {
        "char": "藤",
        "pinyin": "teng2",
        "definition": "rattan",
        "definitionEs": "ratán"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Planta",
    "level": "Gén 1",
    "colorTheme": "from-emerald-400 to-teal-600"
  },
  {
    "id": 115,
    "ndex": "#0115",
    "english": "Kangaskhan",
    "simplified": "袋兽",
    "pinyin": "Dàishòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    "characters": [
      {
        "char": "袋",
        "pinyin": "dai4",
        "definition": "pouch",
        "definitionEs": "bolsa"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 116,
    "ndex": "#0116",
    "english": "Horsea",
    "simplified": "墨海马",
    "pinyin": "Mòhǎimǎ",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    "characters": [
      {
        "char": "墨",
        "pinyin": "mo4",
        "definition": "ink",
        "definitionEs": "tinta"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 117,
    "ndex": "#0117",
    "english": "Seadra",
    "simplified": "海刺龙",
    "pinyin": "Hǎicìlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 118,
    "ndex": "#0118",
    "english": "Goldeen",
    "simplified": "角金鱼",
    "pinyin": "Jiǎojīnyú",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    "characters": [
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "金",
        "pinyin": "jin1",
        "definition": "gold",
        "definitionEs": "oro"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 119,
    "ndex": "#0119",
    "english": "Seaking",
    "simplified": "金鱼王",
    "pinyin": "Jīnyúwáng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    "characters": [
      {
        "char": "金",
        "pinyin": "jin1",
        "definition": "gold",
        "definitionEs": "oro"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 120,
    "ndex": "#0120",
    "english": "Staryu",
    "simplified": "海星星",
    "pinyin": "Hǎixīngxīng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 121,
    "ndex": "#0121",
    "english": "Starmie",
    "simplified": "宝石海星",
    "pinyin": "Bǎoshíhǎixīng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    "characters": [
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      }
    ],
    "type": "Agua / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 122,
    "ndex": "#0122",
    "english": "Mr. Mime",
    "simplified": "魔墙人偶",
    "pinyin": "Móqiángrénǒu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    "characters": [
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "墙",
        "pinyin": "qiang2",
        "definition": "wall",
        "definitionEs": "pared"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      }
    ],
    "type": "Psíquico / Hada",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 123,
    "ndex": "#0123",
    "english": "Scyther",
    "simplified": "飞天螳螂",
    "pinyin": "Fēitiāntángláng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    "characters": [
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "螳",
        "pinyin": "tang2",
        "definition": "mantis",
        "definitionEs": "mantis"
      },
      {
        "char": "螂",
        "pinyin": "lang2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ],
    "type": "Bicho / Volador",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 124,
    "ndex": "#0124",
    "english": "Jynx",
    "simplified": "迷唇姐",
    "pinyin": "Míchúnjiě",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "唇",
        "pinyin": "chun2",
        "definition": "lip",
        "definitionEs": "labio"
      },
      {
        "char": "姐",
        "pinyin": "jie3",
        "definition": "older sister",
        "definitionEs": "hermana mayor"
      }
    ],
    "type": "Hielo / Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-cyan-300 to-blue-500"
  },
  {
    "id": 125,
    "ndex": "#0125",
    "english": "Electabuzz",
    "simplified": "电击兽",
    "pinyin": "DiànjíshòuDiànjīshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "击",
        "pinyin": "ji1",
        "definition": "to hit",
        "definitionEs": "golpear"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 126,
    "ndex": "#0126",
    "english": "Magmar",
    "simplified": "鸭嘴火兽",
    "pinyin": "Yāzuǐhuǒshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    "characters": [
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 127,
    "ndex": "#0127",
    "english": "Pinsir",
    "simplified": "凯罗斯",
    "pinyin": "Kǎiluósī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    "characters": [
      {
        "char": "凯",
        "pinyin": "kai3",
        "definition": "triumphant",
        "definitionEs": "triunfante"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Bicho",
    "level": "Gén 1",
    "colorTheme": "from-lime-400 to-green-600"
  },
  {
    "id": 128,
    "ndex": "#0128",
    "english": "Tauros",
    "simplified": "肯泰罗",
    "pinyin": "Kěntàiluó",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    "characters": [
      {
        "char": "肯",
        "pinyin": "ken3",
        "definition": "to agree",
        "definitionEs": "acordar"
      },
      {
        "char": "泰",
        "pinyin": "tai4",
        "definition": "safe",
        "definitionEs": "seguro"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 129,
    "ndex": "#0129",
    "english": "Magikarp",
    "simplified": "鲤鱼王",
    "pinyin": "Lǐyúwáng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    "characters": [
      {
        "char": "鲤",
        "pinyin": "li3",
        "definition": "carp",
        "definitionEs": "carpa"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 130,
    "ndex": "#0130",
    "english": "Gyarados",
    "simplified": "暴鲤龙",
    "pinyin": "Bàolǐlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    "characters": [
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "鲤",
        "pinyin": "li3",
        "definition": "carp",
        "definitionEs": "carpa"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Agua / Volador",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 131,
    "ndex": "#0131",
    "english": "Lapras",
    "simplified": "拉普拉斯",
    "pinyin": "Lāpǔlāsī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    "characters": [
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "普",
        "pinyin": "pu3",
        "definition": "general",
        "definitionEs": "general"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ],
    "type": "Agua / Hielo",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 132,
    "ndex": "#0132",
    "english": "Ditto",
    "simplified": "百变怪",
    "pinyin": "Bǎibiànguài",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    "characters": [
      {
        "char": "百",
        "pinyin": "bai3",
        "definition": "hundred",
        "definitionEs": "cien"
      },
      {
        "char": "变",
        "pinyin": "bian4",
        "definition": "to change",
        "definitionEs": "cambiar"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 133,
    "ndex": "#0133",
    "english": "Eevee",
    "simplified": "伊布",
    "pinyin": "Yībù",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    "characters": [
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 134,
    "ndex": "#0134",
    "english": "Vaporeon",
    "simplified": "水伊布",
    "pinyin": "Shuǐyībù",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ],
    "type": "Agua",
    "level": "Gén 1",
    "colorTheme": "from-blue-400 to-cyan-600"
  },
  {
    "id": 135,
    "ndex": "#0135",
    "english": "Jolteon",
    "simplified": "雷伊布",
    "pinyin": "Léiyībù",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ],
    "type": "Eléctrico",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 136,
    "ndex": "#0136",
    "english": "Flareon",
    "simplified": "火伊布",
    "pinyin": "Huǒyībù",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ],
    "type": "Fuego",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 137,
    "ndex": "#0137",
    "english": "Porygon",
    "simplified": "多边兽",
    "pinyin": "Duōbiānshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "边",
        "pinyin": "bian1",
        "definition": "side",
        "definitionEs": "lado"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 138,
    "ndex": "#0138",
    "english": "Omanyte",
    "simplified": "菊石兽",
    "pinyin": "Júshíshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    "characters": [
      {
        "char": "菊",
        "pinyin": "ju2",
        "definition": "chrysanthemum",
        "definitionEs": "crisantemo"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Roca / Agua",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 139,
    "ndex": "#0139",
    "english": "Omastar",
    "simplified": "多刺菊石兽",
    "pinyin": "Duōcìjúshíshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "菊",
        "pinyin": "ju2",
        "definition": "chrysanthemum",
        "definitionEs": "crisantemo"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Roca / Agua",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 140,
    "ndex": "#0140",
    "english": "Kabuto",
    "simplified": "化石盔",
    "pinyin": "Huàshíkuī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    "characters": [
      {
        "char": "化",
        "pinyin": "hua4",
        "definition": "to transform",
        "definitionEs": "transformar"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "盔",
        "pinyin": "kui1",
        "definition": "helmet",
        "definitionEs": "casco"
      }
    ],
    "type": "Roca / Agua",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 141,
    "ndex": "#0141",
    "english": "Kabutops",
    "simplified": "镰刀盔",
    "pinyin": "Liándāokuī",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    "characters": [
      {
        "char": "镰",
        "pinyin": "lian2",
        "definition": "scythe",
        "definitionEs": "guadaña"
      },
      {
        "char": "刀",
        "pinyin": "dao1",
        "definition": "knife",
        "definitionEs": "cuchillo"
      },
      {
        "char": "盔",
        "pinyin": "kui1",
        "definition": "helmet",
        "definitionEs": "casco"
      }
    ],
    "type": "Roca / Agua",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 142,
    "ndex": "#0142",
    "english": "Aerodactyl",
    "simplified": "化石翼龙",
    "pinyin": "Huàshíyìlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    "characters": [
      {
        "char": "化",
        "pinyin": "hua4",
        "definition": "to transform",
        "definitionEs": "transformar"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "翼",
        "pinyin": "yi4",
        "definition": "wing",
        "definitionEs": "ala"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Roca / Volador",
    "level": "Gén 1",
    "colorTheme": "from-stone-500 to-stone-700"
  },
  {
    "id": 143,
    "ndex": "#0143",
    "english": "Snorlax",
    "simplified": "卡比兽",
    "pinyin": "Kǎbǐshòu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ],
    "type": "Normal",
    "level": "Gén 1",
    "colorTheme": "from-slate-400 to-slate-600"
  },
  {
    "id": 144,
    "ndex": "#0144",
    "english": "Articuno",
    "simplified": "急冻鸟",
    "pinyin": "Jídòngniǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    "characters": [
      {
        "char": "急",
        "pinyin": "ji2",
        "definition": "urgent",
        "definitionEs": "urgente"
      },
      {
        "char": "冻",
        "pinyin": "dong4",
        "definition": "to freeze",
        "definitionEs": "congelar"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ],
    "type": "Hielo / Volador",
    "level": "Gén 1",
    "colorTheme": "from-cyan-300 to-blue-500"
  },
  {
    "id": 145,
    "ndex": "#0145",
    "english": "Zapdos",
    "simplified": "闪电鸟",
    "pinyin": "Shǎndiànniǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    "characters": [
      {
        "char": "闪",
        "pinyin": "shan3",
        "definition": "to flash",
        "definitionEs": "destellar"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ],
    "type": "Eléctrico / Volador",
    "level": "Gén 1",
    "colorTheme": "from-yellow-400 to-amber-600"
  },
  {
    "id": 146,
    "ndex": "#0146",
    "english": "Moltres",
    "simplified": "火焰鸟",
    "pinyin": "Huǒyànniǎo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ],
    "type": "Fuego / Volador",
    "level": "Gén 1",
    "colorTheme": "from-orange-400 to-red-600"
  },
  {
    "id": 147,
    "ndex": "#0147",
    "english": "Dratini",
    "simplified": "迷你龙",
    "pinyin": "Mínǐlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you",
        "definitionEs": "tú"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Dragón",
    "level": "Gén 1",
    "colorTheme": "from-indigo-500 to-blue-800"
  },
  {
    "id": 148,
    "ndex": "#0148",
    "english": "Dragonair",
    "simplified": "哈克龙",
    "pinyin": "Hākèlóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    "characters": [
      {
        "char": "哈",
        "pinyin": "ha1",
        "definition": "ha!",
        "definitionEs": "¡ja!"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Dragón",
    "level": "Gén 1",
    "colorTheme": "from-indigo-500 to-blue-800"
  },
  {
    "id": 149,
    "ndex": "#0149",
    "english": "Dragonite",
    "simplified": "快龙",
    "pinyin": "Kuàilóng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    "characters": [
      {
        "char": "快",
        "pinyin": "kuai4",
        "definition": "fast",
        "definitionEs": "rápido"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ],
    "type": "Dragón / Volador",
    "level": "Gén 1",
    "colorTheme": "from-indigo-500 to-blue-800"
  },
  {
    "id": 150,
    "ndex": "#0150",
    "english": "Mewtwo",
    "simplified": "超梦",
    "pinyin": "Chāomèng",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 151,
    "ndex": "#0151",
    "english": "Mew",
    "simplified": "梦幻",
    "pinyin": "Mènghuàn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    "characters": [
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "幻",
        "pinyin": "huan4",
        "definition": "fantasy",
        "definitionEs": "fantasía"
      }
    ],
    "type": "Psíquico",
    "level": "Gén 1",
    "colorTheme": "from-pink-500 to-purple-600"
  },
  {
    "id": 152,
    "ndex": "#0152",
    "english": "Chikorita",
    "simplified": "菊草叶",
    "pinyin": "Júcǎoyè",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    "characters": [
      {
        "char": "菊",
        "pinyin": "ju2",
        "definition": "chrysanthemum",
        "definitionEs": "crisantemo"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      }
    ]
  },
  {
    "id": 153,
    "ndex": "#0153",
    "english": "Bayleef",
    "simplified": "月桂叶",
    "pinyin": "Yuèguìyè",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png",
    "characters": [
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "桂",
        "pinyin": "gui4",
        "definition": "cassia",
        "definitionEs": "casia"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      }
    ]
  },
  {
    "id": 154,
    "ndex": "#0154",
    "english": "Meganium",
    "simplified": "大竺葵",
    "pinyin": "Dàzhúkuí",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "竺",
        "pinyin": "zhu2",
        "definition": "India",
        "definitionEs": "India"
      },
      {
        "char": "葵",
        "pinyin": "kui2",
        "definition": "mallow",
        "definitionEs": "malva"
      }
    ]
  },
  {
    "id": 155,
    "ndex": "#0155",
    "english": "Cyndaquil",
    "simplified": "火球鼠",
    "pinyin": "Huǒqiúshǔ",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 156,
    "ndex": "#0156",
    "english": "Quilava",
    "simplified": "火岩鼠",
    "pinyin": "Huǒyánshǔ",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 157,
    "ndex": "#0157",
    "english": "Typhlosion",
    "simplified": "火暴兽",
    "pinyin": "Huǒbàoshòu",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 158,
    "ndex": "#0158",
    "english": "Totodile",
    "simplified": "小锯鳄",
    "pinyin": "Xiǎojù'è",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "锯",
        "pinyin": "ju4",
        "definition": "to saw",
        "definitionEs": "serrar"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 159,
    "ndex": "#0159",
    "english": "Croconaw",
    "simplified": "蓝鳄",
    "pinyin": "Lán'è",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png",
    "characters": [
      {
        "char": "蓝",
        "pinyin": "lan2",
        "definition": "blue",
        "definitionEs": "azul"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 160,
    "ndex": "#0160",
    "english": "Feraligatr",
    "simplified": "大力鳄",
    "pinyin": "Dàlì'è",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 161,
    "ndex": "#0161",
    "english": "Sentret",
    "simplified": "尾立",
    "pinyin": "Wěilì",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png",
    "characters": [
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "立",
        "pinyin": "li4",
        "definition": "to stand",
        "definitionEs": "levantar"
      }
    ]
  },
  {
    "id": 162,
    "ndex": "#0162",
    "english": "Furret",
    "simplified": "大尾立",
    "pinyin": "Dàwěilì",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "立",
        "pinyin": "li4",
        "definition": "to stand",
        "definitionEs": "levantar"
      }
    ]
  },
  {
    "id": 163,
    "ndex": "#0163",
    "english": "Hoothoot",
    "simplified": "咕咕",
    "pinyin": "Gūgū",
    "level": "Gén 2",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png",
    "characters": [
      {
        "char": "咕",
        "pinyin": "gu1",
        "definition": "gurgle",
        "definitionEs": "gorgoteo"
      },
      {
        "char": "咕",
        "pinyin": "gu1",
        "definition": "gurgle",
        "definitionEs": "gorgoteo"
      }
    ]
  },
  {
    "id": 164,
    "ndex": "#0164",
    "english": "Noctowl",
    "simplified": "猫头夜鹰",
    "pinyin": "Māotóuyèyīng",
    "level": "Gén 2",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png",
    "characters": [
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      }
    ]
  },
  {
    "id": 165,
    "ndex": "#0165",
    "english": "Ledyba",
    "simplified": "芭瓢虫",
    "pinyin": "Bāpiáochóng",
    "level": "Gén 2",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png",
    "characters": [
      {
        "char": "芭",
        "pinyin": "ba1",
        "definition": "banana",
        "definitionEs": "plátano"
      },
      {
        "char": "瓢",
        "pinyin": "piao2",
        "definition": "dipper",
        "definitionEs": "cucharón"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 166,
    "ndex": "#0166",
    "english": "Ledian",
    "simplified": "安瓢虫",
    "pinyin": "Ānpiáochóng",
    "level": "Gén 2",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png",
    "characters": [
      {
        "char": "安",
        "pinyin": "an1",
        "definition": "calm",
        "definitionEs": "tranquilo"
      },
      {
        "char": "瓢",
        "pinyin": "piao2",
        "definition": "dipper",
        "definitionEs": "cucharón"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 167,
    "ndex": "#0167",
    "english": "Spinarak",
    "simplified": "圆丝蛛",
    "pinyin": "Yuánsīzhū",
    "level": "Gén 2",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png",
    "characters": [
      {
        "char": "圆",
        "pinyin": "yuan2",
        "definition": "round",
        "definitionEs": "redondo"
      },
      {
        "char": "丝",
        "pinyin": "si1",
        "definition": "silk",
        "definitionEs": "seda"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      }
    ]
  },
  {
    "id": 168,
    "ndex": "#0168",
    "english": "Ariados",
    "simplified": "阿利多斯",
    "pinyin": "Ālìduōsī",
    "level": "Gén 2",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png",
    "characters": [
      {
        "char": "阿",
        "pinyin": "a1",
        "definition": "(prefix)",
        "definitionEs": "(prefijo)"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 169,
    "ndex": "#0169",
    "english": "Crobat",
    "simplified": "叉字蝠",
    "pinyin": "Chāzìfú",
    "level": "Gén 2",
    "type": "Veneno / Volador",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png",
    "characters": [
      {
        "char": "叉",
        "pinyin": "cha4",
        "definition": "cross",
        "definitionEs": "cruz"
      },
      {
        "char": "字",
        "pinyin": "zi4",
        "definition": "character",
        "definitionEs": "carácter"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ]
  },
  {
    "id": 170,
    "ndex": "#0170",
    "english": "Chinchou",
    "simplified": "灯笼鱼",
    "pinyin": "Dēnglóngyú",
    "level": "Gén 2",
    "type": "Agua / Eléctrico",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png",
    "characters": [
      {
        "char": "灯",
        "pinyin": "deng1",
        "definition": "lamp",
        "definitionEs": "lámpara"
      },
      {
        "char": "笼",
        "pinyin": "long3",
        "definition": "to envelop",
        "definitionEs": "envolver"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 171,
    "ndex": "#0171",
    "english": "Lanturn",
    "simplified": "电灯怪",
    "pinyin": "Diàndēngguài",
    "level": "Gén 2",
    "type": "Agua / Eléctrico",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "灯",
        "pinyin": "deng1",
        "definition": "lamp",
        "definitionEs": "lámpara"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 172,
    "ndex": "#0172",
    "english": "Pichu",
    "simplified": "皮丘",
    "pinyin": "Píqiū",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png",
    "characters": [
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "丘",
        "pinyin": "qiu1",
        "definition": "hill",
        "definitionEs": "colina"
      }
    ]
  },
  {
    "id": 173,
    "ndex": "#0173",
    "english": "Cleffa",
    "simplified": "皮宝宝",
    "pinyin": "Píbǎobao",
    "level": "Gén 2",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png",
    "characters": [
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 174,
    "ndex": "#0174",
    "english": "Igglybuff",
    "simplified": "宝宝丁",
    "pinyin": "Bǎobaodīng",
    "level": "Gén 2",
    "type": "Normal / Hada",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png",
    "characters": [
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "丁",
        "pinyin": "ding1",
        "definition": "small",
        "definitionEs": "pequeño"
      }
    ]
  },
  {
    "id": 175,
    "ndex": "#0175",
    "english": "Togepi",
    "simplified": "波克比",
    "pinyin": "Bōkèbǐ",
    "level": "Gén 2",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      }
    ]
  },
  {
    "id": 176,
    "ndex": "#0176",
    "english": "Togetic",
    "simplified": "波克基古",
    "pinyin": "Bōkèjīgǔ",
    "level": "Gén 2",
    "type": "Hada / Volador",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      }
    ]
  },
  {
    "id": 177,
    "ndex": "#0177",
    "english": "Natu",
    "simplified": "天然雀",
    "pinyin": "Tiānránquè",
    "level": "Gén 2",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "naturally",
        "definitionEs": "naturalmente"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ]
  },
  {
    "id": 178,
    "ndex": "#0178",
    "english": "Xatu",
    "simplified": "天然鸟",
    "pinyin": "Tiānránniǎo",
    "level": "Gén 2",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "naturally",
        "definitionEs": "naturalmente"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 179,
    "ndex": "#0179",
    "english": "Mareep",
    "simplified": "咩利羊",
    "pinyin": "Miēlìyáng",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png",
    "characters": [
      {
        "char": "咩",
        "pinyin": "mie1",
        "definition": "bleat",
        "definitionEs": "balido"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 180,
    "ndex": "#0180",
    "english": "Flaaffy",
    "simplified": "茸茸羊",
    "pinyin": "Róngróngyáng",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png",
    "characters": [
      {
        "char": "茸",
        "pinyin": "rong2",
        "definition": "fuzz",
        "definitionEs": "pelusa"
      },
      {
        "char": "茸",
        "pinyin": "rong2",
        "definition": "fuzz",
        "definitionEs": "pelusa"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 181,
    "ndex": "#0181",
    "english": "Ampharos",
    "simplified": "电龙",
    "pinyin": "Diànlóng",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 182,
    "ndex": "#0182",
    "english": "Bellossom",
    "simplified": "美丽花",
    "pinyin": "Měilìhuā",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png",
    "characters": [
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "丽",
        "pinyin": "li4",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 183,
    "ndex": "#0183",
    "english": "Marill",
    "simplified": "玛力露",
    "pinyin": "Mǎlìlù",
    "level": "Gén 2",
    "type": "Agua / Hada",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "露",
        "pinyin": "lu4",
        "definition": "dew",
        "definitionEs": "rocío"
      }
    ]
  },
  {
    "id": 184,
    "ndex": "#0184",
    "english": "Azumarill",
    "simplified": "玛力露丽",
    "pinyin": "Mǎlìlùlì",
    "level": "Gén 2",
    "type": "Agua / Hada",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "露",
        "pinyin": "lu4",
        "definition": "dew",
        "definitionEs": "rocío"
      },
      {
        "char": "丽",
        "pinyin": "li4",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      }
    ]
  },
  {
    "id": 185,
    "ndex": "#0185",
    "english": "Sudowoodo",
    "simplified": "树才怪",
    "pinyin": "Shùcáiguài",
    "level": "Gén 2",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png",
    "characters": [
      {
        "char": "树",
        "pinyin": "shu4",
        "definition": "tree",
        "definitionEs": "árbol"
      },
      {
        "char": "才",
        "pinyin": "cai2",
        "definition": "talent",
        "definitionEs": "talento"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 186,
    "ndex": "#0186",
    "english": "Politoed",
    "simplified": "蚊香蛙皇",
    "pinyin": "Wénxiāngwāhuáng",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png",
    "characters": [
      {
        "char": "蚊",
        "pinyin": "wen2",
        "definition": "mosquito",
        "definitionEs": "mosquito"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      },
      {
        "char": "皇",
        "pinyin": "huang2",
        "definition": "emperor",
        "definitionEs": "emperador"
      }
    ]
  },
  {
    "id": 187,
    "ndex": "#0187",
    "english": "Hoppip",
    "simplified": "毽子草",
    "pinyin": "Jiànzǐcǎo",
    "level": "Gén 2",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png",
    "characters": [
      {
        "char": "毽",
        "pinyin": "jian4",
        "definition": "shuttlecock",
        "definitionEs": "volante"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ]
  },
  {
    "id": 188,
    "ndex": "#0188",
    "english": "Skiploom",
    "simplified": "毽子花",
    "pinyin": "Jiànzǐhuā",
    "level": "Gén 2",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png",
    "characters": [
      {
        "char": "毽",
        "pinyin": "jian4",
        "definition": "shuttlecock",
        "definitionEs": "volante"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 189,
    "ndex": "#0189",
    "english": "Jumpluff",
    "simplified": "毽子棉",
    "pinyin": "Jiànzǐmián",
    "level": "Gén 2",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png",
    "characters": [
      {
        "char": "毽",
        "pinyin": "jian4",
        "definition": "shuttlecock",
        "definitionEs": "volante"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "棉",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      }
    ]
  },
  {
    "id": 190,
    "ndex": "#0190",
    "english": "Aipom",
    "simplified": "长尾怪手",
    "pinyin": "Chángwěiguàishǒu",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "hand",
        "definitionEs": "mano"
      }
    ]
  },
  {
    "id": 191,
    "ndex": "#0191",
    "english": "Sunkern",
    "simplified": "向日种子",
    "pinyin": "Xiàngrìzhǒngzǐ",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png",
    "characters": [
      {
        "char": "向",
        "pinyin": "xiang4",
        "definition": "direction",
        "definitionEs": "dirección"
      },
      {
        "char": "日",
        "pinyin": "ri4",
        "definition": "sun",
        "definitionEs": "sol"
      },
      {
        "char": "种",
        "pinyin": "zhong3",
        "definition": "seed",
        "definitionEs": "semilla"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 192,
    "ndex": "#0192",
    "english": "Sunflora",
    "simplified": "向日花怪",
    "pinyin": "Xiàngrìhuāguài",
    "level": "Gén 2",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png",
    "characters": [
      {
        "char": "向",
        "pinyin": "xiang4",
        "definition": "direction",
        "definitionEs": "dirección"
      },
      {
        "char": "日",
        "pinyin": "ri4",
        "definition": "sun",
        "definitionEs": "sol"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 193,
    "ndex": "#0193",
    "english": "Yanma",
    "simplified": "蜻蜻蜓",
    "pinyin": "Qīngqīngtíng",
    "level": "Gén 2",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png",
    "characters": [
      {
        "char": "蜻",
        "pinyin": "qing1",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      },
      {
        "char": "蜻",
        "pinyin": "qing1",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      },
      {
        "char": "蜓",
        "pinyin": "ting2",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      }
    ]
  },
  {
    "id": 194,
    "ndex": "#0194",
    "english": "Wooper",
    "simplified": "乌波",
    "pinyin": "Wūbō",
    "level": "Gén 2",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png",
    "characters": [
      {
        "char": "乌",
        "pinyin": "wu1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      }
    ]
  },
  {
    "id": 195,
    "ndex": "#0195",
    "english": "Quagsire",
    "simplified": "沼王",
    "pinyin": "Zhǎowáng",
    "level": "Gén 2",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png",
    "characters": [
      {
        "char": "沼",
        "pinyin": "zhao3",
        "definition": "marsh",
        "definitionEs": "pantano"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 196,
    "ndex": "#0196",
    "english": "Espeon",
    "simplified": "太阳伊布",
    "pinyin": "Tàiyángyībù",
    "level": "Gén 2",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "阳",
        "pinyin": "yang2",
        "definition": "sun",
        "definitionEs": "sol"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 197,
    "ndex": "#0197",
    "english": "Umbreon",
    "simplified": "月亮伊布",
    "pinyin": "Yuèliàngyībù",
    "level": "Gén 2",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    "characters": [
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "亮",
        "pinyin": "liang4",
        "definition": "bright",
        "definitionEs": "brillante"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 198,
    "ndex": "#0198",
    "english": "Murkrow",
    "simplified": "黑暗鸦",
    "pinyin": "Hēi'ànyā",
    "level": "Gén 2",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png",
    "characters": [
      {
        "char": "黑",
        "pinyin": "hei1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "暗",
        "pinyin": "an4",
        "definition": "dark",
        "definitionEs": "oscuro"
      },
      {
        "char": "鸦",
        "pinyin": "ya1",
        "definition": "crow",
        "definitionEs": "cuervo"
      }
    ]
  },
  {
    "id": 199,
    "ndex": "#0199",
    "english": "Slowking",
    "simplified": "呆呆王",
    "pinyin": "Dāidāiwáng",
    "level": "Gén 2",
    "type": "Agua / Psíquico",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png",
    "characters": [
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 200,
    "ndex": "#0200",
    "english": "Misdreavus",
    "simplified": "梦妖",
    "pinyin": "Mèngyāo",
    "level": "Gén 2",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png",
    "characters": [
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      }
    ]
  },
  {
    "id": 201,
    "ndex": "#0201",
    "english": "Unown",
    "simplified": "未知图腾",
    "pinyin": "Wèizhītúténg",
    "level": "Gén 2",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png",
    "characters": [
      {
        "char": "未",
        "pinyin": "wei4",
        "definition": "not yet",
        "definitionEs": "aún no"
      },
      {
        "char": "知",
        "pinyin": "zhi1",
        "definition": "know",
        "definitionEs": "saber"
      },
      {
        "char": "图",
        "pinyin": "tu2",
        "definition": "diagram",
        "definitionEs": "diagrama"
      },
      {
        "char": "腾",
        "pinyin": "teng2",
        "definition": "gallop",
        "definitionEs": "galope"
      }
    ]
  },
  {
    "id": 202,
    "ndex": "#0202",
    "english": "Wobbuffet",
    "simplified": "果然翁",
    "pinyin": "Guǒránwēng",
    "level": "Gén 2",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png",
    "characters": [
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "naturally",
        "definitionEs": "naturalmente"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      }
    ]
  },
  {
    "id": 203,
    "ndex": "#0203",
    "english": "Girafarig",
    "simplified": "麒麟奇",
    "pinyin": "Qílínqí",
    "level": "Gén 2",
    "type": "Normal / Psíquico",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png",
    "characters": [
      {
        "char": "麒",
        "pinyin": "qi2",
        "definition": "qilin (part of)",
        "definitionEs": "qilin (parte de)"
      },
      {
        "char": "麟",
        "pinyin": "lin2",
        "definition": "qilin (part of)",
        "definitionEs": "qilin (parte de)"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 204,
    "ndex": "#0204",
    "english": "Pineco",
    "simplified": "榛果球",
    "pinyin": "Zhēnguǒqiú",
    "level": "Gén 2",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png",
    "characters": [
      {
        "char": "榛",
        "pinyin": "zhen1",
        "definition": "hazel",
        "definitionEs": "avellano"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 205,
    "ndex": "#0205",
    "english": "Forretress",
    "simplified": "佛烈托斯",
    "pinyin": "Fúliètuōsī",
    "level": "Gén 2",
    "type": "Bicho / Acero",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png",
    "characters": [
      {
        "char": "佛",
        "pinyin": "fo2",
        "definition": "Buddha",
        "definitionEs": "Buda"
      },
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "托",
        "pinyin": "tuo1",
        "definition": "support",
        "definitionEs": "apoyar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 206,
    "ndex": "#0206",
    "english": "Dunsparce",
    "simplified": "土龙弟弟",
    "pinyin": "Tǔlóngdìdì",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "弟",
        "pinyin": "di4",
        "definition": "younger brother",
        "definitionEs": "hermano menor"
      },
      {
        "char": "弟",
        "pinyin": "di4",
        "definition": "younger brother",
        "definitionEs": "hermano menor"
      }
    ]
  },
  {
    "id": 207,
    "ndex": "#0207",
    "english": "Gligar",
    "simplified": "天蝎",
    "pinyin": "Tiānxiē",
    "level": "Gén 2",
    "type": "Tierra / Volador",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "蝎",
        "pinyin": "xie1",
        "definition": "scorpion",
        "definitionEs": "escorpión"
      }
    ]
  },
  {
    "id": 208,
    "ndex": "#0208",
    "english": "Steelix",
    "simplified": "大钢蛇",
    "pinyin": "Dàgāngshé",
    "level": "Gén 2",
    "type": "Acero / Tierra",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "钢",
        "pinyin": "gang1",
        "definition": "steel",
        "definitionEs": "acero"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 209,
    "ndex": "#0209",
    "english": "Snubbull",
    "simplified": "布鲁",
    "pinyin": "Bùlú",
    "level": "Gén 2",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      }
    ]
  },
  {
    "id": 210,
    "ndex": "#0210",
    "english": "Granbull",
    "simplified": "布鲁皇",
    "pinyin": "Bùlǔhuáng",
    "level": "Gén 2",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "皇",
        "pinyin": "huang2",
        "definition": "emperor",
        "definitionEs": "emperador"
      }
    ]
  },
  {
    "id": 211,
    "ndex": "#0211",
    "english": "Qwilfish",
    "simplified": "千针鱼",
    "pinyin": "Qiānzhēnyú",
    "level": "Gén 2",
    "type": "Agua / Veneno",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png",
    "characters": [
      {
        "char": "千",
        "pinyin": "qian1",
        "definition": "thousand",
        "definitionEs": "mil"
      },
      {
        "char": "针",
        "pinyin": "zhen1",
        "definition": "needle",
        "definitionEs": "aguja"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 212,
    "ndex": "#0212",
    "english": "Scizor",
    "simplified": "巨钳螳螂",
    "pinyin": "Jùqiántángláng",
    "level": "Gén 2",
    "type": "Bicho / Acero",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "钳",
        "pinyin": "qian2",
        "definition": "pincers",
        "definitionEs": "tenazas"
      },
      {
        "char": "螳",
        "pinyin": "tang2",
        "definition": "mantis",
        "definitionEs": "mantis"
      },
      {
        "char": "螂",
        "pinyin": "lang2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 213,
    "ndex": "#0213",
    "english": "Shuckle",
    "simplified": "壶壶",
    "pinyin": "Húhú",
    "level": "Gén 2",
    "type": "Bicho / Roca",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png",
    "characters": [
      {
        "char": "壶",
        "pinyin": "hu2",
        "definition": "pot",
        "definitionEs": "olla"
      },
      {
        "char": "壶",
        "pinyin": "hu2",
        "definition": "pot",
        "definitionEs": "olla"
      }
    ]
  },
  {
    "id": 214,
    "ndex": "#0214",
    "english": "Heracross",
    "simplified": "赫拉克罗斯",
    "pinyin": "Hèlākèluósī",
    "level": "Gén 2",
    "type": "Bicho / Lucha",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png",
    "characters": [
      {
        "char": "赫",
        "pinyin": "he4",
        "definition": "awe",
        "definitionEs": "asombro"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 215,
    "ndex": "#0215",
    "english": "Sneasel",
    "simplified": "狃拉",
    "pinyin": "Niǔlā",
    "level": "Gén 2",
    "type": "Siniestro / Hielo",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png",
    "characters": [
      {
        "char": "狃",
        "pinyin": "niu3",
        "definition": "accustomed",
        "definitionEs": "acostumbrado"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 216,
    "ndex": "#0216",
    "english": "Teddiursa",
    "simplified": "熊宝宝",
    "pinyin": "Xióngbǎobao",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png",
    "characters": [
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 217,
    "ndex": "#0217",
    "english": "Ursaring",
    "simplified": "圈圈熊",
    "pinyin": "Quānquānxióng",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png",
    "characters": [
      {
        "char": "圈",
        "pinyin": "quan1",
        "definition": "circle",
        "definitionEs": "círculo"
      },
      {
        "char": "圈",
        "pinyin": "quan1",
        "definition": "circle",
        "definitionEs": "círculo"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 218,
    "ndex": "#0218",
    "english": "Slugma",
    "simplified": "熔岩虫",
    "pinyin": "Róngyánchóng",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png",
    "characters": [
      {
        "char": "熔",
        "pinyin": "rong2",
        "definition": "smelt",
        "definitionEs": "fundir"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 219,
    "ndex": "#0219",
    "english": "Magcargo",
    "simplified": "熔岩蜗牛",
    "pinyin": "RóngyánguāniúRóngyánwōniú",
    "level": "Gén 2",
    "type": "Fuego / Roca",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png",
    "characters": [
      {
        "char": "熔",
        "pinyin": "rong2",
        "definition": "smelt",
        "definitionEs": "fundir"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "蜗",
        "pinyin": "wo1",
        "definition": "snail",
        "definitionEs": "caracol"
      },
      {
        "char": "牛",
        "pinyin": "niu2",
        "definition": "ox",
        "definitionEs": "buey"
      }
    ]
  },
  {
    "id": 220,
    "ndex": "#0220",
    "english": "Swinub",
    "simplified": "小山猪",
    "pinyin": "Xiǎoshānzhū",
    "level": "Gén 2",
    "type": "Hielo / Tierra",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 221,
    "ndex": "#0221",
    "english": "Piloswine",
    "simplified": "长毛猪",
    "pinyin": "Chángmáozhū",
    "level": "Gén 2",
    "type": "Hielo / Tierra",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 222,
    "ndex": "#0222",
    "english": "Corsola",
    "simplified": "太阳珊瑚",
    "pinyin": "Tàiyángshānhú",
    "level": "Gén 2",
    "type": "Agua / Roca",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "阳",
        "pinyin": "yang2",
        "definition": "sun",
        "definitionEs": "sol"
      },
      {
        "char": "珊",
        "pinyin": "shan1",
        "definition": "coral",
        "definitionEs": "coral"
      },
      {
        "char": "瑚",
        "pinyin": "hu2",
        "definition": "coral (part of)",
        "definitionEs": "coral (parte de)"
      }
    ]
  },
  {
    "id": 223,
    "ndex": "#0223",
    "english": "Remoraid",
    "simplified": "铁炮鱼",
    "pinyin": "Tiěpàoyú",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "炮",
        "pinyin": "pao4",
        "definition": "cannon",
        "definitionEs": "cañón"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 224,
    "ndex": "#0224",
    "english": "Octillery",
    "simplified": "章鱼桶",
    "pinyin": "Zhāngyútǒng",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png",
    "characters": [
      {
        "char": "章",
        "pinyin": "zhang1",
        "definition": "chapter",
        "definitionEs": "capítulo"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "桶",
        "pinyin": "tong3",
        "definition": "bucket",
        "definitionEs": "cubo"
      }
    ]
  },
  {
    "id": 225,
    "ndex": "#0225",
    "english": "Delibird",
    "simplified": "信使鸟",
    "pinyin": "Xìnshǐniǎo",
    "level": "Gén 2",
    "type": "Hielo / Volador",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png",
    "characters": [
      {
        "char": "信",
        "pinyin": "xin4",
        "definition": "letter",
        "definitionEs": "carta"
      },
      {
        "char": "使",
        "pinyin": "shi3",
        "definition": "make",
        "definitionEs": "hacer"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 226,
    "ndex": "#0226",
    "english": "Mantine",
    "simplified": "巨翅飞鱼",
    "pinyin": "Jùchìfēiyú",
    "level": "Gén 2",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "翅",
        "pinyin": "chi4",
        "definition": "wing",
        "definitionEs": "ala"
      },
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 227,
    "ndex": "#0227",
    "english": "Skarmory",
    "simplified": "盔甲鸟",
    "pinyin": "Kuījiǎniǎo",
    "level": "Gén 2",
    "type": "Acero / Volador",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png",
    "characters": [
      {
        "char": "盔",
        "pinyin": "kui1",
        "definition": "helmet",
        "definitionEs": "casco"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 228,
    "ndex": "#0228",
    "english": "Houndour",
    "simplified": "戴鲁比",
    "pinyin": "Dàilǔbǐ",
    "level": "Gén 2",
    "type": "Siniestro / Fuego",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png",
    "characters": [
      {
        "char": "戴",
        "pinyin": "dai4",
        "definition": "wear",
        "definitionEs": "llevar"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      }
    ]
  },
  {
    "id": 229,
    "ndex": "#0229",
    "english": "Houndoom",
    "simplified": "黑鲁加",
    "pinyin": "Hēilǔjiā",
    "level": "Gén 2",
    "type": "Siniestro / Fuego",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png",
    "characters": [
      {
        "char": "黑",
        "pinyin": "hei1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "加",
        "pinyin": "jia1",
        "definition": "add",
        "definitionEs": "añadir"
      }
    ]
  },
  {
    "id": 230,
    "ndex": "#0230",
    "english": "Kingdra",
    "simplified": "刺龙王",
    "pinyin": "Cìlóngwáng",
    "level": "Gén 2",
    "type": "Agua / Dragón",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png",
    "characters": [
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 231,
    "ndex": "#0231",
    "english": "Phanpy",
    "simplified": "小小象",
    "pinyin": "Xiǎoxiǎoxiàng",
    "level": "Gén 2",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "象",
        "pinyin": "xiang4",
        "definition": "elephant",
        "definitionEs": "elefante"
      }
    ]
  },
  {
    "id": 232,
    "ndex": "#0232",
    "english": "Donphan",
    "simplified": "顿甲",
    "pinyin": "Dùnjiǎ",
    "level": "Gén 2",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png",
    "characters": [
      {
        "char": "顿",
        "pinyin": "dun4",
        "definition": "stop",
        "definitionEs": "parar"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      }
    ]
  },
  {
    "id": 233,
    "ndex": "#0233",
    "english": "Porygon2",
    "simplified": "多边兽２型",
    "pinyin": "Duōbiānshòu-IIDuōbiānshòu Èrxíng",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "边",
        "pinyin": "bian1",
        "definition": "side",
        "definitionEs": "lado"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      },
      {
        "char": "型",
        "pinyin": "xing2",
        "definition": "type",
        "definitionEs": "tipo"
      }
    ]
  },
  {
    "id": 234,
    "ndex": "#0234",
    "english": "Stantler",
    "simplified": "惊角鹿",
    "pinyin": "Jīngjiǎolù",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png",
    "characters": [
      {
        "char": "惊",
        "pinyin": "jing1",
        "definition": "startle",
        "definitionEs": "asustar"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "鹿",
        "pinyin": "lu4",
        "definition": "deer",
        "definitionEs": "ciervo"
      }
    ]
  },
  {
    "id": 235,
    "ndex": "#0235",
    "english": "Smeargle",
    "simplified": "图图犬",
    "pinyin": "Tútúquǎn",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png",
    "characters": [
      {
        "char": "图",
        "pinyin": "tu2",
        "definition": "diagram",
        "definitionEs": "diagrama"
      },
      {
        "char": "图",
        "pinyin": "tu2",
        "definition": "diagram",
        "definitionEs": "diagrama"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 236,
    "ndex": "#0236",
    "english": "Tyrogue",
    "simplified": "无畏小子",
    "pinyin": "Wúwèixiǎozi",
    "level": "Gén 2",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png",
    "characters": [
      {
        "char": "无",
        "pinyin": "wu2",
        "definition": "without",
        "definitionEs": "sin"
      },
      {
        "char": "畏",
        "pinyin": "wei4",
        "definition": "fear",
        "definitionEs": "miedo"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 237,
    "ndex": "#0237",
    "english": "Hitmontop",
    "simplified": "战舞郎",
    "pinyin": "Zhànwǔláng",
    "level": "Gén 2",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png",
    "characters": [
      {
        "char": "战",
        "pinyin": "zhan4",
        "definition": "fight",
        "definitionEs": "luchar"
      },
      {
        "char": "舞",
        "pinyin": "wu3",
        "definition": "dance",
        "definitionEs": "bailar"
      },
      {
        "char": "郎",
        "pinyin": "lang2",
        "definition": "minister",
        "definitionEs": "ministro"
      }
    ]
  },
  {
    "id": 238,
    "ndex": "#0238",
    "english": "Smoochum",
    "simplified": "迷唇娃",
    "pinyin": "Míchúnwá",
    "level": "Gén 2",
    "type": "Hielo / Psíquico",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "唇",
        "pinyin": "chun2",
        "definition": "lip",
        "definitionEs": "labio"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 239,
    "ndex": "#0239",
    "english": "Elekid",
    "simplified": "电击怪",
    "pinyin": "DiànjíguàiDiànjīguài",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "击",
        "pinyin": "ji1",
        "definition": "to hit",
        "definitionEs": "golpear"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 240,
    "ndex": "#0240",
    "english": "Magby",
    "simplified": "鸭嘴宝宝",
    "pinyin": "Yāzuǐbǎobao",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png",
    "characters": [
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 241,
    "ndex": "#0241",
    "english": "Miltank",
    "simplified": "大奶罐",
    "pinyin": "Dànǎiguàn",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "奶",
        "pinyin": "nai3",
        "definition": "milk",
        "definitionEs": "leche"
      },
      {
        "char": "罐",
        "pinyin": "guan4",
        "definition": "jar",
        "definitionEs": "tarro"
      }
    ]
  },
  {
    "id": 242,
    "ndex": "#0242",
    "english": "Blissey",
    "simplified": "幸福蛋",
    "pinyin": "Xìngfúdàn",
    "level": "Gén 2",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png",
    "characters": [
      {
        "char": "幸",
        "pinyin": "xing4",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "福",
        "pinyin": "fu2",
        "definition": "fortune",
        "definitionEs": "fortuna"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      }
    ]
  },
  {
    "id": 243,
    "ndex": "#0243",
    "english": "Raikou",
    "simplified": "雷公",
    "pinyin": "Léigōng",
    "level": "Gén 2",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "public",
        "definitionEs": "público"
      }
    ]
  },
  {
    "id": 244,
    "ndex": "#0244",
    "english": "Entei",
    "simplified": "炎帝",
    "pinyin": "Yándì",
    "level": "Gén 2",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png",
    "characters": [
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      }
    ]
  },
  {
    "id": 245,
    "ndex": "#0245",
    "english": "Suicune",
    "simplified": "水君",
    "pinyin": "Shuǐjūn",
    "level": "Gén 2",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "君",
        "pinyin": "jun1",
        "definition": "lord",
        "definitionEs": "señor"
      }
    ]
  },
  {
    "id": 246,
    "ndex": "#0246",
    "english": "Larvitar",
    "simplified": "幼基拉斯",
    "pinyin": "Yòujīlāsī",
    "level": "Gén 2",
    "type": "Roca / Tierra",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png",
    "characters": [
      {
        "char": "幼",
        "pinyin": "you4",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 247,
    "ndex": "#0247",
    "english": "Pupitar",
    "simplified": "沙基拉斯",
    "pinyin": "Shājīlāsī",
    "level": "Gén 2",
    "type": "Roca / Tierra",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 248,
    "ndex": "#0248",
    "english": "Tyranitar",
    "simplified": "班基拉斯",
    "pinyin": "Bānjīlāsī",
    "level": "Gén 2",
    "type": "Roca / Siniestro",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png",
    "characters": [
      {
        "char": "班",
        "pinyin": "ban1",
        "definition": "class",
        "definitionEs": "clase"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 249,
    "ndex": "#0249",
    "english": "Lugia",
    "simplified": "洛奇亚",
    "pinyin": "LuòqíyǎLuòqíyà",
    "level": "Gén 2",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    "characters": [
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 250,
    "ndex": "#0250",
    "english": "Ho-Oh",
    "simplified": "凤王",
    "pinyin": "Fèngwáng",
    "level": "Gén 2",
    "type": "Fuego / Volador",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
    "characters": [
      {
        "char": "凤",
        "pinyin": "feng4",
        "definition": "phoenix",
        "definitionEs": "fénix"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 251,
    "ndex": "#0251",
    "english": "Celebi",
    "simplified": "时拉比",
    "pinyin": "Shílābǐ",
    "level": "Gén 2",
    "type": "Psíquico / Planta",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png",
    "characters": [
      {
        "char": "时",
        "pinyin": "shi2",
        "definition": "time",
        "definitionEs": "tiempo"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      }
    ]
  },
  {
    "id": 252,
    "ndex": "#0252",
    "english": "Treecko",
    "simplified": "木守宫",
    "pinyin": "Mùshǒugōng",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
    "characters": [
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "守",
        "pinyin": "shou3",
        "definition": "guard",
        "definitionEs": "guardar"
      },
      {
        "char": "宫",
        "pinyin": "gong1",
        "definition": "palace",
        "definitionEs": "palacio"
      }
    ]
  },
  {
    "id": 253,
    "ndex": "#0253",
    "english": "Grovyle",
    "simplified": "森林蜥蜴",
    "pinyin": "Sēnlínxīyì",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
    "characters": [
      {
        "char": "森",
        "pinyin": "sen1",
        "definition": "dense woods",
        "definitionEs": "bosque denso"
      },
      {
        "char": "林",
        "pinyin": "lin2",
        "definition": "forest",
        "definitionEs": "bosque"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      },
      {
        "char": "蜴",
        "pinyin": "yi4",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 254,
    "ndex": "#0254",
    "english": "Sceptile",
    "simplified": "蜥蜴王",
    "pinyin": "Xīyìwáng",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png",
    "characters": [
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      },
      {
        "char": "蜴",
        "pinyin": "yi4",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 255,
    "ndex": "#0255",
    "english": "Torchic",
    "simplified": "火稚鸡",
    "pinyin": "Huǒzhìjī",
    "level": "Gén 3",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "稚",
        "pinyin": "zhi4",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      }
    ]
  },
  {
    "id": 256,
    "ndex": "#0256",
    "english": "Combusken",
    "simplified": "力壮鸡",
    "pinyin": "Lìzhuàngjī",
    "level": "Gén 3",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png",
    "characters": [
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "壮",
        "pinyin": "zhuang4",
        "definition": "strong",
        "definitionEs": "fuerte"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      }
    ]
  },
  {
    "id": 257,
    "ndex": "#0257",
    "english": "Blaziken",
    "simplified": "火焰鸡",
    "pinyin": "Huǒyànjī",
    "level": "Gén 3",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      }
    ]
  },
  {
    "id": 258,
    "ndex": "#0258",
    "english": "Mudkip",
    "simplified": "水跃鱼",
    "pinyin": "Shuǐyuèyú",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "跃",
        "pinyin": "yue4",
        "definition": "jump",
        "definitionEs": "saltar"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 259,
    "ndex": "#0259",
    "english": "Marshtomp",
    "simplified": "沼跃鱼",
    "pinyin": "Zhǎoyuèyú",
    "level": "Gén 3",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png",
    "characters": [
      {
        "char": "沼",
        "pinyin": "zhao3",
        "definition": "marsh",
        "definitionEs": "pantano"
      },
      {
        "char": "跃",
        "pinyin": "yue4",
        "definition": "jump",
        "definitionEs": "saltar"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 260,
    "ndex": "#0260",
    "english": "Swampert",
    "simplified": "巨沼怪",
    "pinyin": "Jùzhǎoguài",
    "level": "Gén 3",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "沼",
        "pinyin": "zhao3",
        "definition": "marsh",
        "definitionEs": "pantano"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 261,
    "ndex": "#0261",
    "english": "Poochyena",
    "simplified": "土狼犬",
    "pinyin": "Tǔlángquǎn",
    "level": "Gén 3",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "狼",
        "pinyin": "lang2",
        "definition": "wolf",
        "definitionEs": "lobo"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 262,
    "ndex": "#0262",
    "english": "Mightyena",
    "simplified": "大狼犬",
    "pinyin": "Dàlángquǎn",
    "level": "Gén 3",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "狼",
        "pinyin": "lang2",
        "definition": "wolf",
        "definitionEs": "lobo"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 263,
    "ndex": "#0263",
    "english": "Zigzagoon",
    "simplified": "蛇纹熊",
    "pinyin": "Shéwénxióng",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png",
    "characters": [
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      },
      {
        "char": "纹",
        "pinyin": "wen2",
        "definition": "pattern",
        "definitionEs": "patrón"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 264,
    "ndex": "#0264",
    "english": "Linoone",
    "simplified": "直冲熊",
    "pinyin": "Zhíchōngxióng",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png",
    "characters": [
      {
        "char": "直",
        "pinyin": "zhi2",
        "definition": "straight",
        "definitionEs": "recto"
      },
      {
        "char": "冲",
        "pinyin": "chong4",
        "definition": "powerful",
        "definitionEs": "poderoso"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 265,
    "ndex": "#0265",
    "english": "Wurmple",
    "simplified": "刺尾虫",
    "pinyin": "Cìwěichóng",
    "level": "Gén 3",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png",
    "characters": [
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 266,
    "ndex": "#0266",
    "english": "Silcoon",
    "simplified": "甲壳茧",
    "pinyin": "Jiǎkéjiǎn",
    "level": "Gén 3",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png",
    "characters": [
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "茧",
        "pinyin": "jian3",
        "definition": "cocoon",
        "definitionEs": "capullo"
      }
    ]
  },
  {
    "id": 267,
    "ndex": "#0267",
    "english": "Beautifly",
    "simplified": "狩猎凤蝶",
    "pinyin": "Shòulièfèngdié",
    "level": "Gén 3",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png",
    "characters": [
      {
        "char": "狩",
        "pinyin": "shou4",
        "definition": "hunt",
        "definitionEs": "cazar"
      },
      {
        "char": "猎",
        "pinyin": "lie4",
        "definition": "hunt",
        "definitionEs": "caza"
      },
      {
        "char": "凤",
        "pinyin": "feng4",
        "definition": "phoenix",
        "definitionEs": "fénix"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      }
    ]
  },
  {
    "id": 268,
    "ndex": "#0268",
    "english": "Cascoon",
    "simplified": "盾甲茧",
    "pinyin": "Dùnjiǎjiǎn",
    "level": "Gén 3",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png",
    "characters": [
      {
        "char": "盾",
        "pinyin": "dun4",
        "definition": "shield",
        "definitionEs": "escudo"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "茧",
        "pinyin": "jian3",
        "definition": "cocoon",
        "definitionEs": "capullo"
      }
    ]
  },
  {
    "id": 269,
    "ndex": "#0269",
    "english": "Dustox",
    "simplified": "毒粉蛾",
    "pinyin": "Dúfěn'é",
    "level": "Gén 3",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "粉",
        "pinyin": "fen3",
        "definition": "powder",
        "definitionEs": "polvo"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 270,
    "ndex": "#0270",
    "english": "Lotad",
    "simplified": "莲叶童子",
    "pinyin": "Liányètóngzǐ",
    "level": "Gén 3",
    "type": "Agua / Planta",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png",
    "characters": [
      {
        "char": "莲",
        "pinyin": "lian2",
        "definition": "lotus",
        "definitionEs": "loto"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      },
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 271,
    "ndex": "#0271",
    "english": "Lombre",
    "simplified": "莲帽小童",
    "pinyin": "Liánmàoxiǎotóng",
    "level": "Gén 3",
    "type": "Agua / Planta",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png",
    "characters": [
      {
        "char": "莲",
        "pinyin": "lian2",
        "definition": "lotus",
        "definitionEs": "loto"
      },
      {
        "char": "帽",
        "pinyin": "mao4",
        "definition": "hat",
        "definitionEs": "sombrero"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 272,
    "ndex": "#0272",
    "english": "Ludicolo",
    "simplified": "乐天河童",
    "pinyin": "Lètiānhétóng",
    "level": "Gén 3",
    "type": "Agua / Planta",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png",
    "characters": [
      {
        "char": "乐",
        "pinyin": "yue4",
        "definition": "music",
        "definitionEs": "música"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "河",
        "pinyin": "he2",
        "definition": "river",
        "definitionEs": "río"
      },
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 273,
    "ndex": "#0273",
    "english": "Seedot",
    "simplified": "橡实果",
    "pinyin": "Xiàngshíguǒ",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png",
    "characters": [
      {
        "char": "橡",
        "pinyin": "xiang4",
        "definition": "oak",
        "definitionEs": "roble"
      },
      {
        "char": "实",
        "pinyin": "shi2",
        "definition": "real",
        "definitionEs": "real"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      }
    ]
  },
  {
    "id": 274,
    "ndex": "#0274",
    "english": "Nuzleaf",
    "simplified": "长鼻叶",
    "pinyin": "Chángbíyè",
    "level": "Gén 3",
    "type": "Planta / Siniestro",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "鼻",
        "pinyin": "bi2",
        "definition": "nose",
        "definitionEs": "nariz"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      }
    ]
  },
  {
    "id": 275,
    "ndex": "#0275",
    "english": "Shiftry",
    "simplified": "狡猾天狗",
    "pinyin": "Jiǎohuátiāngǒu",
    "level": "Gén 3",
    "type": "Planta / Siniestro",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png",
    "characters": [
      {
        "char": "狡",
        "pinyin": "jiao3",
        "definition": "crafty",
        "definitionEs": "astuto"
      },
      {
        "char": "猾",
        "pinyin": "hua2",
        "definition": "sly",
        "definitionEs": "astuto"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 276,
    "ndex": "#0276",
    "english": "Taillow",
    "simplified": "傲骨燕",
    "pinyin": "Àogǔyàn",
    "level": "Gén 3",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png",
    "characters": [
      {
        "char": "傲",
        "pinyin": "ao4",
        "definition": "proud",
        "definitionEs": "orgulloso"
      },
      {
        "char": "骨",
        "pinyin": "gu3",
        "definition": "bone",
        "definitionEs": "hueso"
      },
      {
        "char": "燕",
        "pinyin": "yan4",
        "definition": "swallow",
        "definitionEs": "golondrina"
      }
    ]
  },
  {
    "id": 277,
    "ndex": "#0277",
    "english": "Swellow",
    "simplified": "大王燕",
    "pinyin": "Dàwángyàn",
    "level": "Gén 3",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "燕",
        "pinyin": "yan4",
        "definition": "swallow",
        "definitionEs": "golondrina"
      }
    ]
  },
  {
    "id": 278,
    "ndex": "#0278",
    "english": "Wingull",
    "simplified": "长翅鸥",
    "pinyin": "Chángchì'ōu",
    "level": "Gén 3",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "翅",
        "pinyin": "chi4",
        "definition": "wing",
        "definitionEs": "ala"
      },
      {
        "char": "鸥",
        "pinyin": "ou1",
        "definition": "gull",
        "definitionEs": "gaviota"
      }
    ]
  },
  {
    "id": 279,
    "ndex": "#0279",
    "english": "Pelipper",
    "simplified": "大嘴鸥",
    "pinyin": "Dàzuǐ'ōu",
    "level": "Gén 3",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "鸥",
        "pinyin": "ou1",
        "definition": "gull",
        "definitionEs": "gaviota"
      }
    ]
  },
  {
    "id": 280,
    "ndex": "#0280",
    "english": "Ralts",
    "simplified": "拉鲁拉丝",
    "pinyin": "Lālǔlāsī",
    "level": "Gén 3",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png",
    "characters": [
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "丝",
        "pinyin": "si1",
        "definition": "silk",
        "definitionEs": "seda"
      }
    ]
  },
  {
    "id": 281,
    "ndex": "#0281",
    "english": "Kirlia",
    "simplified": "奇鲁莉安",
    "pinyin": "Qílǔlì'ān",
    "level": "Gén 3",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png",
    "characters": [
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "莉",
        "pinyin": "li4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "安",
        "pinyin": "an1",
        "definition": "calm",
        "definitionEs": "tranquilo"
      }
    ]
  },
  {
    "id": 282,
    "ndex": "#0282",
    "english": "Gardevoir",
    "simplified": "沙奈朵",
    "pinyin": "Shānàiduǒ",
    "level": "Gén 3",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "奈",
        "pinyin": "nai4",
        "definition": "phonetic (part of)",
        "definitionEs": "fonético (parte de)"
      },
      {
        "char": "朵",
        "pinyin": "duo3",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 283,
    "ndex": "#0283",
    "english": "Surskit",
    "simplified": "溜溜糖球",
    "pinyin": "Liūliūtángqiú",
    "level": "Gén 3",
    "type": "Bicho / Agua",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png",
    "characters": [
      {
        "char": "溜",
        "pinyin": "liu4",
        "definition": "swift current",
        "definitionEs": "corriente rápida"
      },
      {
        "char": "溜",
        "pinyin": "liu4",
        "definition": "swift current",
        "definitionEs": "corriente rápida"
      },
      {
        "char": "糖",
        "pinyin": "tang2",
        "definition": "sugar",
        "definitionEs": "azúcar"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 284,
    "ndex": "#0284",
    "english": "Masquerain",
    "simplified": "雨翅蛾",
    "pinyin": "Yǔchì'é",
    "level": "Gén 3",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png",
    "characters": [
      {
        "char": "雨",
        "pinyin": "yu3",
        "definition": "rain",
        "definitionEs": "lluvia"
      },
      {
        "char": "翅",
        "pinyin": "chi4",
        "definition": "wing",
        "definitionEs": "ala"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 285,
    "ndex": "#0285",
    "english": "Shroomish",
    "simplified": "蘑蘑菇",
    "pinyin": "Mómógū",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png",
    "characters": [
      {
        "char": "蘑",
        "pinyin": "mo2",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      },
      {
        "char": "蘑",
        "pinyin": "mo2",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 286,
    "ndex": "#0286",
    "english": "Breloom",
    "simplified": "斗笠菇",
    "pinyin": "Dǒulìgū",
    "level": "Gén 3",
    "type": "Planta / Lucha",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png",
    "characters": [
      {
        "char": "斗",
        "pinyin": "dou4",
        "definition": "fight",
        "definitionEs": "lucha"
      },
      {
        "char": "笠",
        "pinyin": "li4",
        "definition": "rain hat",
        "definitionEs": "sombrero de lluvia"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 287,
    "ndex": "#0287",
    "english": "Slakoth",
    "simplified": "懒人獭",
    "pinyin": "LǎnréntàLǎnréntǎ",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png",
    "characters": [
      {
        "char": "懒",
        "pinyin": "lan3",
        "definition": "lazy",
        "definitionEs": "perezoso"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "獭",
        "pinyin": "ta3",
        "definition": "otter",
        "definitionEs": "nutria"
      }
    ]
  },
  {
    "id": 288,
    "ndex": "#0288",
    "english": "Vigoroth",
    "simplified": "过动猿",
    "pinyin": "Guòdòngyuán",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png",
    "characters": [
      {
        "char": "过",
        "pinyin": "guo",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "动",
        "pinyin": "dong4",
        "definition": "move",
        "definitionEs": "mover"
      },
      {
        "char": "猿",
        "pinyin": "yuan2",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 289,
    "ndex": "#0289",
    "english": "Slaking",
    "simplified": "请假王",
    "pinyin": "Qǐngjiàwáng",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png",
    "characters": [
      {
        "char": "请",
        "pinyin": "qing3",
        "definition": "ask",
        "definitionEs": "preguntar"
      },
      {
        "char": "假",
        "pinyin": "jia3",
        "definition": "borrow",
        "definitionEs": "pedir prestado"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 290,
    "ndex": "#0290",
    "english": "Nincada",
    "simplified": "土居忍士",
    "pinyin": "Tǔjūrěnshì",
    "level": "Gén 3",
    "type": "Bicho / Tierra",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "居",
        "pinyin": "ju1",
        "definition": "reside",
        "definitionEs": "residir"
      },
      {
        "char": "忍",
        "pinyin": "ren3",
        "definition": "endure",
        "definitionEs": "soportar"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      }
    ]
  },
  {
    "id": 291,
    "ndex": "#0291",
    "english": "Ninjask",
    "simplified": "铁面忍者",
    "pinyin": "Tiěmiànrěnzhě",
    "level": "Gén 3",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "face",
        "definitionEs": "cara"
      },
      {
        "char": "忍",
        "pinyin": "ren3",
        "definition": "endure",
        "definitionEs": "soportar"
      },
      {
        "char": "者",
        "pinyin": "zhe3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 292,
    "ndex": "#0292",
    "english": "Shedinja",
    "simplified": "脱壳忍者",
    "pinyin": "Tuōkérěnzhě",
    "level": "Gén 3",
    "type": "Bicho / Fantasma",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png",
    "characters": [
      {
        "char": "脱",
        "pinyin": "tuo1",
        "definition": "shed",
        "definitionEs": "mudar"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "忍",
        "pinyin": "ren3",
        "definition": "endure",
        "definitionEs": "soportar"
      },
      {
        "char": "者",
        "pinyin": "zhe3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 293,
    "ndex": "#0293",
    "english": "Whismur",
    "simplified": "咕妞妞",
    "pinyin": "Gūniūniū",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png",
    "characters": [
      {
        "char": "咕",
        "pinyin": "gu1",
        "definition": "gurgle",
        "definitionEs": "gorgoteo"
      },
      {
        "char": "妞",
        "pinyin": "niu1",
        "definition": "girl",
        "definitionEs": "chica"
      },
      {
        "char": "妞",
        "pinyin": "niu1",
        "definition": "girl",
        "definitionEs": "chica"
      }
    ]
  },
  {
    "id": 294,
    "ndex": "#0294",
    "english": "Loudred",
    "simplified": "吼爆弹",
    "pinyin": "Hǒubàodàn",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png",
    "characters": [
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "弹",
        "pinyin": "dan4",
        "definition": "bullet",
        "definitionEs": "bala"
      }
    ]
  },
  {
    "id": 295,
    "ndex": "#0295",
    "english": "Exploud",
    "simplified": "爆音怪",
    "pinyin": "Bàoyīnguài",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 296,
    "ndex": "#0296",
    "english": "Makuhita",
    "simplified": "幕下力士",
    "pinyin": "Mùxiàlìshì",
    "level": "Gén 3",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png",
    "characters": [
      {
        "char": "幕",
        "pinyin": "mu4",
        "definition": "curtain",
        "definitionEs": "telón"
      },
      {
        "char": "下",
        "pinyin": "xia4",
        "definition": "down",
        "definitionEs": "abajo"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      }
    ]
  },
  {
    "id": 297,
    "ndex": "#0297",
    "english": "Hariyama",
    "simplified": "铁掌力士",
    "pinyin": "Tiězhǎnglìshì",
    "level": "Gén 3",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "掌",
        "pinyin": "zhang3",
        "definition": "palm",
        "definitionEs": "palma"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      }
    ]
  },
  {
    "id": 298,
    "ndex": "#0298",
    "english": "Azurill",
    "simplified": "露力丽",
    "pinyin": "Lùlìlì",
    "level": "Gén 3",
    "type": "Normal / Hada",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png",
    "characters": [
      {
        "char": "露",
        "pinyin": "lu4",
        "definition": "dew",
        "definitionEs": "rocío"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "丽",
        "pinyin": "li4",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      }
    ]
  },
  {
    "id": 299,
    "ndex": "#0299",
    "english": "Nosepass",
    "simplified": "朝北鼻",
    "pinyin": "Cháoběibí",
    "level": "Gén 3",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png",
    "characters": [
      {
        "char": "朝",
        "pinyin": "zhao1",
        "definition": "morning",
        "definitionEs": "mañana"
      },
      {
        "char": "北",
        "pinyin": "bei3",
        "definition": "north",
        "definitionEs": "norte"
      },
      {
        "char": "鼻",
        "pinyin": "bi2",
        "definition": "nose",
        "definitionEs": "nariz"
      }
    ]
  },
  {
    "id": 300,
    "ndex": "#0300",
    "english": "Skitty",
    "simplified": "向尾喵",
    "pinyin": "Xiàngwěimiāo",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png",
    "characters": [
      {
        "char": "向",
        "pinyin": "xiang4",
        "definition": "direction",
        "definitionEs": "dirección"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 301,
    "ndex": "#0301",
    "english": "Delcatty",
    "simplified": "优雅猫",
    "pinyin": "Yōuyǎmāo",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png",
    "characters": [
      {
        "char": "优",
        "pinyin": "you1",
        "definition": "excellent",
        "definitionEs": "excelente"
      },
      {
        "char": "雅",
        "pinyin": "ya3",
        "definition": "elegant",
        "definitionEs": "elegante"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 302,
    "ndex": "#0302",
    "english": "Sableye",
    "simplified": "勾魂眼",
    "pinyin": "Gōuhúnyǎn",
    "level": "Gén 3",
    "type": "Siniestro / Fantasma",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png",
    "characters": [
      {
        "char": "勾",
        "pinyin": "gou1",
        "definition": "hook",
        "definitionEs": "gancho"
      },
      {
        "char": "魂",
        "pinyin": "hun2",
        "definition": "soul",
        "definitionEs": "alma"
      },
      {
        "char": "眼",
        "pinyin": "yan3",
        "definition": "eye",
        "definitionEs": "ojo"
      }
    ]
  },
  {
    "id": 303,
    "ndex": "#0303",
    "english": "Mawile",
    "simplified": "大嘴娃",
    "pinyin": "Dàzuǐwá",
    "level": "Gén 3",
    "type": "Acero / Hada",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 304,
    "ndex": "#0304",
    "english": "Aron",
    "simplified": "可可多拉",
    "pinyin": "Kěkěduōlā",
    "level": "Gén 3",
    "type": "Acero / Roca",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png",
    "characters": [
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 305,
    "ndex": "#0305",
    "english": "Lairon",
    "simplified": "可多拉",
    "pinyin": "Kěduōlā",
    "level": "Gén 3",
    "type": "Acero / Roca",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png",
    "characters": [
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 306,
    "ndex": "#0306",
    "english": "Aggron",
    "simplified": "波士可多拉",
    "pinyin": "Bōshìkěduōlā",
    "level": "Gén 3",
    "type": "Acero / Roca",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 307,
    "ndex": "#0307",
    "english": "Meditite",
    "simplified": "玛沙那",
    "pinyin": "Mǎshānà",
    "level": "Gén 3",
    "type": "Lucha / Psíquico",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "那",
        "pinyin": "na4",
        "definition": "that",
        "definitionEs": "ese"
      }
    ]
  },
  {
    "id": 308,
    "ndex": "#0308",
    "english": "Medicham",
    "simplified": "恰雷姆",
    "pinyin": "Qiàléimǔ",
    "level": "Gén 3",
    "type": "Lucha / Psíquico",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png",
    "characters": [
      {
        "char": "恰",
        "pinyin": "qia4",
        "definition": "exactly",
        "definitionEs": "exactamente"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 309,
    "ndex": "#0309",
    "english": "Electrike",
    "simplified": "落雷兽",
    "pinyin": "Luòléishòu",
    "level": "Gén 3",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png",
    "characters": [
      {
        "char": "落",
        "pinyin": "luo4",
        "definition": "to fall",
        "definitionEs": "caer"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 310,
    "ndex": "#0310",
    "english": "Manectric",
    "simplified": "雷电兽",
    "pinyin": "Léidiànshòu",
    "level": "Gén 3",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 311,
    "ndex": "#0311",
    "english": "Plusle",
    "simplified": "正电拍拍",
    "pinyin": "Zhèngdiànpāipāi",
    "level": "Gén 3",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png",
    "characters": [
      {
        "char": "正",
        "pinyin": "zheng4",
        "definition": "straight",
        "definitionEs": "recto"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "拍",
        "pinyin": "pai1",
        "definition": "to pat",
        "definitionEs": "golpear"
      },
      {
        "char": "拍",
        "pinyin": "pai1",
        "definition": "to pat",
        "definitionEs": "golpear"
      }
    ]
  },
  {
    "id": 312,
    "ndex": "#0312",
    "english": "Minun",
    "simplified": "负电拍拍",
    "pinyin": "Fùdiànpāipāi",
    "level": "Gén 3",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png",
    "characters": [
      {
        "char": "负",
        "pinyin": "fu4",
        "definition": "to bear",
        "definitionEs": "soportar"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "拍",
        "pinyin": "pai1",
        "definition": "to pat",
        "definitionEs": "golpear"
      },
      {
        "char": "拍",
        "pinyin": "pai1",
        "definition": "to pat",
        "definitionEs": "golpear"
      }
    ]
  },
  {
    "id": 313,
    "ndex": "#0313",
    "english": "Volbeat",
    "simplified": "电萤虫",
    "pinyin": "Diànyíngchóng",
    "level": "Gén 3",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "萤",
        "pinyin": "ying2",
        "definition": "firefly",
        "definitionEs": "luciérnaga"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 314,
    "ndex": "#0314",
    "english": "Illumise",
    "simplified": "甜甜萤",
    "pinyin": "Tiántiányíng",
    "level": "Gén 3",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png",
    "characters": [
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "萤",
        "pinyin": "ying2",
        "definition": "firefly",
        "definitionEs": "luciérnaga"
      }
    ]
  },
  {
    "id": 315,
    "ndex": "#0315",
    "english": "Roselia",
    "simplified": "毒蔷薇",
    "pinyin": "DúqiángwéiDúqiángwēi",
    "level": "Gén 3",
    "type": "Planta / Veneno",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "蔷",
        "pinyin": "qiang2",
        "definition": "rose",
        "definitionEs": "rosa"
      },
      {
        "char": "薇",
        "pinyin": "wei1",
        "definition": "fern",
        "definitionEs": "helecho"
      }
    ]
  },
  {
    "id": 316,
    "ndex": "#0316",
    "english": "Gulpin",
    "simplified": "溶食兽",
    "pinyin": "Róngshíshòu",
    "level": "Gén 3",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png",
    "characters": [
      {
        "char": "溶",
        "pinyin": "rong2",
        "definition": "to dissolve",
        "definitionEs": "disolver"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 317,
    "ndex": "#0317",
    "english": "Swalot",
    "simplified": "吞食兽",
    "pinyin": "Tūnshíshòu",
    "level": "Gén 3",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png",
    "characters": [
      {
        "char": "吞",
        "pinyin": "tun1",
        "definition": "to swallow",
        "definitionEs": "tragar"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 318,
    "ndex": "#0318",
    "english": "Carvanha",
    "simplified": "利牙鱼",
    "pinyin": "Lìyáyú",
    "level": "Gén 3",
    "type": "Agua / Siniestro",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png",
    "characters": [
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 319,
    "ndex": "#0319",
    "english": "Sharpedo",
    "simplified": "巨牙鲨",
    "pinyin": "Jùyáshā",
    "level": "Gén 3",
    "type": "Agua / Siniestro",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "鲨",
        "pinyin": "sha1",
        "definition": "shark",
        "definitionEs": "tiburón"
      }
    ]
  },
  {
    "id": 320,
    "ndex": "#0320",
    "english": "Wailmer",
    "simplified": "吼吼鲸",
    "pinyin": "Hǒuhǒujīng",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png",
    "characters": [
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "鲸",
        "pinyin": "jing1",
        "definition": "whale",
        "definitionEs": "ballena"
      }
    ]
  },
  {
    "id": 321,
    "ndex": "#0321",
    "english": "Wailord",
    "simplified": "吼鲸王",
    "pinyin": "Hǒujīngwáng",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png",
    "characters": [
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "鲸",
        "pinyin": "jing1",
        "definition": "whale",
        "definitionEs": "ballena"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 322,
    "ndex": "#0322",
    "english": "Numel",
    "simplified": "呆火驼",
    "pinyin": "Dāihuǒtuó",
    "level": "Gén 3",
    "type": "Fuego / Tierra",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png",
    "characters": [
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "驼",
        "pinyin": "tuo2",
        "definition": "camel",
        "definitionEs": "camello"
      }
    ]
  },
  {
    "id": 323,
    "ndex": "#0323",
    "english": "Camerupt",
    "simplified": "喷火驼",
    "pinyin": "Pēnhuǒtuó",
    "level": "Gén 3",
    "type": "Fuego / Tierra",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png",
    "characters": [
      {
        "char": "喷",
        "pinyin": "pen1",
        "definition": "to spray",
        "definitionEs": "rociar"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "驼",
        "pinyin": "tuo2",
        "definition": "camel",
        "definitionEs": "camello"
      }
    ]
  },
  {
    "id": 324,
    "ndex": "#0324",
    "english": "Torkoal",
    "simplified": "煤炭龟",
    "pinyin": "Méitàngūi",
    "level": "Gén 3",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    "characters": [
      {
        "char": "煤",
        "pinyin": "mei2",
        "definition": "coal",
        "definitionEs": "carbón"
      },
      {
        "char": "炭",
        "pinyin": "tan4",
        "definition": "charcoal",
        "definitionEs": "carbón"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 325,
    "ndex": "#0325",
    "english": "Spoink",
    "simplified": "跳跳猪",
    "pinyin": "Tiàotiàozhū",
    "level": "Gén 3",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png",
    "characters": [
      {
        "char": "跳",
        "pinyin": "tiao4",
        "definition": "to jump",
        "definitionEs": "saltar"
      },
      {
        "char": "跳",
        "pinyin": "tiao4",
        "definition": "to jump",
        "definitionEs": "saltar"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 326,
    "ndex": "#0326",
    "english": "Grumpig",
    "simplified": "噗噗猪",
    "pinyin": "Pūpūzhū",
    "level": "Gén 3",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png",
    "characters": [
      {
        "char": "噗",
        "pinyin": "pu1",
        "definition": "pop",
        "definitionEs": "puf"
      },
      {
        "char": "噗",
        "pinyin": "pu1",
        "definition": "pop",
        "definitionEs": "puf"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 327,
    "ndex": "#0327",
    "english": "Spinda",
    "simplified": "晃晃斑",
    "pinyin": "Huànghuàngbān",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png",
    "characters": [
      {
        "char": "晃",
        "pinyin": "huang4",
        "definition": "to sway",
        "definitionEs": "balancearse"
      },
      {
        "char": "晃",
        "pinyin": "huang4",
        "definition": "to sway",
        "definitionEs": "balancearse"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      }
    ]
  },
  {
    "id": 328,
    "ndex": "#0328",
    "english": "Trapinch",
    "simplified": "大颚蚁",
    "pinyin": "Dà'èyǐ",
    "level": "Gén 3",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "颚",
        "pinyin": "e4",
        "definition": "jaw",
        "definitionEs": "mandíbula"
      },
      {
        "char": "蚁",
        "pinyin": "yi3",
        "definition": "ant",
        "definitionEs": "hormiga"
      }
    ]
  },
  {
    "id": 329,
    "ndex": "#0329",
    "english": "Vibrava",
    "simplified": "超音波幼虫",
    "pinyin": "Chāoyīnbōyòuchóng",
    "level": "Gén 3",
    "type": "Tierra / Dragón",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "幼",
        "pinyin": "you4",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 330,
    "ndex": "#0330",
    "english": "Flygon",
    "simplified": "沙漠蜻蜓",
    "pinyin": "Shāmòqīngtíng",
    "level": "Gén 3",
    "type": "Tierra / Dragón",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "漠",
        "pinyin": "mo4",
        "definition": "desert",
        "definitionEs": "desierto"
      },
      {
        "char": "蜻",
        "pinyin": "qing1",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      },
      {
        "char": "蜓",
        "pinyin": "ting2",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      }
    ]
  },
  {
    "id": 331,
    "ndex": "#0331",
    "english": "Cacnea",
    "simplified": "刺球仙人掌",
    "pinyin": "Cìqiúxiānrénzhǎng",
    "level": "Gén 3",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png",
    "characters": [
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "掌",
        "pinyin": "zhang3",
        "definition": "palm",
        "definitionEs": "palma"
      }
    ]
  },
  {
    "id": 332,
    "ndex": "#0332",
    "english": "Cacturne",
    "simplified": "梦歌仙人掌",
    "pinyin": "Mènggēxiānrénzhǎng",
    "level": "Gén 3",
    "type": "Planta / Siniestro",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png",
    "characters": [
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "歌",
        "pinyin": "ge1",
        "definition": "song",
        "definitionEs": "canción"
      },
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "掌",
        "pinyin": "zhang3",
        "definition": "palm",
        "definitionEs": "palma"
      }
    ]
  },
  {
    "id": 333,
    "ndex": "#0333",
    "english": "Swablu",
    "simplified": "青绵鸟",
    "pinyin": "Qīngmiánniǎo",
    "level": "Gén 3",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png",
    "characters": [
      {
        "char": "青",
        "pinyin": "qing1",
        "definition": "blue-green",
        "definitionEs": "verde-azul"
      },
      {
        "char": "绵",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 334,
    "ndex": "#0334",
    "english": "Altaria",
    "simplified": "七夕青鸟",
    "pinyin": "Qīxìqīngniǎo",
    "level": "Gén 3",
    "type": "Dragón / Volador",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png",
    "characters": [
      {
        "char": "七",
        "pinyin": "qi1",
        "definition": "seven",
        "definitionEs": "siete"
      },
      {
        "char": "夕",
        "pinyin": "xi1",
        "definition": "dusk",
        "definitionEs": "anochecer"
      },
      {
        "char": "青",
        "pinyin": "qing1",
        "definition": "blue-green",
        "definitionEs": "verde-azul"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 335,
    "ndex": "#0335",
    "english": "Zangoose",
    "simplified": "猫鼬斩",
    "pinyin": "Māoyòuzhǎn",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png",
    "characters": [
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      },
      {
        "char": "斩",
        "pinyin": "zhan3",
        "definition": "to chop",
        "definitionEs": "cortar"
      }
    ]
  },
  {
    "id": 336,
    "ndex": "#0336",
    "english": "Seviper",
    "simplified": "饭匙蛇",
    "pinyin": "Fànchíshé",
    "level": "Gén 3",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png",
    "characters": [
      {
        "char": "饭",
        "pinyin": "fan4",
        "definition": "rice",
        "definitionEs": "arroz"
      },
      {
        "char": "匙",
        "pinyin": "chi2",
        "definition": "spoon",
        "definitionEs": "cuchara"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 337,
    "ndex": "#0337",
    "english": "Lunatone",
    "simplified": "月石",
    "pinyin": "Yuèshí",
    "level": "Gén 3",
    "type": "Roca / Psíquico",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png",
    "characters": [
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      }
    ]
  },
  {
    "id": 338,
    "ndex": "#0338",
    "english": "Solrock",
    "simplified": "太阳岩",
    "pinyin": "Tàiyángyán",
    "level": "Gén 3",
    "type": "Roca / Psíquico",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "阳",
        "pinyin": "yang2",
        "definition": "sun",
        "definitionEs": "sol"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      }
    ]
  },
  {
    "id": 339,
    "ndex": "#0339",
    "english": "Barboach",
    "simplified": "泥泥鳅",
    "pinyin": "Níníqiū",
    "level": "Gén 3",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png",
    "characters": [
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "鳅",
        "pinyin": "qiu1",
        "definition": "loach",
        "definitionEs": "locha"
      }
    ]
  },
  {
    "id": 340,
    "ndex": "#0340",
    "english": "Whiscash",
    "simplified": "鲶鱼王",
    "pinyin": "Niányúwáng",
    "level": "Gén 3",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png",
    "characters": [
      {
        "char": "鲶",
        "pinyin": "nian2",
        "definition": "catfish",
        "definitionEs": "siluro"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 341,
    "ndex": "#0341",
    "english": "Corphish",
    "simplified": "龙虾小兵",
    "pinyin": "Lóngxiāxiǎobīng",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png",
    "characters": [
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "虾",
        "pinyin": "xia1",
        "definition": "shrimp",
        "definitionEs": "camarón"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "兵",
        "pinyin": "bing1",
        "definition": "soldier",
        "definitionEs": "soldado"
      }
    ]
  },
  {
    "id": 342,
    "ndex": "#0342",
    "english": "Crawdaunt",
    "simplified": "铁螯龙虾",
    "pinyin": "Tiě'áolóngxiā",
    "level": "Gén 3",
    "type": "Agua / Siniestro",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "螯",
        "pinyin": "ao2",
        "definition": "claw",
        "definitionEs": "pinza"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "虾",
        "pinyin": "xia1",
        "definition": "shrimp",
        "definitionEs": "camarón"
      }
    ]
  },
  {
    "id": 343,
    "ndex": "#0343",
    "english": "Baltoy",
    "simplified": "天秤偶",
    "pinyin": "Tiānpíng'ǒu",
    "level": "Gén 3",
    "type": "Tierra / Psíquico",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "秤",
        "pinyin": "cheng4",
        "definition": "steelyard",
        "definitionEs": "romana"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      }
    ]
  },
  {
    "id": 344,
    "ndex": "#0344",
    "english": "Claydol",
    "simplified": "念力土偶",
    "pinyin": "Niànlìtǔ'ōu",
    "level": "Gén 3",
    "type": "Tierra / Psíquico",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png",
    "characters": [
      {
        "char": "念",
        "pinyin": "nian4",
        "definition": "to read",
        "definitionEs": "leer"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      }
    ]
  },
  {
    "id": 345,
    "ndex": "#0345",
    "english": "Lileep",
    "simplified": "触手百合",
    "pinyin": "Chùshǒubǎihé",
    "level": "Gén 3",
    "type": "Roca / Planta",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png",
    "characters": [
      {
        "char": "触",
        "pinyin": "chu4",
        "definition": "to touch",
        "definitionEs": "tocar"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "hand",
        "definitionEs": "mano"
      },
      {
        "char": "百",
        "pinyin": "bai3",
        "definition": "hundred",
        "definitionEs": "cien"
      },
      {
        "char": "合",
        "pinyin": "he2",
        "definition": "to join",
        "definitionEs": "unir"
      }
    ]
  },
  {
    "id": 346,
    "ndex": "#0346",
    "english": "Cradily",
    "simplified": "摇篮百合",
    "pinyin": "Yáolánbǎihé",
    "level": "Gén 3",
    "type": "Roca / Planta",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png",
    "characters": [
      {
        "char": "摇",
        "pinyin": "yao2",
        "definition": "to shake",
        "definitionEs": "sacudir"
      },
      {
        "char": "篮",
        "pinyin": "lan2",
        "definition": "basket",
        "definitionEs": "cesta"
      },
      {
        "char": "百",
        "pinyin": "bai3",
        "definition": "hundred",
        "definitionEs": "cien"
      },
      {
        "char": "合",
        "pinyin": "he2",
        "definition": "to join",
        "definitionEs": "unir"
      }
    ]
  },
  {
    "id": 347,
    "ndex": "#0347",
    "english": "Anorith",
    "simplified": "太古羽虫",
    "pinyin": "Tàigǔyǔchóng",
    "level": "Gén 3",
    "type": "Roca / Bicho",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "羽",
        "pinyin": "yu3",
        "definition": "feather",
        "definitionEs": "pluma"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 348,
    "ndex": "#0348",
    "english": "Armaldo",
    "simplified": "太古盔甲",
    "pinyin": "Tàigǔkuījiǎ",
    "level": "Gén 3",
    "type": "Roca / Bicho",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "盔",
        "pinyin": "kui1",
        "definition": "helmet",
        "definitionEs": "casco"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      }
    ]
  },
  {
    "id": 349,
    "ndex": "#0349",
    "english": "Feebas",
    "simplified": "丑丑鱼",
    "pinyin": "Chǒuchǒuyú",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png",
    "characters": [
      {
        "char": "丑",
        "pinyin": "chou3",
        "definition": "ugly",
        "definitionEs": "feo"
      },
      {
        "char": "丑",
        "pinyin": "chou3",
        "definition": "ugly",
        "definitionEs": "feo"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 350,
    "ndex": "#0350",
    "english": "Milotic",
    "simplified": "美纳斯",
    "pinyin": "Měinàsī",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png",
    "characters": [
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 351,
    "ndex": "#0351",
    "english": "Castform",
    "simplified": "飘浮泡泡",
    "pinyin": "Piāofúpàopào",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png",
    "characters": [
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "浮",
        "pinyin": "fu2",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "泡",
        "pinyin": "pao4",
        "definition": "bubble",
        "definitionEs": "burbuja"
      },
      {
        "char": "泡",
        "pinyin": "pao4",
        "definition": "bubble",
        "definitionEs": "burbuja"
      }
    ]
  },
  {
    "id": 352,
    "ndex": "#0352",
    "english": "Kecleon",
    "simplified": "变隐龙",
    "pinyin": "Biànyǐnlóng",
    "level": "Gén 3",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png",
    "characters": [
      {
        "char": "变",
        "pinyin": "bian4",
        "definition": "to change",
        "definitionEs": "cambiar"
      },
      {
        "char": "隐",
        "pinyin": "yin3",
        "definition": "hidden",
        "definitionEs": "oculto"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 353,
    "ndex": "#0353",
    "english": "Shuppet",
    "simplified": "怨影娃娃",
    "pinyin": "Yuànyǐngwáwá",
    "level": "Gén 3",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png",
    "characters": [
      {
        "char": "怨",
        "pinyin": "yuan4",
        "definition": "to resent",
        "definitionEs": "resentir"
      },
      {
        "char": "影",
        "pinyin": "ying3",
        "definition": "shadow",
        "definitionEs": "sombra"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 354,
    "ndex": "#0354",
    "english": "Banette",
    "simplified": "诅咒娃娃",
    "pinyin": "Zǔzhòuwáwá",
    "level": "Gén 3",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png",
    "characters": [
      {
        "char": "诅",
        "pinyin": "zu3",
        "definition": "curse",
        "definitionEs": "maldición"
      },
      {
        "char": "咒",
        "pinyin": "zhou4",
        "definition": "spell",
        "definitionEs": "hechizo"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 355,
    "ndex": "#0355",
    "english": "Duskull",
    "simplified": "夜巡灵",
    "pinyin": "Yèxúnlíng",
    "level": "Gén 3",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png",
    "characters": [
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "巡",
        "pinyin": "xun2",
        "definition": "to patrol",
        "definitionEs": "patrullar"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 356,
    "ndex": "#0356",
    "english": "Dusclops",
    "simplified": "彷徨夜灵",
    "pinyin": "Fǎnghuángyèlíng",
    "level": "Gén 3",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png",
    "characters": [
      {
        "char": "彷",
        "pinyin": "pang2",
        "definition": "to wander",
        "definitionEs": "vagar"
      },
      {
        "char": "徨",
        "pinyin": "huang2",
        "definition": "to wander",
        "definitionEs": "vagar"
      },
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 357,
    "ndex": "#0357",
    "english": "Tropius",
    "simplified": "热带龙",
    "pinyin": "Rèdàilóng",
    "level": "Gén 3",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png",
    "characters": [
      {
        "char": "热",
        "pinyin": "re4",
        "definition": "hot",
        "definitionEs": "caliente"
      },
      {
        "char": "带",
        "pinyin": "dai4",
        "definition": "belt",
        "definitionEs": "cinturón"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 358,
    "ndex": "#0358",
    "english": "Chimecho",
    "simplified": "风铃铃",
    "pinyin": "Fēnglínglíng",
    "level": "Gén 3",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png",
    "characters": [
      {
        "char": "风",
        "pinyin": "feng1",
        "definition": "wind",
        "definitionEs": "viento"
      },
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      },
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      }
    ]
  },
  {
    "id": 359,
    "ndex": "#0359",
    "english": "Absol",
    "simplified": "阿勃梭鲁",
    "pinyin": "Ābósuōlǔ",
    "level": "Gén 3",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    "characters": [
      {
        "char": "阿",
        "pinyin": "a1",
        "definition": "(prefix)",
        "definitionEs": "(prefijo)"
      },
      {
        "char": "勃",
        "pinyin": "bo2",
        "definition": "vigorous",
        "definitionEs": "vigoroso"
      },
      {
        "char": "梭",
        "pinyin": "suo1",
        "definition": "shuttle",
        "definitionEs": "lanzadera"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      }
    ]
  },
  {
    "id": 360,
    "ndex": "#0360",
    "english": "Wynaut",
    "simplified": "小果然",
    "pinyin": "Xiǎoguǒrán",
    "level": "Gén 3",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "naturally",
        "definitionEs": "naturalmente"
      }
    ]
  },
  {
    "id": 361,
    "ndex": "#0361",
    "english": "Snorunt",
    "simplified": "雪童子",
    "pinyin": "Xuětóngzǐ",
    "level": "Gén 3",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 362,
    "ndex": "#0362",
    "english": "Glalie",
    "simplified": "冰鬼护",
    "pinyin": "Bīngguǐhù",
    "level": "Gén 3",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      },
      {
        "char": "护",
        "pinyin": "hu4",
        "definition": "to protect",
        "definitionEs": "proteger"
      }
    ]
  },
  {
    "id": 363,
    "ndex": "#0363",
    "english": "Spheal",
    "simplified": "海豹球",
    "pinyin": "Hǎibàoqiú",
    "level": "Gén 3",
    "type": "Hielo / Agua",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "豹",
        "pinyin": "bao4",
        "definition": "leopard",
        "definitionEs": "leopardo"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 364,
    "ndex": "#0364",
    "english": "Sealeo",
    "simplified": "海魔狮",
    "pinyin": "Hǎimóshī",
    "level": "Gén 3",
    "type": "Hielo / Agua",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 365,
    "ndex": "#0365",
    "english": "Walrein",
    "simplified": "帝牙海狮",
    "pinyin": "Dìyǎhǎishī",
    "level": "Gén 3",
    "type": "Hielo / Agua",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png",
    "characters": [
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 366,
    "ndex": "#0366",
    "english": "Clamperl",
    "simplified": "珍珠贝",
    "pinyin": "Zhēnzhūbèi",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png",
    "characters": [
      {
        "char": "珍",
        "pinyin": "zhen1",
        "definition": "precious",
        "definitionEs": "precioso"
      },
      {
        "char": "珠",
        "pinyin": "zhu1",
        "definition": "bead",
        "definitionEs": "perla"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      }
    ]
  },
  {
    "id": 367,
    "ndex": "#0367",
    "english": "Huntail",
    "simplified": "猎斑鱼",
    "pinyin": "Lièbānyú",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png",
    "characters": [
      {
        "char": "猎",
        "pinyin": "lie4",
        "definition": "hunt",
        "definitionEs": "caza"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 368,
    "ndex": "#0368",
    "english": "Gorebyss",
    "simplified": "樱花鱼",
    "pinyin": "Yīnghuāyú",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png",
    "characters": [
      {
        "char": "樱",
        "pinyin": "ying1",
        "definition": "cherry",
        "definitionEs": "cereza"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 369,
    "ndex": "#0369",
    "english": "Relicanth",
    "simplified": "古空棘鱼",
    "pinyin": "Gǔkōngjíyú",
    "level": "Gén 3",
    "type": "Agua / Roca",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "空",
        "pinyin": "kong1",
        "definition": "empty",
        "definitionEs": "vacío"
      },
      {
        "char": "棘",
        "pinyin": "ji2",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 370,
    "ndex": "#0370",
    "english": "Luvdisc",
    "simplified": "爱心鱼",
    "pinyin": "Àixīnyú",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png",
    "characters": [
      {
        "char": "爱",
        "pinyin": "ai4",
        "definition": "to love",
        "definitionEs": "amar"
      },
      {
        "char": "心",
        "pinyin": "xin1",
        "definition": "heart",
        "definitionEs": "corazón"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 371,
    "ndex": "#0371",
    "english": "Bagon",
    "simplified": "宝贝龙",
    "pinyin": "Bǎobèilóng",
    "level": "Gén 3",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png",
    "characters": [
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 372,
    "ndex": "#0372",
    "english": "Shelgon",
    "simplified": "甲壳龙",
    "pinyin": "Jiákēlóng",
    "level": "Gén 3",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png",
    "characters": [
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 373,
    "ndex": "#0373",
    "english": "Salamence",
    "simplified": "暴飞龙",
    "pinyin": "Bàofēilóng",
    "level": "Gén 3",
    "type": "Dragón / Volador",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png",
    "characters": [
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 374,
    "ndex": "#0374",
    "english": "Beldum",
    "simplified": "铁哑铃",
    "pinyin": "Tiéyǎlíng",
    "level": "Gén 3",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "哑",
        "pinyin": "ya3",
        "definition": "mute",
        "definitionEs": "mudo"
      },
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      }
    ]
  },
  {
    "id": 375,
    "ndex": "#0375",
    "english": "Metang",
    "simplified": "金属怪",
    "pinyin": "Jīnshǔguài",
    "level": "Gén 3",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png",
    "characters": [
      {
        "char": "金",
        "pinyin": "jin1",
        "definition": "gold",
        "definitionEs": "oro"
      },
      {
        "char": "属",
        "pinyin": "shu3",
        "definition": "to belong",
        "definitionEs": "pertenecer"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 376,
    "ndex": "#0376",
    "english": "Metagross",
    "simplified": "巨金怪",
    "pinyin": "Jùjīnguài",
    "level": "Gén 3",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "金",
        "pinyin": "jin1",
        "definition": "gold",
        "definitionEs": "oro"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 377,
    "ndex": "#0377",
    "english": "Regirock",
    "simplified": "雷吉洛克",
    "pinyin": "Léijīluòkě",
    "level": "Gén 3",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      }
    ]
  },
  {
    "id": 378,
    "ndex": "#0378",
    "english": "Regice",
    "simplified": "雷吉艾斯",
    "pinyin": "Léijī'àisī",
    "level": "Gén 3",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "艾",
        "pinyin": "ai4",
        "definition": "mugwort",
        "definitionEs": "artemisa"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 379,
    "ndex": "#0379",
    "english": "Registeel",
    "simplified": "雷吉斯奇鲁",
    "pinyin": "Léijīsīqílù",
    "level": "Gén 3",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      }
    ]
  },
  {
    "id": 380,
    "ndex": "#0380",
    "english": "Latias",
    "simplified": "拉帝亚斯",
    "pinyin": "LādìyǎsīLādìyāsī",
    "level": "Gén 3",
    "type": "Dragón / Psíquico",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png",
    "characters": [
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 381,
    "ndex": "#0381",
    "english": "Latios",
    "simplified": "拉帝欧斯",
    "pinyin": "Lādì'ōusī",
    "level": "Gén 3",
    "type": "Dragón / Psíquico",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png",
    "characters": [
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 382,
    "ndex": "#0382",
    "english": "Kyogre",
    "simplified": "盖欧卡",
    "pinyin": "Gài'ōukǎ",
    "level": "Gén 3",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
    "characters": [
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      }
    ]
  },
  {
    "id": 383,
    "ndex": "#0383",
    "english": "Groudon",
    "simplified": "固拉多",
    "pinyin": "Gùlādūo",
    "level": "Gén 3",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
    "characters": [
      {
        "char": "固",
        "pinyin": "gu4",
        "definition": "solid",
        "definitionEs": "sólido"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      }
    ]
  },
  {
    "id": 384,
    "ndex": "#0384",
    "english": "Rayquaza",
    "simplified": "烈空坐",
    "pinyin": "Lièkōngzuò",
    "level": "Gén 3",
    "type": "Dragón / Volador",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "空",
        "pinyin": "kong1",
        "definition": "empty",
        "definitionEs": "vacío"
      },
      {
        "char": "坐",
        "pinyin": "zuo4",
        "definition": "to sit",
        "definitionEs": "sentarse"
      }
    ]
  },
  {
    "id": 385,
    "ndex": "#0385",
    "english": "Jirachi",
    "simplified": "基拉祈",
    "pinyin": "Jīlāqí",
    "level": "Gén 3",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png",
    "characters": [
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "祈",
        "pinyin": "qi2",
        "definition": "to pray",
        "definitionEs": "orar"
      }
    ]
  },
  {
    "id": 386,
    "ndex": "#0386",
    "english": "Deoxys",
    "simplified": "代欧奇希斯",
    "pinyin": "Dài'ōuqíxīsī",
    "level": "Gén 3",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png",
    "characters": [
      {
        "char": "代",
        "pinyin": "dai4",
        "definition": "to substitute",
        "definitionEs": "sustituir"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "希",
        "pinyin": "xi1",
        "definition": "to hope",
        "definitionEs": "esperar"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 387,
    "ndex": "#0387",
    "english": "Turtwig",
    "simplified": "草苗龟",
    "pinyin": "Cǎomiáoguī",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png",
    "characters": [
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      },
      {
        "char": "苗",
        "pinyin": "miao2",
        "definition": "sprout",
        "definitionEs": "brote"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 388,
    "ndex": "#0388",
    "english": "Grotle",
    "simplified": "树林龟",
    "pinyin": "Shùlínguī",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png",
    "characters": [
      {
        "char": "树",
        "pinyin": "shu4",
        "definition": "tree",
        "definitionEs": "árbol"
      },
      {
        "char": "林",
        "pinyin": "lin2",
        "definition": "forest",
        "definitionEs": "bosque"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 389,
    "ndex": "#0389",
    "english": "Torterra",
    "simplified": "土台龟",
    "pinyin": "Tǔtáiguī",
    "level": "Gén 4",
    "type": "Planta / Tierra",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "台",
        "pinyin": "tai2",
        "definition": "platform",
        "definitionEs": "plataforma"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 390,
    "ndex": "#0390",
    "english": "Chimchar",
    "simplified": "小火焰猴",
    "pinyin": "Xiǎohuǒyànhóu",
    "level": "Gén 4",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 391,
    "ndex": "#0391",
    "english": "Monferno",
    "simplified": "猛火猴",
    "pinyin": "Měnghuǒhóu",
    "level": "Gén 4",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png",
    "characters": [
      {
        "char": "猛",
        "pinyin": "meng3",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 392,
    "ndex": "#0392",
    "english": "Infernape",
    "simplified": "烈焰猴",
    "pinyin": "Lièyànhóu",
    "level": "Gén 4",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 393,
    "ndex": "#0393",
    "english": "Piplup",
    "simplified": "波加曼",
    "pinyin": "Bōjiāmàn",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "加",
        "pinyin": "jia1",
        "definition": "add",
        "definitionEs": "añadir"
      },
      {
        "char": "曼",
        "pinyin": "man4",
        "definition": "elegant",
        "definitionEs": "elegante"
      }
    ]
  },
  {
    "id": 394,
    "ndex": "#0394",
    "english": "Prinplup",
    "simplified": "波皇子",
    "pinyin": "Bōwángzǐ",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "皇",
        "pinyin": "huang2",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 395,
    "ndex": "#0395",
    "english": "Empoleon",
    "simplified": "帝王拿波",
    "pinyin": "Dìwángnábō",
    "level": "Gén 4",
    "type": "Agua / Acero",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png",
    "characters": [
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "拿",
        "pinyin": "na2",
        "definition": "to hold",
        "definitionEs": "sostener"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      }
    ]
  },
  {
    "id": 396,
    "ndex": "#0396",
    "english": "Starly",
    "simplified": "姆克儿",
    "pinyin": "Mǔkè'ér",
    "level": "Gén 4",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png",
    "characters": [
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 397,
    "ndex": "#0397",
    "english": "Staravia",
    "simplified": "姆克鸟",
    "pinyin": "Mǔkèniǎo",
    "level": "Gén 4",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png",
    "characters": [
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 398,
    "ndex": "#0398",
    "english": "Staraptor",
    "simplified": "姆克鹰",
    "pinyin": "Mǔkèyīng",
    "level": "Gén 4",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png",
    "characters": [
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      }
    ]
  },
  {
    "id": 399,
    "ndex": "#0399",
    "english": "Bidoof",
    "simplified": "大牙狸",
    "pinyin": "Dàyálí",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "狸",
        "pinyin": "li2",
        "definition": "raccoon dog",
        "definitionEs": "tanuki"
      }
    ]
  },
  {
    "id": 400,
    "ndex": "#0400",
    "english": "Bibarel",
    "simplified": "大尾狸",
    "pinyin": "Dàwěilí",
    "level": "Gén 4",
    "type": "Normal / Agua",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "狸",
        "pinyin": "li2",
        "definition": "raccoon dog",
        "definitionEs": "tanuki"
      }
    ]
  },
  {
    "id": 401,
    "ndex": "#0401",
    "english": "Kricketot",
    "simplified": "圆法师",
    "pinyin": "Yuánfǎshī",
    "level": "Gén 4",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png",
    "characters": [
      {
        "char": "圆",
        "pinyin": "yuan2",
        "definition": "round",
        "definitionEs": "redondo"
      },
      {
        "char": "法",
        "pinyin": "fa3",
        "definition": "law",
        "definitionEs": "ley"
      },
      {
        "char": "师",
        "pinyin": "shi1",
        "definition": "teacher",
        "definitionEs": "maestro"
      }
    ]
  },
  {
    "id": 402,
    "ndex": "#0402",
    "english": "Kricketune",
    "simplified": "音箱蟀",
    "pinyin": "Yīnxiāngshuài",
    "level": "Gén 4",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png",
    "characters": [
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "箱",
        "pinyin": "xiang1",
        "definition": "box",
        "definitionEs": "caja"
      },
      {
        "char": "蟀",
        "pinyin": "shuai4",
        "definition": "cricket",
        "definitionEs": "grillo"
      }
    ]
  },
  {
    "id": 403,
    "ndex": "#0403",
    "english": "Shinx",
    "simplified": "小猫怪",
    "pinyin": "Xiǎomāoguài",
    "level": "Gén 4",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 404,
    "ndex": "#0404",
    "english": "Luxio",
    "simplified": "勒克猫",
    "pinyin": "Lèkèmāo",
    "level": "Gén 4",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png",
    "characters": [
      {
        "char": "勒",
        "pinyin": "lei1",
        "definition": "to strap",
        "definitionEs": "ceñir"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 405,
    "ndex": "#0405",
    "english": "Luxray",
    "simplified": "伦琴猫",
    "pinyin": "Lúnqínmāo",
    "level": "Gén 4",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png",
    "characters": [
      {
        "char": "伦",
        "pinyin": "lun2",
        "definition": "relationship",
        "definitionEs": "relación"
      },
      {
        "char": "琴",
        "pinyin": "qin2",
        "definition": "zither",
        "definitionEs": "cítara"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 406,
    "ndex": "#0406",
    "english": "Budew",
    "simplified": "含羞苞",
    "pinyin": "Hánxiūbāo",
    "level": "Gén 4",
    "type": "Planta / Veneno",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png",
    "characters": [
      {
        "char": "含",
        "pinyin": "han2",
        "definition": "to contain",
        "definitionEs": "contener"
      },
      {
        "char": "羞",
        "pinyin": "xiu1",
        "definition": "shy",
        "definitionEs": "tímido"
      },
      {
        "char": "苞",
        "pinyin": "bao1",
        "definition": "bud",
        "definitionEs": "brote"
      }
    ]
  },
  {
    "id": 407,
    "ndex": "#0407",
    "english": "Roserade",
    "simplified": "罗丝雷朵",
    "pinyin": "Luósīléiduǒ",
    "level": "Gén 4",
    "type": "Planta / Veneno",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png",
    "characters": [
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "丝",
        "pinyin": "si1",
        "definition": "silk",
        "definitionEs": "seda"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "朵",
        "pinyin": "duo3",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 408,
    "ndex": "#0408",
    "english": "Cranidos",
    "simplified": "头盖龙",
    "pinyin": "Tóugàilóng",
    "level": "Gén 4",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png",
    "characters": [
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 409,
    "ndex": "#0409",
    "english": "Rampardos",
    "simplified": "战槌龙",
    "pinyin": "Zhànchuílóng",
    "level": "Gén 4",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png",
    "characters": [
      {
        "char": "战",
        "pinyin": "zhan4",
        "definition": "fight",
        "definitionEs": "luchar"
      },
      {
        "char": "槌",
        "pinyin": "chui2",
        "definition": "mallet",
        "definitionEs": "mazo"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 410,
    "ndex": "#0410",
    "english": "Shieldon",
    "simplified": "盾甲龙",
    "pinyin": "Dùnjiǎlóng",
    "level": "Gén 4",
    "type": "Roca / Acero",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png",
    "characters": [
      {
        "char": "盾",
        "pinyin": "dun4",
        "definition": "shield",
        "definitionEs": "escudo"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 411,
    "ndex": "#0411",
    "english": "Bastiodon",
    "simplified": "护城龙",
    "pinyin": "Hùchénglóng",
    "level": "Gén 4",
    "type": "Roca / Acero",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png",
    "characters": [
      {
        "char": "护",
        "pinyin": "hu4",
        "definition": "to protect",
        "definitionEs": "proteger"
      },
      {
        "char": "城",
        "pinyin": "cheng2",
        "definition": "city",
        "definitionEs": "ciudad"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 412,
    "ndex": "#0412",
    "english": "Burmy",
    "simplified": "结草儿",
    "pinyin": "Jiécǎo'ér",
    "level": "Gén 4",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png",
    "characters": [
      {
        "char": "结",
        "pinyin": "jie2",
        "definition": "knot",
        "definitionEs": "nudo"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 413,
    "ndex": "#0413",
    "english": "Wormadam",
    "simplified": "结草贵妇",
    "pinyin": "Jiécǎoguìfù",
    "level": "Gén 4",
    "type": "Bicho / Planta",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png",
    "characters": [
      {
        "char": "结",
        "pinyin": "jie2",
        "definition": "knot",
        "definitionEs": "nudo"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      },
      {
        "char": "贵",
        "pinyin": "gui4",
        "definition": "expensive",
        "definitionEs": "caro"
      },
      {
        "char": "妇",
        "pinyin": "fu4",
        "definition": "woman",
        "definitionEs": "mujer"
      }
    ]
  },
  {
    "id": 414,
    "ndex": "#0414",
    "english": "Mothim",
    "simplified": "绅士蛾",
    "pinyin": "Shēnshì'é",
    "level": "Gén 4",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png",
    "characters": [
      {
        "char": "绅",
        "pinyin": "shen1",
        "definition": "gentry",
        "definitionEs": "hidalguía"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 415,
    "ndex": "#0415",
    "english": "Combee",
    "simplified": "三蜜蜂",
    "pinyin": "Sānmìfēng",
    "level": "Gén 4",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png",
    "characters": [
      {
        "char": "三",
        "pinyin": "san1",
        "definition": "three",
        "definitionEs": "tres"
      },
      {
        "char": "蜜",
        "pinyin": "mi4",
        "definition": "honey",
        "definitionEs": "miel"
      },
      {
        "char": "蜂",
        "pinyin": "feng1",
        "definition": "bee",
        "definitionEs": "abeja"
      }
    ]
  },
  {
    "id": 416,
    "ndex": "#0416",
    "english": "Vespiquen",
    "simplified": "蜂女王",
    "pinyin": "Fēngnǚwáng",
    "level": "Gén 4",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png",
    "characters": [
      {
        "char": "蜂",
        "pinyin": "feng1",
        "definition": "bee",
        "definitionEs": "abeja"
      },
      {
        "char": "女",
        "pinyin": "nv3",
        "definition": "female",
        "definitionEs": "mujer"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 417,
    "ndex": "#0417",
    "english": "Pachirisu",
    "simplified": "帕奇利兹",
    "pinyin": "Pàqílìzī",
    "level": "Gén 4",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png",
    "characters": [
      {
        "char": "帕",
        "pinyin": "pa4",
        "definition": "to wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "兹",
        "pinyin": "zi1",
        "definition": "this",
        "definitionEs": "este"
      }
    ]
  },
  {
    "id": 418,
    "ndex": "#0418",
    "english": "Buizel",
    "simplified": "泳圈鼬",
    "pinyin": "Yǒngquānyòu",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png",
    "characters": [
      {
        "char": "泳",
        "pinyin": "yong3",
        "definition": "to swim",
        "definitionEs": "nadar"
      },
      {
        "char": "圈",
        "pinyin": "quan1",
        "definition": "circle",
        "definitionEs": "círculo"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      }
    ]
  },
  {
    "id": 419,
    "ndex": "#0419",
    "english": "Floatzel",
    "simplified": "浮潜鼬",
    "pinyin": "Fúqiǎnyòu",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png",
    "characters": [
      {
        "char": "浮",
        "pinyin": "fu2",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "潜",
        "pinyin": "qian2",
        "definition": "hidden",
        "definitionEs": "oculto"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      }
    ]
  },
  {
    "id": 420,
    "ndex": "#0420",
    "english": "Cherubi",
    "simplified": "樱花宝",
    "pinyin": "Yīnghuābǎo",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png",
    "characters": [
      {
        "char": "樱",
        "pinyin": "ying1",
        "definition": "cherry",
        "definitionEs": "cereza"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 421,
    "ndex": "#0421",
    "english": "Cherrim",
    "simplified": "樱花儿",
    "pinyin": "Yīnghuā'ér",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png",
    "characters": [
      {
        "char": "樱",
        "pinyin": "ying1",
        "definition": "cherry",
        "definitionEs": "cereza"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 422,
    "ndex": "#0422",
    "english": "Shellos",
    "simplified": "无壳海兔",
    "pinyin": "Wúkéhǎitù",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png",
    "characters": [
      {
        "char": "无",
        "pinyin": "wu2",
        "definition": "without",
        "definitionEs": "sin"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      }
    ]
  },
  {
    "id": 423,
    "ndex": "#0423",
    "english": "Gastrodon",
    "simplified": "海兔兽",
    "pinyin": "Hǎitùshòu",
    "level": "Gén 4",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 424,
    "ndex": "#0424",
    "english": "Ambipom",
    "simplified": "双尾怪手",
    "pinyin": "Shuāngwěiguàishǒu",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "hand",
        "definitionEs": "mano"
      }
    ]
  },
  {
    "id": 425,
    "ndex": "#0425",
    "english": "Drifloon",
    "simplified": "飘飘球",
    "pinyin": "Piāopiāoqiú",
    "level": "Gén 4",
    "type": "Fantasma / Volador",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png",
    "characters": [
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 426,
    "ndex": "#0426",
    "english": "Drifblim",
    "simplified": "随风球",
    "pinyin": "Suífēngqiú",
    "level": "Gén 4",
    "type": "Fantasma / Volador",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png",
    "characters": [
      {
        "char": "随",
        "pinyin": "sui2",
        "definition": "to follow",
        "definitionEs": "seguir"
      },
      {
        "char": "风",
        "pinyin": "feng1",
        "definition": "wind",
        "definitionEs": "viento"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 427,
    "ndex": "#0427",
    "english": "Buneary",
    "simplified": "卷卷耳",
    "pinyin": "Juǎnjuǎn'ěr",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png",
    "characters": [
      {
        "char": "卷",
        "pinyin": "juan3",
        "definition": "to roll",
        "definitionEs": "enrollar"
      },
      {
        "char": "卷",
        "pinyin": "juan3",
        "definition": "to roll",
        "definitionEs": "enrollar"
      },
      {
        "char": "耳",
        "pinyin": "er3",
        "definition": "ear",
        "definitionEs": "oreja"
      }
    ]
  },
  {
    "id": 428,
    "ndex": "#0428",
    "english": "Lopunny",
    "simplified": "长耳兔",
    "pinyin": "Cháng'ěrtù",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "耳",
        "pinyin": "er3",
        "definition": "ear",
        "definitionEs": "oreja"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      }
    ]
  },
  {
    "id": 429,
    "ndex": "#0429",
    "english": "Mismagius",
    "simplified": "梦妖魔",
    "pinyin": "Mèngyāomó",
    "level": "Gén 4",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
    "characters": [
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      }
    ]
  },
  {
    "id": 430,
    "ndex": "#0430",
    "english": "Honchkrow",
    "simplified": "乌鸦头头",
    "pinyin": "Wūyātóutóu",
    "level": "Gén 4",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png",
    "characters": [
      {
        "char": "乌",
        "pinyin": "wu1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "鸦",
        "pinyin": "ya1",
        "definition": "crow",
        "definitionEs": "cuervo"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      }
    ]
  },
  {
    "id": 431,
    "ndex": "#0431",
    "english": "Glameow",
    "simplified": "魅力喵",
    "pinyin": "Mèilìmiāo",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png",
    "characters": [
      {
        "char": "魅",
        "pinyin": "mei4",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 432,
    "ndex": "#0432",
    "english": "Purugly",
    "simplified": "东施喵",
    "pinyin": "Dōngshīmiāo",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png",
    "characters": [
      {
        "char": "东",
        "pinyin": "dong1",
        "definition": "east",
        "definitionEs": "este"
      },
      {
        "char": "施",
        "pinyin": "shi1",
        "definition": "to apply",
        "definitionEs": "aplicar"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 433,
    "ndex": "#0433",
    "english": "Chingling",
    "simplified": "铃铛响",
    "pinyin": "Língdāngxiǎng",
    "level": "Gén 4",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png",
    "characters": [
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      },
      {
        "char": "铛",
        "pinyin": "dang1",
        "definition": "clank",
        "definitionEs": "tintineo"
      },
      {
        "char": "响",
        "pinyin": "xiang3",
        "definition": "sound",
        "definitionEs": "sonido"
      }
    ]
  },
  {
    "id": 434,
    "ndex": "#0434",
    "english": "Stunky",
    "simplified": "臭鼬噗",
    "pinyin": "Chòuyòupū",
    "level": "Gén 4",
    "type": "Veneno / Siniestro",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png",
    "characters": [
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      },
      {
        "char": "噗",
        "pinyin": "pu1",
        "definition": "pop",
        "definitionEs": "puf"
      }
    ]
  },
  {
    "id": 435,
    "ndex": "#0435",
    "english": "Skuntank",
    "simplified": "坦克臭鼬",
    "pinyin": "Tǎnkèchòuyòu",
    "level": "Gén 4",
    "type": "Veneno / Siniestro",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png",
    "characters": [
      {
        "char": "坦",
        "pinyin": "tan3",
        "definition": "flat",
        "definitionEs": "plano"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "臭",
        "pinyin": "chou4",
        "definition": "stench",
        "definitionEs": "hedor"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      }
    ]
  },
  {
    "id": 436,
    "ndex": "#0436",
    "english": "Bronzor",
    "simplified": "铜镜怪",
    "pinyin": "Tóngjìngguài",
    "level": "Gén 4",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png",
    "characters": [
      {
        "char": "铜",
        "pinyin": "tong2",
        "definition": "copper",
        "definitionEs": "cobre"
      },
      {
        "char": "镜",
        "pinyin": "jing4",
        "definition": "mirror",
        "definitionEs": "espejo"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 437,
    "ndex": "#0437",
    "english": "Bronzong",
    "simplified": "青铜钟",
    "pinyin": "Qīngtóngzhōng",
    "level": "Gén 4",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png",
    "characters": [
      {
        "char": "青",
        "pinyin": "qing1",
        "definition": "blue-green",
        "definitionEs": "verde-azul"
      },
      {
        "char": "铜",
        "pinyin": "tong2",
        "definition": "copper",
        "definitionEs": "cobre"
      },
      {
        "char": "钟",
        "pinyin": "zhong1",
        "definition": "bell",
        "definitionEs": "campana"
      }
    ]
  },
  {
    "id": 438,
    "ndex": "#0438",
    "english": "Bonsly",
    "simplified": "盆才怪",
    "pinyin": "Péncáiguài",
    "level": "Gén 4",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png",
    "characters": [
      {
        "char": "盆",
        "pinyin": "pen2",
        "definition": "basin",
        "definitionEs": "cuenco"
      },
      {
        "char": "才",
        "pinyin": "cai2",
        "definition": "talent",
        "definitionEs": "talento"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 439,
    "ndex": "#0439",
    "english": "Mime Jr.",
    "simplified": "魔尼尼",
    "pinyin": "Móníní",
    "level": "Gén 4",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png",
    "characters": [
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 440,
    "ndex": "#0440",
    "english": "Happiny",
    "simplified": "小福蛋",
    "pinyin": "Xiǎofúdàn",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "福",
        "pinyin": "fu2",
        "definition": "fortune",
        "definitionEs": "fortuna"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      }
    ]
  },
  {
    "id": 441,
    "ndex": "#0441",
    "english": "Chatot",
    "simplified": "聒噪鸟",
    "pinyin": "Guāzàoniǎo",
    "level": "Gén 4",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png",
    "characters": [
      {
        "char": "聒",
        "pinyin": "guo1",
        "definition": "raucous",
        "definitionEs": "ruidoso"
      },
      {
        "char": "噪",
        "pinyin": "zao4",
        "definition": "noisy",
        "definitionEs": "ruidoso"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 442,
    "ndex": "#0442",
    "english": "Spiritomb",
    "simplified": "花岩怪",
    "pinyin": "Huāyánguài",
    "level": "Gén 4",
    "type": "Fantasma / Siniestro",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 443,
    "ndex": "#0443",
    "english": "Gible",
    "simplified": "圆陆鲨",
    "pinyin": "Yuánlùshā",
    "level": "Gén 4",
    "type": "Dragón / Tierra",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png",
    "characters": [
      {
        "char": "圆",
        "pinyin": "yuan2",
        "definition": "round",
        "definitionEs": "redondo"
      },
      {
        "char": "陆",
        "pinyin": "lu4",
        "definition": "land",
        "definitionEs": "tierra"
      },
      {
        "char": "鲨",
        "pinyin": "sha1",
        "definition": "shark",
        "definitionEs": "tiburón"
      }
    ]
  },
  {
    "id": 444,
    "ndex": "#0444",
    "english": "Gabite",
    "simplified": "尖牙陆鲨",
    "pinyin": "Jiānyálùshā",
    "level": "Gén 4",
    "type": "Dragón / Tierra",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png",
    "characters": [
      {
        "char": "尖",
        "pinyin": "jian1",
        "definition": "pointed",
        "definitionEs": "puntiagudo"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "陆",
        "pinyin": "lu4",
        "definition": "land",
        "definitionEs": "tierra"
      },
      {
        "char": "鲨",
        "pinyin": "sha1",
        "definition": "shark",
        "definitionEs": "tiburón"
      }
    ]
  },
  {
    "id": 445,
    "ndex": "#0445",
    "english": "Garchomp",
    "simplified": "烈咬陆鲨",
    "pinyin": "Lièyǎolùshā",
    "level": "Gén 4",
    "type": "Dragón / Tierra",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "咬",
        "pinyin": "yao3",
        "definition": "to bite",
        "definitionEs": "morder"
      },
      {
        "char": "陆",
        "pinyin": "lu4",
        "definition": "land",
        "definitionEs": "tierra"
      },
      {
        "char": "鲨",
        "pinyin": "sha1",
        "definition": "shark",
        "definitionEs": "tiburón"
      }
    ]
  },
  {
    "id": 446,
    "ndex": "#0446",
    "english": "Munchlax",
    "simplified": "小卡比兽",
    "pinyin": "Xiǎokǎbǐshòu",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 447,
    "ndex": "#0447",
    "english": "Riolu",
    "simplified": "利欧路",
    "pinyin": "Lì'ōulù",
    "level": "Gén 4",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
    "characters": [
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      }
    ]
  },
  {
    "id": 448,
    "ndex": "#0448",
    "english": "Lucario",
    "simplified": "路卡利欧",
    "pinyin": "Lùkǎlì'ōu",
    "level": "Gén 4",
    "type": "Lucha / Acero",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "characters": [
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      }
    ]
  },
  {
    "id": 449,
    "ndex": "#0449",
    "english": "Hippopotas",
    "simplified": "沙河马",
    "pinyin": "Shāhémǎ",
    "level": "Gén 4",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "河",
        "pinyin": "he2",
        "definition": "river",
        "definitionEs": "río"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 450,
    "ndex": "#0450",
    "english": "Hippowdon",
    "simplified": "河马兽",
    "pinyin": "Hémǎshòu",
    "level": "Gén 4",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
    "characters": [
      {
        "char": "河",
        "pinyin": "he2",
        "definition": "river",
        "definitionEs": "río"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 451,
    "ndex": "#0451",
    "english": "Skorupi",
    "simplified": "钳尾蝎",
    "pinyin": "Qiánwěixiē",
    "level": "Gén 4",
    "type": "Veneno / Bicho",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
    "characters": [
      {
        "char": "钳",
        "pinyin": "qian2",
        "definition": "pincers",
        "definitionEs": "tenazas"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "蝎",
        "pinyin": "xie1",
        "definition": "scorpion",
        "definitionEs": "escorpión"
      }
    ]
  },
  {
    "id": 452,
    "ndex": "#0452",
    "english": "Drapion",
    "simplified": "龙王蝎",
    "pinyin": "Lóngwángxiē",
    "level": "Gén 4",
    "type": "Veneno / Siniestro",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png",
    "characters": [
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "蝎",
        "pinyin": "xie1",
        "definition": "scorpion",
        "definitionEs": "escorpión"
      }
    ]
  },
  {
    "id": 453,
    "ndex": "#0453",
    "english": "Croagunk",
    "simplified": "不良蛙",
    "pinyin": "Bùliángwā",
    "level": "Gén 4",
    "type": "Veneno / Lucha",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png",
    "characters": [
      {
        "char": "不",
        "pinyin": "bu4",
        "definition": "no",
        "definitionEs": "no"
      },
      {
        "char": "良",
        "pinyin": "liang2",
        "definition": "good",
        "definitionEs": "bueno"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 454,
    "ndex": "#0454",
    "english": "Toxicroak",
    "simplified": "毒骷蛙",
    "pinyin": "Dúkūwā",
    "level": "Gén 4",
    "type": "Veneno / Lucha",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "骷",
        "pinyin": "ku1",
        "definition": "skull",
        "definitionEs": "cráneo"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 455,
    "ndex": "#0455",
    "english": "Carnivine",
    "simplified": "尖牙笼",
    "pinyin": "Jiānyálóng",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
    "characters": [
      {
        "char": "尖",
        "pinyin": "jian1",
        "definition": "pointed",
        "definitionEs": "puntiagudo"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "笼",
        "pinyin": "long3",
        "definition": "to envelop",
        "definitionEs": "envolver"
      }
    ]
  },
  {
    "id": 456,
    "ndex": "#0456",
    "english": "Finneon",
    "simplified": "荧光鱼",
    "pinyin": "Yíngguāngyú",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
    "characters": [
      {
        "char": "荧",
        "pinyin": "ying2",
        "definition": "glimmer",
        "definitionEs": "destello"
      },
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 457,
    "ndex": "#0457",
    "english": "Lumineon",
    "simplified": "霓虹鱼",
    "pinyin": "Níhóngyú",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
    "characters": [
      {
        "char": "霓",
        "pinyin": "ni2",
        "definition": "secondary rainbow",
        "definitionEs": "arcoíris secundario"
      },
      {
        "char": "虹",
        "pinyin": "hong2",
        "definition": "rainbow",
        "definitionEs": "arcoíris"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 458,
    "ndex": "#0458",
    "english": "Mantyke",
    "simplified": "小球飞鱼",
    "pinyin": "Xiǎoqiúfēiyú",
    "level": "Gén 4",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 459,
    "ndex": "#0459",
    "english": "Snover",
    "simplified": "雪笠怪",
    "pinyin": "Xuělìguài",
    "level": "Gén 4",
    "type": "Planta / Hielo",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "笠",
        "pinyin": "li4",
        "definition": "rain hat",
        "definitionEs": "sombrero de lluvia"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 460,
    "ndex": "#0460",
    "english": "Abomasnow",
    "simplified": "暴雪王",
    "pinyin": "Bàoxuěwáng",
    "level": "Gén 4",
    "type": "Planta / Hielo",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    "characters": [
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 461,
    "ndex": "#0461",
    "english": "Weavile",
    "simplified": "玛狃拉",
    "pinyin": "Mǎniǔlā",
    "level": "Gén 4",
    "type": "Siniestro / Hielo",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "狃",
        "pinyin": "niu3",
        "definition": "accustomed",
        "definitionEs": "acostumbrado"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 462,
    "ndex": "#0462",
    "english": "Magnezone",
    "simplified": "自爆磁怪",
    "pinyin": "Zìbàocíguài",
    "level": "Gén 4",
    "type": "Eléctrico / Acero",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png",
    "characters": [
      {
        "char": "自",
        "pinyin": "zi4",
        "definition": "self",
        "definitionEs": "sí mismo"
      },
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "磁",
        "pinyin": "ci2",
        "definition": "magnetic",
        "definitionEs": "magnético"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 463,
    "ndex": "#0463",
    "english": "Lickilicky",
    "simplified": "大舌舔",
    "pinyin": "Dàshétiǎn",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "舌",
        "pinyin": "she2",
        "definition": "tongue",
        "definitionEs": "lengua"
      },
      {
        "char": "舔",
        "pinyin": "tian3",
        "definition": "to lick",
        "definitionEs": "lamer"
      }
    ]
  },
  {
    "id": 464,
    "ndex": "#0464",
    "english": "Rhyperior",
    "simplified": "超甲狂犀",
    "pinyin": "Chāojiǎkuángxī",
    "level": "Gén 4",
    "type": "Tierra / Roca",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "狂",
        "pinyin": "kuang2",
        "definition": "mad",
        "definitionEs": "loco"
      },
      {
        "char": "犀",
        "pinyin": "xi1",
        "definition": "rhinoceros",
        "definitionEs": "rinoceronte"
      }
    ]
  },
  {
    "id": 465,
    "ndex": "#0465",
    "english": "Tangrowth",
    "simplified": "巨蔓藤",
    "pinyin": "Jùmànténg",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "蔓",
        "pinyin": "man2",
        "definition": "vine",
        "definitionEs": "vid"
      },
      {
        "char": "藤",
        "pinyin": "teng2",
        "definition": "rattan",
        "definitionEs": "ratán"
      }
    ]
  },
  {
    "id": 466,
    "ndex": "#0466",
    "english": "Electivire",
    "simplified": "电击魔兽",
    "pinyin": "DiànjímóshòuDiànjīmóshòu",
    "level": "Gén 4",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "击",
        "pinyin": "ji1",
        "definition": "to hit",
        "definitionEs": "golpear"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 467,
    "ndex": "#0467",
    "english": "Magmortar",
    "simplified": "鸭嘴炎兽",
    "pinyin": "Yāzuǐyánshòu",
    "level": "Gén 4",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png",
    "characters": [
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 468,
    "ndex": "#0468",
    "english": "Togekiss",
    "simplified": "波克基斯",
    "pinyin": "Bōkèjīsī",
    "level": "Gén 4",
    "type": "Hada / Volador",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 469,
    "ndex": "#0469",
    "english": "Yanmega",
    "simplified": "远古巨蜓",
    "pinyin": "Yuǎngǔjùtíng",
    "level": "Gén 4",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png",
    "characters": [
      {
        "char": "远",
        "pinyin": "yuan4",
        "definition": "far",
        "definitionEs": "lejos"
      },
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "蜓",
        "pinyin": "ting2",
        "definition": "dragonfly",
        "definitionEs": "libélula"
      }
    ]
  },
  {
    "id": 470,
    "ndex": "#0470",
    "english": "Leafeon",
    "simplified": "叶伊布",
    "pinyin": "Yèyībù",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
    "characters": [
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 471,
    "ndex": "#0471",
    "english": "Glaceon",
    "simplified": "冰伊布",
    "pinyin": "Bīngyībù",
    "level": "Gén 4",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 472,
    "ndex": "#0472",
    "english": "Gliscor",
    "simplified": "天蝎王",
    "pinyin": "Tiānxiēwáng",
    "level": "Gén 4",
    "type": "Tierra / Volador",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "蝎",
        "pinyin": "xie1",
        "definition": "scorpion",
        "definitionEs": "escorpión"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 473,
    "ndex": "#0473",
    "english": "Mamoswine",
    "simplified": "象牙猪",
    "pinyin": "Xiàngyázhū",
    "level": "Gén 4",
    "type": "Hielo / Tierra",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png",
    "characters": [
      {
        "char": "象",
        "pinyin": "xiang4",
        "definition": "elephant",
        "definitionEs": "elefante"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 474,
    "ndex": "#0474",
    "english": "Porygon-Z",
    "simplified": "多边兽乙型",
    "pinyin": "Duōbiānshòu-ZDuōbiānshòu Yǐxíng",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "边",
        "pinyin": "bian1",
        "definition": "side",
        "definitionEs": "lado"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      },
      {
        "char": "乙",
        "pinyin": "yi3",
        "definition": "second",
        "definitionEs": "segundo"
      },
      {
        "char": "型",
        "pinyin": "xing2",
        "definition": "type",
        "definitionEs": "tipo"
      }
    ]
  },
  {
    "id": 475,
    "ndex": "#0475",
    "english": "Gallade",
    "simplified": "艾路雷朵",
    "pinyin": "Àilùléiduǒ",
    "level": "Gén 4",
    "type": "Psíquico / Lucha",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png",
    "characters": [
      {
        "char": "艾",
        "pinyin": "ai4",
        "definition": "mugwort",
        "definitionEs": "artemisa"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "朵",
        "pinyin": "duo3",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 476,
    "ndex": "#0476",
    "english": "Probopass",
    "simplified": "大朝北鼻",
    "pinyin": "Dàcháoběibí",
    "level": "Gén 4",
    "type": "Roca / Acero",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "朝",
        "pinyin": "zhao1",
        "definition": "morning",
        "definitionEs": "mañana"
      },
      {
        "char": "北",
        "pinyin": "bei3",
        "definition": "north",
        "definitionEs": "norte"
      },
      {
        "char": "鼻",
        "pinyin": "bi2",
        "definition": "nose",
        "definitionEs": "nariz"
      }
    ]
  },
  {
    "id": 477,
    "ndex": "#0477",
    "english": "Dusknoir",
    "simplified": "黑夜魔灵",
    "pinyin": "Hēiyèmólíng",
    "level": "Gén 4",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
    "characters": [
      {
        "char": "黑",
        "pinyin": "hei1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 478,
    "ndex": "#0478",
    "english": "Froslass",
    "simplified": "雪妖女",
    "pinyin": "Xuěyāonǚ",
    "level": "Gén 4",
    "type": "Hielo / Fantasma",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      },
      {
        "char": "女",
        "pinyin": "nv3",
        "definition": "female",
        "definitionEs": "mujer"
      }
    ]
  },
  {
    "id": 479,
    "ndex": "#0479",
    "english": "Rotom",
    "simplified": "洛托姆",
    "pinyin": "Luòtuōmǔ",
    "level": "Gén 4",
    "type": "Eléctrico / Fantasma",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png",
    "characters": [
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "托",
        "pinyin": "tuo1",
        "definition": "support",
        "definitionEs": "apoyar"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 480,
    "ndex": "#0480",
    "english": "Uxie",
    "simplified": "由克希",
    "pinyin": "Yóukèxī",
    "level": "Gén 4",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png",
    "characters": [
      {
        "char": "由",
        "pinyin": "you2",
        "definition": "from",
        "definitionEs": "desde"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "希",
        "pinyin": "xi1",
        "definition": "to hope",
        "definitionEs": "esperar"
      }
    ]
  },
  {
    "id": 481,
    "ndex": "#0481",
    "english": "Mesprit",
    "simplified": "艾姆利多",
    "pinyin": "Àimǔlìduō",
    "level": "Gén 4",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png",
    "characters": [
      {
        "char": "艾",
        "pinyin": "ai4",
        "definition": "mugwort",
        "definitionEs": "artemisa"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      }
    ]
  },
  {
    "id": 482,
    "ndex": "#0482",
    "english": "Azelf",
    "simplified": "亚克诺姆",
    "pinyin": "YǎkènuòmǔYàkènuòmǔ",
    "level": "Gén 4",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png",
    "characters": [
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "诺",
        "pinyin": "nuo4",
        "definition": "promise",
        "definitionEs": "promesa"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 483,
    "ndex": "#0483",
    "english": "Dialga",
    "simplified": "帝牙卢卡",
    "pinyin": "Dìyálúkǎ",
    "level": "Gén 4",
    "type": "Acero / Dragón",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png",
    "characters": [
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "卢",
        "pinyin": "lu2",
        "definition": "rice vessel",
        "definitionEs": "vasija de arroz"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      }
    ]
  },
  {
    "id": 484,
    "ndex": "#0484",
    "english": "Palkia",
    "simplified": "帕路奇亚",
    "pinyin": "PàlùqíyǎPàlùqíyà",
    "level": "Gén 4",
    "type": "Agua / Dragón",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png",
    "characters": [
      {
        "char": "帕",
        "pinyin": "pa4",
        "definition": "to wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 485,
    "ndex": "#0485",
    "english": "Heatran",
    "simplified": "席多蓝恩",
    "pinyin": "Xíduōlán'ēn",
    "level": "Gén 4",
    "type": "Fuego / Acero",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png",
    "characters": [
      {
        "char": "席",
        "pinyin": "xi2",
        "definition": "mat",
        "definitionEs": "estera"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "蓝",
        "pinyin": "lan2",
        "definition": "blue",
        "definitionEs": "azul"
      },
      {
        "char": "恩",
        "pinyin": "en1",
        "definition": "favor",
        "definitionEs": "favor"
      }
    ]
  },
  {
    "id": 486,
    "ndex": "#0486",
    "english": "Regigigas",
    "simplified": "雷吉奇卡斯",
    "pinyin": "Léijíqíkǎsī",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 487,
    "ndex": "#0487",
    "english": "Giratina",
    "simplified": "骑拉帝纳",
    "pinyin": "Qílādìnà",
    "level": "Gén 4",
    "type": "Fantasma / Dragón",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png",
    "characters": [
      {
        "char": "骑",
        "pinyin": "qi2",
        "definition": "to ride",
        "definitionEs": "montar"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "帝",
        "pinyin": "di4",
        "definition": "emperor",
        "definitionEs": "emperador"
      },
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      }
    ]
  },
  {
    "id": 488,
    "ndex": "#0488",
    "english": "Cresselia",
    "simplified": "克雷色利亚",
    "pinyin": "KèléisèlìyǎKèléisèlìyà",
    "level": "Gén 4",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png",
    "characters": [
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "色",
        "pinyin": "se4",
        "definition": "color",
        "definitionEs": "color"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 489,
    "ndex": "#0489",
    "english": "Phione",
    "simplified": "霏欧纳",
    "pinyin": "Fēi'ōunà",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png",
    "characters": [
      {
        "char": "霏",
        "pinyin": "fei1",
        "definition": "fall of snow",
        "definitionEs": "nevada"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      }
    ]
  },
  {
    "id": 490,
    "ndex": "#0490",
    "english": "Manaphy",
    "simplified": "玛纳霏",
    "pinyin": "Mǎnàfēi",
    "level": "Gén 4",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      },
      {
        "char": "霏",
        "pinyin": "fei1",
        "definition": "fall of snow",
        "definitionEs": "nevada"
      }
    ]
  },
  {
    "id": 491,
    "ndex": "#0491",
    "english": "Darkrai",
    "simplified": "达克莱伊",
    "pinyin": "Dákèláiyī",
    "level": "Gén 4",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png",
    "characters": [
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "莱",
        "pinyin": "lai2",
        "definition": "weed",
        "definitionEs": "maleza"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      }
    ]
  },
  {
    "id": 492,
    "ndex": "#0492",
    "english": "Shaymin",
    "simplified": "谢米",
    "pinyin": "Xièmǐ",
    "level": "Gén 4",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png",
    "characters": [
      {
        "char": "谢",
        "pinyin": "xie4",
        "definition": "to thank",
        "definitionEs": "agradecer"
      },
      {
        "char": "米",
        "pinyin": "mi3",
        "definition": "rice",
        "definitionEs": "arroz"
      }
    ]
  },
  {
    "id": 493,
    "ndex": "#0493",
    "english": "Arceus",
    "simplified": "阿尔宙斯",
    "pinyin": "Ā'ěrzhòusī",
    "level": "Gén 4",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
    "characters": [
      {
        "char": "阿",
        "pinyin": "a1",
        "definition": "(prefix)",
        "definitionEs": "(prefijo)"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "宙",
        "pinyin": "zhou4",
        "definition": "eternity",
        "definitionEs": "eternidad"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 494,
    "ndex": "#0494",
    "english": "Victini",
    "simplified": "比克提尼",
    "pinyin": "Bǐkètíní",
    "level": "Gén 5",
    "type": "Psíquico / Fuego",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png",
    "characters": [
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "提",
        "pinyin": "ti2",
        "definition": "to carry",
        "definitionEs": "llevar"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 495,
    "ndex": "#0495",
    "english": "Snivy",
    "simplified": "藤藤蛇",
    "pinyin": "Téngténgshé",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png",
    "characters": [
      {
        "char": "藤",
        "pinyin": "teng2",
        "definition": "rattan",
        "definitionEs": "ratán"
      },
      {
        "char": "藤",
        "pinyin": "teng2",
        "definition": "rattan",
        "definitionEs": "ratán"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 496,
    "ndex": "#0496",
    "english": "Servine",
    "simplified": "青藤蛇",
    "pinyin": "Qīngténgshé",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png",
    "characters": [
      {
        "char": "青",
        "pinyin": "qing1",
        "definition": "blue-green",
        "definitionEs": "verde-azul"
      },
      {
        "char": "藤",
        "pinyin": "teng2",
        "definition": "rattan",
        "definitionEs": "ratán"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 497,
    "ndex": "#0497",
    "english": "Serperior",
    "simplified": "君主蛇",
    "pinyin": "Jūnzhǔshé",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png",
    "characters": [
      {
        "char": "君",
        "pinyin": "jun1",
        "definition": "lord",
        "definitionEs": "señor"
      },
      {
        "char": "主",
        "pinyin": "zhu3",
        "definition": "owner",
        "definitionEs": "dueño"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 498,
    "ndex": "#0498",
    "english": "Tepig",
    "simplified": "暖暖猪",
    "pinyin": "Nuǎnnuǎnzhū",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png",
    "characters": [
      {
        "char": "暖",
        "pinyin": "nuan3",
        "definition": "warm",
        "definitionEs": "cálido"
      },
      {
        "char": "暖",
        "pinyin": "nuan3",
        "definition": "warm",
        "definitionEs": "cálido"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 499,
    "ndex": "#0499",
    "english": "Pignite",
    "simplified": "炒炒猪",
    "pinyin": "Chǎochǎozhū",
    "level": "Gén 5",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png",
    "characters": [
      {
        "char": "炒",
        "pinyin": "chao3",
        "definition": "to stir-fry",
        "definitionEs": "saltear"
      },
      {
        "char": "炒",
        "pinyin": "chao3",
        "definition": "to stir-fry",
        "definitionEs": "saltear"
      },
      {
        "char": "猪",
        "pinyin": "zhu1",
        "definition": "pig",
        "definitionEs": "cerdo"
      }
    ]
  },
  {
    "id": 500,
    "ndex": "#0500",
    "english": "Emboar",
    "simplified": "炎武王",
    "pinyin": "Yánwǔwáng",
    "level": "Gén 5",
    "type": "Fuego / Lucha",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png",
    "characters": [
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "武",
        "pinyin": "wu3",
        "definition": "martial",
        "definitionEs": "marcial"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 501,
    "ndex": "#0501",
    "english": "Oshawott",
    "simplified": "水水獭",
    "pinyin": "ShuǐshuǐtàShuǐshuǐtǎ",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "獭",
        "pinyin": "ta3",
        "definition": "otter",
        "definitionEs": "nutria"
      }
    ]
  },
  {
    "id": 502,
    "ndex": "#0502",
    "english": "Dewott",
    "simplified": "双刃丸",
    "pinyin": "Shuāngrènwán",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "刃",
        "pinyin": "ren4",
        "definition": "edge",
        "definitionEs": "filo"
      },
      {
        "char": "丸",
        "pinyin": "wan2",
        "definition": "ball",
        "definitionEs": "bola"
      }
    ]
  },
  {
    "id": 503,
    "ndex": "#0503",
    "english": "Samurott",
    "simplified": "大剑鬼",
    "pinyin": "Dàjiànguǐ",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      }
    ]
  },
  {
    "id": 504,
    "ndex": "#0504",
    "english": "Patrat",
    "simplified": "探探鼠",
    "pinyin": "Tàntànshǔ",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png",
    "characters": [
      {
        "char": "探",
        "pinyin": "tan4",
        "definition": "explore",
        "definitionEs": "explorar"
      },
      {
        "char": "探",
        "pinyin": "tan4",
        "definition": "explore",
        "definitionEs": "explorar"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 505,
    "ndex": "#0505",
    "english": "Watchog",
    "simplified": "步哨鼠",
    "pinyin": "Bùshàoshǔ",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png",
    "characters": [
      {
        "char": "步",
        "pinyin": "bu4",
        "definition": "step",
        "definitionEs": "paso"
      },
      {
        "char": "哨",
        "pinyin": "shao4",
        "definition": "whistle",
        "definitionEs": "silbato"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 506,
    "ndex": "#0506",
    "english": "Lillipup",
    "simplified": "小约克",
    "pinyin": "Xiǎoyuēkè",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "约",
        "pinyin": "yue1",
        "definition": "appoint",
        "definitionEs": "concertar"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      }
    ]
  },
  {
    "id": 507,
    "ndex": "#0507",
    "english": "Herdier",
    "simplified": "哈约克",
    "pinyin": "Hāyuēkè",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png",
    "characters": [
      {
        "char": "哈",
        "pinyin": "ha1",
        "definition": "ha!",
        "definitionEs": "¡ja!"
      },
      {
        "char": "约",
        "pinyin": "yue1",
        "definition": "appoint",
        "definitionEs": "concertar"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      }
    ]
  },
  {
    "id": 508,
    "ndex": "#0508",
    "english": "Stoutland",
    "simplified": "长毛狗",
    "pinyin": "Chángmáogǒu",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 509,
    "ndex": "#0509",
    "english": "Purrloin",
    "simplified": "扒手猫",
    "pinyin": "Páshǒumāo",
    "level": "Gén 5",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png",
    "characters": [
      {
        "char": "扒",
        "pinyin": "pa2",
        "definition": "rake",
        "definitionEs": "rastrillar"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "hand",
        "definitionEs": "mano"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 510,
    "ndex": "#0510",
    "english": "Liepard",
    "simplified": "酷豹",
    "pinyin": "Kùbào",
    "level": "Gén 5",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png",
    "characters": [
      {
        "char": "酷",
        "pinyin": "ku4",
        "definition": "ruthless",
        "definitionEs": "despiadado"
      },
      {
        "char": "豹",
        "pinyin": "bao4",
        "definition": "leopard",
        "definitionEs": "leopardo"
      }
    ]
  },
  {
    "id": 511,
    "ndex": "#0511",
    "english": "Pansage",
    "simplified": "花椰猴",
    "pinyin": "Huāyéhóu",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "椰",
        "pinyin": "ye1",
        "definition": "coconut",
        "definitionEs": "coco"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 512,
    "ndex": "#0512",
    "english": "Simisage",
    "simplified": "花椰猿",
    "pinyin": "Huāyéyuán",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "椰",
        "pinyin": "ye1",
        "definition": "coconut",
        "definitionEs": "coco"
      },
      {
        "char": "猿",
        "pinyin": "yuan2",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 513,
    "ndex": "#0513",
    "english": "Pansear",
    "simplified": "爆香猴",
    "pinyin": "Bàoxiānghóu",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 514,
    "ndex": "#0514",
    "english": "Simisear",
    "simplified": "爆香猿",
    "pinyin": "Bàoxiāngyuán",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "猿",
        "pinyin": "yuan2",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 515,
    "ndex": "#0515",
    "english": "Panpour",
    "simplified": "冷水猴",
    "pinyin": "Lěngshuǐhóu",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png",
    "characters": [
      {
        "char": "冷",
        "pinyin": "leng3",
        "definition": "cold",
        "definitionEs": "frío"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 516,
    "ndex": "#0516",
    "english": "Simipour",
    "simplified": "冷水猿",
    "pinyin": "Lěngshuǐyuán",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png",
    "characters": [
      {
        "char": "冷",
        "pinyin": "leng3",
        "definition": "cold",
        "definitionEs": "frío"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "猿",
        "pinyin": "yuan2",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 517,
    "ndex": "#0517",
    "english": "Munna",
    "simplified": "食梦梦",
    "pinyin": "Shímèngmèng",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png",
    "characters": [
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      }
    ]
  },
  {
    "id": 518,
    "ndex": "#0518",
    "english": "Musharna",
    "simplified": "梦梦蚀",
    "pinyin": "Mèngmèngshí",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png",
    "characters": [
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "梦",
        "pinyin": "meng4",
        "definition": "dream",
        "definitionEs": "sueño"
      },
      {
        "char": "蚀",
        "pinyin": "shi2",
        "definition": "erode",
        "definitionEs": "erosionar"
      }
    ]
  },
  {
    "id": 519,
    "ndex": "#0519",
    "english": "Pidove",
    "simplified": "豆豆鸽",
    "pinyin": "Dòudòugē",
    "level": "Gén 5",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png",
    "characters": [
      {
        "char": "豆",
        "pinyin": "dou4",
        "definition": "legume",
        "definitionEs": "legumbre"
      },
      {
        "char": "豆",
        "pinyin": "dou4",
        "definition": "legume",
        "definitionEs": "legumbre"
      },
      {
        "char": "鸽",
        "pinyin": "ge1",
        "definition": "pigeon",
        "definitionEs": "paloma"
      }
    ]
  },
  {
    "id": 520,
    "ndex": "#0520",
    "english": "Tranquill",
    "simplified": "咕咕鸽",
    "pinyin": "Gūgūgē",
    "level": "Gén 5",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png",
    "characters": [
      {
        "char": "咕",
        "pinyin": "gu1",
        "definition": "gurgle",
        "definitionEs": "gorgoteo"
      },
      {
        "char": "咕",
        "pinyin": "gu1",
        "definition": "gurgle",
        "definitionEs": "gorgoteo"
      },
      {
        "char": "鸽",
        "pinyin": "ge1",
        "definition": "pigeon",
        "definitionEs": "paloma"
      }
    ]
  },
  {
    "id": 521,
    "ndex": "#0521",
    "english": "Unfezant",
    "simplified": "高傲雉鸡",
    "pinyin": "Gāo'àozhìjī",
    "level": "Gén 5",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png",
    "characters": [
      {
        "char": "高",
        "pinyin": "gao1",
        "definition": "high",
        "definitionEs": "alto"
      },
      {
        "char": "傲",
        "pinyin": "ao4",
        "definition": "proud",
        "definitionEs": "orgulloso"
      },
      {
        "char": "雉",
        "pinyin": "zhi4",
        "definition": "pheasant",
        "definitionEs": "faisán"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      }
    ]
  },
  {
    "id": 522,
    "ndex": "#0522",
    "english": "Blitzle",
    "simplified": "斑斑马",
    "pinyin": "Bānbānmǎ",
    "level": "Gén 5",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png",
    "characters": [
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 523,
    "ndex": "#0523",
    "english": "Zebstrika",
    "simplified": "雷电斑马",
    "pinyin": "Léidiànbānmǎ",
    "level": "Gén 5",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 524,
    "ndex": "#0524",
    "english": "Roggenrola",
    "simplified": "石丸子",
    "pinyin": "Shíwánzi",
    "level": "Gén 5",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png",
    "characters": [
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "丸",
        "pinyin": "wan2",
        "definition": "ball",
        "definitionEs": "bola"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 525,
    "ndex": "#0525",
    "english": "Boldore",
    "simplified": "地幔岩",
    "pinyin": "Dìmànyán",
    "level": "Gén 5",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png",
    "characters": [
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "幔",
        "pinyin": "man4",
        "definition": "curtain",
        "definitionEs": "cortina"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      }
    ]
  },
  {
    "id": 526,
    "ndex": "#0526",
    "english": "Gigalith",
    "simplified": "庞岩怪",
    "pinyin": "Pángyánguài",
    "level": "Gén 5",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png",
    "characters": [
      {
        "char": "庞",
        "pinyin": "pang2",
        "definition": "huge",
        "definitionEs": "enorme"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 527,
    "ndex": "#0527",
    "english": "Woobat",
    "simplified": "滚滚蝙蝠",
    "pinyin": "Gǔngǔnbiānfú",
    "level": "Gén 5",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png",
    "characters": [
      {
        "char": "滚",
        "pinyin": "gun3",
        "definition": "boil",
        "definitionEs": "hervir"
      },
      {
        "char": "滚",
        "pinyin": "gun3",
        "definition": "boil",
        "definitionEs": "hervir"
      },
      {
        "char": "蝙",
        "pinyin": "bian1",
        "definition": "bat",
        "definitionEs": "murciélago"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ]
  },
  {
    "id": 528,
    "ndex": "#0528",
    "english": "Swoobat",
    "simplified": "心蝙蝠",
    "pinyin": "Xīnbiānfú",
    "level": "Gén 5",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png",
    "characters": [
      {
        "char": "心",
        "pinyin": "xin1",
        "definition": "heart",
        "definitionEs": "corazón"
      },
      {
        "char": "蝙",
        "pinyin": "bian1",
        "definition": "bat",
        "definitionEs": "murciélago"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ]
  },
  {
    "id": 529,
    "ndex": "#0529",
    "english": "Drilbur",
    "simplified": "螺钉地鼠",
    "pinyin": "Luódīngdìshǔ",
    "level": "Gén 5",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png",
    "characters": [
      {
        "char": "螺",
        "pinyin": "luo2",
        "definition": "spiral",
        "definitionEs": "espiral"
      },
      {
        "char": "钉",
        "pinyin": "ding4",
        "definition": "nail",
        "definitionEs": "clavar"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 530,
    "ndex": "#0530",
    "english": "Excadrill",
    "simplified": "龙头地鼠",
    "pinyin": "Lóngtóudìshǔ",
    "level": "Gén 5",
    "type": "Tierra / Acero",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png",
    "characters": [
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 531,
    "ndex": "#0531",
    "english": "Audino",
    "simplified": "差不多娃娃",
    "pinyin": "Chàbùduōwáwá",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png",
    "characters": [
      {
        "char": "差",
        "pinyin": "ci1",
        "definition": "uneven",
        "definitionEs": "desigual"
      },
      {
        "char": "不",
        "pinyin": "bu4",
        "definition": "no",
        "definitionEs": "no"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 532,
    "ndex": "#0532",
    "english": "Timburr",
    "simplified": "搬运小匠",
    "pinyin": "Bānyùnxiǎojiàng",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png",
    "characters": [
      {
        "char": "搬",
        "pinyin": "ban1",
        "definition": "move",
        "definitionEs": "mover"
      },
      {
        "char": "运",
        "pinyin": "yun4",
        "definition": "move",
        "definitionEs": "mover"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "匠",
        "pinyin": "jiang4",
        "definition": "craftsman",
        "definitionEs": "artesano"
      }
    ]
  },
  {
    "id": 533,
    "ndex": "#0533",
    "english": "Gurdurr",
    "simplified": "铁骨土人",
    "pinyin": "Tiěgǔtǔrén",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "骨",
        "pinyin": "gu3",
        "definition": "bone",
        "definitionEs": "hueso"
      },
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 534,
    "ndex": "#0534",
    "english": "Conkeldurr",
    "simplified": "修建老匠",
    "pinyin": "Xiūjiànlǎojiàng",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png",
    "characters": [
      {
        "char": "修",
        "pinyin": "xiu1",
        "definition": "repair",
        "definitionEs": "reparar"
      },
      {
        "char": "建",
        "pinyin": "jian4",
        "definition": "build",
        "definitionEs": "construir"
      },
      {
        "char": "老",
        "pinyin": "lao3",
        "definition": "old",
        "definitionEs": "viejo"
      },
      {
        "char": "匠",
        "pinyin": "jiang4",
        "definition": "craftsman",
        "definitionEs": "artesano"
      }
    ]
  },
  {
    "id": 535,
    "ndex": "#0535",
    "english": "Tympole",
    "simplified": "圆蝌蚪",
    "pinyin": "Yuánkēdǒu",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png",
    "characters": [
      {
        "char": "圆",
        "pinyin": "yuan2",
        "definition": "round",
        "definitionEs": "redondo"
      },
      {
        "char": "蝌",
        "pinyin": "ke1",
        "definition": "tadpole",
        "definitionEs": "renacuajo"
      },
      {
        "char": "蚪",
        "pinyin": "dou3",
        "definition": "tadpole",
        "definitionEs": "renacuajo"
      }
    ]
  },
  {
    "id": 536,
    "ndex": "#0536",
    "english": "Palpitoad",
    "simplified": "蓝蟾蜍",
    "pinyin": "Lánchánchú",
    "level": "Gén 5",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png",
    "characters": [
      {
        "char": "蓝",
        "pinyin": "lan2",
        "definition": "blue",
        "definitionEs": "azul"
      },
      {
        "char": "蟾",
        "pinyin": "chan2",
        "definition": "toad",
        "definitionEs": "sapo"
      },
      {
        "char": "蜍",
        "pinyin": "chu2",
        "definition": "toad",
        "definitionEs": "sapo"
      }
    ]
  },
  {
    "id": 537,
    "ndex": "#0537",
    "english": "Seismitoad",
    "simplified": "蟾蜍王",
    "pinyin": "Chánchúwáng",
    "level": "Gén 5",
    "type": "Agua / Tierra",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png",
    "characters": [
      {
        "char": "蟾",
        "pinyin": "chan2",
        "definition": "toad",
        "definitionEs": "sapo"
      },
      {
        "char": "蜍",
        "pinyin": "chu2",
        "definition": "toad",
        "definitionEs": "sapo"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 538,
    "ndex": "#0538",
    "english": "Throh",
    "simplified": "投摔鬼",
    "pinyin": "Tóushuāiguǐ",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png",
    "characters": [
      {
        "char": "投",
        "pinyin": "tou2",
        "definition": "throw",
        "definitionEs": "lanzar"
      },
      {
        "char": "摔",
        "pinyin": "shuai1",
        "definition": "fall",
        "definitionEs": "caer"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      }
    ]
  },
  {
    "id": 539,
    "ndex": "#0539",
    "english": "Sawk",
    "simplified": "打击鬼",
    "pinyin": "DǎjíguǐDǎjīguǐ",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png",
    "characters": [
      {
        "char": "打",
        "pinyin": "da3",
        "definition": "hit",
        "definitionEs": "golpear"
      },
      {
        "char": "击",
        "pinyin": "ji1",
        "definition": "to hit",
        "definitionEs": "golpear"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      }
    ]
  },
  {
    "id": 540,
    "ndex": "#0540",
    "english": "Sewaddle",
    "simplified": "虫宝包",
    "pinyin": "Chóngbǎobāo",
    "level": "Gén 5",
    "type": "Bicho / Planta",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png",
    "characters": [
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "包",
        "pinyin": "bao1",
        "definition": "wrap",
        "definitionEs": "envolver"
      }
    ]
  },
  {
    "id": 541,
    "ndex": "#0541",
    "english": "Swadloon",
    "simplified": "宝包茧",
    "pinyin": "Bǎobāojiǎn",
    "level": "Gén 5",
    "type": "Bicho / Planta",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png",
    "characters": [
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "包",
        "pinyin": "bao1",
        "definition": "wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "茧",
        "pinyin": "jian3",
        "definition": "cocoon",
        "definitionEs": "capullo"
      }
    ]
  },
  {
    "id": 542,
    "ndex": "#0542",
    "english": "Leavanny",
    "simplified": "保姆虫",
    "pinyin": "Bǎomǔchóng",
    "level": "Gén 5",
    "type": "Bicho / Planta",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png",
    "characters": [
      {
        "char": "保",
        "pinyin": "bao3",
        "definition": "protect",
        "definitionEs": "proteger"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 543,
    "ndex": "#0543",
    "english": "Venipede",
    "simplified": "百足蜈蚣",
    "pinyin": "Bǎizúwúgōng",
    "level": "Gén 5",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png",
    "characters": [
      {
        "char": "百",
        "pinyin": "bai3",
        "definition": "hundred",
        "definitionEs": "cien"
      },
      {
        "char": "足",
        "pinyin": "zu2",
        "definition": "foot",
        "definitionEs": "pie"
      },
      {
        "char": "蜈",
        "pinyin": "wu2",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      },
      {
        "char": "蚣",
        "pinyin": "gong1",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      }
    ]
  },
  {
    "id": 544,
    "ndex": "#0544",
    "english": "Whirlipede",
    "simplified": "车轮球",
    "pinyin": "Chēlúnqiú",
    "level": "Gén 5",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png",
    "characters": [
      {
        "char": "车",
        "pinyin": "ju1",
        "definition": "chariot",
        "definitionEs": "carro"
      },
      {
        "char": "轮",
        "pinyin": "lun2",
        "definition": "wheel",
        "definitionEs": "rueda"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 545,
    "ndex": "#0545",
    "english": "Scolipede",
    "simplified": "蜈蚣王",
    "pinyin": "Wúgōngwáng",
    "level": "Gén 5",
    "type": "Bicho / Veneno",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png",
    "characters": [
      {
        "char": "蜈",
        "pinyin": "wu2",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      },
      {
        "char": "蚣",
        "pinyin": "gong1",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 546,
    "ndex": "#0546",
    "english": "Cottonee",
    "simplified": "木棉球",
    "pinyin": "Mùmiánqiú",
    "level": "Gén 5",
    "type": "Planta / Hada",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png",
    "characters": [
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "棉",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 547,
    "ndex": "#0547",
    "english": "Whimsicott",
    "simplified": "风妖精",
    "pinyin": "Fēngyāojing",
    "level": "Gén 5",
    "type": "Planta / Hada",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png",
    "characters": [
      {
        "char": "风",
        "pinyin": "feng1",
        "definition": "wind",
        "definitionEs": "viento"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      },
      {
        "char": "精",
        "pinyin": "jing1",
        "definition": "essence",
        "definitionEs": "esencia"
      }
    ]
  },
  {
    "id": 548,
    "ndex": "#0548",
    "english": "Petilil",
    "simplified": "百合根娃娃",
    "pinyin": "Bǎihégēnwáwá",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png",
    "characters": [
      {
        "char": "百",
        "pinyin": "bai3",
        "definition": "hundred",
        "definitionEs": "cien"
      },
      {
        "char": "合",
        "pinyin": "he2",
        "definition": "to join",
        "definitionEs": "unir"
      },
      {
        "char": "根",
        "pinyin": "gen1",
        "definition": "root",
        "definitionEs": "raíz"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 549,
    "ndex": "#0549",
    "english": "Lilligant",
    "simplified": "裙儿小姐",
    "pinyin": "Qún'érxiǎojiě",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png",
    "characters": [
      {
        "char": "裙",
        "pinyin": "qun2",
        "definition": "skirt",
        "definitionEs": "falda"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "姐",
        "pinyin": "jie3",
        "definition": "older sister",
        "definitionEs": "hermana mayor"
      }
    ]
  },
  {
    "id": 550,
    "ndex": "#0550",
    "english": "Basculin",
    "simplified": "野蛮鲈鱼",
    "pinyin": "Yěmánlúyú",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png",
    "characters": [
      {
        "char": "野",
        "pinyin": "ye3",
        "definition": "field",
        "definitionEs": "campo"
      },
      {
        "char": "蛮",
        "pinyin": "man2",
        "definition": "barbarian",
        "definitionEs": "bárbaro"
      },
      {
        "char": "鲈",
        "pinyin": "lu2",
        "definition": "perch",
        "definitionEs": "perca"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 551,
    "ndex": "#0551",
    "english": "Sandile",
    "simplified": "黑眼鳄",
    "pinyin": "Hēiyǎn'è",
    "level": "Gén 5",
    "type": "Tierra / Siniestro",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png",
    "characters": [
      {
        "char": "黑",
        "pinyin": "hei1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "眼",
        "pinyin": "yan3",
        "definition": "eye",
        "definitionEs": "ojo"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 552,
    "ndex": "#0552",
    "english": "Krokorok",
    "simplified": "混混鳄",
    "pinyin": "Hùnhun'è",
    "level": "Gén 5",
    "type": "Tierra / Siniestro",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png",
    "characters": [
      {
        "char": "混",
        "pinyin": "hun4",
        "definition": "mix",
        "definitionEs": "mezclar"
      },
      {
        "char": "混",
        "pinyin": "hun4",
        "definition": "mix",
        "definitionEs": "mezclar"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 553,
    "ndex": "#0553",
    "english": "Krookodile",
    "simplified": "流氓鳄",
    "pinyin": "Liúmáng'è",
    "level": "Gén 5",
    "type": "Tierra / Siniestro",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png",
    "characters": [
      {
        "char": "流",
        "pinyin": "liu2",
        "definition": "flow",
        "definitionEs": "fluir"
      },
      {
        "char": "氓",
        "pinyin": "meng2",
        "definition": "people",
        "definitionEs": "gente"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 554,
    "ndex": "#0554",
    "english": "Darumaka",
    "simplified": "火红不倒翁",
    "pinyin": "Huǒhóngbùdǎowēng",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "红",
        "pinyin": "hong2",
        "definition": "red",
        "definitionEs": "rojo"
      },
      {
        "char": "不",
        "pinyin": "bu4",
        "definition": "no",
        "definitionEs": "no"
      },
      {
        "char": "倒",
        "pinyin": "dao4",
        "definition": "invert",
        "definitionEs": "invertir"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      }
    ]
  },
  {
    "id": 555,
    "ndex": "#0555",
    "english": "Darmanitan",
    "simplified": "达摩狒狒",
    "pinyin": "Dámófèifèi",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png",
    "characters": [
      {
        "char": "达",
        "pinyin": "da2",
        "definition": "to reach",
        "definitionEs": "alcanzar"
      },
      {
        "char": "摩",
        "pinyin": "mo2",
        "definition": "to rub",
        "definitionEs": "frotar"
      },
      {
        "char": "狒",
        "pinyin": "fei4",
        "definition": "baboon",
        "definitionEs": "babuino"
      },
      {
        "char": "狒",
        "pinyin": "fei4",
        "definition": "baboon",
        "definitionEs": "babuino"
      }
    ]
  },
  {
    "id": 556,
    "ndex": "#0556",
    "english": "Maractus",
    "simplified": "沙铃仙人掌",
    "pinyin": "Shālíngxiānrénzhǎng",
    "level": "Gén 5",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      },
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "掌",
        "pinyin": "zhang3",
        "definition": "palm",
        "definitionEs": "palma"
      }
    ]
  },
  {
    "id": 557,
    "ndex": "#0557",
    "english": "Dwebble",
    "simplified": "石居蟹",
    "pinyin": "Shíjūxiè",
    "level": "Gén 5",
    "type": "Bicho / Roca",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png",
    "characters": [
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "居",
        "pinyin": "ju1",
        "definition": "reside",
        "definitionEs": "residir"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ]
  },
  {
    "id": 558,
    "ndex": "#0558",
    "english": "Crustle",
    "simplified": "岩殿居蟹",
    "pinyin": "Yándiànjūxiè",
    "level": "Gén 5",
    "type": "Bicho / Roca",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png",
    "characters": [
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "殿",
        "pinyin": "dian4",
        "definition": "palace",
        "definitionEs": "palacio"
      },
      {
        "char": "居",
        "pinyin": "ju1",
        "definition": "reside",
        "definitionEs": "residir"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ]
  },
  {
    "id": 559,
    "ndex": "#0559",
    "english": "Scraggy",
    "simplified": "滑滑小子",
    "pinyin": "Huáhuáxiǎozi",
    "level": "Gén 5",
    "type": "Siniestro / Lucha",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png",
    "characters": [
      {
        "char": "滑",
        "pinyin": "hua2",
        "definition": "slip",
        "definitionEs": "resbalar"
      },
      {
        "char": "滑",
        "pinyin": "hua2",
        "definition": "slip",
        "definitionEs": "resbalar"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 560,
    "ndex": "#0560",
    "english": "Scrafty",
    "simplified": "头巾混混",
    "pinyin": "Tóujīnhùnhun",
    "level": "Gén 5",
    "type": "Siniestro / Lucha",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png",
    "characters": [
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "巾",
        "pinyin": "jin1",
        "definition": "towel",
        "definitionEs": "toalla"
      },
      {
        "char": "混",
        "pinyin": "hun4",
        "definition": "mix",
        "definitionEs": "mezclar"
      },
      {
        "char": "混",
        "pinyin": "hun4",
        "definition": "mix",
        "definitionEs": "mezclar"
      }
    ]
  },
  {
    "id": 561,
    "ndex": "#0561",
    "english": "Sigilyph",
    "simplified": "象征鸟",
    "pinyin": "Xiàngzhēngniǎo",
    "level": "Gén 5",
    "type": "Psíquico / Volador",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png",
    "characters": [
      {
        "char": "象",
        "pinyin": "xiang4",
        "definition": "elephant",
        "definitionEs": "elefante"
      },
      {
        "char": "征",
        "pinyin": "zheng1",
        "definition": "expedition",
        "definitionEs": "expedición"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 562,
    "ndex": "#0562",
    "english": "Yamask",
    "simplified": "哭哭面具",
    "pinyin": "Kūkūmiànjù",
    "level": "Gén 5",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png",
    "characters": [
      {
        "char": "哭",
        "pinyin": "ku1",
        "definition": "cry",
        "definitionEs": "llorar"
      },
      {
        "char": "哭",
        "pinyin": "ku1",
        "definition": "cry",
        "definitionEs": "llorar"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "face",
        "definitionEs": "cara"
      },
      {
        "char": "具",
        "pinyin": "ju4",
        "definition": "tool",
        "definitionEs": "herramienta"
      }
    ]
  },
  {
    "id": 563,
    "ndex": "#0563",
    "english": "Cofagrigus",
    "simplified": "迭失棺",
    "pinyin": "SǐshénguānDiéshīguān",
    "level": "Gén 5",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png",
    "characters": [
      {
        "char": "迭",
        "pinyin": "die2",
        "definition": "alternate",
        "definitionEs": "alternar"
      },
      {
        "char": "失",
        "pinyin": "shi1",
        "definition": "lose",
        "definitionEs": "perder"
      },
      {
        "char": "棺",
        "pinyin": "guan1",
        "definition": "coffin",
        "definitionEs": "ataúd"
      }
    ]
  },
  {
    "id": 564,
    "ndex": "#0564",
    "english": "Tirtouga",
    "simplified": "原盖海龟",
    "pinyin": "Yuángàihǎiguī",
    "level": "Gén 5",
    "type": "Agua / Roca",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png",
    "characters": [
      {
        "char": "原",
        "pinyin": "yuan2",
        "definition": "original",
        "definitionEs": "original"
      },
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 565,
    "ndex": "#0565",
    "english": "Carracosta",
    "simplified": "肋骨海龟",
    "pinyin": "Lèigǔhǎiguī",
    "level": "Gén 5",
    "type": "Agua / Roca",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png",
    "characters": [
      {
        "char": "肋",
        "pinyin": "lei4",
        "definition": "rib",
        "definitionEs": "costilla"
      },
      {
        "char": "骨",
        "pinyin": "gu3",
        "definition": "bone",
        "definitionEs": "hueso"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 566,
    "ndex": "#0566",
    "english": "Archen",
    "simplified": "始祖小鸟",
    "pinyin": "Shǐzǔxiǎoniǎo",
    "level": "Gén 5",
    "type": "Roca / Volador",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png",
    "characters": [
      {
        "char": "始",
        "pinyin": "shi3",
        "definition": "begin",
        "definitionEs": "empezar"
      },
      {
        "char": "祖",
        "pinyin": "zu3",
        "definition": "ancestor",
        "definitionEs": "ancestro"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 567,
    "ndex": "#0567",
    "english": "Archeops",
    "simplified": "始祖大鸟",
    "pinyin": "Shǐzǔdàniǎo",
    "level": "Gén 5",
    "type": "Roca / Volador",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png",
    "characters": [
      {
        "char": "始",
        "pinyin": "shi3",
        "definition": "begin",
        "definitionEs": "empezar"
      },
      {
        "char": "祖",
        "pinyin": "zu3",
        "definition": "ancestor",
        "definitionEs": "ancestro"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 568,
    "ndex": "#0568",
    "english": "Trubbish",
    "simplified": "破破袋",
    "pinyin": "Pòpòdài",
    "level": "Gén 5",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png",
    "characters": [
      {
        "char": "破",
        "pinyin": "po4",
        "definition": "broken",
        "definitionEs": "roto"
      },
      {
        "char": "破",
        "pinyin": "po4",
        "definition": "broken",
        "definitionEs": "roto"
      },
      {
        "char": "袋",
        "pinyin": "dai4",
        "definition": "pouch",
        "definitionEs": "bolsa"
      }
    ]
  },
  {
    "id": 569,
    "ndex": "#0569",
    "english": "Garbodor",
    "simplified": "灰尘山",
    "pinyin": "Huīchénshān",
    "level": "Gén 5",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png",
    "characters": [
      {
        "char": "灰",
        "pinyin": "hui1",
        "definition": "ash",
        "definitionEs": "ceniza"
      },
      {
        "char": "尘",
        "pinyin": "chen2",
        "definition": "dust",
        "definitionEs": "polvo"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      }
    ]
  },
  {
    "id": 570,
    "ndex": "#0570",
    "english": "Zorua",
    "simplified": "索罗亚",
    "pinyin": "SuǒluóyǎSuǒluóyà",
    "level": "Gén 5",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png",
    "characters": [
      {
        "char": "索",
        "pinyin": "suo3",
        "definition": "search",
        "definitionEs": "buscar"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 571,
    "ndex": "#0571",
    "english": "Zoroark",
    "simplified": "索罗亚克",
    "pinyin": "SuǒluóyǎkèSuǒluóyàkè",
    "level": "Gén 5",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    "characters": [
      {
        "char": "索",
        "pinyin": "suo3",
        "definition": "search",
        "definitionEs": "buscar"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      }
    ]
  },
  {
    "id": 572,
    "ndex": "#0572",
    "english": "Minccino",
    "simplified": "泡沫栗鼠",
    "pinyin": "Pàomòlìshǔ",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png",
    "characters": [
      {
        "char": "泡",
        "pinyin": "pao4",
        "definition": "bubble",
        "definitionEs": "burbuja"
      },
      {
        "char": "沫",
        "pinyin": "mo4",
        "definition": "foam",
        "definitionEs": "espuma"
      },
      {
        "char": "栗",
        "pinyin": "li4",
        "definition": "chestnut",
        "definitionEs": "castaña"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 573,
    "ndex": "#0573",
    "english": "Cinccino",
    "simplified": "奇诺栗鼠",
    "pinyin": "Qínuòlìshǔ",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png",
    "characters": [
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "诺",
        "pinyin": "nuo4",
        "definition": "promise",
        "definitionEs": "promesa"
      },
      {
        "char": "栗",
        "pinyin": "li4",
        "definition": "chestnut",
        "definitionEs": "castaña"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 574,
    "ndex": "#0574",
    "english": "Gothita",
    "simplified": "哥德宝宝",
    "pinyin": "Gēdébǎobao",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png",
    "characters": [
      {
        "char": "哥",
        "pinyin": "ge1",
        "definition": "brother",
        "definitionEs": "hermano"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 575,
    "ndex": "#0575",
    "english": "Gothorita",
    "simplified": "哥德小童",
    "pinyin": "Gēdéxiǎotóng",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png",
    "characters": [
      {
        "char": "哥",
        "pinyin": "ge1",
        "definition": "brother",
        "definitionEs": "hermano"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 576,
    "ndex": "#0576",
    "english": "Gothitelle",
    "simplified": "哥德小姐",
    "pinyin": "Gēdéxiǎojiě",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png",
    "characters": [
      {
        "char": "哥",
        "pinyin": "ge1",
        "definition": "brother",
        "definitionEs": "hermano"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "姐",
        "pinyin": "jie3",
        "definition": "older sister",
        "definitionEs": "hermana mayor"
      }
    ]
  },
  {
    "id": 577,
    "ndex": "#0577",
    "english": "Solosis",
    "simplified": "单卵细胞球",
    "pinyin": "Dānluǎnxìbāoqiú",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png",
    "characters": [
      {
        "char": "单",
        "pinyin": "dan1",
        "definition": "single",
        "definitionEs": "único"
      },
      {
        "char": "卵",
        "pinyin": "luan3",
        "definition": "egg",
        "definitionEs": "huevo"
      },
      {
        "char": "细",
        "pinyin": "xi4",
        "definition": "thin",
        "definitionEs": "delgado"
      },
      {
        "char": "胞",
        "pinyin": "bao1",
        "definition": "cell",
        "definitionEs": "célula"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 578,
    "ndex": "#0578",
    "english": "Duosion",
    "simplified": "双卵细胞球",
    "pinyin": "Shuāngluǎnxìbāoqiú",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "卵",
        "pinyin": "luan3",
        "definition": "egg",
        "definitionEs": "huevo"
      },
      {
        "char": "细",
        "pinyin": "xi4",
        "definition": "thin",
        "definitionEs": "delgado"
      },
      {
        "char": "胞",
        "pinyin": "bao1",
        "definition": "cell",
        "definitionEs": "célula"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 579,
    "ndex": "#0579",
    "english": "Reuniclus",
    "simplified": "人造细胞卵",
    "pinyin": "Rénzàoxìbāoluǎn",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png",
    "characters": [
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "造",
        "pinyin": "zao4",
        "definition": "make",
        "definitionEs": "hacer"
      },
      {
        "char": "细",
        "pinyin": "xi4",
        "definition": "thin",
        "definitionEs": "delgado"
      },
      {
        "char": "胞",
        "pinyin": "bao1",
        "definition": "cell",
        "definitionEs": "célula"
      },
      {
        "char": "卵",
        "pinyin": "luan3",
        "definition": "egg",
        "definitionEs": "huevo"
      }
    ]
  },
  {
    "id": 580,
    "ndex": "#0580",
    "english": "Ducklett",
    "simplified": "鸭宝宝",
    "pinyin": "Yābǎobao",
    "level": "Gén 5",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png",
    "characters": [
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 581,
    "ndex": "#0581",
    "english": "Swanna",
    "simplified": "舞天鹅",
    "pinyin": "Wǔtiān'é",
    "level": "Gén 5",
    "type": "Agua / Volador",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png",
    "characters": [
      {
        "char": "舞",
        "pinyin": "wu3",
        "definition": "dance",
        "definitionEs": "bailar"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "鹅",
        "pinyin": "e2",
        "definition": "goose",
        "definitionEs": "ganso"
      }
    ]
  },
  {
    "id": 582,
    "ndex": "#0582",
    "english": "Vanillite",
    "simplified": "迷你冰",
    "pinyin": "Mínǐbīng",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you",
        "definitionEs": "tú"
      },
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      }
    ]
  },
  {
    "id": 583,
    "ndex": "#0583",
    "english": "Vanillish",
    "simplified": "多多冰",
    "pinyin": "Duōduōbīng",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      }
    ]
  },
  {
    "id": 584,
    "ndex": "#0584",
    "english": "Vanilluxe",
    "simplified": "双倍多多冰",
    "pinyin": "Shuāngbèiduōduōbīng",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "倍",
        "pinyin": "bei4",
        "definition": "multiple",
        "definitionEs": "múltiple"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      }
    ]
  },
  {
    "id": 585,
    "ndex": "#0585",
    "english": "Deerling",
    "simplified": "四季鹿",
    "pinyin": "Sìjìlù",
    "level": "Gén 5",
    "type": "Normal / Planta",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png",
    "characters": [
      {
        "char": "四",
        "pinyin": "si4",
        "definition": "four",
        "definitionEs": "cuatro"
      },
      {
        "char": "季",
        "pinyin": "ji4",
        "definition": "season",
        "definitionEs": "estación"
      },
      {
        "char": "鹿",
        "pinyin": "lu4",
        "definition": "deer",
        "definitionEs": "ciervo"
      }
    ]
  },
  {
    "id": 586,
    "ndex": "#0586",
    "english": "Sawsbuck",
    "simplified": "萌芽鹿",
    "pinyin": "Méngyálù",
    "level": "Gén 5",
    "type": "Normal / Planta",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png",
    "characters": [
      {
        "char": "萌",
        "pinyin": "meng2",
        "definition": "sprout",
        "definitionEs": "brote"
      },
      {
        "char": "芽",
        "pinyin": "ya2",
        "definition": "bud",
        "definitionEs": "brote"
      },
      {
        "char": "鹿",
        "pinyin": "lu4",
        "definition": "deer",
        "definitionEs": "ciervo"
      }
    ]
  },
  {
    "id": 587,
    "ndex": "#0587",
    "english": "Emolga",
    "simplified": "电飞鼠",
    "pinyin": "Diànfēishǔ",
    "level": "Gén 5",
    "type": "Eléctrico / Volador",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "飞",
        "pinyin": "fei1",
        "definition": "to fly",
        "definitionEs": "volar"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 588,
    "ndex": "#0588",
    "english": "Karrablast",
    "simplified": "盖盖虫",
    "pinyin": "Gàigàichóng",
    "level": "Gén 5",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png",
    "characters": [
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 589,
    "ndex": "#0589",
    "english": "Escavalier",
    "simplified": "骑士蜗牛",
    "pinyin": "QíshìguāniúQíshìwōniú",
    "level": "Gén 5",
    "type": "Bicho / Acero",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png",
    "characters": [
      {
        "char": "骑",
        "pinyin": "qi2",
        "definition": "to ride",
        "definitionEs": "montar"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      },
      {
        "char": "蜗",
        "pinyin": "wo1",
        "definition": "snail",
        "definitionEs": "caracol"
      },
      {
        "char": "牛",
        "pinyin": "niu2",
        "definition": "ox",
        "definitionEs": "buey"
      }
    ]
  },
  {
    "id": 590,
    "ndex": "#0590",
    "english": "Foongus",
    "simplified": "哎呀球菇",
    "pinyin": "Āiyāqiúgū",
    "level": "Gén 5",
    "type": "Planta / Veneno",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png",
    "characters": [
      {
        "char": "哎",
        "pinyin": "ai1",
        "definition": "hey",
        "definitionEs": "¡eh!"
      },
      {
        "char": "呀",
        "pinyin": "ya5",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 591,
    "ndex": "#0591",
    "english": "Amoonguss",
    "simplified": "败露球菇",
    "pinyin": "Bàilùqiúgū",
    "level": "Gén 5",
    "type": "Planta / Veneno",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png",
    "characters": [
      {
        "char": "败",
        "pinyin": "bai4",
        "definition": "defeat",
        "definitionEs": "derrotar"
      },
      {
        "char": "露",
        "pinyin": "lu4",
        "definition": "dew",
        "definitionEs": "rocío"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 592,
    "ndex": "#0592",
    "english": "Frillish",
    "simplified": "轻飘飘",
    "pinyin": "Qīngpiāopiāo",
    "level": "Gén 5",
    "type": "Agua / Fantasma",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png",
    "characters": [
      {
        "char": "轻",
        "pinyin": "qing1",
        "definition": "light",
        "definitionEs": "ligero"
      },
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      }
    ]
  },
  {
    "id": 593,
    "ndex": "#0593",
    "english": "Jellicent",
    "simplified": "胖嘟嘟",
    "pinyin": "Pàngdūdū",
    "level": "Gén 5",
    "type": "Agua / Fantasma",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png",
    "characters": [
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      },
      {
        "char": "嘟",
        "pinyin": "du1",
        "definition": "toot",
        "definitionEs": "pitido"
      }
    ]
  },
  {
    "id": 594,
    "ndex": "#0594",
    "english": "Alomomola",
    "simplified": "保姆曼波",
    "pinyin": "Bǎomǔmànbō",
    "level": "Gén 5",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png",
    "characters": [
      {
        "char": "保",
        "pinyin": "bao3",
        "definition": "protect",
        "definitionEs": "proteger"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "曼",
        "pinyin": "man4",
        "definition": "elegant",
        "definitionEs": "elegante"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      }
    ]
  },
  {
    "id": 595,
    "ndex": "#0595",
    "english": "Joltik",
    "simplified": "电电虫",
    "pinyin": "Diàndiànchóng",
    "level": "Gén 5",
    "type": "Bicho / Eléctrico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 596,
    "ndex": "#0596",
    "english": "Galvantula",
    "simplified": "电蜘蛛",
    "pinyin": "Diànzhīzhū",
    "level": "Gén 5",
    "type": "Bicho / Eléctrico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "蜘",
        "pinyin": "zhi1",
        "definition": "spider",
        "definitionEs": "araña"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      }
    ]
  },
  {
    "id": 597,
    "ndex": "#0597",
    "english": "Ferroseed",
    "simplified": "种子铁球",
    "pinyin": "Zhǒngzǐtiěqiú",
    "level": "Gén 5",
    "type": "Planta / Acero",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png",
    "characters": [
      {
        "char": "种",
        "pinyin": "zhong3",
        "definition": "seed",
        "definitionEs": "semilla"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      }
    ]
  },
  {
    "id": 598,
    "ndex": "#0598",
    "english": "Ferrothorn",
    "simplified": "坚果哑铃",
    "pinyin": "Jiānguǒyǎlíng",
    "level": "Gén 5",
    "type": "Planta / Acero",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png",
    "characters": [
      {
        "char": "坚",
        "pinyin": "jian1",
        "definition": "firm",
        "definitionEs": "firme"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      },
      {
        "char": "哑",
        "pinyin": "ya3",
        "definition": "mute",
        "definitionEs": "mudo"
      },
      {
        "char": "铃",
        "pinyin": "ling2",
        "definition": "bell",
        "definitionEs": "campana"
      }
    ]
  },
  {
    "id": 599,
    "ndex": "#0599",
    "english": "Klink",
    "simplified": "齿轮儿",
    "pinyin": "Chǐlún'ér",
    "level": "Gén 5",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png",
    "characters": [
      {
        "char": "齿",
        "pinyin": "chi3",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "轮",
        "pinyin": "lun2",
        "definition": "wheel",
        "definitionEs": "rueda"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 600,
    "ndex": "#0600",
    "english": "Klang",
    "simplified": "齿轮组",
    "pinyin": "Chǐlúnzǔ",
    "level": "Gén 5",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png",
    "characters": [
      {
        "char": "齿",
        "pinyin": "chi3",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "轮",
        "pinyin": "lun2",
        "definition": "wheel",
        "definitionEs": "rueda"
      },
      {
        "char": "组",
        "pinyin": "zu3",
        "definition": "group",
        "definitionEs": "grupo"
      }
    ]
  },
  {
    "id": 601,
    "ndex": "#0601",
    "english": "Klinklang",
    "simplified": "齿轮怪",
    "pinyin": "Chǐlúnguài",
    "level": "Gén 5",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png",
    "characters": [
      {
        "char": "齿",
        "pinyin": "chi3",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "轮",
        "pinyin": "lun2",
        "definition": "wheel",
        "definitionEs": "rueda"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 602,
    "ndex": "#0602",
    "english": "Tynamo",
    "simplified": "麻麻小鱼",
    "pinyin": "Mámáxiǎoyú",
    "level": "Gén 5",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png",
    "characters": [
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 603,
    "ndex": "#0603",
    "english": "Eelektrik",
    "simplified": "麻麻鳗",
    "pinyin": "Mámámán",
    "level": "Gén 5",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png",
    "characters": [
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "鳗",
        "pinyin": "man2",
        "definition": "eel",
        "definitionEs": "anguila"
      }
    ]
  },
  {
    "id": 604,
    "ndex": "#0604",
    "english": "Eelektross",
    "simplified": "麻麻鳗鱼王",
    "pinyin": "Mámámányúwáng",
    "level": "Gén 5",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png",
    "characters": [
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "鳗",
        "pinyin": "man2",
        "definition": "eel",
        "definitionEs": "anguila"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 605,
    "ndex": "#0605",
    "english": "Elgyem",
    "simplified": "小灰怪",
    "pinyin": "Xiǎohuīguài",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "灰",
        "pinyin": "hui1",
        "definition": "ash",
        "definitionEs": "ceniza"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 606,
    "ndex": "#0606",
    "english": "Beheeyem",
    "simplified": "大宇怪",
    "pinyin": "Dàyǔguài",
    "level": "Gén 5",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "宇",
        "pinyin": "yu3",
        "definition": "space",
        "definitionEs": "espacio"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 607,
    "ndex": "#0607",
    "english": "Litwick",
    "simplified": "烛光灵",
    "pinyin": "Zhúguānglíng",
    "level": "Gén 5",
    "type": "Fantasma / Fuego",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png",
    "characters": [
      {
        "char": "烛",
        "pinyin": "zhu2",
        "definition": "candle",
        "definitionEs": "vela"
      },
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 608,
    "ndex": "#0608",
    "english": "Lampent",
    "simplified": "灯火幽灵",
    "pinyin": "Dēnghuǒyōulíng",
    "level": "Gén 5",
    "type": "Fantasma / Fuego",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png",
    "characters": [
      {
        "char": "灯",
        "pinyin": "deng1",
        "definition": "lamp",
        "definitionEs": "lámpara"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "幽",
        "pinyin": "you1",
        "definition": "remote",
        "definitionEs": "remoto"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 609,
    "ndex": "#0609",
    "english": "Chandelure",
    "simplified": "水晶灯火灵",
    "pinyin": "Shuǐjīngdēnghuǒlíng",
    "level": "Gén 5",
    "type": "Fantasma / Fuego",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    "characters": [
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "晶",
        "pinyin": "jing1",
        "definition": "crystal",
        "definitionEs": "cristal"
      },
      {
        "char": "灯",
        "pinyin": "deng1",
        "definition": "lamp",
        "definitionEs": "lámpara"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 610,
    "ndex": "#0610",
    "english": "Axew",
    "simplified": "牙牙",
    "pinyin": "Yáyá",
    "level": "Gén 5",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png",
    "characters": [
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      }
    ]
  },
  {
    "id": 611,
    "ndex": "#0611",
    "english": "Fraxure",
    "simplified": "斧牙龙",
    "pinyin": "Fǔyálóng",
    "level": "Gén 5",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png",
    "characters": [
      {
        "char": "斧",
        "pinyin": "fu3",
        "definition": "axe",
        "definitionEs": "hacha"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 612,
    "ndex": "#0612",
    "english": "Haxorus",
    "simplified": "双斧战龙",
    "pinyin": "Shuāngfǔzhànlóng",
    "level": "Gén 5",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "斧",
        "pinyin": "fu3",
        "definition": "axe",
        "definitionEs": "hacha"
      },
      {
        "char": "战",
        "pinyin": "zhan4",
        "definition": "fight",
        "definitionEs": "luchar"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 613,
    "ndex": "#0613",
    "english": "Cubchoo",
    "simplified": "喷嚏熊",
    "pinyin": "Pēntìxióng",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png",
    "characters": [
      {
        "char": "喷",
        "pinyin": "pen1",
        "definition": "to spray",
        "definitionEs": "rociar"
      },
      {
        "char": "嚏",
        "pinyin": "ti4",
        "definition": "sneeze",
        "definitionEs": "estornudo"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 614,
    "ndex": "#0614",
    "english": "Beartic",
    "simplified": "冻原熊",
    "pinyin": "Dòngyuánxióng",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png",
    "characters": [
      {
        "char": "冻",
        "pinyin": "dong4",
        "definition": "to freeze",
        "definitionEs": "congelar"
      },
      {
        "char": "原",
        "pinyin": "yuan2",
        "definition": "original",
        "definitionEs": "original"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 615,
    "ndex": "#0615",
    "english": "Cryogonal",
    "simplified": "几何雪花",
    "pinyin": "Jǐhéxuěhuā",
    "level": "Gén 5",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png",
    "characters": [
      {
        "char": "几",
        "pinyin": "ji3",
        "definition": "how many",
        "definitionEs": "cuántos"
      },
      {
        "char": "何",
        "pinyin": "he2",
        "definition": "what",
        "definitionEs": "qué"
      },
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 616,
    "ndex": "#0616",
    "english": "Shelmet",
    "simplified": "小嘴蜗",
    "pinyin": "XiǎozuǐguāXiǎozuǐwō",
    "level": "Gén 5",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "蜗",
        "pinyin": "wo1",
        "definition": "snail",
        "definitionEs": "caracol"
      }
    ]
  },
  {
    "id": 617,
    "ndex": "#0617",
    "english": "Accelgor",
    "simplified": "敏捷虫",
    "pinyin": "Mǐnjiéchóng",
    "level": "Gén 5",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png",
    "characters": [
      {
        "char": "敏",
        "pinyin": "min3",
        "definition": "quick",
        "definitionEs": "rápido"
      },
      {
        "char": "捷",
        "pinyin": "jie2",
        "definition": "victory",
        "definitionEs": "victoria"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 618,
    "ndex": "#0618",
    "english": "Stunfisk",
    "simplified": "泥巴鱼",
    "pinyin": "Níbāyú",
    "level": "Gén 5",
    "type": "Tierra / Eléctrico",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png",
    "characters": [
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "巴",
        "pinyin": "ba1",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 619,
    "ndex": "#0619",
    "english": "Mienfoo",
    "simplified": "功夫鼬",
    "pinyin": "Gōngfuyòu",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png",
    "characters": [
      {
        "char": "功",
        "pinyin": "gong1",
        "definition": "merit",
        "definitionEs": "mérito"
      },
      {
        "char": "夫",
        "pinyin": "fu2",
        "definition": "(classical particle)",
        "definitionEs": "(partícula clásica)"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      }
    ]
  },
  {
    "id": 620,
    "ndex": "#0620",
    "english": "Mienshao",
    "simplified": "师父鼬",
    "pinyin": "Shīfuyòu",
    "level": "Gén 5",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png",
    "characters": [
      {
        "char": "师",
        "pinyin": "shi1",
        "definition": "teacher",
        "definitionEs": "maestro"
      },
      {
        "char": "父",
        "pinyin": "fu4",
        "definition": "father",
        "definitionEs": "padre"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      }
    ]
  },
  {
    "id": 621,
    "ndex": "#0621",
    "english": "Druddigon",
    "simplified": "赤面龙",
    "pinyin": "Chìmiànlóng",
    "level": "Gén 5",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png",
    "characters": [
      {
        "char": "赤",
        "pinyin": "chi4",
        "definition": "red",
        "definitionEs": "rojo"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "face",
        "definitionEs": "cara"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 622,
    "ndex": "#0622",
    "english": "Golett",
    "simplified": "泥偶小人",
    "pinyin": "Ní'ǒuxiǎorén",
    "level": "Gén 5",
    "type": "Tierra / Fantasma",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png",
    "characters": [
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 623,
    "ndex": "#0623",
    "english": "Golurk",
    "simplified": "泥偶巨人",
    "pinyin": "Ní'ǒujùrén",
    "level": "Gén 5",
    "type": "Tierra / Fantasma",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png",
    "characters": [
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 624,
    "ndex": "#0624",
    "english": "Pawniard",
    "simplified": "驹刀小兵",
    "pinyin": "Jūdāoxiǎobīng",
    "level": "Gén 5",
    "type": "Siniestro / Acero",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png",
    "characters": [
      {
        "char": "驹",
        "pinyin": "ju1",
        "definition": "colt",
        "definitionEs": "potro"
      },
      {
        "char": "刀",
        "pinyin": "dao1",
        "definition": "knife",
        "definitionEs": "cuchillo"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "兵",
        "pinyin": "bing1",
        "definition": "soldier",
        "definitionEs": "soldado"
      }
    ]
  },
  {
    "id": 625,
    "ndex": "#0625",
    "english": "Bisharp",
    "simplified": "劈斩司令",
    "pinyin": "Pīzhǎnsīlìng",
    "level": "Gén 5",
    "type": "Siniestro / Acero",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png",
    "characters": [
      {
        "char": "劈",
        "pinyin": "pi3",
        "definition": "split",
        "definitionEs": "dividir"
      },
      {
        "char": "斩",
        "pinyin": "zhan3",
        "definition": "to chop",
        "definitionEs": "cortar"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "manage",
        "definitionEs": "gestionar"
      },
      {
        "char": "令",
        "pinyin": "ling4",
        "definition": "order",
        "definitionEs": "ordenar"
      }
    ]
  },
  {
    "id": 626,
    "ndex": "#0626",
    "english": "Bouffalant",
    "simplified": "爆炸头水牛",
    "pinyin": "Bàozhàtóushuǐniú",
    "level": "Gén 5",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "炸",
        "pinyin": "zha4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "牛",
        "pinyin": "niu2",
        "definition": "ox",
        "definitionEs": "buey"
      }
    ]
  },
  {
    "id": 627,
    "ndex": "#0627",
    "english": "Rufflet",
    "simplified": "毛头小鹰",
    "pinyin": "Máotóuxiǎoyīng",
    "level": "Gén 5",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png",
    "characters": [
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      }
    ]
  },
  {
    "id": 628,
    "ndex": "#0628",
    "english": "Braviary",
    "simplified": "勇士雄鹰",
    "pinyin": "Yǒngshìxióngyīng",
    "level": "Gén 5",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png",
    "characters": [
      {
        "char": "勇",
        "pinyin": "yong3",
        "definition": "brave",
        "definitionEs": "valiente"
      },
      {
        "char": "士",
        "pinyin": "shi4",
        "definition": "scholar",
        "definitionEs": "erudito"
      },
      {
        "char": "雄",
        "pinyin": "xiong2",
        "definition": "male",
        "definitionEs": "macho"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      }
    ]
  },
  {
    "id": 629,
    "ndex": "#0629",
    "english": "Vullaby",
    "simplified": "秃鹰丫头",
    "pinyin": "Tūyīngyātou",
    "level": "Gén 5",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png",
    "characters": [
      {
        "char": "秃",
        "pinyin": "tu1",
        "definition": "bald",
        "definitionEs": "calvo"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      },
      {
        "char": "丫",
        "pinyin": "ya1",
        "definition": "fork",
        "definitionEs": "horquilla"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      }
    ]
  },
  {
    "id": 630,
    "ndex": "#0630",
    "english": "Mandibuzz",
    "simplified": "秃鹰娜",
    "pinyin": "Tūyīngnà",
    "level": "Gén 5",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png",
    "characters": [
      {
        "char": "秃",
        "pinyin": "tu1",
        "definition": "bald",
        "definitionEs": "calvo"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      },
      {
        "char": "娜",
        "pinyin": "na4",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 631,
    "ndex": "#0631",
    "english": "Heatmor",
    "simplified": "熔蚁兽",
    "pinyin": "Róngyǐshòu",
    "level": "Gén 5",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png",
    "characters": [
      {
        "char": "熔",
        "pinyin": "rong2",
        "definition": "smelt",
        "definitionEs": "fundir"
      },
      {
        "char": "蚁",
        "pinyin": "yi3",
        "definition": "ant",
        "definitionEs": "hormiga"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 632,
    "ndex": "#0632",
    "english": "Durant",
    "simplified": "铁蚁",
    "pinyin": "Tiěyǐ",
    "level": "Gén 5",
    "type": "Bicho / Acero",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "蚁",
        "pinyin": "yi3",
        "definition": "ant",
        "definitionEs": "hormiga"
      }
    ]
  },
  {
    "id": 633,
    "ndex": "#0633",
    "english": "Deino",
    "simplified": "单首龙",
    "pinyin": "Dānshǒulóng",
    "level": "Gén 5",
    "type": "Siniestro / Dragón",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png",
    "characters": [
      {
        "char": "单",
        "pinyin": "dan1",
        "definition": "single",
        "definitionEs": "único"
      },
      {
        "char": "首",
        "pinyin": "shou3",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 634,
    "ndex": "#0634",
    "english": "Zweilous",
    "simplified": "双首暴龙",
    "pinyin": "Shuāngshǒubàolóng",
    "level": "Gén 5",
    "type": "Siniestro / Dragón",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "首",
        "pinyin": "shou3",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 635,
    "ndex": "#0635",
    "english": "Hydreigon",
    "simplified": "三首恶龙",
    "pinyin": "Sānshǒu'èlóng",
    "level": "Gén 5",
    "type": "Siniestro / Dragón",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png",
    "characters": [
      {
        "char": "三",
        "pinyin": "san1",
        "definition": "three",
        "definitionEs": "tres"
      },
      {
        "char": "首",
        "pinyin": "shou3",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "恶",
        "pinyin": "wu4",
        "definition": "hate",
        "definitionEs": "odiar"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 636,
    "ndex": "#0636",
    "english": "Larvesta",
    "simplified": "燃烧虫",
    "pinyin": "Ránshāochóng",
    "level": "Gén 5",
    "type": "Bicho / Fuego",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png",
    "characters": [
      {
        "char": "燃",
        "pinyin": "ran2",
        "definition": "burn",
        "definitionEs": "quemar"
      },
      {
        "char": "烧",
        "pinyin": "shao1",
        "definition": "burn",
        "definitionEs": "quemar"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 637,
    "ndex": "#0637",
    "english": "Volcarona",
    "simplified": "火神蛾",
    "pinyin": "Huǒshén'é",
    "level": "Gén 5",
    "type": "Bicho / Fuego",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "神",
        "pinyin": "shen2",
        "definition": "god",
        "definitionEs": "dios"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 638,
    "ndex": "#0638",
    "english": "Cobalion",
    "simplified": "勾帕路翁",
    "pinyin": "Gōupàlùwēng",
    "level": "Gén 5",
    "type": "Acero / Lucha",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png",
    "characters": [
      {
        "char": "勾",
        "pinyin": "gou1",
        "definition": "hook",
        "definitionEs": "gancho"
      },
      {
        "char": "帕",
        "pinyin": "pa4",
        "definition": "to wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      }
    ]
  },
  {
    "id": 639,
    "ndex": "#0639",
    "english": "Terrakion",
    "simplified": "代拉基翁",
    "pinyin": "Dàilājīwēng",
    "level": "Gén 5",
    "type": "Roca / Lucha",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png",
    "characters": [
      {
        "char": "代",
        "pinyin": "dai4",
        "definition": "to substitute",
        "definitionEs": "sustituir"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      }
    ]
  },
  {
    "id": 640,
    "ndex": "#0640",
    "english": "Virizion",
    "simplified": "毕力吉翁",
    "pinyin": "Bìlìjíwēng",
    "level": "Gén 5",
    "type": "Planta / Lucha",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png",
    "characters": [
      {
        "char": "毕",
        "pinyin": "bi4",
        "definition": "complete",
        "definitionEs": "completo"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      }
    ]
  },
  {
    "id": 641,
    "ndex": "#0641",
    "english": "Tornadus",
    "simplified": "龙卷云",
    "pinyin": "Lóngjuǎnyún",
    "level": "Gén 5",
    "type": "Volador",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png",
    "characters": [
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "卷",
        "pinyin": "juan3",
        "definition": "to roll",
        "definitionEs": "enrollar"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud",
        "definitionEs": "nube"
      }
    ]
  },
  {
    "id": 642,
    "ndex": "#0642",
    "english": "Thundurus",
    "simplified": "雷电云",
    "pinyin": "Léidiànyún",
    "level": "Gén 5",
    "type": "Eléctrico / Volador",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud",
        "definitionEs": "nube"
      }
    ]
  },
  {
    "id": 643,
    "ndex": "#0643",
    "english": "Reshiram",
    "simplified": "莱希拉姆",
    "pinyin": "Láixīlāmǔ",
    "level": "Gén 5",
    "type": "Dragón / Fuego",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
    "characters": [
      {
        "char": "莱",
        "pinyin": "lai2",
        "definition": "weed",
        "definitionEs": "maleza"
      },
      {
        "char": "希",
        "pinyin": "xi1",
        "definition": "to hope",
        "definitionEs": "esperar"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 644,
    "ndex": "#0644",
    "english": "Zekrom",
    "simplified": "捷克罗姆",
    "pinyin": "Jiékèluómǔ",
    "level": "Gén 5",
    "type": "Dragón / Eléctrico",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png",
    "characters": [
      {
        "char": "捷",
        "pinyin": "jie2",
        "definition": "victory",
        "definitionEs": "victoria"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "罗",
        "pinyin": "luo2",
        "definition": "gauze",
        "definitionEs": "gasa"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 645,
    "ndex": "#0645",
    "english": "Landorus",
    "simplified": "土地云",
    "pinyin": "Tǔdìyún",
    "level": "Gén 5",
    "type": "Tierra / Volador",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud",
        "definitionEs": "nube"
      }
    ]
  },
  {
    "id": 646,
    "ndex": "#0646",
    "english": "Kyurem",
    "simplified": "酋雷姆",
    "pinyin": "Qiúléimǔ",
    "level": "Gén 5",
    "type": "Dragón / Hielo",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png",
    "characters": [
      {
        "char": "酋",
        "pinyin": "qiu2",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 647,
    "ndex": "#0647",
    "english": "Keldeo",
    "simplified": "凯路迪欧",
    "pinyin": "Kǎilùdí'ōu",
    "level": "Gén 5",
    "type": "Agua / Lucha",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png",
    "characters": [
      {
        "char": "凯",
        "pinyin": "kai3",
        "definition": "triumphant",
        "definitionEs": "triunfante"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "迪",
        "pinyin": "di2",
        "definition": "enlighten",
        "definitionEs": "iluminar"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      }
    ]
  },
  {
    "id": 648,
    "ndex": "#0648",
    "english": "Meloetta",
    "simplified": "美洛耶塔",
    "pinyin": "Měiluòyétǎ",
    "level": "Gén 5",
    "type": "Normal / Psíquico",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png",
    "characters": [
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "耶",
        "pinyin": "ye5",
        "definition": "(final particle)",
        "definitionEs": "(partícula final)"
      },
      {
        "char": "塔",
        "pinyin": "ta3",
        "definition": "tower",
        "definitionEs": "torre"
      }
    ]
  },
  {
    "id": 649,
    "ndex": "#0649",
    "english": "Genesect",
    "simplified": "盖诺赛克特",
    "pinyin": "Gàinuòsàikètè",
    "level": "Gén 5",
    "type": "Bicho / Acero",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png",
    "characters": [
      {
        "char": "盖",
        "pinyin": "gai4",
        "definition": "lid",
        "definitionEs": "tapa"
      },
      {
        "char": "诺",
        "pinyin": "nuo4",
        "definition": "promise",
        "definitionEs": "promesa"
      },
      {
        "char": "赛",
        "pinyin": "sai4",
        "definition": "compete",
        "definitionEs": "competir"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "特",
        "pinyin": "te4",
        "definition": "special",
        "definitionEs": "especial"
      }
    ]
  },
  {
    "id": 650,
    "ndex": "#0650",
    "english": "Chespin",
    "simplified": "哈力栗",
    "pinyin": "Hālìlì",
    "level": "Gén 6",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png",
    "characters": [
      {
        "char": "哈",
        "pinyin": "ha1",
        "definition": "ha!",
        "definitionEs": "¡ja!"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      },
      {
        "char": "栗",
        "pinyin": "li4",
        "definition": "chestnut",
        "definitionEs": "castaña"
      }
    ]
  },
  {
    "id": 651,
    "ndex": "#0651",
    "english": "Quilladin",
    "simplified": "胖胖哈力",
    "pinyin": "Pàngpànghālì",
    "level": "Gén 6",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png",
    "characters": [
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "哈",
        "pinyin": "ha1",
        "definition": "ha!",
        "definitionEs": "¡ja!"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "strength",
        "definitionEs": "fuerza"
      }
    ]
  },
  {
    "id": 652,
    "ndex": "#0652",
    "english": "Chesnaught",
    "simplified": "布里卡隆",
    "pinyin": "Bùlǐkǎlóng",
    "level": "Gén 6",
    "type": "Planta / Lucha",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "里",
        "pinyin": "li3",
        "definition": "li (unit)",
        "definitionEs": "li (unidad)"
      },
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      }
    ]
  },
  {
    "id": 653,
    "ndex": "#0653",
    "english": "Fennekin",
    "simplified": "火狐狸",
    "pinyin": "Huǒhúlí",
    "level": "Gén 6",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "狐",
        "pinyin": "hu2",
        "definition": "fox",
        "definitionEs": "zorro"
      },
      {
        "char": "狸",
        "pinyin": "li2",
        "definition": "raccoon dog",
        "definitionEs": "tanuki"
      }
    ]
  },
  {
    "id": 654,
    "ndex": "#0654",
    "english": "Braixen",
    "simplified": "长尾火狐",
    "pinyin": "Chángwěihuǒhú",
    "level": "Gén 6",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "狐",
        "pinyin": "hu2",
        "definition": "fox",
        "definitionEs": "zorro"
      }
    ]
  },
  {
    "id": 655,
    "ndex": "#0655",
    "english": "Delphox",
    "simplified": "妖火红狐",
    "pinyin": "Yāohuǒhónghú",
    "level": "Gén 6",
    "type": "Fuego / Psíquico",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png",
    "characters": [
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "红",
        "pinyin": "hong2",
        "definition": "red",
        "definitionEs": "rojo"
      },
      {
        "char": "狐",
        "pinyin": "hu2",
        "definition": "fox",
        "definitionEs": "zorro"
      }
    ]
  },
  {
    "id": 656,
    "ndex": "#0656",
    "english": "Froakie",
    "simplified": "呱呱泡蛙",
    "pinyin": "Guāguāpàowā",
    "level": "Gén 6",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png",
    "characters": [
      {
        "char": "呱",
        "pinyin": "gua1",
        "definition": "quack",
        "definitionEs": "graznido"
      },
      {
        "char": "呱",
        "pinyin": "gua1",
        "definition": "quack",
        "definitionEs": "graznido"
      },
      {
        "char": "泡",
        "pinyin": "pao4",
        "definition": "bubble",
        "definitionEs": "burbuja"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 657,
    "ndex": "#0657",
    "english": "Frogadier",
    "simplified": "呱头蛙",
    "pinyin": "Guātóuwā",
    "level": "Gén 6",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png",
    "characters": [
      {
        "char": "呱",
        "pinyin": "gua1",
        "definition": "quack",
        "definitionEs": "graznido"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 658,
    "ndex": "#0658",
    "english": "Greninja",
    "simplified": "甲贺忍蛙",
    "pinyin": "Jiǎhèrěnwā",
    "level": "Gén 6",
    "type": "Agua / Siniestro",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    "characters": [
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "贺",
        "pinyin": "he4",
        "definition": "congratulate",
        "definitionEs": "felicitar"
      },
      {
        "char": "忍",
        "pinyin": "ren3",
        "definition": "endure",
        "definitionEs": "soportar"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 659,
    "ndex": "#0659",
    "english": "Bunnelby",
    "simplified": "掘掘兔",
    "pinyin": "Juéjuétù",
    "level": "Gén 6",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png",
    "characters": [
      {
        "char": "掘",
        "pinyin": "jue2",
        "definition": "dig",
        "definitionEs": "cavar"
      },
      {
        "char": "掘",
        "pinyin": "jue2",
        "definition": "dig",
        "definitionEs": "cavar"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      }
    ]
  },
  {
    "id": 660,
    "ndex": "#0660",
    "english": "Diggersby",
    "simplified": "掘地兔",
    "pinyin": "Juédìtù",
    "level": "Gén 6",
    "type": "Normal / Tierra",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png",
    "characters": [
      {
        "char": "掘",
        "pinyin": "jue2",
        "definition": "dig",
        "definitionEs": "cavar"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      }
    ]
  },
  {
    "id": 661,
    "ndex": "#0661",
    "english": "Fletchling",
    "simplified": "小箭雀",
    "pinyin": "Xiǎojiànquè",
    "level": "Gén 6",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "箭",
        "pinyin": "jian4",
        "definition": "arrow",
        "definitionEs": "flecha"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ]
  },
  {
    "id": 662,
    "ndex": "#0662",
    "english": "Fletchinder",
    "simplified": "火箭雀",
    "pinyin": "Huǒjiànquè",
    "level": "Gén 6",
    "type": "Fuego / Volador",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "箭",
        "pinyin": "jian4",
        "definition": "arrow",
        "definitionEs": "flecha"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ]
  },
  {
    "id": 663,
    "ndex": "#0663",
    "english": "Talonflame",
    "simplified": "烈箭鹰",
    "pinyin": "Lièjiànyīng",
    "level": "Gén 6",
    "type": "Fuego / Volador",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "箭",
        "pinyin": "jian4",
        "definition": "arrow",
        "definitionEs": "flecha"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      }
    ]
  },
  {
    "id": 664,
    "ndex": "#0664",
    "english": "Scatterbug",
    "simplified": "粉蝶虫",
    "pinyin": "Fěndiéchóng",
    "level": "Gén 6",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png",
    "characters": [
      {
        "char": "粉",
        "pinyin": "fen3",
        "definition": "powder",
        "definitionEs": "polvo"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 665,
    "ndex": "#0665",
    "english": "Spewpa",
    "simplified": "粉蝶蛹",
    "pinyin": "Fěndiéyǒng",
    "level": "Gén 6",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png",
    "characters": [
      {
        "char": "粉",
        "pinyin": "fen3",
        "definition": "powder",
        "definitionEs": "polvo"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      },
      {
        "char": "蛹",
        "pinyin": "yong3",
        "definition": "pupa",
        "definitionEs": "pupa"
      }
    ]
  },
  {
    "id": 666,
    "ndex": "#0666",
    "english": "Vivillon",
    "simplified": "彩粉蝶",
    "pinyin": "Cǎifěndié",
    "level": "Gén 6",
    "type": "Bicho / Volador",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png",
    "characters": [
      {
        "char": "彩",
        "pinyin": "cai3",
        "definition": "color",
        "definitionEs": "color"
      },
      {
        "char": "粉",
        "pinyin": "fen3",
        "definition": "powder",
        "definitionEs": "polvo"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      }
    ]
  },
  {
    "id": 667,
    "ndex": "#0667",
    "english": "Litleo",
    "simplified": "小狮狮",
    "pinyin": "Xiǎoshīshī",
    "level": "Gén 6",
    "type": "Fuego / Normal",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 668,
    "ndex": "#0668",
    "english": "Pyroar",
    "simplified": "火炎狮",
    "pinyin": "Huǒyánshī",
    "level": "Gén 6",
    "type": "Fuego / Normal",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 669,
    "ndex": "#0669",
    "english": "Flabébé",
    "simplified": "花蓓蓓",
    "pinyin": "Huābèibèi",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "蓓",
        "pinyin": "bei4",
        "definition": "bud",
        "definitionEs": "capullo"
      },
      {
        "char": "蓓",
        "pinyin": "bei4",
        "definition": "bud",
        "definitionEs": "capullo"
      }
    ]
  },
  {
    "id": 670,
    "ndex": "#0670",
    "english": "Floette",
    "simplified": "花叶蒂",
    "pinyin": "Huāyèdì",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      },
      {
        "char": "蒂",
        "pinyin": "di4",
        "definition": "stem",
        "definitionEs": "tallo"
      }
    ]
  },
  {
    "id": 671,
    "ndex": "#0671",
    "english": "Florges",
    "simplified": "花洁夫人",
    "pinyin": "Huājiéfūrén",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "洁",
        "pinyin": "jie2",
        "definition": "clean",
        "definitionEs": "limpio"
      },
      {
        "char": "夫",
        "pinyin": "fu2",
        "definition": "(classical particle)",
        "definitionEs": "(partícula clásica)"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 672,
    "ndex": "#0672",
    "english": "Skiddo",
    "simplified": "坐骑小羊",
    "pinyin": "Zuòqíxiǎoyáng",
    "level": "Gén 6",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png",
    "characters": [
      {
        "char": "坐",
        "pinyin": "zuo4",
        "definition": "to sit",
        "definitionEs": "sentarse"
      },
      {
        "char": "骑",
        "pinyin": "qi2",
        "definition": "to ride",
        "definitionEs": "montar"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 673,
    "ndex": "#0673",
    "english": "Gogoat",
    "simplified": "坐骑山羊",
    "pinyin": "Zuòqíshānyáng",
    "level": "Gén 6",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png",
    "characters": [
      {
        "char": "坐",
        "pinyin": "zuo4",
        "definition": "to sit",
        "definitionEs": "sentarse"
      },
      {
        "char": "骑",
        "pinyin": "qi2",
        "definition": "to ride",
        "definitionEs": "montar"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 674,
    "ndex": "#0674",
    "english": "Pancham",
    "simplified": "顽皮熊猫",
    "pinyin": "Wánpíxióngmāo",
    "level": "Gén 6",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png",
    "characters": [
      {
        "char": "顽",
        "pinyin": "wan2",
        "definition": "mischievous",
        "definitionEs": "travieso"
      },
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 675,
    "ndex": "#0675",
    "english": "Pangoro",
    "simplified": "霸道熊猫",
    "pinyin": "LiúmángxióngmāoBàdàoxióngmāo",
    "level": "Gén 6",
    "type": "Lucha / Siniestro",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png",
    "characters": [
      {
        "char": "霸",
        "pinyin": "ba4",
        "definition": "tyrant",
        "definitionEs": "tirano"
      },
      {
        "char": "道",
        "pinyin": "dao4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      },
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      }
    ]
  },
  {
    "id": 676,
    "ndex": "#0676",
    "english": "Furfrou",
    "simplified": "多丽米亚",
    "pinyin": "DuōlìmǐyǎDuōlìmǐyà",
    "level": "Gén 6",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "丽",
        "pinyin": "li4",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "米",
        "pinyin": "mi3",
        "definition": "rice",
        "definitionEs": "arroz"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 677,
    "ndex": "#0677",
    "english": "Espurr",
    "simplified": "妙喵",
    "pinyin": "Miàomiāo",
    "level": "Gén 6",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png",
    "characters": [
      {
        "char": "妙",
        "pinyin": "miao4",
        "definition": "clever",
        "definitionEs": "ingenioso"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 678,
    "ndex": "#0678",
    "english": "Meowstic",
    "simplified": "超能妙喵",
    "pinyin": "Chāonéngmiàomiāo",
    "level": "Gén 6",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "能",
        "pinyin": "neng2",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "妙",
        "pinyin": "miao4",
        "definition": "clever",
        "definitionEs": "ingenioso"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 679,
    "ndex": "#0679",
    "english": "Honedge",
    "simplified": "独剑鞘",
    "pinyin": "Dújiànqiào",
    "level": "Gén 6",
    "type": "Acero / Fantasma",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png",
    "characters": [
      {
        "char": "独",
        "pinyin": "du2",
        "definition": "lone",
        "definitionEs": "solo"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      },
      {
        "char": "鞘",
        "pinyin": "qiao4",
        "definition": "scabbard",
        "definitionEs": "vaina"
      }
    ]
  },
  {
    "id": 680,
    "ndex": "#0680",
    "english": "Doublade",
    "simplified": "双剑鞘",
    "pinyin": "Shuāngjiànqiào",
    "level": "Gén 6",
    "type": "Acero / Fantasma",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png",
    "characters": [
      {
        "char": "双",
        "pinyin": "shuang1",
        "definition": "double",
        "definitionEs": "doble"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      },
      {
        "char": "鞘",
        "pinyin": "qiao4",
        "definition": "scabbard",
        "definitionEs": "vaina"
      }
    ]
  },
  {
    "id": 681,
    "ndex": "#0681",
    "english": "Aegislash",
    "simplified": "坚盾剑怪",
    "pinyin": "Jiāndùnjiànguài",
    "level": "Gén 6",
    "type": "Acero / Fantasma",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png",
    "characters": [
      {
        "char": "坚",
        "pinyin": "jian1",
        "definition": "firm",
        "definitionEs": "firme"
      },
      {
        "char": "盾",
        "pinyin": "dun4",
        "definition": "shield",
        "definitionEs": "escudo"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 682,
    "ndex": "#0682",
    "english": "Spritzee",
    "simplified": "粉香香",
    "pinyin": "Fěnxiāngxiāng",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png",
    "characters": [
      {
        "char": "粉",
        "pinyin": "fen3",
        "definition": "powder",
        "definitionEs": "polvo"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      }
    ]
  },
  {
    "id": 683,
    "ndex": "#0683",
    "english": "Aromatisse",
    "simplified": "芳香精",
    "pinyin": "Fāngxiāngjīng",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png",
    "characters": [
      {
        "char": "芳",
        "pinyin": "fang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "精",
        "pinyin": "jing1",
        "definition": "essence",
        "definitionEs": "esencia"
      }
    ]
  },
  {
    "id": 684,
    "ndex": "#0684",
    "english": "Swirlix",
    "simplified": "绵绵泡芙",
    "pinyin": "Miánmiánpàofú",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png",
    "characters": [
      {
        "char": "绵",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      },
      {
        "char": "绵",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      },
      {
        "char": "泡",
        "pinyin": "pao4",
        "definition": "bubble",
        "definitionEs": "burbuja"
      },
      {
        "char": "芙",
        "pinyin": "fu2",
        "definition": "lotus",
        "definitionEs": "loto"
      }
    ]
  },
  {
    "id": 685,
    "ndex": "#0685",
    "english": "Slurpuff",
    "simplified": "胖甜妮",
    "pinyin": "PàngtiánníPàngtiánnī",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png",
    "characters": [
      {
        "char": "胖",
        "pinyin": "pang4",
        "definition": "plump",
        "definitionEs": "regordete"
      },
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "妮",
        "pinyin": "ni1",
        "definition": "girl",
        "definitionEs": "niña"
      }
    ]
  },
  {
    "id": 686,
    "ndex": "#0686",
    "english": "Inkay",
    "simplified": "好啦鱿",
    "pinyin": "Hǎolayóu",
    "level": "Gén 6",
    "type": "Siniestro / Psíquico",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png",
    "characters": [
      {
        "char": "好",
        "pinyin": "hao4",
        "definition": "appreciate",
        "definitionEs": "apreciar"
      },
      {
        "char": "啦",
        "pinyin": "la",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鱿",
        "pinyin": "you2",
        "definition": "squid",
        "definitionEs": "calamar"
      }
    ]
  },
  {
    "id": 687,
    "ndex": "#0687",
    "english": "Malamar",
    "simplified": "乌贼王",
    "pinyin": "Wūzéiwáng",
    "level": "Gén 6",
    "type": "Siniestro / Psíquico",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png",
    "characters": [
      {
        "char": "乌",
        "pinyin": "wu1",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "贼",
        "pinyin": "zei2",
        "definition": "thief",
        "definitionEs": "ladrón"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 688,
    "ndex": "#0688",
    "english": "Binacle",
    "simplified": "龟脚脚",
    "pinyin": "Guījiǎojiǎo",
    "level": "Gén 6",
    "type": "Roca / Agua",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png",
    "characters": [
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      },
      {
        "char": "脚",
        "pinyin": "jue2",
        "definition": "role",
        "definitionEs": "papel"
      },
      {
        "char": "脚",
        "pinyin": "jue2",
        "definition": "role",
        "definitionEs": "papel"
      }
    ]
  },
  {
    "id": 689,
    "ndex": "#0689",
    "english": "Barbaracle",
    "simplified": "龟足巨铠",
    "pinyin": "Guīzújùkǎi",
    "level": "Gén 6",
    "type": "Roca / Agua",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png",
    "characters": [
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      },
      {
        "char": "足",
        "pinyin": "zu2",
        "definition": "foot",
        "definitionEs": "pie"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "铠",
        "pinyin": "kai3",
        "definition": "armor",
        "definitionEs": "armadura"
      }
    ]
  },
  {
    "id": 690,
    "ndex": "#0690",
    "english": "Skrelp",
    "simplified": "垃垃藻",
    "pinyin": "LèlèzǎoLālāzǎo",
    "level": "Gén 6",
    "type": "Veneno / Agua",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png",
    "characters": [
      {
        "char": "垃",
        "pinyin": "la1",
        "definition": "trash",
        "definitionEs": "basura"
      },
      {
        "char": "垃",
        "pinyin": "la1",
        "definition": "trash",
        "definitionEs": "basura"
      },
      {
        "char": "藻",
        "pinyin": "zao3",
        "definition": "algae",
        "definitionEs": "algas"
      }
    ]
  },
  {
    "id": 691,
    "ndex": "#0691",
    "english": "Dragalge",
    "simplified": "毒藻龙",
    "pinyin": "Dúzǎolóng",
    "level": "Gén 6",
    "type": "Veneno / Dragón",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "藻",
        "pinyin": "zao3",
        "definition": "algae",
        "definitionEs": "algas"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 692,
    "ndex": "#0692",
    "english": "Clauncher",
    "simplified": "铁臂枪虾",
    "pinyin": "Tiěbìqiāngxiā",
    "level": "Gén 6",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "臂",
        "pinyin": "bi4",
        "definition": "arm",
        "definitionEs": "brazo"
      },
      {
        "char": "枪",
        "pinyin": "qiang1",
        "definition": "gun",
        "definitionEs": "arma"
      },
      {
        "char": "虾",
        "pinyin": "xia1",
        "definition": "shrimp",
        "definitionEs": "camarón"
      }
    ]
  },
  {
    "id": 693,
    "ndex": "#0693",
    "english": "Clawitzer",
    "simplified": "钢炮臂虾",
    "pinyin": "Gāngpàobìxiā",
    "level": "Gén 6",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png",
    "characters": [
      {
        "char": "钢",
        "pinyin": "gang1",
        "definition": "steel",
        "definitionEs": "acero"
      },
      {
        "char": "炮",
        "pinyin": "pao4",
        "definition": "cannon",
        "definitionEs": "cañón"
      },
      {
        "char": "臂",
        "pinyin": "bi4",
        "definition": "arm",
        "definitionEs": "brazo"
      },
      {
        "char": "虾",
        "pinyin": "xia1",
        "definition": "shrimp",
        "definitionEs": "camarón"
      }
    ]
  },
  {
    "id": 694,
    "ndex": "#0694",
    "english": "Helioptile",
    "simplified": "伞电蜥",
    "pinyin": "Sǎndiànxī",
    "level": "Gén 6",
    "type": "Eléctrico / Normal",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png",
    "characters": [
      {
        "char": "伞",
        "pinyin": "san3",
        "definition": "umbrella",
        "definitionEs": "paraguas"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 695,
    "ndex": "#0695",
    "english": "Heliolisk",
    "simplified": "光电伞蜥",
    "pinyin": "Guāngdiànsǎnxī",
    "level": "Gén 6",
    "type": "Eléctrico / Normal",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png",
    "characters": [
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "伞",
        "pinyin": "san3",
        "definition": "umbrella",
        "definitionEs": "paraguas"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 696,
    "ndex": "#0696",
    "english": "Tyrunt",
    "simplified": "宝宝暴龙",
    "pinyin": "Bǎobaobàolóng",
    "level": "Gén 6",
    "type": "Roca / Dragón",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png",
    "characters": [
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      },
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 697,
    "ndex": "#0697",
    "english": "Tyrantrum",
    "simplified": "怪颚龙",
    "pinyin": "Guài'èlóng",
    "level": "Gén 6",
    "type": "Roca / Dragón",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png",
    "characters": [
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "颚",
        "pinyin": "e4",
        "definition": "jaw",
        "definitionEs": "mandíbula"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 698,
    "ndex": "#0698",
    "english": "Amaura",
    "simplified": "冰雪龙",
    "pinyin": "Bīngxuělóng",
    "level": "Gén 6",
    "type": "Roca / Hielo",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 699,
    "ndex": "#0699",
    "english": "Aurorus",
    "simplified": "冰雪巨龙",
    "pinyin": "Bīngxuějùlóng",
    "level": "Gén 6",
    "type": "Roca / Hielo",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 700,
    "ndex": "#0700",
    "english": "Sylveon",
    "simplified": "仙子伊布",
    "pinyin": "Xiānzǐyībù",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
    "characters": [
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      },
      {
        "char": "子",
        "pinyin": "zi3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 701,
    "ndex": "#0701",
    "english": "Hawlucha",
    "simplified": "摔角鹰人",
    "pinyin": "Shuāijiǎoyīngrén",
    "level": "Gén 6",
    "type": "Lucha / Volador",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png",
    "characters": [
      {
        "char": "摔",
        "pinyin": "shuai1",
        "definition": "fall",
        "definitionEs": "caer"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "鹰",
        "pinyin": "ying1",
        "definition": "eagle",
        "definitionEs": "águila"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 702,
    "ndex": "#0702",
    "english": "Dedenne",
    "simplified": "咚咚鼠",
    "pinyin": "Dōngdōngshǔ",
    "level": "Gén 6",
    "type": "Eléctrico / Hada",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png",
    "characters": [
      {
        "char": "咚",
        "pinyin": "dong1",
        "definition": "boom",
        "definitionEs": "retumbar"
      },
      {
        "char": "咚",
        "pinyin": "dong1",
        "definition": "boom",
        "definitionEs": "retumbar"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 703,
    "ndex": "#0703",
    "english": "Carbink",
    "simplified": "小碎钻",
    "pinyin": "Xiǎosuìzuàn",
    "level": "Gén 6",
    "type": "Roca / Hada",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "碎",
        "pinyin": "sui4",
        "definition": "shatter",
        "definitionEs": "romper"
      },
      {
        "char": "钻",
        "pinyin": "zuan1",
        "definition": "to drill",
        "definitionEs": "taladrar"
      }
    ]
  },
  {
    "id": 704,
    "ndex": "#0704",
    "english": "Goomy",
    "simplified": "黏黏宝",
    "pinyin": "Niánniánbǎo",
    "level": "Gén 6",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png",
    "characters": [
      {
        "char": "黏",
        "pinyin": "nian2",
        "definition": "sticky",
        "definitionEs": "pegajoso"
      },
      {
        "char": "黏",
        "pinyin": "nian2",
        "definition": "sticky",
        "definitionEs": "pegajoso"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 705,
    "ndex": "#0705",
    "english": "Sliggoo",
    "simplified": "黏美儿",
    "pinyin": "Niánměi'er",
    "level": "Gén 6",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png",
    "characters": [
      {
        "char": "黏",
        "pinyin": "nian2",
        "definition": "sticky",
        "definitionEs": "pegajoso"
      },
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 706,
    "ndex": "#0706",
    "english": "Goodra",
    "simplified": "黏美龙",
    "pinyin": "Niánměilóng",
    "level": "Gén 6",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png",
    "characters": [
      {
        "char": "黏",
        "pinyin": "nian2",
        "definition": "sticky",
        "definitionEs": "pegajoso"
      },
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 707,
    "ndex": "#0707",
    "english": "Klefki",
    "simplified": "钥圈儿",
    "pinyin": "Yàoquān'ér",
    "level": "Gén 6",
    "type": "Acero / Hada",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png",
    "characters": [
      {
        "char": "钥",
        "pinyin": "yue4",
        "definition": "key",
        "definitionEs": "llave"
      },
      {
        "char": "圈",
        "pinyin": "quan1",
        "definition": "circle",
        "definitionEs": "círculo"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 708,
    "ndex": "#0708",
    "english": "Phantump",
    "simplified": "小木灵",
    "pinyin": "Xiǎomùlíng",
    "level": "Gén 6",
    "type": "Fantasma / Planta",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 709,
    "ndex": "#0709",
    "english": "Trevenant",
    "simplified": "朽木妖",
    "pinyin": "Xiǔmùyāo",
    "level": "Gén 6",
    "type": "Fantasma / Planta",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png",
    "characters": [
      {
        "char": "朽",
        "pinyin": "xiu3",
        "definition": "rotten",
        "definitionEs": "podrido"
      },
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      }
    ]
  },
  {
    "id": 710,
    "ndex": "#0710",
    "english": "Pumpkaboo",
    "simplified": "南瓜精",
    "pinyin": "Nánguājīng",
    "level": "Gén 6",
    "type": "Fantasma / Planta",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png",
    "characters": [
      {
        "char": "南",
        "pinyin": "nan2",
        "definition": "south",
        "definitionEs": "sur"
      },
      {
        "char": "瓜",
        "pinyin": "gua1",
        "definition": "melon",
        "definitionEs": "melón"
      },
      {
        "char": "精",
        "pinyin": "jing1",
        "definition": "essence",
        "definitionEs": "esencia"
      }
    ]
  },
  {
    "id": 711,
    "ndex": "#0711",
    "english": "Gourgeist",
    "simplified": "南瓜怪人",
    "pinyin": "Nánguāguàirén",
    "level": "Gén 6",
    "type": "Fantasma / Planta",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png",
    "characters": [
      {
        "char": "南",
        "pinyin": "nan2",
        "definition": "south",
        "definitionEs": "sur"
      },
      {
        "char": "瓜",
        "pinyin": "gua1",
        "definition": "melon",
        "definitionEs": "melón"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 712,
    "ndex": "#0712",
    "english": "Bergmite",
    "simplified": "冰宝",
    "pinyin": "Bīngbǎo",
    "level": "Gén 6",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 713,
    "ndex": "#0713",
    "english": "Avalugg",
    "simplified": "冰岩怪",
    "pinyin": "Bīngyánguài",
    "level": "Gén 6",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "怪",
        "pinyin": "guai4",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 714,
    "ndex": "#0714",
    "english": "Noibat",
    "simplified": "嗡蝠",
    "pinyin": "Wēngfú",
    "level": "Gén 6",
    "type": "Volador / Dragón",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png",
    "characters": [
      {
        "char": "嗡",
        "pinyin": "weng1",
        "definition": "buzz",
        "definitionEs": "zumbar"
      },
      {
        "char": "蝠",
        "pinyin": "fu2",
        "definition": "bat",
        "definitionEs": "murciélago"
      }
    ]
  },
  {
    "id": 715,
    "ndex": "#0715",
    "english": "Noivern",
    "simplified": "音波龙",
    "pinyin": "Yīnbōlóng",
    "level": "Gén 6",
    "type": "Volador / Dragón",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png",
    "characters": [
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 716,
    "ndex": "#0716",
    "english": "Xerneas",
    "simplified": "哲尔尼亚斯",
    "pinyin": "Zhé'ěrníyǎsīZhé'ěrníyàsī",
    "level": "Gén 6",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
    "characters": [
      {
        "char": "哲",
        "pinyin": "zhe2",
        "definition": "wise",
        "definitionEs": "sabio"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 717,
    "ndex": "#0717",
    "english": "Yveltal",
    "simplified": "伊裴尔塔尔",
    "pinyin": "Yīpéi'ěrtǎ'ěr",
    "level": "Gén 6",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
    "characters": [
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "裴",
        "pinyin": "pei2",
        "definition": "surname",
        "definitionEs": "apellido"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "塔",
        "pinyin": "ta3",
        "definition": "tower",
        "definitionEs": "torre"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      }
    ]
  },
  {
    "id": 718,
    "ndex": "#0718",
    "english": "Zygarde",
    "simplified": "基格尔德",
    "pinyin": "Jīgé'ěrdé",
    "level": "Gén 6",
    "type": "Dragón / Tierra",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png",
    "characters": [
      {
        "char": "基",
        "pinyin": "ji1",
        "definition": "base",
        "definitionEs": "base"
      },
      {
        "char": "格",
        "pinyin": "ge2",
        "definition": "grid",
        "definitionEs": "cuadrícula"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      }
    ]
  },
  {
    "id": 719,
    "ndex": "#0719",
    "english": "Diancie",
    "simplified": "蒂安希",
    "pinyin": "Dì'ānxī",
    "level": "Gén 6",
    "type": "Roca / Hada",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png",
    "characters": [
      {
        "char": "蒂",
        "pinyin": "di4",
        "definition": "stem",
        "definitionEs": "tallo"
      },
      {
        "char": "安",
        "pinyin": "an1",
        "definition": "calm",
        "definitionEs": "tranquilo"
      },
      {
        "char": "希",
        "pinyin": "xi1",
        "definition": "to hope",
        "definitionEs": "esperar"
      }
    ]
  },
  {
    "id": 720,
    "ndex": "#0720",
    "english": "Hoopa",
    "simplified": "胡帕",
    "pinyin": "Húpà",
    "level": "Gén 6",
    "type": "Psíquico / Fantasma",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png",
    "characters": [
      {
        "char": "胡",
        "pinyin": "hu2",
        "definition": "beard",
        "definitionEs": "barba"
      },
      {
        "char": "帕",
        "pinyin": "pa4",
        "definition": "to wrap",
        "definitionEs": "envolver"
      }
    ]
  },
  {
    "id": 721,
    "ndex": "#0721",
    "english": "Volcanion",
    "simplified": "波尔凯尼恩",
    "pinyin": "Bō'ěrkǎiní'ēn",
    "level": "Gén 6",
    "type": "Fuego / Agua",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "凯",
        "pinyin": "kai3",
        "definition": "triumphant",
        "definitionEs": "triunfante"
      },
      {
        "char": "尼",
        "pinyin": "ni2",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "恩",
        "pinyin": "en1",
        "definition": "favor",
        "definitionEs": "favor"
      }
    ]
  },
  {
    "id": 722,
    "ndex": "#0722",
    "english": "Rowlet",
    "simplified": "木木枭",
    "pinyin": "Mùmùxiāo",
    "level": "Gén 7",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png",
    "characters": [
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      },
      {
        "char": "枭",
        "pinyin": "xiao1",
        "definition": "owl",
        "definitionEs": "búho"
      }
    ]
  },
  {
    "id": 723,
    "ndex": "#0723",
    "english": "Dartrix",
    "simplified": "投羽枭",
    "pinyin": "Tóuyǔxiāo",
    "level": "Gén 7",
    "type": "Planta / Volador",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png",
    "characters": [
      {
        "char": "投",
        "pinyin": "tou2",
        "definition": "throw",
        "definitionEs": "lanzar"
      },
      {
        "char": "羽",
        "pinyin": "yu3",
        "definition": "feather",
        "definitionEs": "pluma"
      },
      {
        "char": "枭",
        "pinyin": "xiao1",
        "definition": "owl",
        "definitionEs": "búho"
      }
    ]
  },
  {
    "id": 724,
    "ndex": "#0724",
    "english": "Decidueye",
    "simplified": "狙射树枭",
    "pinyin": "Jūshèshùxiāo",
    "level": "Gén 7",
    "type": "Planta / Fantasma",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png",
    "characters": [
      {
        "char": "狙",
        "pinyin": "ju1",
        "definition": "snipe",
        "definitionEs": "acechar"
      },
      {
        "char": "射",
        "pinyin": "she4",
        "definition": "shoot",
        "definitionEs": "disparar"
      },
      {
        "char": "树",
        "pinyin": "shu4",
        "definition": "tree",
        "definitionEs": "árbol"
      },
      {
        "char": "枭",
        "pinyin": "xiao1",
        "definition": "owl",
        "definitionEs": "búho"
      }
    ]
  },
  {
    "id": 725,
    "ndex": "#0725",
    "english": "Litten",
    "simplified": "火斑喵",
    "pinyin": "Huǒbānmiāo",
    "level": "Gén 7",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png",
    "characters": [
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 726,
    "ndex": "#0726",
    "english": "Torracat",
    "simplified": "炎热喵",
    "pinyin": "Yánrèmiāo",
    "level": "Gén 7",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png",
    "characters": [
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "热",
        "pinyin": "re4",
        "definition": "hot",
        "definitionEs": "caliente"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 727,
    "ndex": "#0727",
    "english": "Incineroar",
    "simplified": "炽焰咆哮虎",
    "pinyin": "Chìyànpáoxiāohǔ",
    "level": "Gén 7",
    "type": "Fuego / Siniestro",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    "characters": [
      {
        "char": "炽",
        "pinyin": "chi4",
        "definition": "burning",
        "definitionEs": "ardiente"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "咆",
        "pinyin": "pao2",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "哮",
        "pinyin": "xiao4",
        "definition": "pant",
        "definitionEs": "jadear"
      },
      {
        "char": "虎",
        "pinyin": "hu3",
        "definition": "tiger",
        "definitionEs": "tigre"
      }
    ]
  },
  {
    "id": 728,
    "ndex": "#0728",
    "english": "Popplio",
    "simplified": "球球海狮",
    "pinyin": "Qiúqiúhǎishī",
    "level": "Gén 7",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png",
    "characters": [
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "球",
        "pinyin": "qiu2",
        "definition": "ball",
        "definitionEs": "pelota"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 729,
    "ndex": "#0729",
    "english": "Brionne",
    "simplified": "花漾海狮",
    "pinyin": "Huāyànghǎishī",
    "level": "Gén 7",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "漾",
        "pinyin": "yang4",
        "definition": "overflow",
        "definitionEs": "desbordar"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      }
    ]
  },
  {
    "id": 730,
    "ndex": "#0730",
    "english": "Primarina",
    "simplified": "西狮海壬",
    "pinyin": "Xīshīhǎirén",
    "level": "Gén 7",
    "type": "Agua / Hada",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    "characters": [
      {
        "char": "西",
        "pinyin": "xi1",
        "definition": "west",
        "definitionEs": "oeste"
      },
      {
        "char": "狮",
        "pinyin": "shi1",
        "definition": "lion",
        "definitionEs": "león"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "壬",
        "pinyin": "ren2",
        "definition": "ninth",
        "definitionEs": "noveno"
      }
    ]
  },
  {
    "id": 731,
    "ndex": "#0731",
    "english": "Pikipek",
    "simplified": "小笃儿",
    "pinyin": "Xiǎodǔ'ér",
    "level": "Gén 7",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "笃",
        "pinyin": "du3",
        "definition": "sincere",
        "definitionEs": "sincero"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 732,
    "ndex": "#0732",
    "english": "Trumbeak",
    "simplified": "喇叭啄鸟",
    "pinyin": "Lǎbāzhuóniǎo",
    "level": "Gén 7",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png",
    "characters": [
      {
        "char": "喇",
        "pinyin": "la3",
        "definition": "trumpet",
        "definitionEs": "trompeta"
      },
      {
        "char": "叭",
        "pinyin": "ba1",
        "definition": "(onomatopoeia)",
        "definitionEs": "(onomatopeya)"
      },
      {
        "char": "啄",
        "pinyin": "zhuo2",
        "definition": "peck",
        "definitionEs": "picotear"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 733,
    "ndex": "#0733",
    "english": "Toucannon",
    "simplified": "铳嘴大鸟",
    "pinyin": "Chòngzuǐdàniǎo",
    "level": "Gén 7",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png",
    "characters": [
      {
        "char": "铳",
        "pinyin": "chong4",
        "definition": "firearm",
        "definitionEs": "arma de fuego"
      },
      {
        "char": "嘴",
        "pinyin": "zui3",
        "definition": "mouth",
        "definitionEs": "boca"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 734,
    "ndex": "#0734",
    "english": "Yungoos",
    "simplified": "猫鼬少",
    "pinyin": "Māoyòushào",
    "level": "Gén 7",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png",
    "characters": [
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      },
      {
        "char": "少",
        "pinyin": "shao4",
        "definition": "young",
        "definitionEs": "joven"
      }
    ]
  },
  {
    "id": 735,
    "ndex": "#0735",
    "english": "Gumshoos",
    "simplified": "猫鼬探长",
    "pinyin": "Māoyòutànzhǎng",
    "level": "Gén 7",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png",
    "characters": [
      {
        "char": "猫",
        "pinyin": "mao1",
        "definition": "cat",
        "definitionEs": "gato"
      },
      {
        "char": "鼬",
        "pinyin": "you4",
        "definition": "weasel",
        "definitionEs": "comadreja"
      },
      {
        "char": "探",
        "pinyin": "tan4",
        "definition": "explore",
        "definitionEs": "explorar"
      },
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      }
    ]
  },
  {
    "id": 736,
    "ndex": "#0736",
    "english": "Grubbin",
    "simplified": "强颚鸡母虫",
    "pinyin": "Qiáng'èjīmǔchóng",
    "level": "Gén 7",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png",
    "characters": [
      {
        "char": "强",
        "pinyin": "qiang3",
        "definition": "force",
        "definitionEs": "forzar"
      },
      {
        "char": "颚",
        "pinyin": "e4",
        "definition": "jaw",
        "definitionEs": "mandíbula"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      },
      {
        "char": "母",
        "pinyin": "mu3",
        "definition": "mother",
        "definitionEs": "madre"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 737,
    "ndex": "#0737",
    "english": "Charjabug",
    "simplified": "虫电宝",
    "pinyin": "Chóngdiànbǎo",
    "level": "Gén 7",
    "type": "Bicho / Eléctrico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png",
    "characters": [
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 738,
    "ndex": "#0738",
    "english": "Vikavolt",
    "simplified": "锹农炮虫",
    "pinyin": "Qiāonóngpàochóng",
    "level": "Gén 7",
    "type": "Bicho / Eléctrico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png",
    "characters": [
      {
        "char": "锹",
        "pinyin": "qiao1",
        "definition": "shovel",
        "definitionEs": "pala"
      },
      {
        "char": "农",
        "pinyin": "nong2",
        "definition": "farmer",
        "definitionEs": "agricultor"
      },
      {
        "char": "炮",
        "pinyin": "pao4",
        "definition": "cannon",
        "definitionEs": "cañón"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 739,
    "ndex": "#0739",
    "english": "Crabrawler",
    "simplified": "好胜蟹",
    "pinyin": "Hàoshèngxiè",
    "level": "Gén 7",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png",
    "characters": [
      {
        "char": "好",
        "pinyin": "hao4",
        "definition": "appreciate",
        "definitionEs": "apreciar"
      },
      {
        "char": "胜",
        "pinyin": "sheng4",
        "definition": "victory",
        "definitionEs": "victoria"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ]
  },
  {
    "id": 740,
    "ndex": "#0740",
    "english": "Crabominable",
    "simplified": "好胜毛蟹",
    "pinyin": "Hàoshèngmáoxiè",
    "level": "Gén 7",
    "type": "Lucha / Hielo",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png",
    "characters": [
      {
        "char": "好",
        "pinyin": "hao4",
        "definition": "appreciate",
        "definitionEs": "apreciar"
      },
      {
        "char": "胜",
        "pinyin": "sheng4",
        "definition": "victory",
        "definitionEs": "victoria"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ]
  },
  {
    "id": 741,
    "ndex": "#0741",
    "english": "Oricorio",
    "simplified": "花舞鸟",
    "pinyin": "Huāwǔniǎo",
    "level": "Gén 7",
    "type": "Fuego / Volador",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "舞",
        "pinyin": "wu3",
        "definition": "dance",
        "definitionEs": "bailar"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 742,
    "ndex": "#0742",
    "english": "Cutiefly",
    "simplified": "萌虻",
    "pinyin": "Méngméng",
    "level": "Gén 7",
    "type": "Bicho / Hada",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
    "characters": [
      {
        "char": "萌",
        "pinyin": "meng2",
        "definition": "sprout",
        "definitionEs": "brote"
      },
      {
        "char": "虻",
        "pinyin": "meng2",
        "definition": "horsefly",
        "definitionEs": "tábano"
      }
    ]
  },
  {
    "id": 743,
    "ndex": "#0743",
    "english": "Ribombee",
    "simplified": "蝶结萌虻",
    "pinyin": "Diéjiéméngméng",
    "level": "Gén 7",
    "type": "Bicho / Hada",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png",
    "characters": [
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      },
      {
        "char": "结",
        "pinyin": "jie2",
        "definition": "knot",
        "definitionEs": "nudo"
      },
      {
        "char": "萌",
        "pinyin": "meng2",
        "definition": "sprout",
        "definitionEs": "brote"
      },
      {
        "char": "虻",
        "pinyin": "meng2",
        "definition": "horsefly",
        "definitionEs": "tábano"
      }
    ]
  },
  {
    "id": 744,
    "ndex": "#0744",
    "english": "Rockruff",
    "simplified": "岩狗狗",
    "pinyin": "Yángǒugǒu",
    "level": "Gén 7",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png",
    "characters": [
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 745,
    "ndex": "#0745",
    "english": "Lycanroc",
    "simplified": "鬃岩狼人",
    "pinyin": "Zōngyánlángrén",
    "level": "Gén 7",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png",
    "characters": [
      {
        "char": "鬃",
        "pinyin": "zong1",
        "definition": "mane",
        "definitionEs": "crin"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "狼",
        "pinyin": "lang2",
        "definition": "wolf",
        "definitionEs": "lobo"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      }
    ]
  },
  {
    "id": 746,
    "ndex": "#0746",
    "english": "Wishiwashi",
    "simplified": "弱丁鱼",
    "pinyin": "Ruòdīngyú",
    "level": "Gén 7",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png",
    "characters": [
      {
        "char": "弱",
        "pinyin": "ruo4",
        "definition": "weak",
        "definitionEs": "débil"
      },
      {
        "char": "丁",
        "pinyin": "ding1",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 747,
    "ndex": "#0747",
    "english": "Mareanie",
    "simplified": "好坏星",
    "pinyin": "Hǎohuàixīng",
    "level": "Gén 7",
    "type": "Veneno / Agua",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png",
    "characters": [
      {
        "char": "好",
        "pinyin": "hao4",
        "definition": "appreciate",
        "definitionEs": "apreciar"
      },
      {
        "char": "坏",
        "pinyin": "huai4",
        "definition": "bad",
        "definitionEs": "malo"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      }
    ]
  },
  {
    "id": 748,
    "ndex": "#0748",
    "english": "Toxapex",
    "simplified": "超坏星",
    "pinyin": "Chāohuàixīng",
    "level": "Gén 7",
    "type": "Veneno / Agua",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "坏",
        "pinyin": "huai4",
        "definition": "bad",
        "definitionEs": "malo"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      }
    ]
  },
  {
    "id": 749,
    "ndex": "#0749",
    "english": "Mudbray",
    "simplified": "泥驴仔",
    "pinyin": "Nílǘzǎi",
    "level": "Gén 7",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png",
    "characters": [
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "驴",
        "pinyin": "lü2",
        "definition": "donkey",
        "definitionEs": "burro"
      },
      {
        "char": "仔",
        "pinyin": "zi3",
        "definition": "young",
        "definitionEs": "joven"
      }
    ]
  },
  {
    "id": 750,
    "ndex": "#0750",
    "english": "Mudsdale",
    "simplified": "重泥挽马",
    "pinyin": "Zhòngníwǎnmǎ",
    "level": "Gén 7",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png",
    "characters": [
      {
        "char": "重",
        "pinyin": "zhong4",
        "definition": "heavy",
        "definitionEs": "pesado"
      },
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      },
      {
        "char": "挽",
        "pinyin": "wan3",
        "definition": "pull",
        "definitionEs": "tirar"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 751,
    "ndex": "#0751",
    "english": "Dewpider",
    "simplified": "滴蛛",
    "pinyin": "Dīzhū",
    "level": "Gén 7",
    "type": "Agua / Bicho",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png",
    "characters": [
      {
        "char": "滴",
        "pinyin": "di1",
        "definition": "drip",
        "definitionEs": "gotear"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      }
    ]
  },
  {
    "id": 752,
    "ndex": "#0752",
    "english": "Araquanid",
    "simplified": "滴蛛霸",
    "pinyin": "Dīzhūbà",
    "level": "Gén 7",
    "type": "Agua / Bicho",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png",
    "characters": [
      {
        "char": "滴",
        "pinyin": "di1",
        "definition": "drip",
        "definitionEs": "gotear"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      },
      {
        "char": "霸",
        "pinyin": "ba4",
        "definition": "tyrant",
        "definitionEs": "tirano"
      }
    ]
  },
  {
    "id": 753,
    "ndex": "#0753",
    "english": "Fomantis",
    "simplified": "伪螳草",
    "pinyin": "Wěitángcǎo",
    "level": "Gén 7",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png",
    "characters": [
      {
        "char": "伪",
        "pinyin": "wei3",
        "definition": "false",
        "definitionEs": "falso"
      },
      {
        "char": "螳",
        "pinyin": "tang2",
        "definition": "mantis",
        "definitionEs": "mantis"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ]
  },
  {
    "id": 754,
    "ndex": "#0754",
    "english": "Lurantis",
    "simplified": "兰螳花",
    "pinyin": "Lántánghuā",
    "level": "Gén 7",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png",
    "characters": [
      {
        "char": "兰",
        "pinyin": "lan2",
        "definition": "orchid",
        "definitionEs": "orquídea"
      },
      {
        "char": "螳",
        "pinyin": "tang2",
        "definition": "mantis",
        "definitionEs": "mantis"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 755,
    "ndex": "#0755",
    "english": "Morelull",
    "simplified": "睡睡菇",
    "pinyin": "Shuìshuìgū",
    "level": "Gén 7",
    "type": "Planta / Hada",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png",
    "characters": [
      {
        "char": "睡",
        "pinyin": "shui4",
        "definition": "sleep",
        "definitionEs": "dormir"
      },
      {
        "char": "睡",
        "pinyin": "shui4",
        "definition": "sleep",
        "definitionEs": "dormir"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 756,
    "ndex": "#0756",
    "english": "Shiinotic",
    "simplified": "灯罩夜菇",
    "pinyin": "Dēngzhàoyègū",
    "level": "Gén 7",
    "type": "Planta / Hada",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png",
    "characters": [
      {
        "char": "灯",
        "pinyin": "deng1",
        "definition": "lamp",
        "definitionEs": "lámpara"
      },
      {
        "char": "罩",
        "pinyin": "zhao4",
        "definition": "cover",
        "definitionEs": "cubrir"
      },
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 757,
    "ndex": "#0757",
    "english": "Salandit",
    "simplified": "夜盗火蜥",
    "pinyin": "Yèdàohuǒxī",
    "level": "Gén 7",
    "type": "Veneno / Fuego",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png",
    "characters": [
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      },
      {
        "char": "盗",
        "pinyin": "dao4",
        "definition": "steal",
        "definitionEs": "robar"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 758,
    "ndex": "#0758",
    "english": "Salazzle",
    "simplified": "焰后蜥",
    "pinyin": "Yànhòuxī",
    "level": "Gén 7",
    "type": "Veneno / Fuego",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png",
    "characters": [
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "queen",
        "definitionEs": "reina"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 759,
    "ndex": "#0759",
    "english": "Stufful",
    "simplified": "童偶熊",
    "pinyin": "Tóng'ǒuxióng",
    "level": "Gén 7",
    "type": "Normal / Lucha",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png",
    "characters": [
      {
        "char": "童",
        "pinyin": "tong2",
        "definition": "child",
        "definitionEs": "niño"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 760,
    "ndex": "#0760",
    "english": "Bewear",
    "simplified": "穿着熊",
    "pinyin": "Chuānzhuóxióng",
    "level": "Gén 7",
    "type": "Normal / Lucha",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png",
    "characters": [
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "to wear",
        "definitionEs": "vestir"
      },
      {
        "char": "着",
        "pinyin": "zhuo2",
        "definition": "wear",
        "definitionEs": "vestir"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 761,
    "ndex": "#0761",
    "english": "Bounsweet",
    "simplified": "甜竹竹",
    "pinyin": "Tiánzhúzhú",
    "level": "Gén 7",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png",
    "characters": [
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "竹",
        "pinyin": "zhu2",
        "definition": "bamboo",
        "definitionEs": "bambú"
      },
      {
        "char": "竹",
        "pinyin": "zhu2",
        "definition": "bamboo",
        "definitionEs": "bambú"
      }
    ]
  },
  {
    "id": 762,
    "ndex": "#0762",
    "english": "Steenee",
    "simplified": "甜舞妮",
    "pinyin": "TiánwǔníTiánwǔnī",
    "level": "Gén 7",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png",
    "characters": [
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "舞",
        "pinyin": "wu3",
        "definition": "dance",
        "definitionEs": "bailar"
      },
      {
        "char": "妮",
        "pinyin": "ni1",
        "definition": "girl",
        "definitionEs": "niña"
      }
    ]
  },
  {
    "id": 763,
    "ndex": "#0763",
    "english": "Tsareena",
    "simplified": "甜冷美后",
    "pinyin": "Tiánlěngměihòu",
    "level": "Gén 7",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png",
    "characters": [
      {
        "char": "甜",
        "pinyin": "tian2",
        "definition": "sweet",
        "definitionEs": "dulce"
      },
      {
        "char": "冷",
        "pinyin": "leng3",
        "definition": "cold",
        "definitionEs": "frío"
      },
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "queen",
        "definitionEs": "reina"
      }
    ]
  },
  {
    "id": 764,
    "ndex": "#0764",
    "english": "Comfey",
    "simplified": "花疗环环",
    "pinyin": "Huāliáohuánhuán",
    "level": "Gén 7",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png",
    "characters": [
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "疗",
        "pinyin": "liao2",
        "definition": "treat",
        "definitionEs": "tratar"
      },
      {
        "char": "环",
        "pinyin": "huan2",
        "definition": "ring",
        "definitionEs": "anillo"
      },
      {
        "char": "环",
        "pinyin": "huan2",
        "definition": "ring",
        "definitionEs": "anillo"
      }
    ]
  },
  {
    "id": 765,
    "ndex": "#0765",
    "english": "Oranguru",
    "simplified": "智挥猩",
    "pinyin": "Zhìhuīxīng",
    "level": "Gén 7",
    "type": "Normal / Psíquico",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png",
    "characters": [
      {
        "char": "智",
        "pinyin": "zhi4",
        "definition": "wise",
        "definitionEs": "sabio"
      },
      {
        "char": "挥",
        "pinyin": "hui1",
        "definition": "wave",
        "definitionEs": "agitar"
      },
      {
        "char": "猩",
        "pinyin": "xing1",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 766,
    "ndex": "#0766",
    "english": "Passimian",
    "simplified": "投掷猴",
    "pinyin": "TóuzhíhóuTóuzhìhóu",
    "level": "Gén 7",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png",
    "characters": [
      {
        "char": "投",
        "pinyin": "tou2",
        "definition": "throw",
        "definitionEs": "lanzar"
      },
      {
        "char": "掷",
        "pinyin": "zhi4",
        "definition": "toss",
        "definitionEs": "lanzar"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 767,
    "ndex": "#0767",
    "english": "Wimpod",
    "simplified": "胆小虫",
    "pinyin": "Dǎnxiǎochóng",
    "level": "Gén 7",
    "type": "Bicho / Agua",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png",
    "characters": [
      {
        "char": "胆",
        "pinyin": "dan3",
        "definition": "courage",
        "definitionEs": "valor"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 768,
    "ndex": "#0768",
    "english": "Golisopod",
    "simplified": "具甲武者",
    "pinyin": "Jùjiǎwǔzhě",
    "level": "Gén 7",
    "type": "Bicho / Agua",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png",
    "characters": [
      {
        "char": "具",
        "pinyin": "ju4",
        "definition": "tool",
        "definitionEs": "herramienta"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "武",
        "pinyin": "wu3",
        "definition": "martial",
        "definitionEs": "marcial"
      },
      {
        "char": "者",
        "pinyin": "zhe3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 769,
    "ndex": "#0769",
    "english": "Sandygast",
    "simplified": "沙丘娃",
    "pinyin": "Shāqiūwá",
    "level": "Gén 7",
    "type": "Fantasma / Tierra",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "丘",
        "pinyin": "qiu1",
        "definition": "hill",
        "definitionEs": "colina"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 770,
    "ndex": "#0770",
    "english": "Palossand",
    "simplified": "噬沙堡爷",
    "pinyin": "Shìshābǎoyé",
    "level": "Gén 7",
    "type": "Fantasma / Tierra",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png",
    "characters": [
      {
        "char": "噬",
        "pinyin": "shi4",
        "definition": "devour",
        "definitionEs": "devorar"
      },
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "堡",
        "pinyin": "pu4",
        "definition": "village",
        "definitionEs": "aldea"
      },
      {
        "char": "爷",
        "pinyin": "ye2",
        "definition": "grandpa",
        "definitionEs": "abuelo"
      }
    ]
  },
  {
    "id": 771,
    "ndex": "#0771",
    "english": "Pyukumuku",
    "simplified": "拳海参",
    "pinyin": "Quánhǎishēn",
    "level": "Gén 7",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png",
    "characters": [
      {
        "char": "拳",
        "pinyin": "quan2",
        "definition": "fist",
        "definitionEs": "puño"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "参",
        "pinyin": "shen1",
        "definition": "ginseng",
        "definitionEs": "ginseng"
      }
    ]
  },
  {
    "id": 772,
    "ndex": "#0772",
    "english": "Type: Null",
    "simplified": "属性：空",
    "pinyin": "Shǔxìng: Kōng",
    "level": "Gén 7",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png",
    "characters": [
      {
        "char": "属",
        "pinyin": "shu3",
        "definition": "to belong",
        "definitionEs": "pertenecer"
      },
      {
        "char": "性",
        "pinyin": "xing4",
        "definition": "nature",
        "definitionEs": "naturaleza"
      },
      {
        "char": "空",
        "pinyin": "kong1",
        "definition": "empty",
        "definitionEs": "vacío"
      }
    ]
  },
  {
    "id": 773,
    "ndex": "#0773",
    "english": "Silvally",
    "simplified": "银伴战兽",
    "pinyin": "Yínbànzhànshòu",
    "level": "Gén 7",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png",
    "characters": [
      {
        "char": "银",
        "pinyin": "yin2",
        "definition": "silver",
        "definitionEs": "plata"
      },
      {
        "char": "伴",
        "pinyin": "ban4",
        "definition": "partner",
        "definitionEs": "compañero"
      },
      {
        "char": "战",
        "pinyin": "zhan4",
        "definition": "fight",
        "definitionEs": "luchar"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 774,
    "ndex": "#0774",
    "english": "Minior",
    "simplified": "小陨星",
    "pinyin": "Xiǎoyǔnxīng",
    "level": "Gén 7",
    "type": "Roca / Volador",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "陨",
        "pinyin": "yun3",
        "definition": "fall",
        "definitionEs": "caer"
      },
      {
        "char": "星",
        "pinyin": "xing1",
        "definition": "star",
        "definitionEs": "estrella"
      }
    ]
  },
  {
    "id": 775,
    "ndex": "#0775",
    "english": "Komala",
    "simplified": "树枕尾熊",
    "pinyin": "Shùzhěnwěixióng",
    "level": "Gén 7",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png",
    "characters": [
      {
        "char": "树",
        "pinyin": "shu4",
        "definition": "tree",
        "definitionEs": "árbol"
      },
      {
        "char": "枕",
        "pinyin": "zhen3",
        "definition": "pillow",
        "definitionEs": "almohada"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 776,
    "ndex": "#0776",
    "english": "Turtonator",
    "simplified": "爆焰龟兽",
    "pinyin": "Bàoyànguīshòu",
    "level": "Gén 7",
    "type": "Fuego / Dragón",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 777,
    "ndex": "#0777",
    "english": "Togedemaru",
    "simplified": "托戈德玛尔",
    "pinyin": "Tuōgēdémǎ'ěr",
    "level": "Gén 7",
    "type": "Eléctrico / Acero",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png",
    "characters": [
      {
        "char": "托",
        "pinyin": "tuo1",
        "definition": "support",
        "definitionEs": "apoyar"
      },
      {
        "char": "戈",
        "pinyin": "ge1",
        "definition": "dagger-axe",
        "definitionEs": "daga-hacha"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      },
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      }
    ]
  },
  {
    "id": 778,
    "ndex": "#0778",
    "english": "Mimikyu",
    "simplified": "谜拟丘",
    "pinyin": "Mínǐ-QMínǐqiū",
    "level": "Gén 7",
    "type": "Fantasma / Hada",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
    "characters": [
      {
        "char": "谜",
        "pinyin": "mi2",
        "definition": "riddle",
        "definitionEs": "acertijo"
      },
      {
        "char": "拟",
        "pinyin": "ni3",
        "definition": "plan",
        "definitionEs": "planear"
      },
      {
        "char": "丘",
        "pinyin": "qiu1",
        "definition": "hill",
        "definitionEs": "colina"
      }
    ]
  },
  {
    "id": 779,
    "ndex": "#0779",
    "english": "Bruxish",
    "simplified": "磨牙彩皮鱼",
    "pinyin": "Móyácǎipíyú",
    "level": "Gén 7",
    "type": "Agua / Psíquico",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png",
    "characters": [
      {
        "char": "磨",
        "pinyin": "mo4",
        "definition": "grindstone",
        "definitionEs": "muela"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      },
      {
        "char": "彩",
        "pinyin": "cai3",
        "definition": "color",
        "definitionEs": "color"
      },
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 780,
    "ndex": "#0780",
    "english": "Drampa",
    "simplified": "老翁龙",
    "pinyin": "Lǎowēnglóng",
    "level": "Gén 7",
    "type": "Normal / Dragón",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png",
    "characters": [
      {
        "char": "老",
        "pinyin": "lao3",
        "definition": "old",
        "definitionEs": "viejo"
      },
      {
        "char": "翁",
        "pinyin": "weng1",
        "definition": "elder",
        "definitionEs": "anciano"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 781,
    "ndex": "#0781",
    "english": "Dhelmise",
    "simplified": "破破舵轮",
    "pinyin": "Pòpòduòlún",
    "level": "Gén 7",
    "type": "Fantasma / Planta",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png",
    "characters": [
      {
        "char": "破",
        "pinyin": "po4",
        "definition": "broken",
        "definitionEs": "roto"
      },
      {
        "char": "破",
        "pinyin": "po4",
        "definition": "broken",
        "definitionEs": "roto"
      },
      {
        "char": "舵",
        "pinyin": "duo4",
        "definition": "helm",
        "definitionEs": "timón"
      },
      {
        "char": "轮",
        "pinyin": "lun2",
        "definition": "wheel",
        "definitionEs": "rueda"
      }
    ]
  },
  {
    "id": 782,
    "ndex": "#0782",
    "english": "Jangmo-o",
    "simplified": "心鳞宝",
    "pinyin": "Xīnlínbǎo",
    "level": "Gén 7",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png",
    "characters": [
      {
        "char": "心",
        "pinyin": "xin1",
        "definition": "heart",
        "definitionEs": "corazón"
      },
      {
        "char": "鳞",
        "pinyin": "lin2",
        "definition": "scale",
        "definitionEs": "escama"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 783,
    "ndex": "#0783",
    "english": "Hakamo-o",
    "simplified": "鳞甲龙",
    "pinyin": "Línjiǎlóng",
    "level": "Gén 7",
    "type": "Dragón / Lucha",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png",
    "characters": [
      {
        "char": "鳞",
        "pinyin": "lin2",
        "definition": "scale",
        "definitionEs": "escama"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 784,
    "ndex": "#0784",
    "english": "Kommo-o",
    "simplified": "杖尾鳞甲龙",
    "pinyin": "Zhàngwěilínjiǎlóng",
    "level": "Gén 7",
    "type": "Dragón / Lucha",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png",
    "characters": [
      {
        "char": "杖",
        "pinyin": "zhang4",
        "definition": "staff",
        "definitionEs": "bastón"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "鳞",
        "pinyin": "lin2",
        "definition": "scale",
        "definitionEs": "escama"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 785,
    "ndex": "#0785",
    "english": "Tapu Koko",
    "simplified": "卡璞・鸣鸣",
    "pinyin": "Kǎpú Míngmíng",
    "level": "Gén 7",
    "type": "Eléctrico / Hada",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "璞",
        "pinyin": "pu2",
        "definition": "unpolished gem",
        "definitionEs": "gema en bruto"
      },
      {
        "char": "鸣",
        "pinyin": "ming2",
        "definition": "chirp",
        "definitionEs": "piar"
      },
      {
        "char": "鸣",
        "pinyin": "ming2",
        "definition": "chirp",
        "definitionEs": "piar"
      }
    ]
  },
  {
    "id": 786,
    "ndex": "#0786",
    "english": "Tapu Lele",
    "simplified": "卡璞・蝶蝶",
    "pinyin": "Kǎpú Diédié",
    "level": "Gén 7",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "璞",
        "pinyin": "pu2",
        "definition": "unpolished gem",
        "definitionEs": "gema en bruto"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      },
      {
        "char": "蝶",
        "pinyin": "die2",
        "definition": "butterfly",
        "definitionEs": "mariposa"
      }
    ]
  },
  {
    "id": 787,
    "ndex": "#0787",
    "english": "Tapu Bulu",
    "simplified": "卡璞・哞哞",
    "pinyin": "Kǎpú Mōumōu",
    "level": "Gén 7",
    "type": "Planta / Hada",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "璞",
        "pinyin": "pu2",
        "definition": "unpolished gem",
        "definitionEs": "gema en bruto"
      },
      {
        "char": "哞",
        "pinyin": "mou1",
        "definition": "moo",
        "definitionEs": "mugir"
      },
      {
        "char": "哞",
        "pinyin": "mou1",
        "definition": "moo",
        "definitionEs": "mugir"
      }
    ]
  },
  {
    "id": 788,
    "ndex": "#0788",
    "english": "Tapu Fini",
    "simplified": "卡璞・鳍鳍",
    "pinyin": "Kǎpú Qíqí",
    "level": "Gén 7",
    "type": "Agua / Hada",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png",
    "characters": [
      {
        "char": "卡",
        "pinyin": "ka3",
        "definition": "card",
        "definitionEs": "tarjeta"
      },
      {
        "char": "璞",
        "pinyin": "pu2",
        "definition": "unpolished gem",
        "definitionEs": "gema en bruto"
      },
      {
        "char": "鳍",
        "pinyin": "qi2",
        "definition": "fin",
        "definitionEs": "aleta"
      },
      {
        "char": "鳍",
        "pinyin": "qi2",
        "definition": "fin",
        "definitionEs": "aleta"
      }
    ]
  },
  {
    "id": 789,
    "ndex": "#0789",
    "english": "Cosmog",
    "simplified": "科斯莫古",
    "pinyin": "Kēsīmògǔ",
    "level": "Gén 7",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png",
    "characters": [
      {
        "char": "科",
        "pinyin": "ke1",
        "definition": "science",
        "definitionEs": "ciencia"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "莫",
        "pinyin": "mo4",
        "definition": "do not",
        "definitionEs": "no"
      },
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      }
    ]
  },
  {
    "id": 790,
    "ndex": "#0790",
    "english": "Cosmoem",
    "simplified": "科斯莫姆",
    "pinyin": "Kēsīmòmǔ",
    "level": "Gén 7",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png",
    "characters": [
      {
        "char": "科",
        "pinyin": "ke1",
        "definition": "science",
        "definitionEs": "ciencia"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "莫",
        "pinyin": "mo4",
        "definition": "do not",
        "definitionEs": "no"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 791,
    "ndex": "#0791",
    "english": "Solgaleo",
    "simplified": "索尔迦雷欧",
    "pinyin": "Suǒ'ěrjiāléi'ōu",
    "level": "Gén 7",
    "type": "Psíquico / Acero",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
    "characters": [
      {
        "char": "索",
        "pinyin": "suo3",
        "definition": "search",
        "definitionEs": "buscar"
      },
      {
        "char": "尔",
        "pinyin": "er3",
        "definition": "thus",
        "definitionEs": "así"
      },
      {
        "char": "迦",
        "pinyin": "jia1",
        "definition": "phonetic",
        "definitionEs": "fonético"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      }
    ]
  },
  {
    "id": 792,
    "ndex": "#0792",
    "english": "Lunala",
    "simplified": "露奈雅拉",
    "pinyin": "Lùnàiyǎlā",
    "level": "Gén 7",
    "type": "Psíquico / Fantasma",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png",
    "characters": [
      {
        "char": "露",
        "pinyin": "lu4",
        "definition": "dew",
        "definitionEs": "rocío"
      },
      {
        "char": "奈",
        "pinyin": "nai4",
        "definition": "phonetic (part of)",
        "definitionEs": "fonético (parte de)"
      },
      {
        "char": "雅",
        "pinyin": "ya3",
        "definition": "elegant",
        "definitionEs": "elegante"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 793,
    "ndex": "#0793",
    "english": "Nihilego",
    "simplified": "虚吾伊德",
    "pinyin": "Xūwúyīdé",
    "level": "Gén 7",
    "type": "Roca / Veneno",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png",
    "characters": [
      {
        "char": "虚",
        "pinyin": "xu1",
        "definition": "empty",
        "definitionEs": "vacío"
      },
      {
        "char": "吾",
        "pinyin": "wu2",
        "definition": "I",
        "definitionEs": "yo"
      },
      {
        "char": "伊",
        "pinyin": "yi1",
        "definition": "he",
        "definitionEs": "él"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      }
    ]
  },
  {
    "id": 794,
    "ndex": "#0794",
    "english": "Buzzwole",
    "simplified": "爆肌蚊",
    "pinyin": "Bàojīwén",
    "level": "Gén 7",
    "type": "Bicho / Lucha",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png",
    "characters": [
      {
        "char": "爆",
        "pinyin": "bao4",
        "definition": "explode",
        "definitionEs": "explotar"
      },
      {
        "char": "肌",
        "pinyin": "ji1",
        "definition": "muscle",
        "definitionEs": "músculo"
      },
      {
        "char": "蚊",
        "pinyin": "wen2",
        "definition": "mosquito",
        "definitionEs": "mosquito"
      }
    ]
  },
  {
    "id": 795,
    "ndex": "#0795",
    "english": "Pheromosa",
    "simplified": "费洛美螂",
    "pinyin": "Fèiluòměiláng",
    "level": "Gén 7",
    "type": "Bicho / Lucha",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png",
    "characters": [
      {
        "char": "费",
        "pinyin": "fei4",
        "definition": "cost",
        "definitionEs": "costar"
      },
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "螂",
        "pinyin": "lang2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 796,
    "ndex": "#0796",
    "english": "Xurkitree",
    "simplified": "电束木",
    "pinyin": "Diànshùmù",
    "level": "Gén 7",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "束",
        "pinyin": "shu4",
        "definition": "bind",
        "definitionEs": "atar"
      },
      {
        "char": "木",
        "pinyin": "mu4",
        "definition": "wood",
        "definitionEs": "madera"
      }
    ]
  },
  {
    "id": 797,
    "ndex": "#0797",
    "english": "Celesteela",
    "simplified": "铁火辉夜",
    "pinyin": "Tiěhuǒhuīyè",
    "level": "Gén 7",
    "type": "Acero / Volador",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "辉",
        "pinyin": "hui1",
        "definition": "radiance",
        "definitionEs": "resplandor"
      },
      {
        "char": "夜",
        "pinyin": "ye4",
        "definition": "night",
        "definitionEs": "noche"
      }
    ]
  },
  {
    "id": 798,
    "ndex": "#0798",
    "english": "Kartana",
    "simplified": "纸御剑",
    "pinyin": "Zhǐyùjiàn",
    "level": "Gén 7",
    "type": "Planta / Acero",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png",
    "characters": [
      {
        "char": "纸",
        "pinyin": "zhi3",
        "definition": "paper",
        "definitionEs": "papel"
      },
      {
        "char": "御",
        "pinyin": "yu4",
        "definition": "defend",
        "definitionEs": "defender"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      }
    ]
  },
  {
    "id": 799,
    "ndex": "#0799",
    "english": "Guzzlord",
    "simplified": "恶食大王",
    "pinyin": "Èshídàwáng",
    "level": "Gén 7",
    "type": "Siniestro / Dragón",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png",
    "characters": [
      {
        "char": "恶",
        "pinyin": "wu4",
        "definition": "hate",
        "definitionEs": "odiar"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 800,
    "ndex": "#0800",
    "english": "Necrozma",
    "simplified": "奈克洛兹玛",
    "pinyin": "Nàikèluòzīmǎ",
    "level": "Gén 7",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png",
    "characters": [
      {
        "char": "奈",
        "pinyin": "nai4",
        "definition": "phonetic (part of)",
        "definitionEs": "fonético (parte de)"
      },
      {
        "char": "克",
        "pinyin": "ke4",
        "definition": "to overcome",
        "definitionEs": "superar"
      },
      {
        "char": "洛",
        "pinyin": "luo4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "兹",
        "pinyin": "zi1",
        "definition": "this",
        "definitionEs": "este"
      },
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      }
    ]
  },
  {
    "id": 801,
    "ndex": "#0801",
    "english": "Magearna",
    "simplified": "玛机雅娜",
    "pinyin": "Mǎjīyǎnà",
    "level": "Gén 7",
    "type": "Acero / Hada",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "机",
        "pinyin": "ji1",
        "definition": "machine",
        "definitionEs": "máquina"
      },
      {
        "char": "雅",
        "pinyin": "ya3",
        "definition": "elegant",
        "definitionEs": "elegante"
      },
      {
        "char": "娜",
        "pinyin": "na4",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 802,
    "ndex": "#0802",
    "english": "Marshadow",
    "simplified": "玛夏多",
    "pinyin": "Mǎxiàduō",
    "level": "Gén 7",
    "type": "Lucha / Fantasma",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png",
    "characters": [
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "夏",
        "pinyin": "xia4",
        "definition": "summer",
        "definitionEs": "verano"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      }
    ]
  },
  {
    "id": 803,
    "ndex": "#0803",
    "english": "Poipole",
    "simplified": "毒贝比",
    "pinyin": "Dúbèibǐ",
    "level": "Gén 7",
    "type": "Veneno",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png",
    "characters": [
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "比",
        "pinyin": "bi3",
        "definition": "compare",
        "definitionEs": "comparar"
      }
    ]
  },
  {
    "id": 804,
    "ndex": "#0804",
    "english": "Naganadel",
    "simplified": "四颚针龙",
    "pinyin": "Sì'èzhēnlóng",
    "level": "Gén 7",
    "type": "Veneno / Dragón",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png",
    "characters": [
      {
        "char": "四",
        "pinyin": "si4",
        "definition": "four",
        "definitionEs": "cuatro"
      },
      {
        "char": "颚",
        "pinyin": "e4",
        "definition": "jaw",
        "definitionEs": "mandíbula"
      },
      {
        "char": "针",
        "pinyin": "zhen1",
        "definition": "needle",
        "definitionEs": "aguja"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 805,
    "ndex": "#0805",
    "english": "Stakataka",
    "simplified": "垒磊石",
    "pinyin": "Lěilěishí",
    "level": "Gén 7",
    "type": "Roca / Acero",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png",
    "characters": [
      {
        "char": "垒",
        "pinyin": "lei3",
        "definition": "rampart",
        "definitionEs": "muralla"
      },
      {
        "char": "磊",
        "pinyin": "lei3",
        "definition": "lumpy",
        "definitionEs": "grumoso"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      }
    ]
  },
  {
    "id": 806,
    "ndex": "#0806",
    "english": "Blacephalon",
    "simplified": "砰头小丑",
    "pinyin": "Pēngtóuxiǎochǒu",
    "level": "Gén 7",
    "type": "Fuego / Fantasma",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png",
    "characters": [
      {
        "char": "砰",
        "pinyin": "peng1",
        "definition": "bang",
        "definitionEs": "golpe"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "丑",
        "pinyin": "chou3",
        "definition": "ugly",
        "definitionEs": "feo"
      }
    ]
  },
  {
    "id": 807,
    "ndex": "#0807",
    "english": "Zeraora",
    "simplified": "捷拉奥拉",
    "pinyin": "Jiélā'àolā",
    "level": "Gén 7",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png",
    "characters": [
      {
        "char": "捷",
        "pinyin": "jie2",
        "definition": "victory",
        "definitionEs": "victoria"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "奥",
        "pinyin": "ao4",
        "definition": "obscure",
        "definitionEs": "oscuro"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 808,
    "ndex": "#0808",
    "english": "Meltan",
    "simplified": "美录坦",
    "pinyin": "Měilùtǎn",
    "level": "Gén 7",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png",
    "characters": [
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "录",
        "pinyin": "lu4",
        "definition": "record",
        "definitionEs": "registro"
      },
      {
        "char": "坦",
        "pinyin": "tan3",
        "definition": "flat",
        "definitionEs": "plano"
      }
    ]
  },
  {
    "id": 809,
    "ndex": "#0809",
    "english": "Melmetal",
    "simplified": "美录梅塔",
    "pinyin": "Měilùméitǎ",
    "level": "Gén 7",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png",
    "characters": [
      {
        "char": "美",
        "pinyin": "mei3",
        "definition": "beautiful",
        "definitionEs": "hermoso"
      },
      {
        "char": "录",
        "pinyin": "lu4",
        "definition": "record",
        "definitionEs": "registro"
      },
      {
        "char": "梅",
        "pinyin": "mei2",
        "definition": "plum",
        "definitionEs": "ciruela"
      },
      {
        "char": "塔",
        "pinyin": "ta3",
        "definition": "tower",
        "definitionEs": "torre"
      }
    ]
  },
  {
    "id": 810,
    "ndex": "#0810",
    "english": "Grookey",
    "simplified": "敲音猴",
    "pinyin": "Qiāoyīnhóu",
    "level": "Gén 8",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png",
    "characters": [
      {
        "char": "敲",
        "pinyin": "qiao1",
        "definition": "hit",
        "definitionEs": "golpear"
      },
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 811,
    "ndex": "#0811",
    "english": "Thwackey",
    "simplified": "啪咚猴",
    "pinyin": "Pādōnghóu",
    "level": "Gén 8",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png",
    "characters": [
      {
        "char": "啪",
        "pinyin": "pa1",
        "definition": "bang",
        "definitionEs": "chasquido"
      },
      {
        "char": "咚",
        "pinyin": "dong1",
        "definition": "boom",
        "definitionEs": "retumbar"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 812,
    "ndex": "#0812",
    "english": "Rillaboom",
    "simplified": "轰擂金刚猩",
    "pinyin": "Hōngléijīngāngxīng",
    "level": "Gén 8",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png",
    "characters": [
      {
        "char": "轰",
        "pinyin": "hong1",
        "definition": "explosion",
        "definitionEs": "explosión"
      },
      {
        "char": "擂",
        "pinyin": "lei4",
        "definition": "platform",
        "definitionEs": "plataforma"
      },
      {
        "char": "金",
        "pinyin": "jin1",
        "definition": "gold",
        "definitionEs": "oro"
      },
      {
        "char": "刚",
        "pinyin": "gang1",
        "definition": "hard",
        "definitionEs": "duro"
      },
      {
        "char": "猩",
        "pinyin": "xing1",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 813,
    "ndex": "#0813",
    "english": "Scorbunny",
    "simplified": "炎兔儿",
    "pinyin": "Yántù'er",
    "level": "Gén 8",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png",
    "characters": [
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "兔",
        "pinyin": "tu4",
        "definition": "rabbit",
        "definitionEs": "conejo"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "child",
        "definitionEs": "niño"
      }
    ]
  },
  {
    "id": 814,
    "ndex": "#0814",
    "english": "Raboot",
    "simplified": "腾蹴小将",
    "pinyin": "Téngcùxiǎojiàng",
    "level": "Gén 8",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png",
    "characters": [
      {
        "char": "腾",
        "pinyin": "teng2",
        "definition": "gallop",
        "definitionEs": "galope"
      },
      {
        "char": "蹴",
        "pinyin": "cu4",
        "definition": "kick",
        "definitionEs": "patear"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "将",
        "pinyin": "qiang1",
        "definition": "desire",
        "definitionEs": "desear"
      }
    ]
  },
  {
    "id": 815,
    "ndex": "#0815",
    "english": "Cinderace",
    "simplified": "闪焰王牌",
    "pinyin": "Shǎnyànwángpái",
    "level": "Gén 8",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png",
    "characters": [
      {
        "char": "闪",
        "pinyin": "shan3",
        "definition": "to flash",
        "definitionEs": "destellar"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "牌",
        "pinyin": "pai2",
        "definition": "sign",
        "definitionEs": "cartel"
      }
    ]
  },
  {
    "id": 816,
    "ndex": "#0816",
    "english": "Sobble",
    "simplified": "泪眼蜥",
    "pinyin": "Lèiyǎnxī",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png",
    "characters": [
      {
        "char": "泪",
        "pinyin": "lei4",
        "definition": "tear",
        "definitionEs": "lágrima"
      },
      {
        "char": "眼",
        "pinyin": "yan3",
        "definition": "eye",
        "definitionEs": "ojo"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 817,
    "ndex": "#0817",
    "english": "Drizzile",
    "simplified": "变涩蜥",
    "pinyin": "Biànsèxī",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png",
    "characters": [
      {
        "char": "变",
        "pinyin": "bian4",
        "definition": "to change",
        "definitionEs": "cambiar"
      },
      {
        "char": "涩",
        "pinyin": "se4",
        "definition": "astringent",
        "definitionEs": "astringente"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 818,
    "ndex": "#0818",
    "english": "Inteleon",
    "simplified": "千面避役",
    "pinyin": "Qiānmiànbìyì",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png",
    "characters": [
      {
        "char": "千",
        "pinyin": "qian1",
        "definition": "thousand",
        "definitionEs": "mil"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "face",
        "definitionEs": "cara"
      },
      {
        "char": "避",
        "pinyin": "bi4",
        "definition": "avoid",
        "definitionEs": "evitar"
      },
      {
        "char": "役",
        "pinyin": "yi4",
        "definition": "labor",
        "definitionEs": "trabajo"
      }
    ]
  },
  {
    "id": 819,
    "ndex": "#0819",
    "english": "Skwovet",
    "simplified": "贪心栗鼠",
    "pinyin": "Tānxīnlìshǔ",
    "level": "Gén 8",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png",
    "characters": [
      {
        "char": "贪",
        "pinyin": "tan1",
        "definition": "greedy",
        "definitionEs": "codicioso"
      },
      {
        "char": "心",
        "pinyin": "xin1",
        "definition": "heart",
        "definitionEs": "corazón"
      },
      {
        "char": "栗",
        "pinyin": "li4",
        "definition": "chestnut",
        "definitionEs": "castaña"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 820,
    "ndex": "#0820",
    "english": "Greedent",
    "simplified": "藏饱栗鼠",
    "pinyin": "Cángbǎolìshǔ",
    "level": "Gén 8",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png",
    "characters": [
      {
        "char": "藏",
        "pinyin": "zang4",
        "definition": "storehouse",
        "definitionEs": "almacén"
      },
      {
        "char": "饱",
        "pinyin": "bao3",
        "definition": "full",
        "definitionEs": "satisfecho"
      },
      {
        "char": "栗",
        "pinyin": "li4",
        "definition": "chestnut",
        "definitionEs": "castaña"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 821,
    "ndex": "#0821",
    "english": "Rookidee",
    "simplified": "稚山雀",
    "pinyin": "Zhìshānquè",
    "level": "Gén 8",
    "type": "Volador",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png",
    "characters": [
      {
        "char": "稚",
        "pinyin": "zhi4",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      },
      {
        "char": "雀",
        "pinyin": "que4",
        "definition": "sparrow",
        "definitionEs": "gorrión"
      }
    ]
  },
  {
    "id": 822,
    "ndex": "#0822",
    "english": "Corvisquire",
    "simplified": "蓝鸦",
    "pinyin": "Lányā",
    "level": "Gén 8",
    "type": "Volador",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png",
    "characters": [
      {
        "char": "蓝",
        "pinyin": "lan2",
        "definition": "blue",
        "definitionEs": "azul"
      },
      {
        "char": "鸦",
        "pinyin": "ya1",
        "definition": "crow",
        "definitionEs": "cuervo"
      }
    ]
  },
  {
    "id": 823,
    "ndex": "#0823",
    "english": "Corviknight",
    "simplified": "钢铠鸦",
    "pinyin": "Gāngkǎiyā",
    "level": "Gén 8",
    "type": "Volador / Acero",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png",
    "characters": [
      {
        "char": "钢",
        "pinyin": "gang1",
        "definition": "steel",
        "definitionEs": "acero"
      },
      {
        "char": "铠",
        "pinyin": "kai3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "鸦",
        "pinyin": "ya1",
        "definition": "crow",
        "definitionEs": "cuervo"
      }
    ]
  },
  {
    "id": 824,
    "ndex": "#0824",
    "english": "Blipbug",
    "simplified": "索侦虫",
    "pinyin": "Suǒzhēnchóng",
    "level": "Gén 8",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png",
    "characters": [
      {
        "char": "索",
        "pinyin": "suo3",
        "definition": "search",
        "definitionEs": "buscar"
      },
      {
        "char": "侦",
        "pinyin": "zhen1",
        "definition": "scout",
        "definitionEs": "explorar"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 825,
    "ndex": "#0825",
    "english": "Dottler",
    "simplified": "天罩虫",
    "pinyin": "Tiānzhàochóng",
    "level": "Gén 8",
    "type": "Bicho / Psíquico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png",
    "characters": [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day",
        "definitionEs": "día"
      },
      {
        "char": "罩",
        "pinyin": "zhao4",
        "definition": "cover",
        "definitionEs": "cubrir"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 826,
    "ndex": "#0826",
    "english": "Orbeetle",
    "simplified": "以欧路普",
    "pinyin": "Yǐ'ōulùpǔ",
    "level": "Gén 8",
    "type": "Bicho / Psíquico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png",
    "characters": [
      {
        "char": "以",
        "pinyin": "yi3",
        "definition": "use",
        "definitionEs": "usar"
      },
      {
        "char": "欧",
        "pinyin": "ou1",
        "definition": "Europe",
        "definitionEs": "Europa"
      },
      {
        "char": "路",
        "pinyin": "lu4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "普",
        "pinyin": "pu3",
        "definition": "general",
        "definitionEs": "general"
      }
    ]
  },
  {
    "id": 827,
    "ndex": "#0827",
    "english": "Nickit",
    "simplified": "狡小狐",
    "pinyin": "Tōu'erhúJiǎoxiǎohú",
    "level": "Gén 8",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png",
    "characters": [
      {
        "char": "狡",
        "pinyin": "jiao3",
        "definition": "crafty",
        "definitionEs": "astuto"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "狐",
        "pinyin": "hu2",
        "definition": "fox",
        "definitionEs": "zorro"
      }
    ]
  },
  {
    "id": 828,
    "ndex": "#0828",
    "english": "Thievul",
    "simplified": "猾大狐",
    "pinyin": "HúdàdàoHuádàhú",
    "level": "Gén 8",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png",
    "characters": [
      {
        "char": "猾",
        "pinyin": "hua2",
        "definition": "sly",
        "definitionEs": "astuto"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "狐",
        "pinyin": "hu2",
        "definition": "fox",
        "definitionEs": "zorro"
      }
    ]
  },
  {
    "id": 829,
    "ndex": "#0829",
    "english": "Gossifleur",
    "simplified": "幼棉棉",
    "pinyin": "Yòumiánmián",
    "level": "Gén 8",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png",
    "characters": [
      {
        "char": "幼",
        "pinyin": "you4",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "棉",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      },
      {
        "char": "棉",
        "pinyin": "mian2",
        "definition": "cotton",
        "definitionEs": "algodón"
      }
    ]
  },
  {
    "id": 830,
    "ndex": "#0830",
    "english": "Eldegoss",
    "simplified": "白蓬蓬",
    "pinyin": "Báipéngpéng",
    "level": "Gén 8",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png",
    "characters": [
      {
        "char": "白",
        "pinyin": "bai2",
        "definition": "white",
        "definitionEs": "blanco"
      },
      {
        "char": "蓬",
        "pinyin": "peng2",
        "definition": "fleabane",
        "definitionEs": "hierba de pulgas"
      },
      {
        "char": "蓬",
        "pinyin": "peng2",
        "definition": "fleabane",
        "definitionEs": "hierba de pulgas"
      }
    ]
  },
  {
    "id": 831,
    "ndex": "#0831",
    "english": "Wooloo",
    "simplified": "毛辫羊",
    "pinyin": "Máobiànyáng",
    "level": "Gén 8",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png",
    "characters": [
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "辫",
        "pinyin": "bian4",
        "definition": "braid",
        "definitionEs": "trenza"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 832,
    "ndex": "#0832",
    "english": "Dubwool",
    "simplified": "毛毛角羊",
    "pinyin": "Máomáojiǎoyáng",
    "level": "Gén 8",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png",
    "characters": [
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "羊",
        "pinyin": "yang2",
        "definition": "sheep",
        "definitionEs": "oveja"
      }
    ]
  },
  {
    "id": 833,
    "ndex": "#0833",
    "english": "Chewtle",
    "simplified": "咬咬龟",
    "pinyin": "Yǎoyǎoguī",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png",
    "characters": [
      {
        "char": "咬",
        "pinyin": "yao3",
        "definition": "to bite",
        "definitionEs": "morder"
      },
      {
        "char": "咬",
        "pinyin": "yao3",
        "definition": "to bite",
        "definitionEs": "morder"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 834,
    "ndex": "#0834",
    "english": "Drednaw",
    "simplified": "暴噬龟",
    "pinyin": "Bàoshìguī",
    "level": "Gén 8",
    "type": "Agua / Roca",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png",
    "characters": [
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "噬",
        "pinyin": "shi4",
        "definition": "devour",
        "definitionEs": "devorar"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "turtle",
        "definitionEs": "tortuga"
      }
    ]
  },
  {
    "id": 835,
    "ndex": "#0835",
    "english": "Yamper",
    "simplified": "来电汪",
    "pinyin": "Láidiànwāng",
    "level": "Gén 8",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png",
    "characters": [
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "come",
        "definitionEs": "venir"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "汪",
        "pinyin": "wang1",
        "definition": "vast",
        "definitionEs": "vasto"
      }
    ]
  },
  {
    "id": 836,
    "ndex": "#0836",
    "english": "Boltund",
    "simplified": "逐电犬",
    "pinyin": "Zhúdiànquǎn",
    "level": "Gén 8",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png",
    "characters": [
      {
        "char": "逐",
        "pinyin": "zhu2",
        "definition": "pursue",
        "definitionEs": "perseguir"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 837,
    "ndex": "#0837",
    "english": "Rolycoly",
    "simplified": "小炭仔",
    "pinyin": "Xiǎotànzǎi",
    "level": "Gén 8",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "炭",
        "pinyin": "tan4",
        "definition": "charcoal",
        "definitionEs": "carbón"
      },
      {
        "char": "仔",
        "pinyin": "zi3",
        "definition": "young",
        "definitionEs": "joven"
      }
    ]
  },
  {
    "id": 838,
    "ndex": "#0838",
    "english": "Carkol",
    "simplified": "大炭车",
    "pinyin": "Dàtànchē",
    "level": "Gén 8",
    "type": "Roca / Fuego",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "炭",
        "pinyin": "tan4",
        "definition": "charcoal",
        "definitionEs": "carbón"
      },
      {
        "char": "车",
        "pinyin": "ju1",
        "definition": "chariot",
        "definitionEs": "carro"
      }
    ]
  },
  {
    "id": 839,
    "ndex": "#0839",
    "english": "Coalossal",
    "simplified": "巨炭山",
    "pinyin": "Jùtànshān",
    "level": "Gén 8",
    "type": "Roca / Fuego",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "炭",
        "pinyin": "tan4",
        "definition": "charcoal",
        "definitionEs": "carbón"
      },
      {
        "char": "山",
        "pinyin": "shan1",
        "definition": "mountain",
        "definitionEs": "montaña"
      }
    ]
  },
  {
    "id": 840,
    "ndex": "#0840",
    "english": "Applin",
    "simplified": "啃果虫",
    "pinyin": "Kěnguǒchóng",
    "level": "Gén 8",
    "type": "Planta / Dragón",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png",
    "characters": [
      {
        "char": "啃",
        "pinyin": "ken3",
        "definition": "gnaw",
        "definitionEs": "roer"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "fruit",
        "definitionEs": "fruta"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 841,
    "ndex": "#0841",
    "english": "Flapple",
    "simplified": "苹裹龙",
    "pinyin": "Píngguǒlóng",
    "level": "Gén 8",
    "type": "Planta / Dragón",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png",
    "characters": [
      {
        "char": "苹",
        "pinyin": "ping2",
        "definition": "apple",
        "definitionEs": "manzana"
      },
      {
        "char": "裹",
        "pinyin": "guo3",
        "definition": "wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 842,
    "ndex": "#0842",
    "english": "Appletun",
    "simplified": "丰蜜龙",
    "pinyin": "Fēngmìlóng",
    "level": "Gén 8",
    "type": "Planta / Dragón",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png",
    "characters": [
      {
        "char": "丰",
        "pinyin": "feng1",
        "definition": "abundant",
        "definitionEs": "abundante"
      },
      {
        "char": "蜜",
        "pinyin": "mi4",
        "definition": "honey",
        "definitionEs": "miel"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 843,
    "ndex": "#0843",
    "english": "Silicobra",
    "simplified": "沙包蛇",
    "pinyin": "Shābāoshé",
    "level": "Gén 8",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "包",
        "pinyin": "bao1",
        "definition": "wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 844,
    "ndex": "#0844",
    "english": "Sandaconda",
    "simplified": "沙螺蟒",
    "pinyin": "Shāluómǎng",
    "level": "Gén 8",
    "type": "Tierra",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "螺",
        "pinyin": "luo2",
        "definition": "spiral",
        "definitionEs": "espiral"
      },
      {
        "char": "蟒",
        "pinyin": "mang3",
        "definition": "python",
        "definitionEs": "pitón"
      }
    ]
  },
  {
    "id": 845,
    "ndex": "#0845",
    "english": "Cramorant",
    "simplified": "古月鸟",
    "pinyin": "Gǔyuèniǎo",
    "level": "Gén 8",
    "type": "Volador / Agua",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 846,
    "ndex": "#0846",
    "english": "Arrokuda",
    "simplified": "刺梭鱼",
    "pinyin": "Cìsuōyú",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png",
    "characters": [
      {
        "char": "刺",
        "pinyin": "ci4",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "梭",
        "pinyin": "suo1",
        "definition": "shuttle",
        "definitionEs": "lanzadera"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 847,
    "ndex": "#0847",
    "english": "Barraskewda",
    "simplified": "戽斗尖梭",
    "pinyin": "Hùdǒujiānsuō",
    "level": "Gén 8",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png",
    "characters": [
      {
        "char": "戽",
        "pinyin": "hu4",
        "definition": "bucket",
        "definitionEs": "cubo"
      },
      {
        "char": "斗",
        "pinyin": "dou4",
        "definition": "fight",
        "definitionEs": "lucha"
      },
      {
        "char": "尖",
        "pinyin": "jian1",
        "definition": "pointed",
        "definitionEs": "puntiagudo"
      },
      {
        "char": "梭",
        "pinyin": "suo1",
        "definition": "shuttle",
        "definitionEs": "lanzadera"
      }
    ]
  },
  {
    "id": 848,
    "ndex": "#0848",
    "english": "Toxel",
    "simplified": "电音婴",
    "pinyin": "DúdiànyīngDiànyīnyīng",
    "level": "Gén 8",
    "type": "Eléctrico / Veneno",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "音",
        "pinyin": "yin1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "婴",
        "pinyin": "ying1",
        "definition": "infant",
        "definitionEs": "infante"
      }
    ]
  },
  {
    "id": 849,
    "ndex": "#0849",
    "english": "Toxtricity",
    "simplified": "颤弦蝾螈",
    "pinyin": "Chànxiánróngyuán",
    "level": "Gén 8",
    "type": "Eléctrico / Veneno",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png",
    "characters": [
      {
        "char": "颤",
        "pinyin": "chan4",
        "definition": "tremble",
        "definitionEs": "temblar"
      },
      {
        "char": "弦",
        "pinyin": "xian2",
        "definition": "string",
        "definitionEs": "cuerda"
      },
      {
        "char": "蝾",
        "pinyin": "rong2",
        "definition": "salamander",
        "definitionEs": "salamandra"
      },
      {
        "char": "螈",
        "pinyin": "yuan2",
        "definition": "salamander",
        "definitionEs": "salamandra"
      }
    ]
  },
  {
    "id": 850,
    "ndex": "#0850",
    "english": "Sizzlipede",
    "simplified": "烧火蚣",
    "pinyin": "Shāohuǒgōng",
    "level": "Gén 8",
    "type": "Fuego / Bicho",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png",
    "characters": [
      {
        "char": "烧",
        "pinyin": "shao1",
        "definition": "burn",
        "definitionEs": "quemar"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "蚣",
        "pinyin": "gong1",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      }
    ]
  },
  {
    "id": 851,
    "ndex": "#0851",
    "english": "Centiskorch",
    "simplified": "焚焰蚣",
    "pinyin": "Fényàngōng",
    "level": "Gén 8",
    "type": "Fuego / Bicho",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png",
    "characters": [
      {
        "char": "焚",
        "pinyin": "fen2",
        "definition": "burn",
        "definitionEs": "quemar"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "蚣",
        "pinyin": "gong1",
        "definition": "centipede",
        "definitionEs": "ciempiés"
      }
    ]
  },
  {
    "id": 852,
    "ndex": "#0852",
    "english": "Clobbopus",
    "simplified": "拳拳蛸",
    "pinyin": "Quánquánxiāo",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png",
    "characters": [
      {
        "char": "拳",
        "pinyin": "quan2",
        "definition": "fist",
        "definitionEs": "puño"
      },
      {
        "char": "拳",
        "pinyin": "quan2",
        "definition": "fist",
        "definitionEs": "puño"
      },
      {
        "char": "蛸",
        "pinyin": "xiao1",
        "definition": "octopus",
        "definitionEs": "pulpo"
      }
    ]
  },
  {
    "id": 853,
    "ndex": "#0853",
    "english": "Grapploct",
    "simplified": "八爪武师",
    "pinyin": "Bāzhuǎwǔshī",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png",
    "characters": [
      {
        "char": "八",
        "pinyin": "ba1",
        "definition": "eight",
        "definitionEs": "ocho"
      },
      {
        "char": "爪",
        "pinyin": "zhua3",
        "definition": "claw",
        "definitionEs": "garra"
      },
      {
        "char": "武",
        "pinyin": "wu3",
        "definition": "martial",
        "definitionEs": "marcial"
      },
      {
        "char": "师",
        "pinyin": "shi1",
        "definition": "teacher",
        "definitionEs": "maestro"
      }
    ]
  },
  {
    "id": 854,
    "ndex": "#0854",
    "english": "Sinistea",
    "simplified": "来悲茶",
    "pinyin": "Láibēichá",
    "level": "Gén 8",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png",
    "characters": [
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "come",
        "definitionEs": "venir"
      },
      {
        "char": "悲",
        "pinyin": "bei1",
        "definition": "sad",
        "definitionEs": "triste"
      },
      {
        "char": "茶",
        "pinyin": "cha2",
        "definition": "tea",
        "definitionEs": "té"
      }
    ]
  },
  {
    "id": 855,
    "ndex": "#0855",
    "english": "Polteageist",
    "simplified": "怖思壶",
    "pinyin": "Bùsīhú",
    "level": "Gén 8",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png",
    "characters": [
      {
        "char": "怖",
        "pinyin": "bu4",
        "definition": "terror",
        "definitionEs": "terror"
      },
      {
        "char": "思",
        "pinyin": "si1",
        "definition": "think",
        "definitionEs": "pensar"
      },
      {
        "char": "壶",
        "pinyin": "hu2",
        "definition": "pot",
        "definitionEs": "olla"
      }
    ]
  },
  {
    "id": 856,
    "ndex": "#0856",
    "english": "Hatenna",
    "simplified": "迷布莉姆",
    "pinyin": "Míbùlìmǔ",
    "level": "Gén 8",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "莉",
        "pinyin": "li4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 857,
    "ndex": "#0857",
    "english": "Hattrem",
    "simplified": "提布莉姆",
    "pinyin": "Tíbùlìmǔ",
    "level": "Gén 8",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png",
    "characters": [
      {
        "char": "提",
        "pinyin": "ti2",
        "definition": "to carry",
        "definitionEs": "llevar"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "莉",
        "pinyin": "li4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 858,
    "ndex": "#0858",
    "english": "Hatterene",
    "simplified": "布莉姆温",
    "pinyin": "Bùlìmǔwēn",
    "level": "Gén 8",
    "type": "Psíquico / Hada",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "莉",
        "pinyin": "li4",
        "definition": "transliteration (part of)",
        "definitionEs": "transliteración (parte de)"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      },
      {
        "char": "温",
        "pinyin": "wen1",
        "definition": "warm",
        "definitionEs": "cálido"
      }
    ]
  },
  {
    "id": 859,
    "ndex": "#0859",
    "english": "Impidimp",
    "simplified": "捣蛋小妖",
    "pinyin": "Dǎodànxiǎoyāo",
    "level": "Gén 8",
    "type": "Siniestro / Hada",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png",
    "characters": [
      {
        "char": "捣",
        "pinyin": "dao3",
        "definition": "pound",
        "definitionEs": "golpear"
      },
      {
        "char": "蛋",
        "pinyin": "dan4",
        "definition": "egg",
        "definitionEs": "huevo"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "妖",
        "pinyin": "yao1",
        "definition": "goblin",
        "definitionEs": "duende"
      }
    ]
  },
  {
    "id": 860,
    "ndex": "#0860",
    "english": "Morgrem",
    "simplified": "诈唬魔",
    "pinyin": "Zhàhǔmó",
    "level": "Gén 8",
    "type": "Siniestro / Hada",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png",
    "characters": [
      {
        "char": "诈",
        "pinyin": "zha4",
        "definition": "cheat",
        "definitionEs": "engañar"
      },
      {
        "char": "唬",
        "pinyin": "hu3",
        "definition": "roar",
        "definitionEs": "rugido"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      }
    ]
  },
  {
    "id": 861,
    "ndex": "#0861",
    "english": "Grimmsnarl",
    "simplified": "长毛巨魔",
    "pinyin": "Chángmáojùmó",
    "level": "Gén 8",
    "type": "Siniestro / Hada",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png",
    "characters": [
      {
        "char": "长",
        "pinyin": "zhang3",
        "definition": "chief",
        "definitionEs": "jefe"
      },
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      }
    ]
  },
  {
    "id": 862,
    "ndex": "#0862",
    "english": "Obstagoon",
    "simplified": "堵拦熊",
    "pinyin": "Dǔlánxióng",
    "level": "Gén 8",
    "type": "Siniestro / Normal",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png",
    "characters": [
      {
        "char": "堵",
        "pinyin": "du3",
        "definition": "block",
        "definitionEs": "bloquear"
      },
      {
        "char": "拦",
        "pinyin": "lan2",
        "definition": "block",
        "definitionEs": "bloquear"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 863,
    "ndex": "#0863",
    "english": "Perrserker",
    "simplified": "喵头目",
    "pinyin": "Miāotóumù",
    "level": "Gén 8",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png",
    "characters": [
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "目",
        "pinyin": "mu4",
        "definition": "eye",
        "definitionEs": "ojo"
      }
    ]
  },
  {
    "id": 864,
    "ndex": "#0864",
    "english": "Cursola",
    "simplified": "魔灵珊瑚",
    "pinyin": "Mólíngshānhú",
    "level": "Gén 8",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png",
    "characters": [
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      },
      {
        "char": "珊",
        "pinyin": "shan1",
        "definition": "coral",
        "definitionEs": "coral"
      },
      {
        "char": "瑚",
        "pinyin": "hu2",
        "definition": "coral (part of)",
        "definitionEs": "coral (parte de)"
      }
    ]
  },
  {
    "id": 865,
    "ndex": "#0865",
    "english": "Sirfetch'd",
    "simplified": "葱游兵",
    "pinyin": "Cōngyóubīng",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png",
    "characters": [
      {
        "char": "葱",
        "pinyin": "cong1",
        "definition": "scallion",
        "definitionEs": "cebolleta"
      },
      {
        "char": "游",
        "pinyin": "you2",
        "definition": "swim",
        "definitionEs": "nadar"
      },
      {
        "char": "兵",
        "pinyin": "bing1",
        "definition": "soldier",
        "definitionEs": "soldado"
      }
    ]
  },
  {
    "id": 866,
    "ndex": "#0866",
    "english": "Mr. Rime",
    "simplified": "踏冰人偶",
    "pinyin": "Tàbīngrén'ǒu",
    "level": "Gén 8",
    "type": "Hielo / Psíquico",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png",
    "characters": [
      {
        "char": "踏",
        "pinyin": "ta4",
        "definition": "tread",
        "definitionEs": "pisar"
      },
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person",
        "definitionEs": "persona"
      },
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      }
    ]
  },
  {
    "id": 867,
    "ndex": "#0867",
    "english": "Runerigus",
    "simplified": "迭失板",
    "pinyin": "SǐshénbǎnDiéshībǎn",
    "level": "Gén 8",
    "type": "Tierra / Fantasma",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png",
    "characters": [
      {
        "char": "迭",
        "pinyin": "die2",
        "definition": "alternate",
        "definitionEs": "alternar"
      },
      {
        "char": "失",
        "pinyin": "shi1",
        "definition": "lose",
        "definitionEs": "perder"
      },
      {
        "char": "板",
        "pinyin": "ban3",
        "definition": "board",
        "definitionEs": "tabla"
      }
    ]
  },
  {
    "id": 868,
    "ndex": "#0868",
    "english": "Milcery",
    "simplified": "小仙奶",
    "pinyin": "Xiǎoxiānnǎi",
    "level": "Gén 8",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      },
      {
        "char": "奶",
        "pinyin": "nai3",
        "definition": "milk",
        "definitionEs": "leche"
      }
    ]
  },
  {
    "id": 869,
    "ndex": "#0869",
    "english": "Alcremie",
    "simplified": "霜奶仙",
    "pinyin": "Shuāngnǎixiān",
    "level": "Gén 8",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
    "characters": [
      {
        "char": "霜",
        "pinyin": "shuang1",
        "definition": "frost",
        "definitionEs": "escarcha"
      },
      {
        "char": "奶",
        "pinyin": "nai3",
        "definition": "milk",
        "definitionEs": "leche"
      },
      {
        "char": "仙",
        "pinyin": "xian1",
        "definition": "immortal",
        "definitionEs": "inmortal"
      }
    ]
  },
  {
    "id": 870,
    "ndex": "#0870",
    "english": "Falinks",
    "simplified": "列阵兵",
    "pinyin": "Lièzhènbīng",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png",
    "characters": [
      {
        "char": "列",
        "pinyin": "lie4",
        "definition": "arrange",
        "definitionEs": "arreglar"
      },
      {
        "char": "阵",
        "pinyin": "zhen4",
        "definition": "formation",
        "definitionEs": "formación"
      },
      {
        "char": "兵",
        "pinyin": "bing1",
        "definition": "soldier",
        "definitionEs": "soldado"
      }
    ]
  },
  {
    "id": 871,
    "ndex": "#0871",
    "english": "Pincurchin",
    "simplified": "啪嚓海胆",
    "pinyin": "Pācāhǎidǎn",
    "level": "Gén 8",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png",
    "characters": [
      {
        "char": "啪",
        "pinyin": "pa1",
        "definition": "bang",
        "definitionEs": "chasquido"
      },
      {
        "char": "嚓",
        "pinyin": "cha1",
        "definition": "scrape",
        "definitionEs": "raspar"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "胆",
        "pinyin": "dan3",
        "definition": "courage",
        "definitionEs": "valor"
      }
    ]
  },
  {
    "id": 872,
    "ndex": "#0872",
    "english": "Snom",
    "simplified": "雪吞虫",
    "pinyin": "Xuětūnchóng",
    "level": "Gén 8",
    "type": "Hielo / Bicho",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "吞",
        "pinyin": "tun1",
        "definition": "to swallow",
        "definitionEs": "tragar"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 873,
    "ndex": "#0873",
    "english": "Frosmoth",
    "simplified": "雪绒蛾",
    "pinyin": "Xuěróng'é",
    "level": "Gén 8",
    "type": "Hielo / Bicho",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "绒",
        "pinyin": "rong2",
        "definition": "velvet",
        "definitionEs": "terciopelo"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 874,
    "ndex": "#0874",
    "english": "Stonjourner",
    "simplified": "巨石丁",
    "pinyin": "Jùshídīng",
    "level": "Gén 8",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "丁",
        "pinyin": "ding1",
        "definition": "small",
        "definitionEs": "pequeño"
      }
    ]
  },
  {
    "id": 875,
    "ndex": "#0875",
    "english": "Eiscue",
    "simplified": "冰砌鹅",
    "pinyin": "Bīngqì'é",
    "level": "Gén 8",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png",
    "characters": [
      {
        "char": "冰",
        "pinyin": "bing1",
        "definition": "ice",
        "definitionEs": "hielo"
      },
      {
        "char": "砌",
        "pinyin": "qie4",
        "definition": "pave",
        "definitionEs": "pavimentar"
      },
      {
        "char": "鹅",
        "pinyin": "e2",
        "definition": "goose",
        "definitionEs": "ganso"
      }
    ]
  },
  {
    "id": 876,
    "ndex": "#0876",
    "english": "Indeedee",
    "simplified": "爱管侍",
    "pinyin": "Àiguǎnshì",
    "level": "Gén 8",
    "type": "Psíquico / Normal",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png",
    "characters": [
      {
        "char": "爱",
        "pinyin": "ai4",
        "definition": "to love",
        "definitionEs": "amar"
      },
      {
        "char": "管",
        "pinyin": "guan3",
        "definition": "manage",
        "definitionEs": "gestionar"
      },
      {
        "char": "侍",
        "pinyin": "shi4",
        "definition": "serve",
        "definitionEs": "servir"
      }
    ]
  },
  {
    "id": 877,
    "ndex": "#0877",
    "english": "Morpeko",
    "simplified": "莫鲁贝可",
    "pinyin": "Mòlǔbèikě",
    "level": "Gén 8",
    "type": "Eléctrico / Siniestro",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png",
    "characters": [
      {
        "char": "莫",
        "pinyin": "mo4",
        "definition": "do not",
        "definitionEs": "no"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "贝",
        "pinyin": "bei4",
        "definition": "shell",
        "definitionEs": "concha"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "can",
        "definitionEs": "poder"
      }
    ]
  },
  {
    "id": 878,
    "ndex": "#0878",
    "english": "Cufant",
    "simplified": "铜象",
    "pinyin": "Tóngxiàng",
    "level": "Gén 8",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png",
    "characters": [
      {
        "char": "铜",
        "pinyin": "tong2",
        "definition": "copper",
        "definitionEs": "cobre"
      },
      {
        "char": "象",
        "pinyin": "xiang4",
        "definition": "elephant",
        "definitionEs": "elefante"
      }
    ]
  },
  {
    "id": 879,
    "ndex": "#0879",
    "english": "Copperajah",
    "simplified": "大王铜象",
    "pinyin": "Dàwángtóngxiàng",
    "level": "Gén 8",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      },
      {
        "char": "铜",
        "pinyin": "tong2",
        "definition": "copper",
        "definitionEs": "cobre"
      },
      {
        "char": "象",
        "pinyin": "xiang4",
        "definition": "elephant",
        "definitionEs": "elefante"
      }
    ]
  },
  {
    "id": 880,
    "ndex": "#0880",
    "english": "Dracozolt",
    "simplified": "雷鸟龙",
    "pinyin": "Léiniǎolóng",
    "level": "Gén 8",
    "type": "Eléctrico / Dragón",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 881,
    "ndex": "#0881",
    "english": "Arctozolt",
    "simplified": "雷鸟海兽",
    "pinyin": "Léiniǎohǎishòu",
    "level": "Gén 8",
    "type": "Eléctrico / Hielo",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 882,
    "ndex": "#0882",
    "english": "Dracovish",
    "simplified": "鳃鱼龙",
    "pinyin": "Sāiyúlóng",
    "level": "Gén 8",
    "type": "Agua / Dragón",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png",
    "characters": [
      {
        "char": "鳃",
        "pinyin": "sai1",
        "definition": "gill",
        "definitionEs": "branquia"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 883,
    "ndex": "#0883",
    "english": "Arctovish",
    "simplified": "鳃鱼海兽",
    "pinyin": "Sāiyúhǎishòu",
    "level": "Gén 8",
    "type": "Agua / Hielo",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png",
    "characters": [
      {
        "char": "鳃",
        "pinyin": "sai1",
        "definition": "gill",
        "definitionEs": "branquia"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "兽",
        "pinyin": "shou4",
        "definition": "beast",
        "definitionEs": "bestia"
      }
    ]
  },
  {
    "id": 884,
    "ndex": "#0884",
    "english": "Duraludon",
    "simplified": "铝钢龙",
    "pinyin": "Lǚgānglóng",
    "level": "Gén 8",
    "type": "Acero / Dragón",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png",
    "characters": [
      {
        "char": "铝",
        "pinyin": "lü3",
        "definition": "aluminum",
        "definitionEs": "aluminio"
      },
      {
        "char": "钢",
        "pinyin": "gang1",
        "definition": "steel",
        "definitionEs": "acero"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 885,
    "ndex": "#0885",
    "english": "Dreepy",
    "simplified": "多龙梅西亚",
    "pinyin": "Duōlóngméixīyǎ",
    "level": "Gén 8",
    "type": "Dragón / Fantasma",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "梅",
        "pinyin": "mei2",
        "definition": "plum",
        "definitionEs": "ciruela"
      },
      {
        "char": "西",
        "pinyin": "xi1",
        "definition": "west",
        "definitionEs": "oeste"
      },
      {
        "char": "亚",
        "pinyin": "ya4",
        "definition": "sub-",
        "definitionEs": "sub-"
      }
    ]
  },
  {
    "id": 886,
    "ndex": "#0886",
    "english": "Drakloak",
    "simplified": "多龙奇",
    "pinyin": "Duōlóngqí",
    "level": "Gén 8",
    "type": "Dragón / Fantasma",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 887,
    "ndex": "#0887",
    "english": "Dragapult",
    "simplified": "多龙巴鲁托",
    "pinyin": "Duōlóngbālǔtuō",
    "level": "Gén 8",
    "type": "Dragón / Fantasma",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png",
    "characters": [
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many",
        "definitionEs": "muchos"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "巴",
        "pinyin": "ba1",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "鲁",
        "pinyin": "lu3",
        "definition": "crude",
        "definitionEs": "grosero"
      },
      {
        "char": "托",
        "pinyin": "tuo1",
        "definition": "support",
        "definitionEs": "apoyar"
      }
    ]
  },
  {
    "id": 888,
    "ndex": "#0888",
    "english": "Zacian",
    "simplified": "苍响",
    "pinyin": "Cāngxiǎng",
    "level": "Gén 8",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
    "characters": [
      {
        "char": "苍",
        "pinyin": "cang1",
        "definition": "dark blue",
        "definitionEs": "azul oscuro"
      },
      {
        "char": "响",
        "pinyin": "xiang3",
        "definition": "sound",
        "definitionEs": "sonido"
      }
    ]
  },
  {
    "id": 889,
    "ndex": "#0889",
    "english": "Zamazenta",
    "simplified": "藏玛然特",
    "pinyin": "Zàngmǎrántè",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png",
    "characters": [
      {
        "char": "藏",
        "pinyin": "zang4",
        "definition": "storehouse",
        "definitionEs": "almacén"
      },
      {
        "char": "玛",
        "pinyin": "ma3",
        "definition": "agate",
        "definitionEs": "ágata"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "naturally",
        "definitionEs": "naturalmente"
      },
      {
        "char": "特",
        "pinyin": "te4",
        "definition": "special",
        "definitionEs": "especial"
      }
    ]
  },
  {
    "id": 890,
    "ndex": "#0890",
    "english": "Eternatus",
    "simplified": "无极汰那",
    "pinyin": "Wújítàinà",
    "level": "Gén 8",
    "type": "Veneno / Dragón",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png",
    "characters": [
      {
        "char": "无",
        "pinyin": "wu2",
        "definition": "without",
        "definitionEs": "sin"
      },
      {
        "char": "极",
        "pinyin": "ji2",
        "definition": "extreme",
        "definitionEs": "extremo"
      },
      {
        "char": "汰",
        "pinyin": "tai4",
        "definition": "discard",
        "definitionEs": "descartar"
      },
      {
        "char": "那",
        "pinyin": "na4",
        "definition": "that",
        "definitionEs": "ese"
      }
    ]
  },
  {
    "id": 891,
    "ndex": "#0891",
    "english": "Kubfu",
    "simplified": "熊徒弟",
    "pinyin": "Xióngtúdì",
    "level": "Gén 8",
    "type": "Lucha",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png",
    "characters": [
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      },
      {
        "char": "徒",
        "pinyin": "tu2",
        "definition": "disciple",
        "definitionEs": "discípulo"
      },
      {
        "char": "弟",
        "pinyin": "di4",
        "definition": "younger brother",
        "definitionEs": "hermano menor"
      }
    ]
  },
  {
    "id": 892,
    "ndex": "#0892",
    "english": "Urshifu",
    "simplified": "武道熊师",
    "pinyin": "Wǔdàoxióngshī",
    "level": "Gén 8",
    "type": "Lucha / Siniestro",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png",
    "characters": [
      {
        "char": "武",
        "pinyin": "wu3",
        "definition": "martial",
        "definitionEs": "marcial"
      },
      {
        "char": "道",
        "pinyin": "dao4",
        "definition": "road",
        "definitionEs": "camino"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      },
      {
        "char": "师",
        "pinyin": "shi1",
        "definition": "teacher",
        "definitionEs": "maestro"
      }
    ]
  },
  {
    "id": 893,
    "ndex": "#0893",
    "english": "Zarude",
    "simplified": "萨戮德",
    "pinyin": "Sàlùdé",
    "level": "Gén 8",
    "type": "Siniestro / Planta",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png",
    "characters": [
      {
        "char": "萨",
        "pinyin": "sa4",
        "definition": "bodhisattva",
        "definitionEs": "bodhisattva"
      },
      {
        "char": "戮",
        "pinyin": "lu4",
        "definition": "kill",
        "definitionEs": "matar"
      },
      {
        "char": "德",
        "pinyin": "de2",
        "definition": "virtue",
        "definitionEs": "virtud"
      }
    ]
  },
  {
    "id": 894,
    "ndex": "#0894",
    "english": "Regieleki",
    "simplified": "雷吉艾勒奇",
    "pinyin": "Léijí'àilèqí",
    "level": "Gén 8",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "艾",
        "pinyin": "ai4",
        "definition": "mugwort",
        "definitionEs": "artemisa"
      },
      {
        "char": "勒",
        "pinyin": "lei1",
        "definition": "to strap",
        "definitionEs": "ceñir"
      },
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      }
    ]
  },
  {
    "id": 895,
    "ndex": "#0895",
    "english": "Regidrago",
    "simplified": "雷吉铎拉戈",
    "pinyin": "Léijíduólāgē",
    "level": "Gén 8",
    "type": "Dragón",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png",
    "characters": [
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "铎",
        "pinyin": "duo2",
        "definition": "bell",
        "definitionEs": "campana"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      },
      {
        "char": "戈",
        "pinyin": "ge1",
        "definition": "dagger-axe",
        "definitionEs": "daga-hacha"
      }
    ]
  },
  {
    "id": 896,
    "ndex": "#0896",
    "english": "Glastrier",
    "simplified": "雪暴马",
    "pinyin": "Xuěbàomǎ",
    "level": "Gén 8",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png",
    "characters": [
      {
        "char": "雪",
        "pinyin": "xue3",
        "definition": "snow",
        "definitionEs": "nieve"
      },
      {
        "char": "暴",
        "pinyin": "bao4",
        "definition": "violent",
        "definitionEs": "violento"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 897,
    "ndex": "#0897",
    "english": "Spectrier",
    "simplified": "灵幽马",
    "pinyin": "Língyōumǎ",
    "level": "Gén 8",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png",
    "characters": [
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      },
      {
        "char": "幽",
        "pinyin": "you1",
        "definition": "remote",
        "definitionEs": "remoto"
      },
      {
        "char": "马",
        "pinyin": "ma3",
        "definition": "horse",
        "definitionEs": "caballo"
      }
    ]
  },
  {
    "id": 898,
    "ndex": "#0898",
    "english": "Calyrex",
    "simplified": "蕾冠王",
    "pinyin": "Lěiguànwáng",
    "level": "Gén 8",
    "type": "Psíquico / Planta",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png",
    "characters": [
      {
        "char": "蕾",
        "pinyin": "lei3",
        "definition": "bud",
        "definitionEs": "capullo"
      },
      {
        "char": "冠",
        "pinyin": "guan1",
        "definition": "crown",
        "definitionEs": "corona"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 899,
    "ndex": "#0899",
    "english": "Wyrdeer",
    "simplified": "诡角鹿",
    "pinyin": "Guǐjiǎolù",
    "level": "Gén 8",
    "type": "Normal / Psíquico",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png",
    "characters": [
      {
        "char": "诡",
        "pinyin": "gui3",
        "definition": "sly",
        "definitionEs": "astuto"
      },
      {
        "char": "角",
        "pinyin": "jiao3",
        "definition": "horn",
        "definitionEs": "cuerno"
      },
      {
        "char": "鹿",
        "pinyin": "lu4",
        "definition": "deer",
        "definitionEs": "ciervo"
      }
    ]
  },
  {
    "id": 900,
    "ndex": "#0900",
    "english": "Kleavor",
    "simplified": "劈斧螳螂",
    "pinyin": "Pīfǔtángláng",
    "level": "Gén 8",
    "type": "Bicho / Roca",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png",
    "characters": [
      {
        "char": "劈",
        "pinyin": "pi3",
        "definition": "split",
        "definitionEs": "dividir"
      },
      {
        "char": "斧",
        "pinyin": "fu3",
        "definition": "axe",
        "definitionEs": "hacha"
      },
      {
        "char": "螳",
        "pinyin": "tang2",
        "definition": "mantis",
        "definitionEs": "mantis"
      },
      {
        "char": "螂",
        "pinyin": "lang2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 901,
    "ndex": "#0901",
    "english": "Ursaluna",
    "simplified": "月月熊",
    "pinyin": "Yuèyuèxióng",
    "level": "Gén 8",
    "type": "Tierra / Normal",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png",
    "characters": [
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      },
      {
        "char": "熊",
        "pinyin": "xiong2",
        "definition": "bear",
        "definitionEs": "oso"
      }
    ]
  },
  {
    "id": 902,
    "ndex": "#0902",
    "english": "Basculegion",
    "simplified": "幽尾玄鱼",
    "pinyin": "Yōuwěixuányú",
    "level": "Gén 8",
    "type": "Agua / Fantasma",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png",
    "characters": [
      {
        "char": "幽",
        "pinyin": "you1",
        "definition": "remote",
        "definitionEs": "remoto"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      },
      {
        "char": "玄",
        "pinyin": "xuan2",
        "definition": "black",
        "definitionEs": "negro"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 903,
    "ndex": "#0903",
    "english": "Sneasler",
    "simplified": "大狃拉",
    "pinyin": "Dàniǔlā",
    "level": "Gén 8",
    "type": "Lucha / Veneno",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "狃",
        "pinyin": "niu3",
        "definition": "accustomed",
        "definitionEs": "acostumbrado"
      },
      {
        "char": "拉",
        "pinyin": "la1",
        "definition": "to pull",
        "definitionEs": "tirar"
      }
    ]
  },
  {
    "id": 904,
    "ndex": "#0904",
    "english": "Overqwil",
    "simplified": "万针鱼",
    "pinyin": "Wànzhēnyú",
    "level": "Gén 8",
    "type": "Siniestro / Veneno",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png",
    "characters": [
      {
        "char": "万",
        "pinyin": "wan4",
        "definition": "ten thousand",
        "definitionEs": "diez mil"
      },
      {
        "char": "针",
        "pinyin": "zhen1",
        "definition": "needle",
        "definitionEs": "aguja"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 905,
    "ndex": "#0905",
    "english": "Enamorus",
    "simplified": "眷恋云",
    "pinyin": "Juànliànyún",
    "level": "Gén 8",
    "type": "Hada / Volador",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png",
    "characters": [
      {
        "char": "眷",
        "pinyin": "juan4",
        "definition": "affection",
        "definitionEs": "afecto"
      },
      {
        "char": "恋",
        "pinyin": "lian4",
        "definition": "love",
        "definitionEs": "amor"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud",
        "definitionEs": "nube"
      }
    ]
  },
  {
    "id": 906,
    "ndex": "#0906",
    "english": "Sprigatito",
    "simplified": "新叶喵",
    "pinyin": "Xīnyèmiāo",
    "level": "Gén 9",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png",
    "characters": [
      {
        "char": "新",
        "pinyin": "xin1",
        "definition": "new",
        "definitionEs": "nuevo"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 907,
    "ndex": "#0907",
    "english": "Floragato",
    "simplified": "蒂蕾喵",
    "pinyin": "Dìlěimiāo",
    "level": "Gén 9",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png",
    "characters": [
      {
        "char": "蒂",
        "pinyin": "di4",
        "definition": "stem",
        "definitionEs": "tallo"
      },
      {
        "char": "蕾",
        "pinyin": "lei3",
        "definition": "bud",
        "definitionEs": "capullo"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 908,
    "ndex": "#0908",
    "english": "Meowscarada",
    "simplified": "魔幻假面喵",
    "pinyin": "Móhuànjiǎmiànmiāo",
    "level": "Gén 9",
    "type": "Planta / Siniestro",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png",
    "characters": [
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "幻",
        "pinyin": "huan4",
        "definition": "fantasy",
        "definitionEs": "fantasía"
      },
      {
        "char": "假",
        "pinyin": "jia3",
        "definition": "borrow",
        "definitionEs": "pedir prestado"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "face",
        "definitionEs": "cara"
      },
      {
        "char": "喵",
        "pinyin": "miao1",
        "definition": "meow",
        "definitionEs": "miau"
      }
    ]
  },
  {
    "id": 909,
    "ndex": "#0909",
    "english": "Fuecoco",
    "simplified": "呆火鳄",
    "pinyin": "Dāihuǒ'è",
    "level": "Gén 9",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png",
    "characters": [
      {
        "char": "呆",
        "pinyin": "dai1",
        "definition": "foolish",
        "definitionEs": "tonto"
      },
      {
        "char": "火",
        "pinyin": "huo3",
        "definition": "fire",
        "definitionEs": "fuego"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 910,
    "ndex": "#0910",
    "english": "Crocalor",
    "simplified": "炙烫鳄",
    "pinyin": "Zhìtàng'è",
    "level": "Gén 9",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png",
    "characters": [
      {
        "char": "炙",
        "pinyin": "zhi4",
        "definition": "to broil",
        "definitionEs": "asar"
      },
      {
        "char": "烫",
        "pinyin": "tang4",
        "definition": "to scald",
        "definitionEs": "escaldar"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 911,
    "ndex": "#0911",
    "english": "Skeledirge",
    "simplified": "骨纹巨声鳄",
    "pinyin": "Gǔwénjùshēng'è",
    "level": "Gén 9",
    "type": "Fuego / Fantasma",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png",
    "characters": [
      {
        "char": "骨",
        "pinyin": "gu3",
        "definition": "bone",
        "definitionEs": "hueso"
      },
      {
        "char": "纹",
        "pinyin": "wen2",
        "definition": "pattern",
        "definitionEs": "patrón"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "声",
        "pinyin": "sheng1",
        "definition": "sound",
        "definitionEs": "sonido"
      },
      {
        "char": "鳄",
        "pinyin": "e4",
        "definition": "alligator",
        "definitionEs": "aligátor"
      }
    ]
  },
  {
    "id": 912,
    "ndex": "#0912",
    "english": "Quaxly",
    "simplified": "润水鸭",
    "pinyin": "Rùnshuǐyā",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png",
    "characters": [
      {
        "char": "润",
        "pinyin": "run4",
        "definition": "moist",
        "definitionEs": "húmedo"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ]
  },
  {
    "id": 913,
    "ndex": "#0913",
    "english": "Quaxwell",
    "simplified": "涌跃鸭",
    "pinyin": "Yǒngyuèyā",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png",
    "characters": [
      {
        "char": "涌",
        "pinyin": "yong3",
        "definition": "to surge",
        "definitionEs": "surgir"
      },
      {
        "char": "跃",
        "pinyin": "yue4",
        "definition": "jump",
        "definitionEs": "saltar"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ]
  },
  {
    "id": 914,
    "ndex": "#0914",
    "english": "Quaquaval",
    "simplified": "狂欢浪舞鸭",
    "pinyin": "Kuánghuānlàngwǔyā",
    "level": "Gén 9",
    "type": "Agua / Lucha",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png",
    "characters": [
      {
        "char": "狂",
        "pinyin": "kuang2",
        "definition": "mad",
        "definitionEs": "loco"
      },
      {
        "char": "欢",
        "pinyin": "huan1",
        "definition": "joy",
        "definitionEs": "alegría"
      },
      {
        "char": "浪",
        "pinyin": "lang4",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "舞",
        "pinyin": "wu3",
        "definition": "dance",
        "definitionEs": "bailar"
      },
      {
        "char": "鸭",
        "pinyin": "ya1",
        "definition": "duck",
        "definitionEs": "pato"
      }
    ]
  },
  {
    "id": 915,
    "ndex": "#0915",
    "english": "Lechonk",
    "simplified": "爱吃豚",
    "pinyin": "Àichītún",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png",
    "characters": [
      {
        "char": "爱",
        "pinyin": "ai4",
        "definition": "to love",
        "definitionEs": "amar"
      },
      {
        "char": "吃",
        "pinyin": "chi1",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "豚",
        "pinyin": "tun2",
        "definition": "piglet",
        "definitionEs": "lechón"
      }
    ]
  },
  {
    "id": 916,
    "ndex": "#0916",
    "english": "Oinkologne",
    "simplified": "飘香豚",
    "pinyin": "Piāoxiāngtún",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png",
    "characters": [
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "香",
        "pinyin": "xiang1",
        "definition": "fragrant",
        "definitionEs": "fragante"
      },
      {
        "char": "豚",
        "pinyin": "tun2",
        "definition": "piglet",
        "definitionEs": "lechón"
      }
    ]
  },
  {
    "id": 917,
    "ndex": "#0917",
    "english": "Tarountula",
    "simplified": "团珠蛛",
    "pinyin": "Tuánzhūzhū",
    "level": "Gén 9",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png",
    "characters": [
      {
        "char": "团",
        "pinyin": "tuan2",
        "definition": "group",
        "definitionEs": "grupo"
      },
      {
        "char": "珠",
        "pinyin": "zhu1",
        "definition": "bead",
        "definitionEs": "perla"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      }
    ]
  },
  {
    "id": 918,
    "ndex": "#0918",
    "english": "Spidops",
    "simplified": "操陷蛛",
    "pinyin": "Cāoxiànzhū",
    "level": "Gén 9",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png",
    "characters": [
      {
        "char": "操",
        "pinyin": "cao4",
        "definition": "fuck",
        "definitionEs": "joder"
      },
      {
        "char": "陷",
        "pinyin": "xian4",
        "definition": "pitfall",
        "definitionEs": "trampa"
      },
      {
        "char": "蛛",
        "pinyin": "zhu1",
        "definition": "spider",
        "definitionEs": "araña"
      }
    ]
  },
  {
    "id": 919,
    "ndex": "#0919",
    "english": "Nymble",
    "simplified": "豆蟋蟀",
    "pinyin": "Dòuxīshuài",
    "level": "Gén 9",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png",
    "characters": [
      {
        "char": "豆",
        "pinyin": "dou4",
        "definition": "legume",
        "definitionEs": "legumbre"
      },
      {
        "char": "蟋",
        "pinyin": "xi1",
        "definition": "cricket",
        "definitionEs": "grillo"
      },
      {
        "char": "蟀",
        "pinyin": "shuai4",
        "definition": "cricket",
        "definitionEs": "grillo"
      }
    ]
  },
  {
    "id": 920,
    "ndex": "#0920",
    "english": "Lokix",
    "simplified": "烈腿蝗",
    "pinyin": "Liètuǐhuáng",
    "level": "Gén 9",
    "type": "Bicho / Siniestro",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png",
    "characters": [
      {
        "char": "烈",
        "pinyin": "lie4",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "腿",
        "pinyin": "tui3",
        "definition": "leg",
        "definitionEs": "pierna"
      },
      {
        "char": "蝗",
        "pinyin": "huang2",
        "definition": "locust",
        "definitionEs": "langosta"
      }
    ]
  },
  {
    "id": 921,
    "ndex": "#0921",
    "english": "Pawmi",
    "simplified": "布拨",
    "pinyin": "Bùbō",
    "level": "Gén 9",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "拨",
        "pinyin": "bo1",
        "definition": "to push aside",
        "definitionEs": "apartar"
      }
    ]
  },
  {
    "id": 922,
    "ndex": "#0922",
    "english": "Pawmo",
    "simplified": "布土拨",
    "pinyin": "Bùtǔbō",
    "level": "Gén 9",
    "type": "Eléctrico / Lucha",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png",
    "characters": [
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "拨",
        "pinyin": "bo1",
        "definition": "to push aside",
        "definitionEs": "apartar"
      }
    ]
  },
  {
    "id": 923,
    "ndex": "#0923",
    "english": "Pawmot",
    "simplified": "巴布土拨",
    "pinyin": "Bābùtǔbō",
    "level": "Gén 9",
    "type": "Eléctrico / Lucha",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png",
    "characters": [
      {
        "char": "巴",
        "pinyin": "ba1",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "布",
        "pinyin": "bu4",
        "definition": "cloth",
        "definitionEs": "tela"
      },
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "拨",
        "pinyin": "bo1",
        "definition": "to push aside",
        "definitionEs": "apartar"
      }
    ]
  },
  {
    "id": 924,
    "ndex": "#0924",
    "english": "Tandemaus",
    "simplified": "一对鼠",
    "pinyin": "Yīduìshǔ",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png",
    "characters": [
      {
        "char": "一",
        "pinyin": "yi1",
        "definition": "one",
        "definitionEs": "uno"
      },
      {
        "char": "对",
        "pinyin": "dui4",
        "definition": "right",
        "definitionEs": "correcto"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 925,
    "ndex": "#0925",
    "english": "Maushold",
    "simplified": "一家鼠",
    "pinyin": "Yījiāshǔ",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png",
    "characters": [
      {
        "char": "一",
        "pinyin": "yi1",
        "definition": "one",
        "definitionEs": "uno"
      },
      {
        "char": "家",
        "pinyin": "jia1",
        "definition": "home",
        "definitionEs": "hogar"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 926,
    "ndex": "#0926",
    "english": "Fidough",
    "simplified": "狗仔包",
    "pinyin": "Gǒuzǎibāo",
    "level": "Gén 9",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png",
    "characters": [
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      },
      {
        "char": "仔",
        "pinyin": "zi3",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "包",
        "pinyin": "bao1",
        "definition": "wrap",
        "definitionEs": "envolver"
      }
    ]
  },
  {
    "id": 927,
    "ndex": "#0927",
    "english": "Dachsbun",
    "simplified": "麻花犬",
    "pinyin": "Máhuāquǎn",
    "level": "Gén 9",
    "type": "Hada",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png",
    "characters": [
      {
        "char": "麻",
        "pinyin": "ma2",
        "definition": "hemp",
        "definitionEs": "cáñamo"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 928,
    "ndex": "#0928",
    "english": "Smoliv",
    "simplified": "迷你芙",
    "pinyin": "Mínǐfú",
    "level": "Gén 9",
    "type": "Planta / Normal",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png",
    "characters": [
      {
        "char": "迷",
        "pinyin": "mi2",
        "definition": "to bewilder",
        "definitionEs": "desconcertar"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you",
        "definitionEs": "tú"
      },
      {
        "char": "芙",
        "pinyin": "fu2",
        "definition": "lotus",
        "definitionEs": "loto"
      }
    ]
  },
  {
    "id": 929,
    "ndex": "#0929",
    "english": "Dolliv",
    "simplified": "奥利纽",
    "pinyin": "Àolìniǔ",
    "level": "Gén 9",
    "type": "Planta / Normal",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png",
    "characters": [
      {
        "char": "奥",
        "pinyin": "ao4",
        "definition": "obscure",
        "definitionEs": "oscuro"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "纽",
        "pinyin": "niu3",
        "definition": "button",
        "definitionEs": "botón"
      }
    ]
  },
  {
    "id": 930,
    "ndex": "#0930",
    "english": "Arboliva",
    "simplified": "奥利瓦",
    "pinyin": "Àolìwǎ",
    "level": "Gén 9",
    "type": "Planta / Normal",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png",
    "characters": [
      {
        "char": "奥",
        "pinyin": "ao4",
        "definition": "obscure",
        "definitionEs": "oscuro"
      },
      {
        "char": "利",
        "pinyin": "li4",
        "definition": "sharp",
        "definitionEs": "afilado"
      },
      {
        "char": "瓦",
        "pinyin": "wa3",
        "definition": "tile",
        "definitionEs": "teja"
      }
    ]
  },
  {
    "id": 931,
    "ndex": "#0931",
    "english": "Squawkabilly",
    "simplified": "怒鹦哥",
    "pinyin": "Nùyīnggē",
    "level": "Gén 9",
    "type": "Normal / Volador",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png",
    "characters": [
      {
        "char": "怒",
        "pinyin": "nu4",
        "definition": "anger",
        "definitionEs": "ira"
      },
      {
        "char": "鹦",
        "pinyin": "ying1",
        "definition": "parrot",
        "definitionEs": "loro"
      },
      {
        "char": "哥",
        "pinyin": "ge1",
        "definition": "brother",
        "definitionEs": "hermano"
      }
    ]
  },
  {
    "id": 932,
    "ndex": "#0932",
    "english": "Nacli",
    "simplified": "盐石宝",
    "pinyin": "Yánshíbǎo",
    "level": "Gén 9",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png",
    "characters": [
      {
        "char": "盐",
        "pinyin": "yan2",
        "definition": "salt",
        "definitionEs": "sal"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "宝",
        "pinyin": "bao3",
        "definition": "jewel",
        "definitionEs": "joya"
      }
    ]
  },
  {
    "id": 933,
    "ndex": "#0933",
    "english": "Naclstack",
    "simplified": "盐石垒",
    "pinyin": "Yánshílěi",
    "level": "Gén 9",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png",
    "characters": [
      {
        "char": "盐",
        "pinyin": "yan2",
        "definition": "salt",
        "definitionEs": "sal"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "垒",
        "pinyin": "lei3",
        "definition": "rampart",
        "definitionEs": "muralla"
      }
    ]
  },
  {
    "id": 934,
    "ndex": "#0934",
    "english": "Garganacl",
    "simplified": "盐石巨灵",
    "pinyin": "Yánshíjùlíng",
    "level": "Gén 9",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png",
    "characters": [
      {
        "char": "盐",
        "pinyin": "yan2",
        "definition": "salt",
        "definitionEs": "sal"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 935,
    "ndex": "#0935",
    "english": "Charcadet",
    "simplified": "炭小侍",
    "pinyin": "Tànxiǎoshì",
    "level": "Gén 9",
    "type": "Fuego",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/935.png",
    "characters": [
      {
        "char": "炭",
        "pinyin": "tan4",
        "definition": "charcoal",
        "definitionEs": "carbón"
      },
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "侍",
        "pinyin": "shi4",
        "definition": "serve",
        "definitionEs": "servir"
      }
    ]
  },
  {
    "id": 936,
    "ndex": "#0936",
    "english": "Armarouge",
    "simplified": "红莲铠骑",
    "pinyin": "Hóngliánkǎiqí",
    "level": "Gén 9",
    "type": "Fuego / Psíquico",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png",
    "characters": [
      {
        "char": "红",
        "pinyin": "hong2",
        "definition": "red",
        "definitionEs": "rojo"
      },
      {
        "char": "莲",
        "pinyin": "lian2",
        "definition": "lotus",
        "definitionEs": "loto"
      },
      {
        "char": "铠",
        "pinyin": "kai3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "骑",
        "pinyin": "qi2",
        "definition": "to ride",
        "definitionEs": "montar"
      }
    ]
  },
  {
    "id": 937,
    "ndex": "#0937",
    "english": "Ceruledge",
    "simplified": "苍炎刃鬼",
    "pinyin": "Cāngyánrènguǐ",
    "level": "Gén 9",
    "type": "Fuego / Fantasma",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png",
    "characters": [
      {
        "char": "苍",
        "pinyin": "cang1",
        "definition": "dark blue",
        "definitionEs": "azul oscuro"
      },
      {
        "char": "炎",
        "pinyin": "yan2",
        "definition": "flame",
        "definitionEs": "llama"
      },
      {
        "char": "刃",
        "pinyin": "ren4",
        "definition": "edge",
        "definitionEs": "filo"
      },
      {
        "char": "鬼",
        "pinyin": "gui3",
        "definition": "ghost",
        "definitionEs": "fantasma"
      }
    ]
  },
  {
    "id": 938,
    "ndex": "#0938",
    "english": "Tadbulb",
    "simplified": "光蚪仔",
    "pinyin": "Guāngdǒuzǎi",
    "level": "Gén 9",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png",
    "characters": [
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "蚪",
        "pinyin": "dou3",
        "definition": "tadpole",
        "definitionEs": "renacuajo"
      },
      {
        "char": "仔",
        "pinyin": "zi3",
        "definition": "young",
        "definitionEs": "joven"
      }
    ]
  },
  {
    "id": 939,
    "ndex": "#0939",
    "english": "Bellibolt",
    "simplified": "电肚蛙",
    "pinyin": "Diàndùwā",
    "level": "Gén 9",
    "type": "Eléctrico",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "肚",
        "pinyin": "du4",
        "definition": "belly",
        "definitionEs": "vientre"
      },
      {
        "char": "蛙",
        "pinyin": "wa1",
        "definition": "frog",
        "definitionEs": "rana"
      }
    ]
  },
  {
    "id": 940,
    "ndex": "#0940",
    "english": "Wattrel",
    "simplified": "电海燕",
    "pinyin": "Diànhǎiyàn",
    "level": "Gén 9",
    "type": "Eléctrico / Volador",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png",
    "characters": [
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "燕",
        "pinyin": "yan4",
        "definition": "swallow",
        "definitionEs": "golondrina"
      }
    ]
  },
  {
    "id": 941,
    "ndex": "#0941",
    "english": "Kilowattrel",
    "simplified": "大电海燕",
    "pinyin": "Dàdiànhǎiyàn",
    "level": "Gén 9",
    "type": "Eléctrico / Volador",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png",
    "characters": [
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "电",
        "pinyin": "dian4",
        "definition": "electricity",
        "definitionEs": "electricidad"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "燕",
        "pinyin": "yan4",
        "definition": "swallow",
        "definitionEs": "golondrina"
      }
    ]
  },
  {
    "id": 942,
    "ndex": "#0942",
    "english": "Maschiff",
    "simplified": "偶叫獒",
    "pinyin": "Ǒujiào'áo",
    "level": "Gén 9",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png",
    "characters": [
      {
        "char": "偶",
        "pinyin": "ou3",
        "definition": "doll",
        "definitionEs": "muñeca"
      },
      {
        "char": "叫",
        "pinyin": "jiao4",
        "definition": "to call",
        "definitionEs": "llamar"
      },
      {
        "char": "獒",
        "pinyin": "ao2",
        "definition": "mastiff",
        "definitionEs": "mastín"
      }
    ]
  },
  {
    "id": 943,
    "ndex": "#0943",
    "english": "Mabosstiff",
    "simplified": "獒教父",
    "pinyin": "Áojiàofù",
    "level": "Gén 9",
    "type": "Siniestro",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png",
    "characters": [
      {
        "char": "獒",
        "pinyin": "ao2",
        "definition": "mastiff",
        "definitionEs": "mastín"
      },
      {
        "char": "教",
        "pinyin": "jiao4",
        "definition": "to teach",
        "definitionEs": "enseñar"
      },
      {
        "char": "父",
        "pinyin": "fu4",
        "definition": "father",
        "definitionEs": "padre"
      }
    ]
  },
  {
    "id": 944,
    "ndex": "#0944",
    "english": "Shroodle",
    "simplified": "滋汁鼹",
    "pinyin": "Zīzhīyǎn",
    "level": "Gén 9",
    "type": "Veneno / Normal",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png",
    "characters": [
      {
        "char": "滋",
        "pinyin": "zi1",
        "definition": "to grow",
        "definitionEs": "crecer"
      },
      {
        "char": "汁",
        "pinyin": "zhi1",
        "definition": "juice",
        "definitionEs": "jugo"
      },
      {
        "char": "鼹",
        "pinyin": "yan3",
        "definition": "mole",
        "definitionEs": "topo"
      }
    ]
  },
  {
    "id": 945,
    "ndex": "#0945",
    "english": "Grafaiai",
    "simplified": "涂标客",
    "pinyin": "Túbiāokè",
    "level": "Gén 9",
    "type": "Veneno / Normal",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png",
    "characters": [
      {
        "char": "涂",
        "pinyin": "tu2",
        "definition": "path",
        "definitionEs": "camino"
      },
      {
        "char": "标",
        "pinyin": "biao1",
        "definition": "mark",
        "definitionEs": "marca"
      },
      {
        "char": "客",
        "pinyin": "ke4",
        "definition": "guest",
        "definitionEs": "huésped"
      }
    ]
  },
  {
    "id": 946,
    "ndex": "#0946",
    "english": "Bramblin",
    "simplified": "纳噬草",
    "pinyin": "Nàshìcǎo",
    "level": "Gén 9",
    "type": "Planta / Fantasma",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png",
    "characters": [
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      },
      {
        "char": "噬",
        "pinyin": "shi4",
        "definition": "devour",
        "definitionEs": "devorar"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ]
  },
  {
    "id": 947,
    "ndex": "#0947",
    "english": "Brambleghast",
    "simplified": "怖纳噬草",
    "pinyin": "Bùnàshìcǎo",
    "level": "Gén 9",
    "type": "Planta / Fantasma",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png",
    "characters": [
      {
        "char": "怖",
        "pinyin": "bu4",
        "definition": "terror",
        "definitionEs": "terror"
      },
      {
        "char": "纳",
        "pinyin": "na4",
        "definition": "to receive",
        "definitionEs": "recibir"
      },
      {
        "char": "噬",
        "pinyin": "shi4",
        "definition": "devour",
        "definitionEs": "devorar"
      },
      {
        "char": "草",
        "pinyin": "cao3",
        "definition": "grass",
        "definitionEs": "hierba"
      }
    ]
  },
  {
    "id": 948,
    "ndex": "#0948",
    "english": "Toedscool",
    "simplified": "原野水母",
    "pinyin": "Yuányěshuǐmǔ",
    "level": "Gén 9",
    "type": "Tierra / Planta",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/948.png",
    "characters": [
      {
        "char": "原",
        "pinyin": "yuan2",
        "definition": "original",
        "definitionEs": "original"
      },
      {
        "char": "野",
        "pinyin": "ye3",
        "definition": "field",
        "definitionEs": "campo"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "母",
        "pinyin": "mu3",
        "definition": "mother",
        "definitionEs": "madre"
      }
    ]
  },
  {
    "id": 949,
    "ndex": "#0949",
    "english": "Toedscruel",
    "simplified": "陆地水母",
    "pinyin": "Lùdìshuǐmǔ",
    "level": "Gén 9",
    "type": "Tierra / Planta",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png",
    "characters": [
      {
        "char": "陆",
        "pinyin": "lu4",
        "definition": "land",
        "definitionEs": "tierra"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      },
      {
        "char": "母",
        "pinyin": "mu3",
        "definition": "mother",
        "definitionEs": "madre"
      }
    ]
  },
  {
    "id": 950,
    "ndex": "#0950",
    "english": "Klawf",
    "simplified": "毛崖蟹",
    "pinyin": "MáoyáixièMáoyáxiè",
    "level": "Gén 9",
    "type": "Roca",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png",
    "characters": [
      {
        "char": "毛",
        "pinyin": "mao2",
        "definition": "hair",
        "definitionEs": "pelo"
      },
      {
        "char": "崖",
        "pinyin": "ya2",
        "definition": "cliff",
        "definitionEs": "acantilado"
      },
      {
        "char": "蟹",
        "pinyin": "xie4",
        "definition": "crab",
        "definitionEs": "cangrejo"
      }
    ]
  },
  {
    "id": 951,
    "ndex": "#0951",
    "english": "Capsakid",
    "simplified": "热辣娃",
    "pinyin": "Rèlàwá",
    "level": "Gén 9",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png",
    "characters": [
      {
        "char": "热",
        "pinyin": "re4",
        "definition": "hot",
        "definitionEs": "caliente"
      },
      {
        "char": "辣",
        "pinyin": "la4",
        "definition": "spicy",
        "definitionEs": "picante"
      },
      {
        "char": "娃",
        "pinyin": "wa2",
        "definition": "baby",
        "definitionEs": "bebé"
      }
    ]
  },
  {
    "id": 952,
    "ndex": "#0952",
    "english": "Scovillain",
    "simplified": "狠辣椒",
    "pinyin": "Hěnlàjiāo",
    "level": "Gén 9",
    "type": "Planta / Fuego",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png",
    "characters": [
      {
        "char": "狠",
        "pinyin": "hen3",
        "definition": "ruthless",
        "definitionEs": "despiadado"
      },
      {
        "char": "辣",
        "pinyin": "la4",
        "definition": "spicy",
        "definitionEs": "picante"
      },
      {
        "char": "椒",
        "pinyin": "jiao1",
        "definition": "pepper",
        "definitionEs": "pimiento"
      }
    ]
  },
  {
    "id": 953,
    "ndex": "#0953",
    "english": "Rellor",
    "simplified": "虫滚泥",
    "pinyin": "Chónggǔnní",
    "level": "Gén 9",
    "type": "Bicho",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png",
    "characters": [
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      },
      {
        "char": "滚",
        "pinyin": "gun3",
        "definition": "boil",
        "definitionEs": "hervir"
      },
      {
        "char": "泥",
        "pinyin": "ni2",
        "definition": "mud",
        "definitionEs": "barro"
      }
    ]
  },
  {
    "id": 954,
    "ndex": "#0954",
    "english": "Rabsca",
    "simplified": "虫甲圣",
    "pinyin": "Chóngjiǎshèng",
    "level": "Gén 9",
    "type": "Bicho / Psíquico",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png",
    "characters": [
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      },
      {
        "char": "甲",
        "pinyin": "jia3",
        "definition": "armor",
        "definitionEs": "armadura"
      },
      {
        "char": "圣",
        "pinyin": "sheng4",
        "definition": "holy",
        "definitionEs": "santo"
      }
    ]
  },
  {
    "id": 955,
    "ndex": "#0955",
    "english": "Flittle",
    "simplified": "飘飘雏",
    "pinyin": "Piāopiāochú",
    "level": "Gén 9",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png",
    "characters": [
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "飘",
        "pinyin": "piao1",
        "definition": "to float",
        "definitionEs": "flotar"
      },
      {
        "char": "雏",
        "pinyin": "chu2",
        "definition": "chick",
        "definitionEs": "polluelo"
      }
    ]
  },
  {
    "id": 956,
    "ndex": "#0956",
    "english": "Espathra",
    "simplified": "超能艳鸵",
    "pinyin": "Chāonéngyàntuó",
    "level": "Gén 9",
    "type": "Psíquico",
    "colorTheme": "from-fuchsia-400 to-pink-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png",
    "characters": [
      {
        "char": "超",
        "pinyin": "chao1",
        "definition": "super",
        "definitionEs": "súper"
      },
      {
        "char": "能",
        "pinyin": "neng2",
        "definition": "can",
        "definitionEs": "poder"
      },
      {
        "char": "艳",
        "pinyin": "yan4",
        "definition": "bright",
        "definitionEs": "brillante"
      },
      {
        "char": "鸵",
        "pinyin": "tuo2",
        "definition": "ostrich",
        "definitionEs": "avestruz"
      }
    ]
  },
  {
    "id": 957,
    "ndex": "#0957",
    "english": "Tinkatink",
    "simplified": "小锻匠",
    "pinyin": "Xiǎoduànjiàng",
    "level": "Gén 9",
    "type": "Hada / Acero",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/957.png",
    "characters": [
      {
        "char": "小",
        "pinyin": "xiao3",
        "definition": "small",
        "definitionEs": "pequeño"
      },
      {
        "char": "锻",
        "pinyin": "duan4",
        "definition": "to forge",
        "definitionEs": "forjar"
      },
      {
        "char": "匠",
        "pinyin": "jiang4",
        "definition": "craftsman",
        "definitionEs": "artesano"
      }
    ]
  },
  {
    "id": 958,
    "ndex": "#0958",
    "english": "Tinkatuff",
    "simplified": "巧锻匠",
    "pinyin": "Qiǎoduànjiàng",
    "level": "Gén 9",
    "type": "Hada / Acero",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/958.png",
    "characters": [
      {
        "char": "巧",
        "pinyin": "qiao3",
        "definition": "skillful",
        "definitionEs": "hábil"
      },
      {
        "char": "锻",
        "pinyin": "duan4",
        "definition": "to forge",
        "definitionEs": "forjar"
      },
      {
        "char": "匠",
        "pinyin": "jiang4",
        "definition": "craftsman",
        "definitionEs": "artesano"
      }
    ]
  },
  {
    "id": 959,
    "ndex": "#0959",
    "english": "Tinkaton",
    "simplified": "巨锻匠",
    "pinyin": "Jùduànjiàng",
    "level": "Gén 9",
    "type": "Hada / Acero",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png",
    "characters": [
      {
        "char": "巨",
        "pinyin": "ju4",
        "definition": "giant",
        "definitionEs": "gigante"
      },
      {
        "char": "锻",
        "pinyin": "duan4",
        "definition": "to forge",
        "definitionEs": "forjar"
      },
      {
        "char": "匠",
        "pinyin": "jiang4",
        "definition": "craftsman",
        "definitionEs": "artesano"
      }
    ]
  },
  {
    "id": 960,
    "ndex": "#0960",
    "english": "Wiglett",
    "simplified": "海地鼠",
    "pinyin": "Hǎidìshǔ",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 961,
    "ndex": "#0961",
    "english": "Wugtrio",
    "simplified": "三海地鼠",
    "pinyin": "Sānhǎidìshǔ",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png",
    "characters": [
      {
        "char": "三",
        "pinyin": "san1",
        "definition": "three",
        "definitionEs": "tres"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "鼠",
        "pinyin": "shu3",
        "definition": "mouse",
        "definitionEs": "ratón"
      }
    ]
  },
  {
    "id": 962,
    "ndex": "#0962",
    "english": "Bombirdier",
    "simplified": "下石鸟",
    "pinyin": "Xiàshíniǎo",
    "level": "Gén 9",
    "type": "Volador / Siniestro",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png",
    "characters": [
      {
        "char": "下",
        "pinyin": "xia4",
        "definition": "down",
        "definitionEs": "abajo"
      },
      {
        "char": "石",
        "pinyin": "shi2",
        "definition": "stone",
        "definitionEs": "piedra"
      },
      {
        "char": "鸟",
        "pinyin": "niao3",
        "definition": "bird",
        "definitionEs": "pájaro"
      }
    ]
  },
  {
    "id": 963,
    "ndex": "#0963",
    "english": "Finizen",
    "simplified": "波普海豚",
    "pinyin": "Bōpǔhǎitún",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "普",
        "pinyin": "pu3",
        "definition": "general",
        "definitionEs": "general"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "豚",
        "pinyin": "tun2",
        "definition": "piglet",
        "definitionEs": "lechón"
      }
    ]
  },
  {
    "id": 964,
    "ndex": "#0964",
    "english": "Palafin",
    "simplified": "海豚侠",
    "pinyin": "Hǎitúnxiá",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png",
    "characters": [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea",
        "definitionEs": "mar"
      },
      {
        "char": "豚",
        "pinyin": "tun2",
        "definition": "piglet",
        "definitionEs": "lechón"
      },
      {
        "char": "侠",
        "pinyin": "xia2",
        "definition": "knight",
        "definitionEs": "caballero"
      }
    ]
  },
  {
    "id": 965,
    "ndex": "#0965",
    "english": "Varoom",
    "simplified": "噗隆隆",
    "pinyin": "Pūlónglóng",
    "level": "Gén 9",
    "type": "Acero / Veneno",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png",
    "characters": [
      {
        "char": "噗",
        "pinyin": "pu1",
        "definition": "pop",
        "definitionEs": "puf"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      }
    ]
  },
  {
    "id": 966,
    "ndex": "#0966",
    "english": "Revavroom",
    "simplified": "普隆隆姆",
    "pinyin": "Pǔlónglóngmǔ",
    "level": "Gén 9",
    "type": "Acero / Veneno",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png",
    "characters": [
      {
        "char": "普",
        "pinyin": "pu3",
        "definition": "general",
        "definitionEs": "general"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "隆",
        "pinyin": "long2",
        "definition": "grand",
        "definitionEs": "grandioso"
      },
      {
        "char": "姆",
        "pinyin": "mu3",
        "definition": "governess",
        "definitionEs": "institutriz"
      }
    ]
  },
  {
    "id": 967,
    "ndex": "#0967",
    "english": "Cyclizar",
    "simplified": "摩托蜥",
    "pinyin": "Mótuōxī",
    "level": "Gén 9",
    "type": "Dragón / Normal",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png",
    "characters": [
      {
        "char": "摩",
        "pinyin": "mo2",
        "definition": "to rub",
        "definitionEs": "frotar"
      },
      {
        "char": "托",
        "pinyin": "tuo1",
        "definition": "support",
        "definitionEs": "apoyar"
      },
      {
        "char": "蜥",
        "pinyin": "xi1",
        "definition": "lizard (part of)",
        "definitionEs": "lagarto (parte de)"
      }
    ]
  },
  {
    "id": 968,
    "ndex": "#0968",
    "english": "Orthworm",
    "simplified": "拖拖蚓",
    "pinyin": "Tuōtuōyǐn",
    "level": "Gén 9",
    "type": "Acero",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png",
    "characters": [
      {
        "char": "拖",
        "pinyin": "tuo1",
        "definition": "to drag",
        "definitionEs": "arrastrar"
      },
      {
        "char": "拖",
        "pinyin": "tuo1",
        "definition": "to drag",
        "definitionEs": "arrastrar"
      },
      {
        "char": "蚓",
        "pinyin": "yin3",
        "definition": "earthworm",
        "definitionEs": "lombriz"
      }
    ]
  },
  {
    "id": 969,
    "ndex": "#0969",
    "english": "Glimmet",
    "simplified": "晶光芽",
    "pinyin": "Jīngguāngyá",
    "level": "Gén 9",
    "type": "Roca / Veneno",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png",
    "characters": [
      {
        "char": "晶",
        "pinyin": "jing1",
        "definition": "crystal",
        "definitionEs": "cristal"
      },
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "芽",
        "pinyin": "ya2",
        "definition": "bud",
        "definitionEs": "brote"
      }
    ]
  },
  {
    "id": 970,
    "ndex": "#0970",
    "english": "Glimmora",
    "simplified": "晶光花",
    "pinyin": "Jīngguānghuā",
    "level": "Gén 9",
    "type": "Roca / Veneno",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png",
    "characters": [
      {
        "char": "晶",
        "pinyin": "jing1",
        "definition": "crystal",
        "definitionEs": "cristal"
      },
      {
        "char": "光",
        "pinyin": "guang1",
        "definition": "light",
        "definitionEs": "luz"
      },
      {
        "char": "花",
        "pinyin": "hua1",
        "definition": "flower",
        "definitionEs": "flor"
      }
    ]
  },
  {
    "id": 971,
    "ndex": "#0971",
    "english": "Greavard",
    "simplified": "墓仔狗",
    "pinyin": "Mùzǎigǒu",
    "level": "Gén 9",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png",
    "characters": [
      {
        "char": "墓",
        "pinyin": "mu4",
        "definition": "grave",
        "definitionEs": "tumba"
      },
      {
        "char": "仔",
        "pinyin": "zi3",
        "definition": "young",
        "definitionEs": "joven"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 972,
    "ndex": "#0972",
    "english": "Houndstone",
    "simplified": "墓扬犬",
    "pinyin": "Mùyángquǎn",
    "level": "Gén 9",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png",
    "characters": [
      {
        "char": "墓",
        "pinyin": "mu4",
        "definition": "grave",
        "definitionEs": "tumba"
      },
      {
        "char": "扬",
        "pinyin": "yang2",
        "definition": "to raise",
        "definitionEs": "elevar"
      },
      {
        "char": "犬",
        "pinyin": "quan3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 973,
    "ndex": "#0973",
    "english": "Flamigo",
    "simplified": "缠红鹤",
    "pinyin": "Chánhónghè",
    "level": "Gén 9",
    "type": "Volador / Lucha",
    "colorTheme": "from-sky-300 to-indigo-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png",
    "characters": [
      {
        "char": "缠",
        "pinyin": "chan2",
        "definition": "to entwine",
        "definitionEs": "enredar"
      },
      {
        "char": "红",
        "pinyin": "hong2",
        "definition": "red",
        "definitionEs": "rojo"
      },
      {
        "char": "鹤",
        "pinyin": "he4",
        "definition": "crane",
        "definitionEs": "grulla"
      }
    ]
  },
  {
    "id": 974,
    "ndex": "#0974",
    "english": "Cetoddle",
    "simplified": "走鲸",
    "pinyin": "Zǒujīng",
    "level": "Gén 9",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png",
    "characters": [
      {
        "char": "走",
        "pinyin": "zou3",
        "definition": "to walk",
        "definitionEs": "caminar"
      },
      {
        "char": "鲸",
        "pinyin": "jing1",
        "definition": "whale",
        "definitionEs": "ballena"
      }
    ]
  },
  {
    "id": 975,
    "ndex": "#0975",
    "english": "Cetitan",
    "simplified": "浩大鲸",
    "pinyin": "Hàodàjīng",
    "level": "Gén 9",
    "type": "Hielo",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png",
    "characters": [
      {
        "char": "浩",
        "pinyin": "hao4",
        "definition": "vast",
        "definitionEs": "vasto"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "鲸",
        "pinyin": "jing1",
        "definition": "whale",
        "definitionEs": "ballena"
      }
    ]
  },
  {
    "id": 976,
    "ndex": "#0976",
    "english": "Veluza",
    "simplified": "轻身鳕",
    "pinyin": "Qīngshēnxuě",
    "level": "Gén 9",
    "type": "Agua / Psíquico",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png",
    "characters": [
      {
        "char": "轻",
        "pinyin": "qing1",
        "definition": "light",
        "definitionEs": "ligero"
      },
      {
        "char": "身",
        "pinyin": "shen1",
        "definition": "body",
        "definitionEs": "cuerpo"
      },
      {
        "char": "鳕",
        "pinyin": "xue3",
        "definition": "cod",
        "definitionEs": "bacalao"
      }
    ]
  },
  {
    "id": 977,
    "ndex": "#0977",
    "english": "Dondozo",
    "simplified": "吃吼霸",
    "pinyin": "Chīhǒubà",
    "level": "Gén 9",
    "type": "Agua",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png",
    "characters": [
      {
        "char": "吃",
        "pinyin": "chi1",
        "definition": "to eat",
        "definitionEs": "comer"
      },
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "霸",
        "pinyin": "ba4",
        "definition": "tyrant",
        "definitionEs": "tirano"
      }
    ]
  },
  {
    "id": 978,
    "ndex": "#0978",
    "english": "Tatsugiri",
    "simplified": "米立龙",
    "pinyin": "Mǐlìlóng",
    "level": "Gén 9",
    "type": "Dragón / Agua",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png",
    "characters": [
      {
        "char": "米",
        "pinyin": "mi3",
        "definition": "rice",
        "definitionEs": "arroz"
      },
      {
        "char": "立",
        "pinyin": "li4",
        "definition": "to stand",
        "definitionEs": "levantar"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 979,
    "ndex": "#0979",
    "english": "Annihilape",
    "simplified": "弃世猴",
    "pinyin": "Qìshìhóu",
    "level": "Gén 9",
    "type": "Lucha / Fantasma",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png",
    "characters": [
      {
        "char": "弃",
        "pinyin": "qi4",
        "definition": "to abandon",
        "definitionEs": "abandonar"
      },
      {
        "char": "世",
        "pinyin": "shi4",
        "definition": "world",
        "definitionEs": "mundo"
      },
      {
        "char": "猴",
        "pinyin": "hou2",
        "definition": "monkey",
        "definitionEs": "mono"
      }
    ]
  },
  {
    "id": 980,
    "ndex": "#0980",
    "english": "Clodsire",
    "simplified": "土王",
    "pinyin": "Tǔwáng",
    "level": "Gén 9",
    "type": "Veneno / Tierra",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "王",
        "pinyin": "wang2",
        "definition": "king",
        "definitionEs": "rey"
      }
    ]
  },
  {
    "id": 981,
    "ndex": "#0981",
    "english": "Farigiraf",
    "simplified": "奇麒麟",
    "pinyin": "Qíqílín",
    "level": "Gén 9",
    "type": "Normal / Psíquico",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png",
    "characters": [
      {
        "char": "奇",
        "pinyin": "qi2",
        "definition": "strange",
        "definitionEs": "extraño"
      },
      {
        "char": "麒",
        "pinyin": "qi2",
        "definition": "qilin (part of)",
        "definitionEs": "qilin (parte de)"
      },
      {
        "char": "麟",
        "pinyin": "lin2",
        "definition": "qilin (part of)",
        "definitionEs": "qilin (parte de)"
      }
    ]
  },
  {
    "id": 982,
    "ndex": "#0982",
    "english": "Dudunsparce",
    "simplified": "土龙节节",
    "pinyin": "Tǔlóngjiéjié",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png",
    "characters": [
      {
        "char": "土",
        "pinyin": "tu3",
        "definition": "earth",
        "definitionEs": "tierra"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      },
      {
        "char": "节",
        "pinyin": "jie2",
        "definition": "joint",
        "definitionEs": "articulación"
      },
      {
        "char": "节",
        "pinyin": "jie2",
        "definition": "joint",
        "definitionEs": "articulación"
      }
    ]
  },
  {
    "id": 983,
    "ndex": "#0983",
    "english": "Kingambit",
    "simplified": "仆刀将军",
    "pinyin": "PūzhǎnjiāngjūnPūdāojiāngjūn",
    "level": "Gén 9",
    "type": "Siniestro / Acero",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png",
    "characters": [
      {
        "char": "仆",
        "pinyin": "pu2",
        "definition": "servant",
        "definitionEs": "sirviente"
      },
      {
        "char": "刀",
        "pinyin": "dao1",
        "definition": "knife",
        "definitionEs": "cuchillo"
      },
      {
        "char": "将",
        "pinyin": "qiang1",
        "definition": "desire",
        "definitionEs": "desear"
      },
      {
        "char": "军",
        "pinyin": "jun1",
        "definition": "army",
        "definitionEs": "ejército"
      }
    ]
  },
  {
    "id": 984,
    "ndex": "#0984",
    "english": "Great Tusk",
    "simplified": "雄伟牙",
    "pinyin": "Xióngwěiyá",
    "level": "Gén 9",
    "type": "Tierra / Lucha",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png",
    "characters": [
      {
        "char": "雄",
        "pinyin": "xiong2",
        "definition": "male",
        "definitionEs": "macho"
      },
      {
        "char": "伟",
        "pinyin": "wei3",
        "definition": "great",
        "definitionEs": "grande"
      },
      {
        "char": "牙",
        "pinyin": "ya2",
        "definition": "tooth",
        "definitionEs": "diente"
      }
    ]
  },
  {
    "id": 985,
    "ndex": "#0985",
    "english": "Scream Tail",
    "simplified": "吼叫尾",
    "pinyin": "Hǒujiàowěi",
    "level": "Gén 9",
    "type": "Hada / Psíquico",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png",
    "characters": [
      {
        "char": "吼",
        "pinyin": "hou3",
        "definition": "roar",
        "definitionEs": "rugir"
      },
      {
        "char": "叫",
        "pinyin": "jiao4",
        "definition": "to call",
        "definitionEs": "llamar"
      },
      {
        "char": "尾",
        "pinyin": "wei3",
        "definition": "tail",
        "definitionEs": "cola"
      }
    ]
  },
  {
    "id": 986,
    "ndex": "#0986",
    "english": "Brute Bonnet",
    "simplified": "猛恶菇",
    "pinyin": "Měng'ègū",
    "level": "Gén 9",
    "type": "Planta / Siniestro",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png",
    "characters": [
      {
        "char": "猛",
        "pinyin": "meng3",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "恶",
        "pinyin": "wu4",
        "definition": "hate",
        "definitionEs": "odiar"
      },
      {
        "char": "菇",
        "pinyin": "gu1",
        "definition": "mushroom (part of)",
        "definitionEs": "hongo (parte de)"
      }
    ]
  },
  {
    "id": 987,
    "ndex": "#0987",
    "english": "Flutter Mane",
    "simplified": "振翼发",
    "pinyin": "ZhènyìfăZhènyìfà",
    "level": "Gén 9",
    "type": "Fantasma / Hada",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png",
    "characters": [
      {
        "char": "振",
        "pinyin": "zhen4",
        "definition": "to shake",
        "definitionEs": "sacudir"
      },
      {
        "char": "翼",
        "pinyin": "yi4",
        "definition": "wing",
        "definitionEs": "ala"
      },
      {
        "char": "发",
        "pinyin": "fa4",
        "definition": "hair",
        "definitionEs": "pelo"
      }
    ]
  },
  {
    "id": 988,
    "ndex": "#0988",
    "english": "Slither Wing",
    "simplified": "爬地翅",
    "pinyin": "Pádìchì",
    "level": "Gén 9",
    "type": "Bicho / Lucha",
    "colorTheme": "from-lime-500 to-green-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png",
    "characters": [
      {
        "char": "爬",
        "pinyin": "pa2",
        "definition": "to crawl",
        "definitionEs": "gatear"
      },
      {
        "char": "地",
        "pinyin": "de",
        "definition": "(particle)",
        "definitionEs": "(partícula)"
      },
      {
        "char": "翅",
        "pinyin": "chi4",
        "definition": "wing",
        "definitionEs": "ala"
      }
    ]
  },
  {
    "id": 989,
    "ndex": "#0989",
    "english": "Sandy Shocks",
    "simplified": "沙铁皮",
    "pinyin": "Shātiěpí",
    "level": "Gén 9",
    "type": "Eléctrico / Tierra",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png",
    "characters": [
      {
        "char": "沙",
        "pinyin": "sha1",
        "definition": "sand",
        "definitionEs": "arena"
      },
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "皮",
        "pinyin": "pi2",
        "definition": "skin",
        "definitionEs": "piel"
      }
    ]
  },
  {
    "id": 990,
    "ndex": "#0990",
    "english": "Iron Treads",
    "simplified": "铁辙迹",
    "pinyin": "TiěchèjīTiězhéjì",
    "level": "Gén 9",
    "type": "Tierra / Acero",
    "colorTheme": "from-amber-600 to-stone-700",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "辙",
        "pinyin": "zhe2",
        "definition": "rut",
        "definitionEs": "surco"
      },
      {
        "char": "迹",
        "pinyin": "ji4",
        "definition": "trace",
        "definitionEs": "rastro"
      }
    ]
  },
  {
    "id": 991,
    "ndex": "#0991",
    "english": "Iron Bundle",
    "simplified": "铁包袱",
    "pinyin": "Tiěbāofú",
    "level": "Gén 9",
    "type": "Hielo / Agua",
    "colorTheme": "from-cyan-300 to-blue-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "包",
        "pinyin": "bao1",
        "definition": "wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "袱",
        "pinyin": "fu2",
        "definition": "cloth",
        "definitionEs": "tela"
      }
    ]
  },
  {
    "id": 992,
    "ndex": "#0992",
    "english": "Iron Hands",
    "simplified": "铁臂膀",
    "pinyin": "Tiěbìbǎng",
    "level": "Gén 9",
    "type": "Lucha / Eléctrico",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "臂",
        "pinyin": "bi4",
        "definition": "arm",
        "definitionEs": "brazo"
      },
      {
        "char": "膀",
        "pinyin": "bang3",
        "definition": "wing",
        "definitionEs": "ala"
      }
    ]
  },
  {
    "id": 993,
    "ndex": "#0993",
    "english": "Iron Jugulis",
    "simplified": "铁脖颈",
    "pinyin": "Tiěbógěng",
    "level": "Gén 9",
    "type": "Siniestro / Volador",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "脖",
        "pinyin": "bo2",
        "definition": "neck",
        "definitionEs": "cuello"
      },
      {
        "char": "颈",
        "pinyin": "jing3",
        "definition": "neck",
        "definitionEs": "cuello"
      }
    ]
  },
  {
    "id": 994,
    "ndex": "#0994",
    "english": "Iron Moth",
    "simplified": "铁毒蛾",
    "pinyin": "Tiědú'é",
    "level": "Gén 9",
    "type": "Fuego / Veneno",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "毒",
        "pinyin": "du2",
        "definition": "poison",
        "definitionEs": "veneno"
      },
      {
        "char": "蛾",
        "pinyin": "e2",
        "definition": "moth",
        "definitionEs": "polilla"
      }
    ]
  },
  {
    "id": 995,
    "ndex": "#0995",
    "english": "Iron Thorns",
    "simplified": "铁荆棘",
    "pinyin": "Tiějīngjí",
    "level": "Gén 9",
    "type": "Roca / Eléctrico",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "荆",
        "pinyin": "jing1",
        "definition": "thorn",
        "definitionEs": "espina"
      },
      {
        "char": "棘",
        "pinyin": "ji2",
        "definition": "thorn",
        "definitionEs": "espina"
      }
    ]
  },
  {
    "id": 996,
    "ndex": "#0996",
    "english": "Frigibax",
    "simplified": "凉脊龙",
    "pinyin": "Liángjílóng",
    "level": "Gén 9",
    "type": "Dragón / Hielo",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png",
    "characters": [
      {
        "char": "凉",
        "pinyin": "liang4",
        "definition": "to cool",
        "definitionEs": "enfriar"
      },
      {
        "char": "脊",
        "pinyin": "ji3",
        "definition": "spine",
        "definitionEs": "columna"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 997,
    "ndex": "#0997",
    "english": "Arctibax",
    "simplified": "冻脊龙",
    "pinyin": "Dòngjílóng",
    "level": "Gén 9",
    "type": "Dragón / Hielo",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png",
    "characters": [
      {
        "char": "冻",
        "pinyin": "dong4",
        "definition": "to freeze",
        "definitionEs": "congelar"
      },
      {
        "char": "脊",
        "pinyin": "ji3",
        "definition": "spine",
        "definitionEs": "columna"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 998,
    "ndex": "#0998",
    "english": "Baxcalibur",
    "simplified": "戟脊龙",
    "pinyin": "Jǐjílóng",
    "level": "Gén 9",
    "type": "Dragón / Hielo",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png",
    "characters": [
      {
        "char": "戟",
        "pinyin": "ji3",
        "definition": "halberd",
        "definitionEs": "alabarda"
      },
      {
        "char": "脊",
        "pinyin": "ji3",
        "definition": "spine",
        "definitionEs": "columna"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 999,
    "ndex": "#0999",
    "english": "Gimmighoul",
    "simplified": "索财灵",
    "pinyin": "Suǒcáilíng",
    "level": "Gén 9",
    "type": "Fantasma",
    "colorTheme": "from-violet-600 to-indigo-900",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png",
    "characters": [
      {
        "char": "索",
        "pinyin": "suo3",
        "definition": "search",
        "definitionEs": "buscar"
      },
      {
        "char": "财",
        "pinyin": "cai2",
        "definition": "wealth",
        "definitionEs": "riqueza"
      },
      {
        "char": "灵",
        "pinyin": "ling2",
        "definition": "spirit",
        "definitionEs": "espíritu"
      }
    ]
  },
  {
    "id": 1000,
    "ndex": "#1000",
    "english": "Gholdengo",
    "simplified": "赛富豪",
    "pinyin": "Sàifùháo",
    "level": "Gén 9",
    "type": "Acero / Fantasma",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png",
    "characters": [
      {
        "char": "赛",
        "pinyin": "sai4",
        "definition": "compete",
        "definitionEs": "competir"
      },
      {
        "char": "富",
        "pinyin": "fu4",
        "definition": "rich",
        "definitionEs": "rico"
      },
      {
        "char": "豪",
        "pinyin": "hao2",
        "definition": "grand",
        "definitionEs": "grandioso"
      }
    ]
  },
  {
    "id": 1001,
    "ndex": "#1001",
    "english": "Wo-Chien",
    "simplified": "古简蜗",
    "pinyin": "GǔjiǎnguāGǔjiǎnwō",
    "level": "Gén 9",
    "type": "Siniestro / Planta",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "简",
        "pinyin": "jian3",
        "definition": "simple",
        "definitionEs": "simple"
      },
      {
        "char": "蜗",
        "pinyin": "wo1",
        "definition": "snail",
        "definitionEs": "caracol"
      }
    ]
  },
  {
    "id": 1002,
    "ndex": "#1002",
    "english": "Chien-Pao",
    "simplified": "古剑豹",
    "pinyin": "Gǔjiànbào",
    "level": "Gén 9",
    "type": "Siniestro / Hielo",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1002.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "剑",
        "pinyin": "jian4",
        "definition": "sword",
        "definitionEs": "espada"
      },
      {
        "char": "豹",
        "pinyin": "bao4",
        "definition": "leopard",
        "definitionEs": "leopardo"
      }
    ]
  },
  {
    "id": 1003,
    "ndex": "#1003",
    "english": "Ting-Lu",
    "simplified": "古鼎鹿",
    "pinyin": "Gǔdǐnglù",
    "level": "Gén 9",
    "type": "Siniestro / Tierra",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "鼎",
        "pinyin": "ding3",
        "definition": "cauldron",
        "definitionEs": "caldero"
      },
      {
        "char": "鹿",
        "pinyin": "lu4",
        "definition": "deer",
        "definitionEs": "ciervo"
      }
    ]
  },
  {
    "id": 1004,
    "ndex": "#1004",
    "english": "Chi-Yu",
    "simplified": "古玉鱼",
    "pinyin": "Gǔyùyú",
    "level": "Gén 9",
    "type": "Siniestro / Fuego",
    "colorTheme": "from-stone-800 to-stone-950",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png",
    "characters": [
      {
        "char": "古",
        "pinyin": "gu3",
        "definition": "ancient",
        "definitionEs": "antiguo"
      },
      {
        "char": "玉",
        "pinyin": "yu4",
        "definition": "jade",
        "definitionEs": "jade"
      },
      {
        "char": "鱼",
        "pinyin": "yu2",
        "definition": "fish",
        "definitionEs": "pez"
      }
    ]
  },
  {
    "id": 1005,
    "ndex": "#1005",
    "english": "Roaring Moon",
    "simplified": "轰鸣月",
    "pinyin": "Hōngmíngyuè",
    "level": "Gén 9",
    "type": "Dragón / Siniestro",
    "colorTheme": "from-indigo-500 to-purple-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png",
    "characters": [
      {
        "char": "轰",
        "pinyin": "hong1",
        "definition": "explosion",
        "definitionEs": "explosión"
      },
      {
        "char": "鸣",
        "pinyin": "ming2",
        "definition": "chirp",
        "definitionEs": "piar"
      },
      {
        "char": "月",
        "pinyin": "yue4",
        "definition": "moon",
        "definitionEs": "luna"
      }
    ]
  },
  {
    "id": 1006,
    "ndex": "#1006",
    "english": "Iron Valiant",
    "simplified": "铁武者",
    "pinyin": "Tiěwǔzhě",
    "level": "Gén 9",
    "type": "Hada / Lucha",
    "colorTheme": "from-pink-300 to-rose-400",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "武",
        "pinyin": "wu3",
        "definition": "martial",
        "definitionEs": "marcial"
      },
      {
        "char": "者",
        "pinyin": "zhe3",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      }
    ]
  },
  {
    "id": 1007,
    "ndex": "#1007",
    "english": "Koraidon",
    "simplified": "故勒顿",
    "pinyin": "Gùlèdùn",
    "level": "Gén 9",
    "type": "Lucha / Dragón",
    "colorTheme": "from-red-600 to-stone-800",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
    "characters": [
      {
        "char": "故",
        "pinyin": "gu4",
        "definition": "old",
        "definitionEs": "antiguo"
      },
      {
        "char": "勒",
        "pinyin": "lei1",
        "definition": "to strap",
        "definitionEs": "ceñir"
      },
      {
        "char": "顿",
        "pinyin": "dun4",
        "definition": "stop",
        "definitionEs": "parar"
      }
    ]
  },
  {
    "id": 1008,
    "ndex": "#1008",
    "english": "Miraidon",
    "simplified": "密勒顿",
    "pinyin": "Mìlèdùn",
    "level": "Gén 9",
    "type": "Eléctrico / Dragón",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png",
    "characters": [
      {
        "char": "密",
        "pinyin": "mi4",
        "definition": "dense",
        "definitionEs": "denso"
      },
      {
        "char": "勒",
        "pinyin": "lei1",
        "definition": "to strap",
        "definitionEs": "ceñir"
      },
      {
        "char": "顿",
        "pinyin": "dun4",
        "definition": "stop",
        "definitionEs": "parar"
      }
    ]
  },
  {
    "id": 1009,
    "ndex": "#1009",
    "english": "Walking Wake",
    "simplified": "波荡水",
    "pinyin": "Bōdàngshuǐ",
    "level": "Gén 9",
    "type": "Agua / Dragón",
    "colorTheme": "from-blue-400 to-cyan-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png",
    "characters": [
      {
        "char": "波",
        "pinyin": "bo1",
        "definition": "wave",
        "definitionEs": "ola"
      },
      {
        "char": "荡",
        "pinyin": "dang4",
        "definition": "swing",
        "definitionEs": "balancear"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "water",
        "definitionEs": "agua"
      }
    ]
  },
  {
    "id": 1010,
    "ndex": "#1010",
    "english": "Iron Leaves",
    "simplified": "铁斑叶",
    "pinyin": "Tiěbānyè",
    "level": "Gén 9",
    "type": "Planta / Psíquico",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "斑",
        "pinyin": "ban1",
        "definition": "spot",
        "definitionEs": "mancha"
      },
      {
        "char": "叶",
        "pinyin": "ye4",
        "definition": "leaf",
        "definitionEs": "hoja"
      }
    ]
  },
  {
    "id": 1011,
    "ndex": "#1011",
    "english": "Dipplin",
    "simplified": "裹蜜虫",
    "pinyin": "Guǒmìchóng",
    "level": "Gén 9",
    "type": "Planta / Dragón",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png",
    "characters": [
      {
        "char": "裹",
        "pinyin": "guo3",
        "definition": "wrap",
        "definitionEs": "envolver"
      },
      {
        "char": "蜜",
        "pinyin": "mi4",
        "definition": "honey",
        "definitionEs": "miel"
      },
      {
        "char": "虫",
        "pinyin": "chong2",
        "definition": "insect",
        "definitionEs": "insecto"
      }
    ]
  },
  {
    "id": 1012,
    "ndex": "#1012",
    "english": "Poltchageist",
    "simplified": "斯魔茶",
    "pinyin": "Sīmóchá",
    "level": "Gén 9",
    "type": "Planta / Fantasma",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1012.png",
    "characters": [
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      },
      {
        "char": "魔",
        "pinyin": "mo2",
        "definition": "demon",
        "definitionEs": "demonio"
      },
      {
        "char": "茶",
        "pinyin": "cha2",
        "definition": "tea",
        "definitionEs": "té"
      }
    ]
  },
  {
    "id": 1013,
    "ndex": "#1013",
    "english": "Sinistcha",
    "simplified": "來悲粗茶",
    "pinyin": "Láibēicūchá",
    "level": "Gén 9",
    "type": "Planta / Fantasma",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png",
    "characters": [
      {
        "char": "來",
        "pinyin": "lai2",
        "definition": "come",
        "definitionEs": "venir"
      },
      {
        "char": "悲",
        "pinyin": "bei1",
        "definition": "sad",
        "definitionEs": "triste"
      },
      {
        "char": "粗",
        "pinyin": "cu1",
        "definition": "coarse",
        "definitionEs": "áspero"
      },
      {
        "char": "茶",
        "pinyin": "cha2",
        "definition": "tea",
        "definitionEs": "té"
      }
    ]
  },
  {
    "id": 1014,
    "ndex": "#1014",
    "english": "Okidogi",
    "simplified": "够赞狗",
    "pinyin": "Gòuzàngǒu",
    "level": "Gén 9",
    "type": "Veneno / Lucha",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png",
    "characters": [
      {
        "char": "够",
        "pinyin": "gou4",
        "definition": "enough",
        "definitionEs": "suficiente"
      },
      {
        "char": "赞",
        "pinyin": "zan4",
        "definition": "praise",
        "definitionEs": "alabar"
      },
      {
        "char": "狗",
        "pinyin": "gou3",
        "definition": "dog",
        "definitionEs": "perro"
      }
    ]
  },
  {
    "id": 1015,
    "ndex": "#1015",
    "english": "Munkidori",
    "simplified": "愿增猿",
    "pinyin": "Yuànzēngyuán",
    "level": "Gén 9",
    "type": "Veneno / Psíquico",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png",
    "characters": [
      {
        "char": "愿",
        "pinyin": "yuan4",
        "definition": "wish",
        "definitionEs": "deseo"
      },
      {
        "char": "增",
        "pinyin": "zeng1",
        "definition": "increase",
        "definitionEs": "aumentar"
      },
      {
        "char": "猿",
        "pinyin": "yuan2",
        "definition": "ape",
        "definitionEs": "simio"
      }
    ]
  },
  {
    "id": 1016,
    "ndex": "#1016",
    "english": "Fezandipiti",
    "simplified": "吉雉鸡",
    "pinyin": "Jízhìjī",
    "level": "Gén 9",
    "type": "Veneno / Hada",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png",
    "characters": [
      {
        "char": "吉",
        "pinyin": "ji2",
        "definition": "lucky",
        "definitionEs": "afortunado"
      },
      {
        "char": "雉",
        "pinyin": "zhi4",
        "definition": "pheasant",
        "definitionEs": "faisán"
      },
      {
        "char": "鸡",
        "pinyin": "ji1",
        "definition": "chicken",
        "definitionEs": "pollo"
      }
    ]
  },
  {
    "id": 1017,
    "ndex": "#1017",
    "english": "Ogerpon",
    "simplified": "厄诡椪",
    "pinyin": "Èguǐpèng",
    "level": "Gén 9",
    "type": "Planta",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png",
    "characters": [
      {
        "char": "厄",
        "pinyin": "e4",
        "definition": "distress",
        "definitionEs": "angustia"
      },
      {
        "char": "诡",
        "pinyin": "gui3",
        "definition": "sly",
        "definitionEs": "astuto"
      },
      {
        "char": "椪",
        "pinyin": "peng4",
        "definition": "bump",
        "definitionEs": "chocar"
      }
    ]
  },
  {
    "id": 1018,
    "ndex": "#1018",
    "english": "Archaludon",
    "simplified": "铝钢桥龙",
    "pinyin": "Lǚgāngqiáolóng",
    "level": "Gén 9",
    "type": "Acero / Dragón",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png",
    "characters": [
      {
        "char": "铝",
        "pinyin": "lü3",
        "definition": "aluminum",
        "definitionEs": "aluminio"
      },
      {
        "char": "钢",
        "pinyin": "gang1",
        "definition": "steel",
        "definitionEs": "acero"
      },
      {
        "char": "桥",
        "pinyin": "qiao2",
        "definition": "bridge",
        "definitionEs": "puente"
      },
      {
        "char": "龙",
        "pinyin": "long2",
        "definition": "dragon",
        "definitionEs": "dragón"
      }
    ]
  },
  {
    "id": 1019,
    "ndex": "#1019",
    "english": "Hydrapple",
    "simplified": "蜜集大蛇",
    "pinyin": "Mìjídàshé",
    "level": "Gén 9",
    "type": "Planta / Dragón",
    "colorTheme": "from-emerald-400 to-teal-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png",
    "characters": [
      {
        "char": "蜜",
        "pinyin": "mi4",
        "definition": "honey",
        "definitionEs": "miel"
      },
      {
        "char": "集",
        "pinyin": "ji2",
        "definition": "gather",
        "definitionEs": "reunir"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big",
        "definitionEs": "grande"
      },
      {
        "char": "蛇",
        "pinyin": "she2",
        "definition": "snake",
        "definitionEs": "serpiente"
      }
    ]
  },
  {
    "id": 1020,
    "ndex": "#1020",
    "english": "Gouging Fire",
    "simplified": "破空焰",
    "pinyin": "Pòkōngyàn",
    "level": "Gén 9",
    "type": "Fuego / Dragón",
    "colorTheme": "from-orange-400 to-red-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png",
    "characters": [
      {
        "char": "破",
        "pinyin": "po4",
        "definition": "broken",
        "definitionEs": "roto"
      },
      {
        "char": "空",
        "pinyin": "kong1",
        "definition": "empty",
        "definitionEs": "vacío"
      },
      {
        "char": "焰",
        "pinyin": "yan4",
        "definition": "flame",
        "definitionEs": "llama"
      }
    ]
  },
  {
    "id": 1021,
    "ndex": "#1021",
    "english": "Raging Bolt",
    "simplified": "猛雷鼓",
    "pinyin": "Měngléigǔ",
    "level": "Gén 9",
    "type": "Eléctrico / Dragón",
    "colorTheme": "from-yellow-300 to-amber-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png",
    "characters": [
      {
        "char": "猛",
        "pinyin": "meng3",
        "definition": "fierce",
        "definitionEs": "feroz"
      },
      {
        "char": "雷",
        "pinyin": "lei2",
        "definition": "thunder",
        "definitionEs": "trueno"
      },
      {
        "char": "鼓",
        "pinyin": "gu3",
        "definition": "drum",
        "definitionEs": "tambor"
      }
    ]
  },
  {
    "id": 1022,
    "ndex": "#1022",
    "english": "Iron Boulder",
    "simplified": "铁磐岩",
    "pinyin": "Tiěpányán",
    "level": "Gén 9",
    "type": "Roca / Psíquico",
    "colorTheme": "from-stone-400 to-stone-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "磐",
        "pinyin": "pan2",
        "definition": "rock",
        "definitionEs": "roca"
      },
      {
        "char": "岩",
        "pinyin": "yan2",
        "definition": "rock",
        "definitionEs": "roca"
      }
    ]
  },
  {
    "id": 1023,
    "ndex": "#1023",
    "english": "Iron Crown",
    "simplified": "铁头壳",
    "pinyin": "Tiětóuké",
    "level": "Gén 9",
    "type": "Acero / Psíquico",
    "colorTheme": "from-zinc-400 to-slate-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png",
    "characters": [
      {
        "char": "铁",
        "pinyin": "tie3",
        "definition": "iron",
        "definitionEs": "hierro"
      },
      {
        "char": "头",
        "pinyin": "tou2",
        "definition": "head",
        "definitionEs": "cabeza"
      },
      {
        "char": "壳",
        "pinyin": "ke2",
        "definition": "shell",
        "definitionEs": "concha"
      }
    ]
  },
  {
    "id": 1024,
    "ndex": "#1024",
    "english": "Terapagos",
    "simplified": "太乐巴戈斯",
    "pinyin": "Tàilèbāgēsī",
    "level": "Gén 9",
    "type": "Normal",
    "colorTheme": "from-slate-300 to-slate-500",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png",
    "characters": [
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "supreme",
        "definitionEs": "supremo"
      },
      {
        "char": "乐",
        "pinyin": "yue4",
        "definition": "music",
        "definitionEs": "música"
      },
      {
        "char": "巴",
        "pinyin": "ba1",
        "definition": "(suffix)",
        "definitionEs": "(sufijo)"
      },
      {
        "char": "戈",
        "pinyin": "ge1",
        "definition": "dagger-axe",
        "definitionEs": "daga-hacha"
      },
      {
        "char": "斯",
        "pinyin": "si1",
        "definition": "(phonetic)",
        "definitionEs": "(fonético)"
      }
    ]
  },
  {
    "id": 1025,
    "ndex": "#1025",
    "english": "Pecharunt",
    "simplified": "桃歹郎",
    "pinyin": "Táodǎiláng",
    "level": "Gén 9",
    "type": "Veneno / Fantasma",
    "colorTheme": "from-purple-400 to-indigo-600",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png",
    "characters": [
      {
        "char": "桃",
        "pinyin": "tao2",
        "definition": "peach",
        "definitionEs": "melocotón"
      },
      {
        "char": "歹",
        "pinyin": "dai3",
        "definition": "bad",
        "definitionEs": "malo"
      },
      {
        "char": "郎",
        "pinyin": "lang2",
        "definition": "minister",
        "definitionEs": "ministro"
      }
    ]
  }
];
