// Datos de tarjetas de Pokémon (Generación I)
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
                "definition": "clever; wonderful"
            },
            {
                "char": "蛙",
                "pinyin": "wa1",
                "definition": "frog; CL:隻|只[zhi1]"
            },
            {
                "char": "种",
                "pinyin": "zhong3",
                "definition": "seed; species; kind; type; classifier for types, kinds, sorts"
            },
            {
                "char": "子",
                "pinyin": "zi3",
                "definition": "son; child; seed; egg; small thing; 1st earthly branch: 11 p.m.-1 a.m., midnight, 11th solar month (7th December to 5th January), year of the Rat; Viscount, fourth of five orders of nobility 五等爵位[wu3 deng3 jue2 wei4]; ancient Chinese compass point: 0° (north)"
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
                "definition": "clever; wonderful"
            },
            {
                "char": "蛙",
                "pinyin": "wa1",
                "definition": "frog; CL:隻|只[zhi1]"
            },
            {
                "char": "草",
                "pinyin": "cao3",
                "definition": "grass; straw; manuscript; draft (of a document); careless; rough; CL:棵[ke1],撮[zuo3],株[zhu1],根[gen1]"
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
                "definition": "clever; wonderful"
            },
            {
                "char": "蛙",
                "pinyin": "wa1",
                "definition": "frog; CL:隻|只[zhi1]"
            },
            {
                "char": "花",
                "pinyin": "hua1",
                "definition": "flower; blossom; CL:朵[duo3],支[zhi1],束[shu4],把[ba3],盆[pen2],簇[cu4]; fancy pattern; florid; to spend (money, time)"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "火",
                "pinyin": "huo3",
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "恐",
                "pinyin": "kong3",
                "definition": "afraid; frightened; to fear"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "to puff; to spout; to spray; to spurt"
            },
            {
                "char": "火",
                "pinyin": "huo3",
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "hero; heroic; outstanding person; prominent; distinguished"
            },
            {
                "char": "尼",
                "pinyin": "ni2",
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "龟",
                "pinyin": "gui1",
                "definition": "tortoise; turtle"
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
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "咪",
                "pinyin": "mi1",
                "definition": "sound for calling a cat"
            },
            {
                "char": "龟",
                "pinyin": "gui1",
                "definition": "tortoise; turtle"
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
                "definition": "water; river; liquid; beverage; additional charges or income; (of clothes) classifier for number of washes"
            },
            {
                "char": "箭",
                "pinyin": "jian4",
                "definition": "arrow; CL:支[zhi1]"
            },
            {
                "char": "龟",
                "pinyin": "gui1",
                "definition": "tortoise; turtle"
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
                "pinyin": "lu:4",
                "definition": "green"
            },
            {
                "char": "毛",
                "pinyin": "mao2",
                "definition": "hair; feather; down; wool; mildew; mold; coarse or semifinished; young; raw; careless; unthinking; nervous; scared; (of currency) to devalue or depreciate; classifier for Chinese fractional monetary unit ( = 角[jiao3] , = one-tenth of a yuan or 10 fen 分[fen1])"
            },
            {
                "char": "虫",
                "pinyin": "chong2",
                "definition": "lower form of animal life, including insects, insect larvae, worms and similar creatures; CL:條|条[tiao2],隻|只[zhi1]; person with a particular undesirable characteristic"
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
                "definition": "iron (metal); arms; weapons; hard; strong; violent; unshakeable; determined; close; tight (slang)"
            },
            {
                "char": "甲",
                "pinyin": "jia3",
                "definition": "first of the ten Heavenly Stems 十天干[shi2 tian1 gan1]; (used for an unspecified person or thing); first (in a list, as a party to a contract etc); letter \"A\" or roman \"I\" in list \"A, B, C\", or \"I, II, III\" etc; armor plating; shell or carapace; (of the fingers or toes) nail; bladed leather or metal armor (old); ranking system used in the Imperial examinations (old); civil administration unit (old); ancient Chinese compass point: 75°"
            },
            {
                "char": "蛹",
                "pinyin": "yong3",
                "definition": "chrysalis; pupa"
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
                "definition": "to long for; to wish; to cling to; to stick to; sth that sticks; close to; next to; spread open; informal abbr. for bus 巴士[ba1 shi4]; bar (unit of pressure); nominalizing suffix on certain nouns, such as 尾巴[wei3 ba5], tail"
            },
            {
                "char": "大",
                "pinyin": "da4",
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "蝶",
                "pinyin": "die2",
                "definition": "butterfly; CL:隻|只[zhi1]"
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
                "definition": "alone; independent; single; sole; only"
            },
            {
                "char": "角",
                "pinyin": "jiao3",
                "definition": "angle; corner; horn; horn-shaped; unit of money equal to 0.1 yuan; CL:個|个[ge4]"
            },
            {
                "char": "虫",
                "pinyin": "chong2",
                "definition": "lower form of animal life, including insects, insect larvae, worms and similar creatures; CL:條|条[tiao2],隻|只[zhi1]; person with a particular undesirable characteristic"
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
                "definition": "iron (metal); arms; weapons; hard; strong; violent; unshakeable; determined; close; tight (slang)"
            },
            {
                "char": "壳",
                "pinyin": "qiao4",
                "definition": "shell; carapace; crust (earth's crust etc); also pr. [ke2]"
            },
            {
                "char": "蛹",
                "pinyin": "yong3",
                "definition": "chrysalis; pupa"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "针",
                "pinyin": "zhen1",
                "definition": "needle; pin; injection; stitch; CL:根[gen1],支[zhi1]"
            },
            {
                "char": "蜂",
                "pinyin": "feng1",
                "definition": "bee; wasp"
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
                "definition": "wave; ripple; storm; surge"
            },
            {
                "char": "波",
                "pinyin": "bo1",
                "definition": "wave; ripple; storm; surge"
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
                "definition": "(particle used for comparison and \"-er than\"); to compare; to contrast; to gesture (with hands); ratio"
            },
            {
                "char": "比",
                "pinyin": "bi3",
                "definition": "(particle used for comparison and \"-er than\"); to compare; to contrast; to gesture (with hands); ratio"
            },
            {
                "char": "鸟",
                "pinyin": "niao3",
                "definition": "bird; CL:隻|只[zhi1],群[qun2]; (dialect) to pay attention to; (intensifier) damned; goddam"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "比",
                "pinyin": "bi3",
                "definition": "(particle used for comparison and \"-er than\"); to compare; to contrast; to gesture (with hands); ratio"
            },
            {
                "char": "鸟",
                "pinyin": "niao3",
                "definition": "bird; CL:隻|只[zhi1],群[qun2]; (dialect) to pay attention to; (intensifier) damned; goddam"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "达",
                "pinyin": "da2",
                "definition": "to attain; to reach; to amount to; to communicate; eminent"
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
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "达",
                "pinyin": "da2",
                "definition": "to attain; to reach; to amount to; to communicate; eminent"
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
                "definition": "ardent; intense; fierce; stern; upright; to give one's life for a noble cause; exploits; achievements"
            },
            {
                "char": "雀",
                "pinyin": "qiao1",
                "definition": "a freckle; lentigo"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "嘴",
                "pinyin": "zui3",
                "definition": "mouth; beak; nozzle; spout (of teapot etc); CL:張|张[zhang1],個|个[ge4]"
            },
            {
                "char": "雀",
                "pinyin": "qiao1",
                "definition": "a freckle; lentigo"
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
                "definition": "prefix used before monosyllabic names, kinship terms etc to indicate familiarity; used in transliteration; also pr. [a4]"
            },
            {
                "char": "柏",
                "pinyin": "bai3",
                "definition": "cedar; cypress; Taiwan pr. [bo2]"
            },
            {
                "char": "蛇",
                "pinyin": "she2",
                "definition": "snake; serpent; CL:條|条[tiao2]"
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
                "definition": "prefix used before monosyllabic names, kinship terms etc to indicate familiarity; used in transliteration; also pr. [a4]"
            },
            {
                "char": "柏",
                "pinyin": "bai3",
                "definition": "cedar; cypress; Taiwan pr. [bo2]"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "leather; skin; fur; CL:張|张[zhang1]; pico- (one trillionth); naughty"
            },
            {
                "char": "卡",
                "pinyin": "ka3",
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "丘",
                "pinyin": "qiu1",
                "definition": "mound; hillock; grave; classifier for fields"
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
                "definition": "thunder; mine (weapon); (Internet slang) terrifying; terrific"
            },
            {
                "char": "丘",
                "pinyin": "qiu1",
                "definition": "mound; hillock; grave; classifier for fields"
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
                "definition": "to wear; to put on; to dress; to bore through; to pierce; to perforate; to penetrate; to pass through; to thread"
            },
            {
                "char": "山",
                "pinyin": "shan1",
                "definition": "mountain; hill; anything that resembles a mountain; CL:座[zuo4]; bundled straw in which silkworms spin cocoons; gable"
            },
            {
                "char": "鼠",
                "pinyin": "shu3",
                "definition": "rat; mouse; CL:隻|只[zhi1]"
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
                "definition": "to wear; to put on; to dress; to bore through; to pierce; to perforate; to penetrate; to pass through; to thread"
            },
            {
                "char": "山",
                "pinyin": "shan1",
                "definition": "mountain; hill; anything that resembles a mountain; CL:座[zuo4]; bundled straw in which silkworms spin cocoons; gable"
            },
            {
                "char": "王",
                "pinyin": "wang2",
                "definition": "king or monarch; best or strongest of its type; grand; great"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "兰",
                "pinyin": "lan2",
                "definition": "orchid (蘭花|兰花 Cymbidium goeringii); fragrant thoroughwort (蘭草|兰草 Eupatorium fortunei); lily magnolia (木蘭|木兰)"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "娜",
                "pinyin": "na4",
                "definition": "(phonetic na); used esp. in female names such as Anna 安娜[An1 na4] or Diana 黛安娜[Dai4 an1 na4]"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "后",
                "pinyin": "hou4",
                "definition": "empress; queen"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "朗",
                "pinyin": "lang3",
                "definition": "clear; bright"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "力",
                "pinyin": "li4",
                "definition": "power; force; strength; ability; strenuously"
            },
            {
                "char": "诺",
                "pinyin": "nuo4",
                "definition": "to consent; to promise; (literary) yes!"
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
                "definition": "Buddhist nun; (often used in phonetic spellings)"
            },
            {
                "char": "多",
                "pinyin": "duo1",
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "王",
                "pinyin": "wang2",
                "definition": "king or monarch; best or strongest of its type; grand; great"
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
                "definition": "leather; skin; fur; CL:張|张[zhang1]; pico- (one trillionth); naughty"
            },
            {
                "char": "皮",
                "pinyin": "pi2",
                "definition": "leather; skin; fur; CL:張|张[zhang1]; pico- (one trillionth); naughty"
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
                "definition": "leather; skin; fur; CL:張|张[zhang1]; pico- (one trillionth); naughty"
            },
            {
                "char": "可",
                "pinyin": "ke3",
                "definition": "can; may; able to; to approve; to permit; to suit; (particle used for emphasis) certainly; very"
            },
            {
                "char": "西",
                "pinyin": "xi1",
                "definition": "west"
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
                "definition": "six; 6"
            },
            {
                "char": "尾",
                "pinyin": "wei3",
                "definition": "tail; remainder; remnant; extremity; sixth of the 28 constellations; classifier for fish"
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
                "definition": "nine; 9"
            },
            {
                "char": "尾",
                "pinyin": "wei3",
                "definition": "tail; remainder; remnant; extremity; sixth of the 28 constellations; classifier for fish"
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
                "pinyin": "pan2",
                "definition": "healthy; at ease"
            },
            {
                "char": "丁",
                "pinyin": "ding1",
                "definition": "fourth of the ten Heavenly Stems 十天干[shi2 tian1 gan1]; fourth in order; letter \"D\" or roman \"IV\" in list \"A, B, C\", or \"I, II, III\" etc; ancient Chinese compass point: 195°; butyl; cubes (of food)"
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
                "pinyin": "pan2",
                "definition": "healthy; at ease"
            },
            {
                "char": "可",
                "pinyin": "ke3",
                "definition": "can; may; able to; to approve; to permit; to suit; (particle used for emphasis) certainly; very"
            },
            {
                "char": "丁",
                "pinyin": "ding1",
                "definition": "fourth of the ten Heavenly Stems 十天干[shi2 tian1 gan1]; fourth in order; letter \"D\" or roman \"IV\" in list \"A, B, C\", or \"I, II, III\" etc; ancient Chinese compass point: 195°; butyl; cubes (of food)"
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
                "definition": "to exceed; to overtake; to surpass; to transcend; to pass; to cross; ultra-; super-"
            },
            {
                "char": "音",
                "pinyin": "yin1",
                "definition": "sound; noise; note (of musical scale); tone; news; syllable; reading (phonetic value of a character)"
            },
            {
                "char": "蝠",
                "pinyin": "fu2",
                "definition": "bat"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "嘴",
                "pinyin": "zui3",
                "definition": "mouth; beak; nozzle; spout (of teapot etc); CL:張|张[zhang1],個|个[ge4]"
            },
            {
                "char": "蝠",
                "pinyin": "fu2",
                "definition": "bat"
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
                "definition": "to walk; to go; to run; to move (of vehicle); to visit; to leave; to go away; to die (euph.); from; through; away (in compound verbs, such as 撤走[che4 zou3]); to change (shape, form, meaning)"
            },
            {
                "char": "路",
                "pinyin": "lu4",
                "definition": "road; CL:條|条[tiao2]; journey; route; line (bus etc); sort; kind"
            },
            {
                "char": "草",
                "pinyin": "cao3",
                "definition": "grass; straw; manuscript; draft (of a document); careless; rough; CL:棵[ke1],撮[zuo3],株[zhu1],根[gen1]"
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
                "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
            },
            {
                "char": "臭",
                "pinyin": "chou4",
                "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
            },
            {
                "char": "花",
                "pinyin": "hua1",
                "definition": "flower; blossom; CL:朵[duo3],支[zhi1],束[shu4],把[ba3],盆[pen2],簇[cu4]; fancy pattern; florid; to spend (money, time)"
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
                "definition": "hegemon; tyrant; lord; feudal chief; to rule by force; to usurp; (in modern advertising) master"
            },
            {
                "char": "王",
                "pinyin": "wang2",
                "definition": "king or monarch; best or strongest of its type; grand; great"
            },
            {
                "char": "花",
                "pinyin": "hua1",
                "definition": "flower; blossom; CL:朵[duo3],支[zhi1],束[shu4],把[ba3],盆[pen2],簇[cu4]; fancy pattern; florid; to spend (money, time)"
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
                "definition": "clique; school; group; faction; to dispatch; to send; to assign; to appoint; pi (Greek letter Ππ); the circular ratio pi = 3.1415926; (loanword) pie"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
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
                "definition": "clique; school; group; faction; to dispatch; to send; to assign; to appoint; pi (Greek letter Ππ); the circular ratio pi = 3.1415926; (loanword) pie"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
            },
            {
                "char": "特",
                "pinyin": "te4",
                "definition": "special; unique; distinguished; especially; unusual; very"
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
                "definition": "hair; feather; down; wool; mildew; mold; coarse or semifinished; young; raw; careless; unthinking; nervous; scared; (of currency) to devalue or depreciate; classifier for Chinese fractional monetary unit ( = 角[jiao3] , = one-tenth of a yuan or 10 fen 分[fen1])"
            },
            {
                "char": "球",
                "pinyin": "qiu2",
                "definition": "ball; sphere; globe; CL:個|个[ge4]; ball game; match; CL:場|场[chang3]"
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
                "definition": "to rub"
            },
            {
                "char": "鲁",
                "pinyin": "lu3",
                "definition": "crass; stupid; rude"
            },
            {
                "char": "蛾",
                "pinyin": "e2",
                "definition": "moth"
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
                "pinyin": "de5",
                "definition": "-ly; structural particle: used before a verb or adjective, linking it to preceding modifying adverbial adjunct"
            },
            {
                "char": "鼠",
                "pinyin": "shu3",
                "definition": "rat; mouse; CL:隻|只[zhi1]"
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
                "definition": "three; 3"
            },
            {
                "char": "地",
                "pinyin": "de5",
                "definition": "-ly; structural particle: used before a verb or adjective, linking it to preceding modifying adverbial adjunct"
            },
            {
                "char": "鼠",
                "pinyin": "shu3",
                "definition": "rat; mouse; CL:隻|只[zhi1]"
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
                "definition": "(onom.) meow; cat's mewing"
            },
            {
                "char": "喵",
                "pinyin": "miao1",
                "definition": "(onom.) meow; cat's mewing"
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
                "definition": "cat; CL:隻|只[zhi1]; (dialect) to hide oneself; (coll.) modem"
            },
            {
                "char": "老",
                "pinyin": "lao3",
                "definition": "prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity; old (of people); venerable (person); experienced; of long standing; always; all the time; of the past; very; outdated; (of meat etc) tough"
            },
            {
                "char": "大",
                "pinyin": "da4",
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
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
                "definition": "can; may; able to; to approve; to permit; to suit; (particle used for emphasis) certainly; very"
            },
            {
                "char": "达",
                "pinyin": "da2",
                "definition": "to attain; to reach; to amount to; to communicate; eminent"
            },
            {
                "char": "鸭",
                "pinyin": "ya1",
                "definition": "duck; CL:隻|只[zhi1]; (slang) male prostitute"
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
                "definition": "elder brother"
            },
            {
                "char": "达",
                "pinyin": "da2",
                "definition": "to attain; to reach; to amount to; to communicate; eminent"
            },
            {
                "char": "鸭",
                "pinyin": "ya1",
                "definition": "duck; CL:隻|只[zhi1]; (slang) male prostitute"
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
                "definition": "monkey; CL:隻|只[zhi1]"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "暴",
                "pinyin": "bao4",
                "definition": "sudden; violent; cruel; to show or expose; to injure"
            },
            {
                "char": "猴",
                "pinyin": "hou2",
                "definition": "monkey; CL:隻|只[zhi1]"
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
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "蒂",
                "pinyin": "di4",
                "definition": "stem (of fruit)"
            },
            {
                "char": "狗",
                "pinyin": "gou3",
                "definition": "dog; CL:隻|只[zhi1],條|条[tiao2]"
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
                "definition": "wind; news; style; custom; manner; CL:陣|阵[zhen4],絲|丝[si1]"
            },
            {
                "char": "速",
                "pinyin": "su4",
                "definition": "fast; rapid; quick; velocity"
            },
            {
                "char": "狗",
                "pinyin": "gou3",
                "definition": "dog; CL:隻|只[zhi1],條|条[tiao2]"
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
                "definition": "mosquito"
            },
            {
                "char": "香",
                "pinyin": "xiang1",
                "definition": "fragrant; sweet smelling; aromatic; savory or appetizing; (to eat) with relish; (of sleep) sound; perfume or spice; joss or incense stick; CL:根[gen1]"
            },
            {
                "char": "蝌",
                "pinyin": "ke1",
                "definition": "tadpole"
            },
            {
                "char": "蚪",
                "pinyin": "dou3",
                "definition": "tadpole"
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
                "definition": "mosquito"
            },
            {
                "char": "香",
                "pinyin": "xiang1",
                "definition": "fragrant; sweet smelling; aromatic; savory or appetizing; (to eat) with relish; (of sleep) sound; perfume or spice; joss or incense stick; CL:根[gen1]"
            },
            {
                "char": "君",
                "pinyin": "jun1",
                "definition": "monarch; lord; gentleman; ruler"
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
                "definition": "mosquito"
            },
            {
                "char": "香",
                "pinyin": "xiang1",
                "definition": "fragrant; sweet smelling; aromatic; savory or appetizing; (to eat) with relish; (of sleep) sound; perfume or spice; joss or incense stick; CL:根[gen1]"
            },
            {
                "char": "泳",
                "pinyin": "yong3",
                "definition": "swimming; to swim"
            },
            {
                "char": "士",
                "pinyin": "shi4",
                "definition": "member of the senior ministerial class (old); scholar (old); bachelor; honorific; soldier; noncommissioned officer; specialist worker"
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
                "definition": "triumphant; victorious; chi (Greek letter Χχ)"
            },
            {
                "char": "西",
                "pinyin": "xi1",
                "definition": "west"
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
                "definition": "brave"
            },
            {
                "char": "基",
                "pinyin": "ji1",
                "definition": "base; foundation; basic; radical (chemistry); (slang) gay"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
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
                "definition": "non-Han people, esp. from central Asia; reckless; outrageous; what?; why?; to complete a winning hand at mahjong (also written 和[hu2])"
            },
            {
                "char": "地",
                "pinyin": "de5",
                "definition": "-ly; structural particle: used before a verb or adjective, linking it to preceding modifying adverbial adjunct"
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
                "definition": "wrist; (squid, starfish etc) arm"
            },
            {
                "char": "力",
                "pinyin": "li4",
                "definition": "power; force; strength; ability; strenuously"
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
                "definition": "grand; heroic"
            },
            {
                "char": "力",
                "pinyin": "li4",
                "definition": "power; force; strength; ability; strenuously"
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
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
            },
            {
                "char": "力",
                "pinyin": "li4",
                "definition": "power; force; strength; ability; strenuously"
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
                "pinyin": "la1",
                "definition": "(onom.) sound of wind, rain etc"
            },
            {
                "char": "叭",
                "pinyin": "ba1",
                "definition": "denote a sound or sharp noise (gunfire etc)"
            },
            {
                "char": "芽",
                "pinyin": "ya2",
                "definition": "bud; sprout"
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
                "definition": "mouth; classifier for things with mouths (people, domestic animals, cannons, wells etc); classifier for bites or mouthfuls"
            },
            {
                "char": "呆",
                "pinyin": "dai1",
                "definition": "foolish; stupid; expressionless; blank; to stay"
            },
            {
                "char": "花",
                "pinyin": "hua1",
                "definition": "flower; blossom; CL:朵[duo3],支[zhi1],束[shu4],把[ba3],盆[pen2],簇[cu4]; fancy pattern; florid; to spend (money, time)"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "食",
                "pinyin": "shi2",
                "definition": "to eat; food; animal feed; eclipse"
            },
            {
                "char": "花",
                "pinyin": "hua1",
                "definition": "flower; blossom; CL:朵[duo3],支[zhi1],束[shu4],把[ba3],盆[pen2],簇[cu4]; fancy pattern; florid; to spend (money, time)"
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
                "definition": "agate; cornelian"
            },
            {
                "char": "瑙",
                "pinyin": "nao3",
                "definition": "agate"
            },
            {
                "char": "水",
                "pinyin": "shui3",
                "definition": "water; river; liquid; beverage; additional charges or income; (of clothes) classifier for number of washes"
            },
            {
                "char": "母",
                "pinyin": "mu3",
                "definition": "mother; elderly female relative; origin; source; (of animals) female"
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
                "definition": "poison; to poison; poisonous; malicious; cruel; fierce; narcotics"
            },
            {
                "char": "刺",
                "pinyin": "ci1",
                "definition": "(onom.) whoosh"
            },
            {
                "char": "水",
                "pinyin": "shui3",
                "definition": "water; river; liquid; beverage; additional charges or income; (of clothes) classifier for number of washes"
            },
            {
                "char": "母",
                "pinyin": "mu3",
                "definition": "mother; elderly female relative; origin; source; (of animals) female"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "拳",
                "pinyin": "quan2",
                "definition": "fist; boxing"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
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
                "pinyin": "long1",
                "definition": "sound of drums"
            },
            {
                "char": "隆",
                "pinyin": "long1",
                "definition": "sound of drums"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
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
                "pinyin": "long1",
                "definition": "sound of drums"
            },
            {
                "char": "隆",
                "pinyin": "long1",
                "definition": "sound of drums"
            },
            {
                "char": "岩",
                "pinyin": "yan2",
                "definition": "cliff; rock"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "火",
                "pinyin": "huo3",
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "马",
                "pinyin": "ma3",
                "definition": "horse; CL:匹[pi3]; horse or cavalry piece in Chinese chess; knight in Western chess"
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
                "definition": "ardent; intense; fierce; stern; upright; to give one's life for a noble cause; exploits; achievements"
            },
            {
                "char": "焰",
                "pinyin": "yan4",
                "definition": "flame"
            },
            {
                "char": "马",
                "pinyin": "ma3",
                "definition": "horse; CL:匹[pi3]; horse or cavalry piece in Chinese chess; knight in Western chess"
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
                "definition": "foolish; stupid; expressionless; blank; to stay"
            },
            {
                "char": "呆",
                "pinyin": "dai1",
                "definition": "foolish; stupid; expressionless; blank; to stay"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "foolish; stupid; expressionless; blank; to stay"
            },
            {
                "char": "壳",
                "pinyin": "qiao4",
                "definition": "shell; carapace; crust (earth's crust etc); also pr. [ke2]"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "磁",
                "pinyin": "ci2",
                "definition": "magnetic; magnetism; porcelain"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "three; 3"
            },
            {
                "char": "合",
                "pinyin": "ge3",
                "definition": "100 ml; one-tenth of a peck; measure for dry grain equal to one-tenth of sheng 升 or liter, or one-hundredth dou 斗"
            },
            {
                "char": "一",
                "pinyin": "yi1",
                "definition": "one; 1; single; a (article); as soon as; entire; whole; all; throughout; \"one\" radical in Chinese characters (Kangxi radical 1); also pr. [yao1] for greater clarity when spelling out numbers digit by digit"
            },
            {
                "char": "磁",
                "pinyin": "ci2",
                "definition": "magnetic; magnetism; porcelain"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "葱",
                "pinyin": "cong1",
                "definition": "scallion; green onion"
            },
            {
                "char": "鸭",
                "pinyin": "ya1",
                "definition": "duck; CL:隻|只[zhi1]; (slang) male prostitute"
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
                "definition": "toot; honk; to pout"
            },
            {
                "char": "嘟",
                "pinyin": "du1",
                "definition": "toot; honk; to pout"
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
                "definition": "toot; honk; to pout"
            },
            {
                "char": "嘟",
                "pinyin": "du1",
                "definition": "toot; honk; to pout"
            },
            {
                "char": "利",
                "pinyin": "li4",
                "definition": "sharp; favorable; advantage; benefit; profit; interest; to do good to; to benefit"
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
                "definition": "small; tiny; few; young"
            },
            {
                "char": "海",
                "pinyin": "hai3",
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "狮",
                "pinyin": "shi1",
                "definition": "lion"
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
                "definition": "white; snowy; pure; bright; empty; blank; plain; clear; to make clear; in vain; gratuitous; free of charge; reactionary; anti-communist; funeral; to stare coldly; to write wrong character; to state; to explain; vernacular; spoken lines in opera"
            },
            {
                "char": "海",
                "pinyin": "hai3",
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "狮",
                "pinyin": "shi1",
                "definition": "lion"
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
                "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
            },
            {
                "char": "泥",
                "pinyin": "ni2",
                "definition": "mud; clay; paste; pulp"
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
                "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
            },
            {
                "char": "臭",
                "pinyin": "chou4",
                "definition": "stench; smelly; to smell (bad); repulsive; loathsome; terrible; bad; severely; ruthlessly; dud (ammunition)"
            },
            {
                "char": "泥",
                "pinyin": "ni2",
                "definition": "mud; clay; paste; pulp"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "舌",
                "pinyin": "she2",
                "definition": "tongue"
            },
            {
                "char": "贝",
                "pinyin": "bei4",
                "definition": "cowrie; shellfish; currency (archaic)"
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
                "pinyin": "ci1",
                "definition": "(onom.) whoosh"
            },
            {
                "char": "甲",
                "pinyin": "jia3",
                "definition": "first of the ten Heavenly Stems 十天干[shi2 tian1 gan1]; (used for an unspecified person or thing); first (in a list, as a party to a contract etc); letter \"A\" or roman \"I\" in list \"A, B, C\", or \"I, II, III\" etc; armor plating; shell or carapace; (of the fingers or toes) nail; bladed leather or metal armor (old); ranking system used in the Imperial examinations (old); civil administration unit (old); ancient Chinese compass point: 75°"
            },
            {
                "char": "贝",
                "pinyin": "bei4",
                "definition": "cowrie; shellfish; currency (archaic)"
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
                "definition": "ghost; demon; terrible; damnable; clever; sly; crafty; sinister plot; (suffix for sb with a certain vice or addiction etc); one of the 28 constellations"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
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
                "definition": "ghost; demon; terrible; damnable; clever; sly; crafty; sinister plot; (suffix for sb with a certain vice or addiction etc); one of the 28 constellations"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
            },
            {
                "char": "通",
                "pinyin": "tong1",
                "definition": "to go through; to know well; (suffix) expert; to connect; to communicate; open; to clear; classifier for letters, telegrams, phone calls etc"
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
                "definition": "bright; honest; upright"
            },
            {
                "char": "鬼",
                "pinyin": "gui3",
                "definition": "ghost; demon; terrible; damnable; clever; sly; crafty; sinister plot; (suffix for sb with a certain vice or addiction etc); one of the 28 constellations"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "岩",
                "pinyin": "yan2",
                "definition": "cliff; rock"
            },
            {
                "char": "蛇",
                "pinyin": "she2",
                "definition": "snake; serpent; CL:條|条[tiao2]"
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
                "definition": "to urge; to press; to prompt; to rush sb; to hasten sth; to expedite"
            },
            {
                "char": "眠",
                "pinyin": "mian2",
                "definition": "to sleep; to hibernate"
            },
            {
                "char": "貘",
                "pinyin": "mo4",
                "definition": "tapir"
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
                "definition": "to draw (e.g. a bow); to pull; to stretch sth; to extend; to lengthen; to involve or implicate in; to attract; to lead; to guide; to leave; to provide evidence or justification for; old unit of distance equal to 10 丈[zhang4], one-thirtieth of a km or 33.33 meters"
            },
            {
                "char": "梦",
                "pinyin": "meng4",
                "definition": "dream; CL:場|场[chang2],個|个[ge4]"
            },
            {
                "char": "貘",
                "pinyin": "mo4",
                "definition": "tapir"
            },
            {
                "char": "人",
                "pinyin": "ren2",
                "definition": "man; person; people; CL:個|个[ge4],位[wei4]"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "钳",
                "pinyin": "qian2",
                "definition": "pincers; pliers; tongs; claw (of animal); to grasp with pincers; to pinch; to clamp; to restrain; to restrict; to gag"
            },
            {
                "char": "蟹",
                "pinyin": "xie4",
                "definition": "crab"
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
                "definition": "very large; huge; tremendous; gigantic"
            },
            {
                "char": "钳",
                "pinyin": "qian2",
                "definition": "pincers; pliers; tongs; claw (of animal); to grasp with pincers; to pinch; to clamp; to restrain; to restrict; to gag"
            },
            {
                "char": "蟹",
                "pinyin": "xie4",
                "definition": "crab"
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
                "definition": "clap of thunder"
            },
            {
                "char": "雳",
                "pinyin": "li4",
                "definition": "clap of thunder"
            },
            {
                "char": "电",
                "pinyin": "dian4",
                "definition": "electric; electricity; electrical"
            },
            {
                "char": "球",
                "pinyin": "qiu2",
                "definition": "ball; sphere; globe; CL:個|个[ge4]; ball game; match; CL:場|场[chang3]"
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
                "definition": "mischievous; obstinate; to play; stupid; stubborn; naughty"
            },
            {
                "char": "皮",
                "pinyin": "pi2",
                "definition": "leather; skin; fur; CL:張|张[zhang1]; pico- (one trillionth); naughty"
            },
            {
                "char": "雷",
                "pinyin": "lei2",
                "definition": "thunder; mine (weapon); (Internet slang) terrifying; terrific"
            },
            {
                "char": "弹",
                "pinyin": "dan4",
                "definition": "crossball; bullet; shot; shell; ball"
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
                "definition": "egg; CL:個|个[ge4],打[da2]; oval-shaped thing"
            },
            {
                "char": "蛋",
                "pinyin": "dan4",
                "definition": "egg; CL:個|个[ge4],打[da2]; oval-shaped thing"
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
                "definition": "coconut palm; Taiwan pr. [ye2]"
            },
            {
                "char": "蛋",
                "pinyin": "dan4",
                "definition": "egg; CL:個|个[ge4],打[da2]; oval-shaped thing"
            },
            {
                "char": "树",
                "pinyin": "shu4",
                "definition": "tree; CL:棵[ke1]; to cultivate; to set up"
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
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "卡",
                "pinyin": "ka3",
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
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
                "pinyin": "ga2",
                "definition": "cackling sound"
            },
            {
                "char": "啦",
                "pinyin": "la1",
                "definition": "(onom.) sound of singing, cheering etc; (phonetic); (dialect) to chat"
            },
            {
                "char": "嘎",
                "pinyin": "ga2",
                "definition": "cackling sound"
            },
            {
                "char": "啦",
                "pinyin": "la1",
                "definition": "(onom.) sound of singing, cheering etc; (phonetic); (dialect) to chat"
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
                "definition": "to fly"
            },
            {
                "char": "腿",
                "pinyin": "tui3",
                "definition": "leg; CL:條|条[tiao2]"
            },
            {
                "char": "郎",
                "pinyin": "lang2",
                "definition": "(arch.) minister; official; noun prefix denoting function or status; a youth"
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
                "definition": "rapid; quick; speed; rate; soon; almost; to make haste; clever; sharp (of knives or wits); forthright; plainspoken; gratified; pleased; pleasant"
            },
            {
                "char": "拳",
                "pinyin": "quan2",
                "definition": "fist; boxing"
            },
            {
                "char": "郎",
                "pinyin": "lang2",
                "definition": "(arch.) minister; official; noun prefix denoting function or status; a youth"
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
                "definition": "big; huge; large; major; great; wide; deep; older (than); oldest; eldest; greatly; very much; (dialect) father; father's elder or younger brother"
            },
            {
                "char": "舌",
                "pinyin": "she2",
                "definition": "tongue"
            },
            {
                "char": "头",
                "pinyin": "tou2",
                "definition": "head; hair style; the top; end; beginning or end; a stub; remnant; chief; boss; side; aspect; first; leading; classifier for pigs or livestock; CL:個|个[ge4]"
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
                "definition": "roof tile; abbr. for 瓦特[wa3 te4], watt (loan)"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
            },
            {
                "char": "弹",
                "pinyin": "dan4",
                "definition": "crossball; bullet; shot; shell; ball"
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
                "definition": "two; double; pair; both; even (number)"
            },
            {
                "char": "弹",
                "pinyin": "dan4",
                "definition": "crossball; bullet; shot; shell; ball"
            },
            {
                "char": "瓦",
                "pinyin": "wa3",
                "definition": "roof tile; abbr. for 瓦特[wa3 te4], watt (loan)"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
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
                "definition": "alone; independent; single; sole; only"
            },
            {
                "char": "角",
                "pinyin": "jiao3",
                "definition": "angle; corner; horn; horn-shaped; unit of money equal to 0.1 yuan; CL:個|个[ge4]"
            },
            {
                "char": "犀",
                "pinyin": "xi1",
                "definition": "rhinoceros; sharp"
            },
            {
                "char": "牛",
                "pinyin": "niu2",
                "definition": "ox; cow; bull; CL:條|条[tiao2],頭|头[tou2]; (slang) awesome"
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
                "definition": "to drill; to bore; to get into; to make one's way into; to enter (a hole); to thread one's way through; to study intensively; to dig into; to curry favor for personal gain"
            },
            {
                "char": "角",
                "pinyin": "jiao3",
                "definition": "angle; corner; horn; horn-shaped; unit of money equal to 0.1 yuan; CL:個|个[ge4]"
            },
            {
                "char": "犀",
                "pinyin": "xi1",
                "definition": "rhinoceros; sharp"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "lucky; giga- (meaning billion or 10^9)"
            },
            {
                "char": "利",
                "pinyin": "li4",
                "definition": "sharp; favorable; advantage; benefit; profit; interest; to do good to; to benefit"
            },
            {
                "char": "蛋",
                "pinyin": "dan4",
                "definition": "egg; CL:個|个[ge4],打[da2]; oval-shaped thing"
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
                "definition": "turnip; Brassica campestris"
            },
            {
                "char": "藤",
                "pinyin": "teng2",
                "definition": "rattan; cane; vine"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "pouch; bag; sack; pocket"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "ink stick; China ink; CL:塊|块[kuai4]; corporal punishment consisting of tattooing characters on the victim's forehead"
            },
            {
                "char": "海",
                "pinyin": "hai3",
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "马",
                "pinyin": "ma3",
                "definition": "horse; CL:匹[pi3]; horse or cavalry piece in Chinese chess; knight in Western chess"
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
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "刺",
                "pinyin": "ci1",
                "definition": "(onom.) whoosh"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "angle; corner; horn; horn-shaped; unit of money equal to 0.1 yuan; CL:個|个[ge4]"
            },
            {
                "char": "金",
                "pinyin": "jin1",
                "definition": "gold; chemical element Au; generic term for lustrous and ductile metals; money; golden; highly respected; one of the eight ancient musical instruments 八音[ba1 yin1]"
            },
            {
                "char": "鱼",
                "pinyin": "yu2",
                "definition": "fish; CL:條|条[tiao2],尾[wei3]"
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
                "definition": "gold; chemical element Au; generic term for lustrous and ductile metals; money; golden; highly respected; one of the eight ancient musical instruments 八音[ba1 yin1]"
            },
            {
                "char": "鱼",
                "pinyin": "yu2",
                "definition": "fish; CL:條|条[tiao2],尾[wei3]"
            },
            {
                "char": "王",
                "pinyin": "wang2",
                "definition": "king or monarch; best or strongest of its type; grand; great"
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
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "星",
                "pinyin": "xing1",
                "definition": "star; heavenly body; satellite; small amount"
            },
            {
                "char": "星",
                "pinyin": "xing1",
                "definition": "star; heavenly body; satellite; small amount"
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
                "definition": "jewel; gem; treasure; precious"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
            },
            {
                "char": "海",
                "pinyin": "hai3",
                "definition": "ocean; sea; CL:個|个[ge4],片[pian4]; great number of people or things; (dialect) numerous"
            },
            {
                "char": "星",
                "pinyin": "xing1",
                "definition": "star; heavenly body; satellite; small amount"
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
                "definition": "devil; magic"
            },
            {
                "char": "墙",
                "pinyin": "qiang2",
                "definition": "wall; CL:面[mian4],堵[du3]"
            },
            {
                "char": "人",
                "pinyin": "ren2",
                "definition": "man; person; people; CL:個|个[ge4],位[wei4]"
            },
            {
                "char": "偶",
                "pinyin": "ou3",
                "definition": "accidental; image; pair; mate"
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
                "definition": "to fly"
            },
            {
                "char": "天",
                "pinyin": "tian1",
                "definition": "day; sky; heaven"
            },
            {
                "char": "螳",
                "pinyin": "tang2",
                "definition": "praying mantis"
            },
            {
                "char": "螂",
                "pinyin": "lang2",
                "definition": "dragonfly; mantis"
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
                "definition": "to bewilder; crazy about; fan; enthusiast; lost; confused"
            },
            {
                "char": "唇",
                "pinyin": "chun2",
                "definition": "lip"
            },
            {
                "char": "姐",
                "pinyin": "jie3",
                "definition": "older sister"
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
                "definition": "electric; electricity; electrical"
            },
            {
                "char": "击",
                "pinyin": "ji1",
                "definition": "to hit; to strike; to break; Taiwan pr. [ji2]"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "duck; CL:隻|只[zhi1]; (slang) male prostitute"
            },
            {
                "char": "嘴",
                "pinyin": "zui3",
                "definition": "mouth; beak; nozzle; spout (of teapot etc); CL:張|张[zhang1],個|个[ge4]"
            },
            {
                "char": "火",
                "pinyin": "huo3",
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "triumphant; victorious; chi (Greek letter Χχ)"
            },
            {
                "char": "罗",
                "pinyin": "luo2",
                "definition": "gauze; to collect; to gather; to catch; to sift"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
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
                "definition": "to agree; to consent; to be ready (to do sth); willing"
            },
            {
                "char": "泰",
                "pinyin": "tai4",
                "definition": "safe; peaceful; most; grand"
            },
            {
                "char": "罗",
                "pinyin": "luo2",
                "definition": "gauze; to collect; to gather; to catch; to sift"
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
                "definition": "carp"
            },
            {
                "char": "鱼",
                "pinyin": "yu2",
                "definition": "fish; CL:條|条[tiao2],尾[wei3]"
            },
            {
                "char": "王",
                "pinyin": "wang2",
                "definition": "king or monarch; best or strongest of its type; grand; great"
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
                "definition": "sudden; violent; cruel; to show or expose; to injure"
            },
            {
                "char": "鲤",
                "pinyin": "li3",
                "definition": "carp"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "普",
                "pinyin": "pu3",
                "definition": "general; popular; everywhere; universal"
            },
            {
                "char": "拉",
                "pinyin": "la1",
                "definition": "to pull; to play (a bowed instrument); to drag; to draw; to chat"
            },
            {
                "char": "斯",
                "pinyin": "si1",
                "definition": "(phonetic); this"
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
                "definition": "hundred; numerous; all kinds of"
            },
            {
                "char": "变",
                "pinyin": "bian4",
                "definition": "to change; to become different; to transform; to vary; rebellion"
            },
            {
                "char": "怪",
                "pinyin": "guai4",
                "definition": "bewildering; odd; strange; uncanny; devil; monster; to wonder at; to blame; quite; rather"
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
                "definition": "he; she"
            },
            {
                "char": "布",
                "pinyin": "bu4",
                "definition": "cloth; to declare; to announce; to spread; to make known"
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
                "definition": "water; river; liquid; beverage; additional charges or income; (of clothes) classifier for number of washes"
            },
            {
                "char": "伊",
                "pinyin": "yi1",
                "definition": "he; she"
            },
            {
                "char": "布",
                "pinyin": "bu4",
                "definition": "cloth; to declare; to announce; to spread; to make known"
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
                "definition": "thunder; mine (weapon); (Internet slang) terrifying; terrific"
            },
            {
                "char": "伊",
                "pinyin": "yi1",
                "definition": "he; she"
            },
            {
                "char": "布",
                "pinyin": "bu4",
                "definition": "cloth; to declare; to announce; to spread; to make known"
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
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "伊",
                "pinyin": "yi1",
                "definition": "he; she"
            },
            {
                "char": "布",
                "pinyin": "bu4",
                "definition": "cloth; to declare; to announce; to spread; to make known"
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
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "边",
                "pinyin": "bian1",
                "definition": "side; edge; margin; border; boundary; CL:個|个[ge4]; simultaneously"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "chrysanthemum"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "many; much; often; a lot of; numerous; more; in excess; how (to what extent); multi-; Taiwan pr. [duo2] when it means \"how\""
            },
            {
                "char": "刺",
                "pinyin": "ci1",
                "definition": "(onom.) whoosh"
            },
            {
                "char": "菊",
                "pinyin": "ju2",
                "definition": "chrysanthemum"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "to make into; to change into; -ization; to ... -ize; to transform; abbr. for 化學|化学[hua4 xue2]"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
            },
            {
                "char": "盔",
                "pinyin": "kui1",
                "definition": "helmet"
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
                "definition": "scythe; sickle"
            },
            {
                "char": "刀",
                "pinyin": "dao1",
                "definition": "knife; blade; single-edged sword; cutlass; CL:把[ba3]; (slang) dollar (loanword); classifier for sets of one hundred sheets (of paper); classifier for knife cuts or stabs"
            },
            {
                "char": "盔",
                "pinyin": "kui1",
                "definition": "helmet"
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
                "definition": "to make into; to change into; -ization; to ... -ize; to transform; abbr. for 化學|化学[hua4 xue2]"
            },
            {
                "char": "石",
                "pinyin": "dan4",
                "definition": "dry measure for grain equal to ten dou 斗; ten pecks; one hundred liters"
            },
            {
                "char": "翼",
                "pinyin": "yi4",
                "definition": "wing; area surrounding the bullseye of a target; to assist; one of the 28 constellations of Chinese astronomy; old variant of 翌"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "to stop; to block; card; CL:張|张[zhang1],片[pian4]; calorie; cassette; (computing) (coll.) slow"
            },
            {
                "char": "比",
                "pinyin": "bi3",
                "definition": "(particle used for comparison and \"-er than\"); to compare; to contrast; to gesture (with hands); ratio"
            },
            {
                "char": "兽",
                "pinyin": "shou4",
                "definition": "beast; animal; beastly; bestial"
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
                "definition": "urgent; pressing; rapid; hurried; worried; to make (sb) anxious"
            },
            {
                "char": "冻",
                "pinyin": "dong4",
                "definition": "to freeze; to feel very cold; aspic or jelly"
            },
            {
                "char": "鸟",
                "pinyin": "niao3",
                "definition": "bird; CL:隻|只[zhi1],群[qun2]; (dialect) to pay attention to; (intensifier) damned; goddam"
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
                "definition": "to dodge; to duck out of the way; to beat it; shaken (by a fall); to sprain; to pull a muscle; lightning; spark; a flash; to flash (across one's mind); to leave behind; (Internet slang) (of a display of affection) \"dazzlingly\" saccharine"
            },
            {
                "char": "电",
                "pinyin": "dian4",
                "definition": "electric; electricity; electrical"
            },
            {
                "char": "鸟",
                "pinyin": "niao3",
                "definition": "bird; CL:隻|只[zhi1],群[qun2]; (dialect) to pay attention to; (intensifier) damned; goddam"
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
                "definition": "fire; urgent; ammunition; fiery or flaming; internal heat (Chinese medicine); hot (popular); classifier for military units (old)"
            },
            {
                "char": "焰",
                "pinyin": "yan4",
                "definition": "flame"
            },
            {
                "char": "鸟",
                "pinyin": "niao3",
                "definition": "bird; CL:隻|只[zhi1],群[qun2]; (dialect) to pay attention to; (intensifier) damned; goddam"
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
                "definition": "to bewilder; crazy about; fan; enthusiast; lost; confused"
            },
            {
                "char": "你",
                "pinyin": "ni3",
                "definition": "you (informal, as opposed to courteous 您[nin2])"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "(interj.) ha!; (onom. for laughter); (slang) to be infatuated with; to adore"
            },
            {
                "char": "克",
                "pinyin": "ke4",
                "definition": "to be able to; to subdue; to restrain; to overcome; gram; Tibetan unit of land area, about 6 ares"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "rapid; quick; speed; rate; soon; almost; to make haste; clever; sharp (of knives or wits); forthright; plainspoken; gratified; pleased; pleasant"
            },
            {
                "char": "龙",
                "pinyin": "long2",
                "definition": "dragon; CL:條|条[tiao2]; imperial"
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
                "definition": "to exceed; to overtake; to surpass; to transcend; to pass; to cross; ultra-; super-"
            },
            {
                "char": "梦",
                "pinyin": "meng4",
                "definition": "dream; CL:場|场[chang2],個|个[ge4]"
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
                "definition": "dream; CL:場|场[chang2],個|个[ge4]"
            },
            {
                "char": "幻",
                "pinyin": "huan4",
                "definition": "fantasy"
            }
        ],
        "type": "Psíquico",
        "level": "Gén 1",
        "colorTheme": "from-pink-500 to-purple-600"
    }
];
