// Datos de tarjetas de gramática japonesa para el set interactivo (N5 - N4)
const grammarData = [
    {
        pattern: "〜てみる",
        romaji: "~ te miru",
        meaning: "Intentar hacer algo",
        level: "N4",
        formation: "Verbo (Forma て) + みる",
        explanation: "Expresa la acción de intentar hacer algo para ver cuál es el resultado o qué se siente al experimentarlo.",
        illustration: "🧪",
        furiganaTitle: "食[た]べてみる",
        romajiTitle: "tabete miru",
        examples: [
            {
                jp: "日本語で話してみます。",
                furigana: "日本語[にほんご]で話[はな]してみます。",
                romaji: "Nihongo de hanashite mimasu.",
                es: "Intentaré hablar en japonés."
            },
            {
                jp: "お寿司を食べてみたいです。",
                furigana: "お寿司[すし]を食[た]べてみたいです。",
                romaji: "Osushi o tabete mitai desu.",
                es: "Quiero intentar comer sushi."
            }
        ],
        tags: ["Intención", "Esfuerzo"]
    },
    {
        pattern: "〜ほうがいい",
        romaji: "~ hou ga ii",
        meaning: "Es mejor que... / Deberías...",
        level: "N5",
        formation: "Verbo (Forma た / Forma ない) + ほうがいい",
        explanation: "Se utiliza para dar consejos directos o recomendaciones fuertes. Compara alternativas y sugiere la más beneficiosa.",
        illustration: "💡",
        furiganaTitle: "行[い]ったほうがいい",
        romajiTitle: "itta hou ga ii",
        examples: [
            {
                jp: "早く寝たほうがいいですよ。",
                furigana: "早[はや]く寝[ね]たほうがいいですよ。",
                romaji: "Hayaku neta hou ga ii desu yo.",
                es: "Es mejor que te duermas temprano."
            },
            {
                jp: "タバコは吸わないほうがいいです。",
                furigana: "タバコは吸[す]わないほうがいいです。",
                romaji: "Tabako wa suwanai hou ga ii desu.",
                es: "Deberías no fumar."
            }
        ],
        tags: ["Consejo", "Sugerencia"]
    },
    {
        pattern: "〜なければならない",
        romaji: "~ nakereba naranai",
        meaning: "Tener que / Es obligatorio...",
        level: "N4",
        formation: "Verbo (Forma ない sin 'い') + ければならない",
        explanation: "Expresa una obligación moral, social o necesidad absoluta de hacer algo de lo cual no se puede escapar.",
        illustration: "⚠️",
        furiganaTitle: "帰[かえ]らなければならない",
        romajiTitle: "kaeranakereba naranai",
        examples: [
            {
                jp: "毎日勉強しなければなりません。",
                furigana: "毎日[まいにち]勉強[べんきょう]しなければなりません。",
                romaji: "Mainichi benkyou shinakereba narimasen.",
                es: "Tengo que estudiar todos los días."
            },
            {
                jp: "薬を飲まなければならない。",
                furigana: "薬[くすり]を飲[の]まなければならない。",
                romaji: "Kusuri o nomanakereba naranai.",
                es: "Tengo que tomar la medicina."
            }
        ],
        tags: ["Obligación", "Necesidad"]
    },
    {
        pattern: "〜てください",
        romaji: "~ te kudasai",
        meaning: "Por favor, haga...",
        level: "N5",
        formation: "Verbo (Forma て) + ください",
        explanation: "Se usa para pedir de manera cortés y educada a otra persona que realice una determinada acción.",
        illustration: "🙏",
        furiganaTitle: "書[か]いてください",
        romajiTitle: "kaite kudasai",
        examples: [
            {
                jp: "ここに名前 la書いてください。",
                furigana: "ここに名前[なまえ]を書[か]いてください。",
                romaji: "Koko ni namae o kaite kudasai.",
                es: "Por favor, escribe tu nombre aquí."
            },
            {
                jp: "ゆっくり話してください。",
                furigana: "ゆっくり話[はな]してください。",
                romaji: "Yukkuri hanashite kudasai.",
                es: "Por favor, hable despacio."
            }
        ],
        tags: ["Petición", "Cortesía"]
    },
    {
        pattern: "〜ことができる",
        romaji: "~ koto ga dekiru",
        meaning: "Poder / Ser capaz de...",
        level: "N5",
        formation: "Verbo (Forma diccionario) + ことができる",
        explanation: "Expresa la habilidad física o la posibilidad general de realizar una acción.",
        illustration: "💪",
        furiganaTitle: "話[はな]すことができる",
        romajiTitle: "hanasu koto ga dekiru",
        examples: [
            {
                jp: "日本語を話すことができます。",
                furigana: "日本語[にほんご]を話[はな]すことができます。",
                romaji: "Nihongo o hanasu koto ga dekiru.",
                es: "Puedo hablar japonés."
            },
            {
                jp: "ここでチケットを買うことができます。",
                furigana: "ここでチケットを買[か]うことができます。",
                romaji: "Koko de chiketto o kau koto ga dekimasu.",
                es: "Se pueden comprar boletos aquí."
            }
        ],
        tags: ["Habilidad", "Posibilidad"]
    },
    {
        pattern: "〜つもりだ",
        romaji: "~ tsumori da",
        meaning: "Tener la intención de...",
        level: "N4",
        formation: "Verbo (Forma diccionario / Forma ない) + つもりだ",
        explanation: "Indica un plan, intención o decisión firme que el hablante ha tomado con anterioridad.",
        illustration: "📅",
        furiganaTitle: "行[い]くつもりだ",
        romajiTitle: "iku tsumori da",
        examples: [
            {
                jp: "来年日本に行くつもりです。",
                furigana: "来年[らいねん]日本[にほん]に行[い]くつもりです。",
                romaji: "Rainen Nihon ni iku tsumori desu.",
                es: "Tengo la intención de ir a Japón el año que viene."
            },
            {
                jp: "今日はお酒を飲mないつもりです。",
                furigana: "今日[きょう]はお酒[さけ]を飲[の]まないつもりです。",
                romaji: "Kyou wa osake o nomanai tsumori desu.",
                es: "Tengo la intención de no beber alcohol hoy."
            }
        ],
        tags: ["Intención", "Plan"]
    }
];
