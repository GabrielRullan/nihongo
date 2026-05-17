const cardsData = [
    // Pronombres
    {
        character: "我",
        pinyin: "wǒ",
        meaning: "Yo",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "我是学生。",
        phrasePinyin: "Wǒ shì xuésheng.",
        phraseEs: "Yo soy estudiante."
    },
    {
        character: "你",
        pinyin: "nǐ",
        meaning: "Tú",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "你好吗？",
        phrasePinyin: "Nǐ hǎo ma?",
        phraseEs: "¿Cómo estás?"
    },
    {
        character: "他",
        pinyin: "tā",
        meaning: "Él",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "他是我的老师。",
        phrasePinyin: "Tā shì wǒ de lǎoshī.",
        phraseEs: "Él es mi profesor."
    },
    {
        character: "她",
        pinyin: "tā",
        meaning: "Ella",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "她在医院工作。",
        phrasePinyin: "Tā zài yīyuàn gōngzuò.",
        phraseEs: "Ella trabaja en el hospital."
    },
    {
        character: "我们",
        pinyin: "wǒmen",
        meaning: "Nosotros",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "我们都喜欢看电影。",
        phrasePinyin: "Wǒmen dōu xǐhuan kàn diànyǐng.",
        phraseEs: "A todos nosotros nos gusta ver películas."
    },
    {
        character: "这",
        pinyin: "zhè",
        meaning: "Este",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "这是我的书。",
        phrasePinyin: "Zhè shì wǒ de shū.",
        phraseEs: "Este es mi libro."
    },
    {
        character: "那",
        pinyin: "nà",
        meaning: "Ese",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "那是谁的电脑？",
        phrasePinyin: "Nà shì shéi de diànnǎo?",
        phraseEs: "¿De quién es ese ordenador?"
    },
    {
        character: "哪",
        pinyin: "nǎ",
        meaning: "Cuál",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "你是哪国人？",
        phrasePinyin: "Nǐ shì nǎ guó rén?",
        phraseEs: "¿De qué país eres?"
    },
    {
        character: "哪儿",
        pinyin: "nǎr",
        meaning: "Dónde",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "你要去哪儿？",
        phrasePinyin: "Nǐ yào qù nǎr?",
        phraseEs: "¿Adónde vas a ir?"
    },
    {
        character: "谁",
        pinyin: "shéi",
        meaning: "Quién",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "谁是你的朋友？",
        phrasePinyin: "Shéi shì nǐ de péngyou?",
        phraseEs: "¿Quién es tu amigo?"
    },
    {
        character: "什么",
        pinyin: "shénme",
        meaning: "Qué",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "这是什么东西？",
        phrasePinyin: "Zhè shì shénme dōngxi?",
        phraseEs: "¿Qué cosa es esto?"
    },
    {
        character: "多少",
        pinyin: "duōshǎo",
        meaning: "Cuánto",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "这个杯子多少钱？",
        phrasePinyin: "Zhège bēizi duōshǎo qián?",
        phraseEs: "¿Cuánto cuesta esta taza?"
    },
    {
        character: "几",
        pinyin: "jǐ",
        meaning: "Cuántos",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "你家里有几个人？",
        phrasePinyin: "Nǐ jiā lǐ yǒu jǐ gè rén?",
        phraseEs: "¿Cuántas personas hay en tu casa?"
    },
    {
        character: "怎么",
        pinyin: "zěnme",
        meaning: "Cómo",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "这个字怎么读？",
        phrasePinyin: "Zhège zì zěnme dú?",
        phraseEs: "¿Cómo se lee este carácter?"
    },
    {
        character: "怎么样",
        pinyin: "zěnmeyàng",
        meaning: "Qué tal",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "天气怎么样？",
        phrasePinyin: "Tiānqì zěnmeyàng?",
        phraseEs: "¿Qué tal está el tiempo?"
    },
    {
        character: "每",
        pinyin: "měi",
        meaning: "Cada",
        type: "Pronombre",
        level: "HSK 1",
        phraseCn: "我每天六点起床。",
        phrasePinyin: "Wǒ měitiān liù diǎn qǐchuáng.",
        phraseEs: "Me levanto a las seis todos los días."
    },

    // Verbos
    {
        character: "是",
        pinyin: "shì",
        meaning: "Ser",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我是学生。",
        phrasePinyin: "Wǒ shì xuésheng.",
        phraseEs: "Yo soy estudiante."
    },
    {
        character: "有",
        pinyin: "yǒu",
        meaning: "Tener",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "桌子上有一本书。",
        phrasePinyin: "Zhuōzi shàng yǒu yī běn shū.",
        phraseEs: "Hay un libro sobre la mesa."
    },
    {
        character: "看",
        pinyin: "kàn",
        meaning: "Mirar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我喜欢看电影。",
        phrasePinyin: "Wǒ xǐhuan kàn diànyǐng.",
        phraseEs: "Me gusta ver películas."
    },
    {
        character: "听",
        pinyin: "tīng",
        meaning: "Escuchar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "你听，谁在说话？",
        phrasePinyin: "Nǐ tīng, shéi zài shuōhuà?",
        phraseEs: "Escucha, ¿quién está hablando?"
    },
    {
        character: "说话",
        pinyin: "shuōhuà",
        meaning: "Hablar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "请不要说话。",
        phrasePinyin: "Qǐng bùyào shuōhuà.",
        phraseEs: "Por favor, no habléis."
    },
    {
        character: "读",
        pinyin: "dú",
        meaning: "Leer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "你会读这个字吗？",
        phrasePinyin: "Nǐ huì dú zhège zì ma?",
        phraseEs: "¿Sabes leer este carácter?"
    },
    {
        character: "写",
        pinyin: "xiě",
        meaning: "Escribir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "他在写汉字。",
        phrasePinyin: "Tā zài xiě Hànzì.",
        phraseEs: "Él está escribiendo caracteres chinos."
    },
    {
        character: "看见",
        pinyin: "kànjiàn",
        meaning: "Ver",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我在商店看见了老师。",
        phrasePinyin: "Wǒ zài shāngdiàn kànjiàn le lǎoshī.",
        phraseEs: "He visto al profesor en la tienda."
    },
    {
        character: "叫",
        pinyin: "jiào",
        meaning: "Llamarse",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我叫大卫。",
        phrasePinyin: "Wǒ jiào Dàwèi.",
        phraseEs: "Me llamo David."
    },
    {
        character: "来",
        pinyin: "lái",
        meaning: "Venir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "请来我家里玩。",
        phrasePinyin: "Qǐng lái wǒ jiā lǐ wán.",
        phraseEs: "Por favor, ven a mi casa a pasar el rato."
    },
    {
        character: "回",
        pinyin: "huí",
        meaning: "Volver",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我下午四点回家。",
        phrasePinyin: "Wǒ xiàwǔ sì diǎn huí jiā.",
        phraseEs: "Vuelvo a casa a las cuatro de la tarde."
    },
    {
        character: "去",
        pinyin: "qù",
        meaning: "Ir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我们去北京旅游。",
        phrasePinyin: "Wǒmen qù Běijīng lǚyóu.",
        phraseEs: "Vamos a ir a Pekín de viaje."
    },
    {
        character: "吃",
        pinyin: "chī",
        meaning: "Comer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "你喜欢吃什么菜？",
        phrasePinyin: "Nǐ xǐhuan chī shénme cài?",
        phraseEs: "¿Qué comida te gusta comer?"
    },
    {
        character: "喝",
        pinyin: "hē",
        meaning: "Beber",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我想喝一杯茶。",
        phrasePinyin: "Wǒ xiǎng hē yī bēi chá.",
        phraseEs: "Quiero beber una taza de té."
    },
    {
        character: "睡觉",
        pinyin: "shuìjiào",
        meaning: "Dormir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "孩子在房间里睡觉。",
        phrasePinyin: "Háizi zài fángjiān lǐ shuìjiào.",
        phraseEs: "El niño está durmiendo en la habitación."
    },
    {
        character: "做",
        pinyin: "zuò",
        meaning: "Hacer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "你妈妈在做什么菜？",
        phrasePinyin: "Nǐ māma zài zuò shénme cài?",
        phraseEs: "¿Qué plato está cocinando tu madre?"
    },
    {
        character: "买",
        pinyin: "mǎi",
        meaning: "Comprar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我想买衣服。",
        phrasePinyin: "Wǒ xiǎng mǎi yīfu.",
        phraseEs: "Quiero comprar ropa."
    },
    {
        character: "开",
        pinyin: "kāi",
        meaning: "Abrir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "他在开车。",
        phrasePinyin: "Tā zài kāichē.",
        phraseEs: "Él está conduciendo un coche."
    },
    {
        character: "坐",
        pinyin: "zuò",
        meaning: "Sentarse",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "请坐，请喝茶。",
        phrasePinyin: "Qǐng zuò, qǐng hē chá.",
        phraseEs: "Por favor siéntate, bebe té por favor."
    },
    {
        character: "住",
        pinyin: "zhù",
        meaning: "Vivir",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "你住在哪里？",
        phrasePinyin: "Nǐ zhù zài nǎlǐ?",
        phraseEs: "¿Dónde vives?"
    },
    {
        character: "学习",
        pinyin: "xuéxí",
        meaning: "Estudiar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我在大学学习汉语。",
        phrasePinyin: "Wǒ zài dàxué xuéxí Hànyǔ.",
        phraseEs: "Estudio chino en la universidad."
    },
    {
        character: "工作",
        pinyin: "gōngzuò",
        meaning: "Trabajar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "他在医院工作。",
        phrasePinyin: "Tā zài yīyuàn gōngzuò.",
        phraseEs: "Él trabaja en un hospital."
    },
    {
        character: "下雨",
        pinyin: "xiàyǔ",
        meaning: "Llover",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "外面在下雨。",
        phrasePinyin: "Wàimiàn zài xiàyǔ.",
        phraseEs: "Está lloviendo afuera."
    },
    {
        character: "爱",
        pinyin: "ài",
        meaning: "Amar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我爱我的妈妈。",
        phrasePinyin: "Wǒ ài wǒ de māma.",
        phraseEs: "Amo a mi madre."
    },
    {
        character: "喜欢",
        pinyin: "xǐhuan",
        meaning: "Gustar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我喜欢吃中国菜。",
        phrasePinyin: "Wǒ xǐhuan chī Zhōngguó cài.",
        phraseEs: "Me gusta comer comida china."
    },
    {
        character: "想",
        pinyin: "xiǎng",
        meaning: "Querer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我想去商店买东西。",
        phrasePinyin: "Wǒ xiǎng qù shāngdiàn mǎi dōngxi.",
        phraseEs: "Quiero ir a la tienda a comprar cosas."
    },
    {
        character: "认识",
        pinyin: "rènshi",
        meaning: "Conocer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "很高兴认识你。",
        phrasePinyin: "Hěn gāoxìng rènshi nǐ.",
        phraseEs: "Mucho gusto en conocerte."
    },
    {
        character: "会",
        pinyin: "huì",
        meaning: "Saber",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我会说一点儿汉语。",
        phrasePinyin: "Wǒ huì shuō yīdiǎnr Hànyǔ.",
        phraseEs: "Sé hablar un poco de chino."
    },
    {
        character: "能",
        pinyin: "néng",
        meaning: "Poder",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "我今天不能去学校。",
        phrasePinyin: "Wǒ jīntiān bù néng qù xuéxiào.",
        phraseEs: "Hoy no puedo ir a la escuela."
    },
    {
        character: "请",
        pints: "qǐng",
        meaning: "Por favor",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "请进，请坐。",
        phrasePinyin: "Qǐng jìn, qǐng zuò.",
        phraseEs: "Por favor pasa, por favor siéntate."
    },
    {
        character: "谢谢",
        pinyin: "xièxie",
        meaning: "Agradecer",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "谢谢你帮我。",
        phrasePinyin: "Xièxie nǐ bāng wǒ.",
        phraseEs: "Gracias por ayudarme."
    },
    {
        character: "再见",
        pinyin: "zàijiàn",
        meaning: "Despedirse",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "老师，再见！",
        phrasePinyin: "Lǎoshī, zàijiàn!",
        phraseEs: "¡Adiós, profesor!"
    },
    {
        character: "对不起",
        pinyin: "duìbuqǐ",
        meaning: "Disculparse",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "对不起，我来晚了。",
        phrasePinyin: "Duìbuqǐ, wǒ lái wǎn le.",
        phraseEs: "Lo siento, he llegado tarde."
    },
    {
        character: "没关系",
        pinyin: "méi guānxi",
        meaning: "Disculpar",
        type: "Verbo",
        level: "HSK 1",
        phraseCn: "对不起。- 没关系。",
        phrasePinyin: "Duìbuqǐ. - Méi guānxi.",
        phraseEs: "Lo siento. - No pasa nada."
    },

    // Sustantivos
    {
        character: "家",
        pinyin: "jiā",
        meaning: "Casa",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我家在北京。",
        phrasePinyin: "Wǒ jiā zài Běijīng.",
        phraseEs: "Mi casa está en Pekín."
    },
    {
        character: "爸爸",
        pinyin: "bàba",
        meaning: "Papá",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我爸爸是医生。",
        phrasePinyin: "Wǒ bàba shì yīshēng.",
        phraseEs: "Mi papá es médico."
    },
    {
        character: "妈妈",
        pinyin: "māma",
        meaning: "Mamá",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我妈妈不工作。",
        phrasePinyin: "Wǒ māma bù gōngzuò.",
        phraseEs: "Mi mamá no trabaja."
    },
    {
        character: "儿子",
        pinyin: "érzi",
        meaning: "Hijo",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "他儿子今年八岁。",
        phrasePinyin: "Tā érzi jīnnián bā suì.",
        phraseEs: "Su hijo tiene ochos años este año."
    },
    {
        character: "女儿",
        pinyin: "nǚ'ér",
        meaning: "Hija",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我有一个女儿。",
        phrasePinyin: "Wǒ yǒu yī gè nǚ'ér.",
        phraseEs: "Tengo una hija."
    },
    {
        character: "老师",
        pinyin: "lǎoshī",
        meaning: "Profesor",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "王老师在教汉语。",
        phrasePinyin: "Wáng lǎoshī zài jiāo Hànyǔ.",
        phraseEs: "El profesor Wang está enseñando chino."
    },
    {
        character: "学生",
        pinyin: "xuésheng",
        meaning: "Estudiante",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我们学校的学生很多。",
        phrasePinyin: "Wǒmen xuéxiào de xuésheng hěn duō.",
        phraseEs: "Nuestra escuela tiene muchos estudiantes."
    },
    {
        character: "同学",
        pinyin: "tóngxué",
        meaning: "Compañero",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "她是我的大学同学。",
        phrasePinyin: "Tā shì wǒ de dàxué tóngxué.",
        phraseEs: "Ella es mi compañera de la universidad."
    },
    {
        character: "朋友",
        pinyin: "péngyou",
        meaning: "Amigo",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "他是我的好朋友。",
        phrasePinyin: "Tā shì wǒ de hǎo péngyou.",
        phraseEs: "Él es mi buen amigo."
    },
    {
        character: "医生",
        pinyin: "yīshēng",
        meaning: "Médico",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这个医生很好。",
        phrasePinyin: "Zhège yīshēng hěn hǎo.",
        phraseEs: "Este médico es muy bueno."
    },
    {
        character: "先生",
        pinyin: "xiānsheng",
        meaning: "Señor",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "张先生在办公室。",
        phrasePinyin: "Zhāng xiānsheng zài bàngōngshì.",
        phraseEs: "El señor Zhang está en la oficina."
    },
    {
        character: "小姐",
        pinyin: "xiǎojiě",
        meaning: "Señorita",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "李小姐喜欢买衣服。",
        phrasePinyin: "Lǐ xiǎojiě xǐhuan mǎi yīfu.",
        phraseEs: "A la señorita Li le gusta comprar ropa."
    },
    {
        character: "人",
        pinyin: "rén",
        meaning: "Persona",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "商店里有很多人。",
        phrasePinyin: "Shāngdiàn lǐ yǒu hěn duō rén.",
        phraseEs: "Hay mucha gente en la tienda."
    },
    {
        character: "学校",
        pinyin: "xuéxiào",
        meaning: "Escuela",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我去学校看书。",
        phrasePinyin: "Wǒ qù xuéxiào kàn shū.",
        phraseEs: "Voy a la escuela a leer libros."
    },
    {
        character: "饭馆",
        pinyin: "fànguǎn",
        meaning: "Restaurante",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这家饭馆的菜很好吃。",
        phrasePinyin: "Zhè jiā fànguǎn de cài hěn hǎochī.",
        phraseEs: "La comida de este restaurante está riquísima."
    },
    {
        character: "商店",
        pinyin: "shāngdiàn",
        meaning: "Tienda",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我去商店买杯子。",
        phrasePinyin: "Wǒ qù shāngdiàn mǎi bēizi.",
        phraseEs: "Voy a la tienda a comprar una taza."
    },
    {
        character: "医院",
        pinyin: "yīyuàn",
        meaning: "Hospital",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "他在医院里住。",
        phrasePinyin: "Tā zài yīyuàn lǐ zhù.",
        phraseEs: "Él está ingresado en el hospital."
    },
    {
        character: "火车站",
        pinyin: "huǒchēzhàn",
        meaning: "Estación",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我在火车站等他。",
        phrasePinyin: "Wǒ zài huǒchēzhàn děng tā.",
        phraseEs: "Le estoy esperando en la estación de tren."
    },
    {
        character: "中国",
        pinyin: "Zhōngguó",
        meaning: "China",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我想去中国旅游。",
        phrasePinyin: "Wǒ xiǎng qù Zhōngguó lǚyóu.",
        phraseEs: "Quiero viajar a China."
    },
    {
        character: "北京",
        pinyin: "Běijīng",
        meaning: "Pekín",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "北京的天气很冷。",
        phrasePinyin: "Běijīng de tiānqì hěn lěng.",
        phraseEs: "El tiempo en Pekín es muy frío."
    },
    {
        character: "上",
        pinyin: "shàng",
        meaning: "Encima",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "桌子上有电脑。",
        phrasePinyin: "Zhuōzi shàng yǒu diànnǎo.",
        phraseEs: "Hay un ordenador sobre la mesa."
    },
    {
        character: "下",
        pinyin: "xià",
        meaning: "Debajo",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "椅子的下面有一只猫。",
        phrasePinyin: "Yǐzi de xiàmiàn yǒu yī zhī māo.",
        phraseEs: "Debajo de la silla hay un gato."
    },
    {
        character: "前面",
        pinyin: "qiánmiàn",
        meaning: "Delante",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "学校前面有一个商店。",
        phrasePinyin: "Xuéxiào qiánmiàn yǒu yī gè shāngdiàn.",
        phraseEs: "Delante de la escuela hay una tienda."
    },
    {
        character: "后面",
        pinyin: "hòumiàn",
        meaning: "Detrás",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我家后面有一个饭馆。",
        phrasePinyin: "Wǒ jiā hòumiàn yǒu yī gè fànguǎn.",
        phraseEs: "Detrás de mi casa hay un restaurante."
    },
    {
        character: "里面",
        pinyin: "lǐmiàn",
        meaning: "Dentro",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "杯子里面没有水。",
        phrasePinyin: "Bēizi lǐmiàn méiyǒu shuǐ.",
        phraseEs: "No hay agua dentro de la taza."
    },
    {
        character: "年",
        pinyin: "nián",
        meaning: "Año",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我在中国住了一年。",
        phrasePinyin: "Wǒ zài Zhōngguó zhù le yī nián.",
        phraseEs: "Viví un año en China."
    },
    {
        character: "月",
        pinyin: "yuè",
        meaning: "Mes",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "今年十二月天气很冷。",
        phrasePinyin: "Jīnnián shí'èr yuè tiānqì hěn lěng.",
        phraseEs: "Este diciembre hace mucho frío."
    },
    {
        character: "日",
        pinyin: "rì",
        meaning: "Día",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "今天是五月十七日。",
        phrasePinyin: "Jīntiān shì wǔ yuè shíqī rì.",
        phraseEs: "Hoy es 17 de mayo."
    },
    {
        character: "星期",
        pinyin: "xīngqī",
        meaning: "Semana",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "一个星期有七天。",
        phrasePinyin: "Yī gè xīngqī yǒu qī tiān.",
        phraseEs: "Una semana tiene siete días."
    },
    {
        character: "点",
        pinyin: "diǎn",
        meaning: "Hora",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "现在是上午九点。",
        phrasePinyin: "Xiànzài shì shàngwǔ jiǔ diǎn.",
        phraseEs: "Ahora son las nueve de la mañana."
    },
    {
        character: "分钟",
        pinyin: "fēnzhōng",
        meaning: "Minuto",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "请等我十分钟。",
        phrasePinyin: "Qǐng děng wǒ shí fēnzhōng.",
        phraseEs: "Por favor, espérame diez minutos."
    },
    {
        character: "现在",
        pinyin: "xiànzài",
        meaning: "Ahora",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "现在是下午三点。",
        phrasePinyin: "Xiànzài shì xiàwǔ sān diǎn.",
        phraseEs: "Ahora son las tres de la tarde."
    },
    {
        character: "时候",
        pinyin: "shíhou",
        meaning: "Momento",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "你什么时候回家？",
        phrasePinyin: "Nǐ shénme shíhou huí jiā?",
        phraseEs: "语¿Cuándo vas a volver a casa?"
    },
    {
        character: "今天",
        pinyin: "jīntiān",
        meaning: "Hoy",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "今天的天气很好。",
        phrasePinyin: "Jīntiān de tiānqì hěn hǎo.",
        phraseEs: "El tiempo de hoy está muy bien."
    },
    {
        character: "明天",
        pinyin: "míngtiān",
        meaning: "Mañana",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "明天我们去买东西。",
        phrasePinyin: "Míngtiān wǒmen qù mǎi dōngxi.",
        phraseEs: "Mañana iremos de compras."
    },
    {
        character: "昨天",
        pinyin: "zuótiān",
        meaning: "Ayer",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "昨天在下雨。",
        phrasePinyin: "Zuótiān zài xiàyǔ.",
        phraseEs: "Ayer estuvo lloviendo."
    },
    {
        character: "上午",
        pinyin: "shàngwǔ",
        meaning: "Mañana (temprano)",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我上午十点去学校。",
        phrasePinyin: "Wǒ shàngwǔ shí diǎn qù xuéxiào.",
        phraseEs: "Voy a la escuela a las diez de la mañana."
    },
    {
        character: "中午",
        pinyin: "zhōngwǔ",
        meaning: "Mediodía",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "中午我们在饭馆吃饭。",
        phrasePinyin: "Zhōngwǔ wǒmen zài fànguǎn chī fàn.",
        phraseEs: "Al mediodía comemos en el restaurante."
    },
    {
        character: "下午",
        pinyin: "xiàwǔ",
        meaning: "Tarde",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我下午四点看电影。",
        phrasePinyin: "Wǒ xiàwǔ sì diǎn kàn diànyǐng.",
        phraseEs: "Veo una película a las cuatro de la tarde."
    },
    {
        character: "桌子",
        pinyin: "zhuōzi",
        meaning: "Mesa",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "桌子上有一本书。",
        phrasePinyin: "Zhuōzi shàng yǒu yī běn shū.",
        phraseEs: "Hay un libro sobre la mesa."
    },
    {
        character: "椅子",
        pinyin: "yǐzi",
        meaning: "Silla",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "请坐在这把椅子上。",
        phrasePinyin: "Qǐng zuò zài zhè bǎ yǐzi shàng.",
        phraseEs: "Por favor, siéntate en esta silla."
    },
    {
        character: "杯子",
        pinyin: "bēizi",
        meaning: "Taza",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这个杯子是谁的？",
        phrasePinyin: "Zhège bēizi ...",
        phraseEs: "¿De quién es esta taza?"
    },
    {
        character: "茶",
        pinyin: "chá",
        meaning: "Té",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "请喝热茶。",
        phrasePinyin: "Qǐng hē rè chá.",
        phraseEs: "Por favor, bebe té caliente."
    },
    {
        character: "水",
        pinyin: "shuǐ",
        meaning: "Agua",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我想喝点儿水。",
        phrasePinyin: "Wǒ xiǎng hē diǎnr shuǐ.",
        phraseEs: "Quiero beber un poco de agua."
    },
    {
        character: "菜",
        pinyin: "cài",
        meaning: "Plato",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "妈妈做的菜很好吃。",
        phrasePinyin: "Māma zuò de cài hěn hǎochī.",
        phraseEs: "Los platos que hace mamá están muy ricos."
    },
    {
        character: "米饭",
        pinyin: "mǐfàn",
        meaning: "Arroz",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我喜欢吃米饭。",
        phrasePinyin: "Wǒ xǐhuan chī mǐfàn.",
        phraseEs: "Me gusta comer arroz."
    },
    {
        character: "苹果",
        pinyin: "píngguǒ",
        meaning: "Manzana",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我买了一些苹果。",
        phrasePinyin: "Wǒ mǎi le yīxiē píngguǒ.",
        phraseEs: "He comprado algunas manzanas."
    },
    {
        character: "衣服",
        pinyin: "yīfu",
        meaning: "Ropa",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这里的衣服很漂亮。",
        phrasePinyin: "Zhèlǐ de yīfu hěn piàoliang.",
        phraseEs: "La ropa de aquí es muy bonita."
    },
    {
        character: "钱",
        pinyin: "qián",
        meaning: "Dinero",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我没有很多钱。",
        phrasePinyin: "Wǒ méiyǒu hěn duō qián.",
        phraseEs: "No tengo mucho dinero."
    },
    {
        character: "书",
        pinyin: "shū",
        meaning: "Libro",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我看了一本好书。",
        phrasePinyin: "Wǒ kàn le yī běn hǎo shū.",
        phraseEs: "He leído un buen libro."
    },
    {
        character: "汉语",
        pinyin: "Hànyǔ",
        meaning: "Chino",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我们的老师教汉语。",
        phrasePinyin: "Wǒmen de lǎoshī jiāo Hànyǔ.",
        phraseEs: "Nuestro profesor enseña chino."
    },
    {
        character: "字",
        pinyin: "zì",
        meaning: "Carácter",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这个汉字怎么写？",
        phrasePinyin: "Zhège Hànzì zěnme xiě?",
        phraseEs: "¿Cómo se escribe este carácter chino?"
    },
    {
        character: "名字",
        pinyin: "míngzi",
        meaning: "Nombre",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "你的名字叫什么？",
        phrasePinyin: "Nǐ de míngzi jiào shénme?",
        phraseEs: "¿Cómo te llamas?"
    },
    {
        character: "电脑",
        pinyin: "diànnǎo",
        meaning: "Ordenador",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "这是我的新电脑。",
        phrasePinyin: "Zhè iOS hī wǒ de xīn diànnǎo.",
        phraseEs: "Este es mi nuevo ordenador."
    },
    {
        character: "电视",
        pinyin: "diànshì",
        meaning: "Televisión",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "孩子们在看电视。",
        phrasePinyin: "Háizimen zài kàn diànshì.",
        phraseEs: "Los niños están viendo la televisión."
    },
    {
        character: "电影",
        pinyin: "diànyǐng",
        meaning: "Película",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "星期六我们去看电影。",
        phrasePinyin: "Xīngqīliù wǒmen qù kàn diànyǐng.",
        phraseEs: "El sábado vamos a ir a ver una película."
    },
    {
        character: "飞机",
        pinyin: "fēijī",
        meaning: "Avión",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我明天坐飞机去北京。",
        phrasePinyin: "Wǒ míngtiān zuò fēijī qù Běijīng.",
        phraseEs: "Mañana voy en avión a Pekín."
    },
    {
        character: "出租车",
        pinyin: "chūzūchē",
        meaning: "Taxi",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我们坐出租车去火车站。",
        phrasePinyin: "Wǒmen zuò chūzūchē qù huǒchēzhàn.",
        phraseEs: "Vamos en taxi a la estación de tren."
    },
    {
        character: "猫",
        pinyin: "māo",
        meaning: "Gato",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "那只猫在桌子下面。",
        phrasePinyin: "Nà zhī māo zài zhuōzi xiàmiàn.",
        phraseEs: "Aquel gato está debajo de la mesa."
    },
    {
        character: "狗",
        pinyin: "gǒu",
        meaning: "Perro",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "我家有一只小狗。",
        phrasePinyin: "Wǒ jiā yǒu yī zhī xiǎo gǒu.",
        phraseEs: "En mi casa hay un perro pequeño."
    },
    {
        character: "东西",
        pinyin: "dōngxi",
        meaning: "Cosa",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "你在商店买了什么东西？",
        phrasePinyin: "Nǐ zài shāngdiàn mǎi le shénme dōngxi?",
        phraseEs: "¿Qué cosas has comprado en la tienda?"
    },
    {
        character: "天气",
        pinyin: "tiānqì",
        meaning: "Clima",
        type: "Sustantivo",
        level: "HSK 1",
        phraseCn: "今天的天气怎么样？",
        phrasePinyin: "Jīntiān de tiānqì zěnmeyàng?",
        phraseEs: "¿Qué tal está el tiempo hoy?"
    },

    // Clasificadores
    {
        character: "个",
        pinyin: "gè",
        meaning: "Unidad (general)",
        type: "Clasificador",
        level: "HSK 1",
        phraseCn: "我有一个哥哥。",
        phrasePinyin: "Wǒ yǒu yī gè gēge.",
        phraseEs: "Tengo un hermano mayor."
    },
    {
        character: "岁",
        pinyin: "suì",
        meaning: "Años",
        type: "Clasificador",
        level: "HSK 1",
        phraseCn: "我儿子今年六岁。",
        phrasePinyin: "Wǒ érzi jīnnián liù suì.",
        phraseEs: "Mi hijo tiene seis años este año."
    },
    {
        character: "本",
        pinyin: "běn",
        meaning: "Tomo (libros)",
        type: "Clasificador",
        level: "HSK 1",
        phraseCn: "桌子上有一本书。",
        phrasePinyin: "Zhuōzi shàng yǒu yī běn shū.",
        phraseEs: "Hay un libro sobre la mesa."
    },
    {
        character: "些",
        pinyin: "xiē",
        meaning: "Algunos",
        type: "Clasificador",
        level: "HSK 1",
        phraseCn: "these苹果很好吃。",
        phrasePinyin: "Zhèxiē píngguǒ hěn hǎochī.",
        phraseEs: "Estas manzanas están muy ricas."
    },
    {
        character: "块",
        pinyin: "kuài",
        meaning: "Pedazo",
        type: "Clasificador",
        level: "HSK 1",
        phraseCn: "这一块肉很好。",
        phrasePinyin: "Zhè yī kuài ròu hěn hǎo.",
        phraseEs: "Este trozo de carne está muy bueno."
    },

    // Números
    {
        character: "一",
        pinyin: "yī",
        meaning: "Uno",
        type: "Número",
        level: "HSK 1",
        phraseCn: "我有一只猫。",
        phrasePinyin: "Wǒ yǒu yī zhī māo.",
        phraseEs: "Tengo un gato."
    },
    {
        character: "二",
        pinyin: "èr",
        meaning: "Dos",
        type: "Número",
        level: "HSK 1",
        phraseCn: "我买二斤苹果。",
        phrasePinyin: "Wǒ mǎi èr jīn píngguǒ.",
        phraseEs: "Compro dos jins de manzanas."
    },
    {
        character: "三",
        pinyin: "sān",
        meaning: "Tres",
        type: "Número",
        level: "HSK 1",
        phraseCn: "房间里有三个人。",
        phrasePinyin: "Fángjiān lǐ yǒu sān gè rén.",
        phraseEs: "Hay tres personas en la habitación."
    },
    {
        character: "四",
        pinyin: "sì",
        meaning: "Cuatro",
        type: "Número",
        level: "HSK 1",
        phraseCn: "这个苹果四块钱。",
        phrasePinyin: "Zhège píngguǒ sì kuài qián.",
        phraseEs: "Esta manzana cuesta cuatro yuanes."
    },
    {
        character: "五",
        pinyin: "wǔ",
        meaning: "Cinco",
        type: "Número",
        level: "HSK 1",
        phraseCn: "我在北京住五天。",
        phrasePinyin: "Wǒ zài Běijīng zhù wǔ tiān.",
        phraseEs: "Me quedo en Pekín cinco días."
    },
    {
        character: "六",
        pinyin: "liù",
        meaning: "Seis",
        type: "Número",
        level: "HSK 1",
        phraseCn: "现在是六点二十。",
        phrasePinyin: "Xiànzài ...",
        phraseEs: "Ahora son las seis y veinte."
    },
    {
        character: "七",
        pinyin: "qī",
        meaning: "Siete",
        type: "Número",
        level: "HSK 1",
        phraseCn: "一个星期有七天。",
        phrasePinyin: "Yī gè xīngqī yǒu qī tiān.",
        phraseEs: "Una semana tiene siete días."
    },
    {
        character: "八",
        pinyin: "bā",
        meaning: "Ocho",
        type: "Número",
        level: "HSK 1",
        phraseCn: "他女儿今年八岁。",
        phrasePinyin: "Tā nǚ'ér jīnnián bā suì.",
        phraseEs: "Su hija tiene ocho años este año."
    },
    {
        character: "九",
        pinyin: "jiǔ",
        meaning: "Nueve",
        type: "Número",
        level: "HSK 1",
        phraseCn: "学校里有九个老师。",
        phrasePinyin: "Xuéxiào lǐ yǒu jiǔ gè lǎoshī.",
        phraseEs: "Hay nueve profesores en la escuela."
    },
    {
        character: "十",
        pinyin: "shí",
        meaning: "Diez",
        type: "Número",
        level: "HSK 1",
        phraseCn: "这里有十个杯子。",
        phrasePinyin: "Zhèlǐ ...",
        phraseEs: "Aquí hay diez tazas."
    },
    {
        character: "零",
        pinyin: "líng",
        meaning: "Cero",
        type: "Número",
        level: "HSK 1",
        phraseCn: "今年是二零二六年。",
        phrasePinyin: "Jīnnián ...",
        phraseEs: "Este año es 2026."
    },

    // Adverbios
    {
        character: "不",
        pinyin: "bù",
        meaning: "No",
        type: "Adverbio",
        level: "HSK 1",
        phraseCn: "我不认识那个人。",
        phrasePinyin: "Wǒ bù rènshi nàge rén.",
        phraseEs: "No conozco a esa persona."
    },
    {
        character: "没",
        pinyin: "méi",
        meaning: "No",
        type: "Adverbio",
        level: "HSK 1",
        phraseCn: "我没有钱。",
        phrasePinyin: "Wǒ méiyǒu qián.",
        phraseEs: "No tengo dinero."
    },
    {
        character: "很",
        pinyin: "hěn",
        meaning: "Muy",
        type: "Adverbio",
        level: "HSK 1",
        phraseCn: "今天的空气很好。",
        phrasePinyin: "Jīntiān de kōngqì hěn hǎo.",
        phraseEs: "El aire de hoy está muy bueno."
    },
    {
        character: "太",
        pinyin: "tài",
        meaning: "Demasiado",
        type: "Adverbio",
        level: "HSK 1",
        phraseCn: "这个天气太热了。",
        phrasePinyin: "Zhège tiānqì tài rè le.",
        phraseEs: "Hace demasiado calor en este clima."
    },
    {
        character: "都",
        pinyin: "dōu",
        meaning: "Todos",
        type: "Adverbio",
        level: "HSK 1",
        phraseCn: "我们都是学生。",
        phrasePinyin: "Wǒmen dōu ...",
        phraseEs: "Todos nosotros somos estudiantes."
    },

    // Conjunciones y Preposiciones
    {
        character: "和",
        pinyin: "hé",
        meaning: "Y",
        type: "Conjunción",
        level: "HSK 1",
        phraseCn: "我和他是好朋友。",
        phrasePinyin: "Wǒ hé tā ...",
        phraseEs: "Él y yo somos buenos amigos."
    },
    {
        character: "在",
        pinyin: "zài",
        meaning: "En",
        type: "Preposición",
        level: "HSK 1",
        phraseCn: "爸爸在家里睡觉。",
        phrasePinyin: "Bàba zài ...",
        phraseEs: "Papá está durmiendo en casa."
    },

    // Partículas
    {
        character: "吗",
        pinyin: "ma",
        meaning: "Interrogativa",
        type: "Partícula",
        level: "HSK 1",
        phraseCn: "你喜欢中国菜吗？",
        phrasePinyin: "Nǐ xǐhuan ...",
        phraseEs: "¿Te gusta la comida china?"
    },
    {
        character: "呢",
        pinyin: "ne",
        meaning: "Sujetiva",
        type: "Partícula",
        level: "HSK 1",
        phraseCn: "我很好，你呢？",
        phrasePinyin: "Wǒ hěn hǎo, nǐ ne?",
        phraseEs: "Estoy muy bien, ¿y tú?"
    },
    {
        character: "了",
        pinyin: "le",
        meaning: "Pasado",
        type: "Partícula",
        level: "HSK 1",
        phraseCn: "我看见他了。",
        phrasePinyin: "Wǒ kànjiàn tā le.",
        phraseEs: "Ya lo he visto."
    },
    {
        character: "的",
        pinyin: "de",
        meaning: "De",
        type: "Partícula",
        level: "HSK 1",
        phraseCn: "这是我的电脑。",
        phrasePinyin: "Zhè shì wǒ de diànnǎo.",
        phraseEs: "Este es mi ordenador."
    },

    // Adjetivos
    {
        character: "大",
        pinyin: "dà",
        meaning: "Grande",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "这个苹果很大。",
        phrasePinyin: "Zhège píngguǒ hěn dà.",
        phraseEs: "Esta manzana es muy grande."
    },
    {
        character: "小",
        pinyin: "xiǎo",
        meaning: "Pequeño",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "那只猫很小。",
        phrasePinyin: "Nà zhī māo hěn xiǎo.",
        phraseEs: "Aquel gato es muy pequeño."
    },
    {
        character: "多",
        pinyin: "duō",
        meaning: "Mucho",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "学校里有很多人。",
        phrasePinyin: "Xuéxiào lǐ yǒu hěn duō rén.",
        phraseEs: "Hay mucha gente en la escuela."
    },
    {
        character: "少",
        pinyin: "shǎo",
        meaning: "Poco",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "杯子里的水很少。",
        phrasePinyin: "Bēizi lǐ de shuǐ hěn shǎo.",
        phraseEs: "Hay muy poca agua en la taza."
    },
    {
        character: "好",
        pinyin: "hǎo",
        meaning: "Bueno",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "今天是一个好天气。",
        phrasePinyin: "Jīntiān ...",
        phraseEs: "Hoy hace un buen día."
    },
    {
        character: "冷",
        pinyin: "lěng",
        meaning: "Frío",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "昨天太冷了。",
        phrasePinyin: "Zuótiān tài lěng le.",
        phraseEs: "Ayer hizo demasiado frío."
    },
    {
        character: "热",
        pinyin: "rè",
        meaning: "Caliente",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "房间里很热。",
        phrasePinyin: "Fángjiān lǐ hěn rè.",
        phraseEs: "Hace mucho calor en la habitación."
    },
    {
        character: "高兴",
        pinyin: "gāoxìng",
        meaning: "Contento",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "认识你很高兴。",
        phrasePinyin: "Rènshi nǐ hěn gāoxìng.",
        phraseEs: "Encantado de conocerte."
    },
    {
        character: "漂亮",
        pinyin: "piàoliang",
        meaning: "Bonito",
        type: "Adjetivo",
        level: "HSK 1",
        phraseCn: "她的衣服很漂亮。",
        phrasePinyin: "Tā de yīfu hěn piàoliang.",
        phraseEs: "Su ropa es muy bonita."
    }
];